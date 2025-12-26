"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";

export default function BlogToolbar({
  onViewChange,
  onFilterChange,
  tags,
  categories,
  activeFilters,
  onRemoveFilter
}: {
  onViewChange: (view: string) => void;
  onFilterChange: (type: 'tag' | 'category', value: string) => void;
  tags: string[];
  categories: string[];
  activeFilters: { type: 'tag' | 'category'; value: string }[];
  onRemoveFilter: (type: 'tag' | 'category', value: string) => void;
}) {
  const [view, setView] = useState("list");

  useEffect(() => {
    const savedView = localStorage.getItem("blogView");
    if (savedView) {
      setView(savedView);
      onViewChange(savedView);
    }
  }, [onViewChange]);

  const handleViewChange = (newView: string) => {
    setView(newView);
    localStorage.setItem("blogView", newView);
    onViewChange(newView);
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <div className="flex space-x-4">
          <Select onValueChange={(value) => onFilterChange('category', value)}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Filter by category" />
            </SelectTrigger>
            <SelectContent>
              {categories.map(c => <SelectItem key={c} value={c}>{c}</SelectItem>)}
            </SelectContent>
          </Select>
          <Select onValueChange={(value) => onFilterChange('tag', value)}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Filter by tag" />
            </SelectTrigger>
            <SelectContent>
              {tags.map(t => <SelectItem key={t} value={t}>{t}</SelectItem>)}
            </SelectContent>
          </Select>
        </div>
        <div className="flex">
          <Button
            variant={view === "list" ? "default" : "outline"}
            onClick={() => handleViewChange("list")}
            className="mr-2"
          >
            List
          </Button>
          <Button
            variant={view === "grid" ? "default" : "outline"}
            onClick={() => handleViewChange("grid")}
          >
            Grid
          </Button>
        </div>
      </div>
      <div className="flex flex-wrap gap-2 mb-8">
        {activeFilters.map(f => (
          <Badge key={`${f.type}-${f.value}`} variant="secondary">
            {f.value}
            <button onClick={() => onRemoveFilter(f.type, f.value)} className="ml-2 text-muted-foreground hover:text-foreground">
              &times;
            </button>
          </Badge>
        ))}
      </div>
    </div>
  );
}