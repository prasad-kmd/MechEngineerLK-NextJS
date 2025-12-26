import { Badge } from "@/components/ui/badge";

interface PostHeaderProps {
  title: string;
  author: string;
  date: string;
  tags: string[];
}

export default function PostHeader({ title, author, date, tags }: PostHeaderProps) {
  return (
    <header className="mb-8">
      <h1 className="text-4xl font-bold mb-2">{title}</h1>
      <div className="text-muted-foreground mb-4">
        <span>By {author}</span> | <span>{new Date(date).toLocaleDateString()}</span>
      </div>
      <div className="flex flex-wrap gap-2">
        {tags.map(tag => <Badge key={tag}>{tag}</Badge>)}
      </div>
    </header>
  );
}