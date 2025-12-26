"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

export default function ShareButtons({ title, text, url }: { title: string, text: string, url: string }) {
  const [isCopied, setIsCopied] = useState(false);

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title,
          text,
          url,
        });
        toast.success("Thanks for sharing!");
      } catch (error) {
        console.error('Error sharing:', error);
        toast.error("Could not share at this moment.");
      }
    } else {
      // Fallback for browsers that do not support the Web Share API
      handleCopyLink();
    }
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(url).then(() => {
      setIsCopied(true);
      toast.success("Link copied to clipboard!");
      setTimeout(() => setIsCopied(false), 2000); // Reset after 2 seconds
    }, (err) => {
      console.error('Failed to copy: ', err);
      toast.error("Failed to copy link.");
    });
  };

  const handleSubscribe = () => {
    toast.info("Subscription feature coming soon!");
  };

  return (
    <div className="mt-8 flex justify-between">
      <Button variant="outline" onClick={handleShare}>
        <span className="material-icons-outlined mr-2">share</span>
        Share
      </Button>
      <Button variant="outline" onClick={handleSubscribe}>
        <span className="material-icons-outlined mr-2">notifications</span>
        Subscribe for Updates
      </Button>
    </div>
  );
}