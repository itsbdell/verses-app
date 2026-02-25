"use client";

import { useState, useMemo } from "react";
import { Poem } from "@/lib/types";
import { poems } from "@/lib/poems";

interface PoemPickerProps {
  selected: Poem;
  onSelect: (poem: Poem) => void;
}

export default function PoemPicker({ selected, onSelect }: PoemPickerProps) {
  const [search, setSearch] = useState("");

  const filtered = useMemo(() => {
    if (!search.trim()) return poems;
    const q = search.toLowerCase();
    return poems.filter(
      (p) =>
        p.title.toLowerCase().includes(q) ||
        p.author.toLowerCase().includes(q) ||
        p.tags.some((t) => t.includes(q))
    );
  }, [search]);

  // Group by author
  const grouped = useMemo(() => {
    const map = new Map<string, Poem[]>();
    for (const poem of filtered) {
      const existing = map.get(poem.author) || [];
      existing.push(poem);
      map.set(poem.author, existing);
    }
    return map;
  }, [filtered]);

  return (
    <div>
      <label className="block text-sm font-medium text-neutral-400 mb-2 tracking-wide uppercase">
        Poem
      </label>
      <input
        type="text"
        placeholder="Search poems or authors..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-white/20 mb-2"
      />
      <div className="max-h-80 overflow-y-auto space-y-3 pr-1 scrollbar-thin">
        {Array.from(grouped.entries()).map(([author, authorPoems]) => (
          <div key={author}>
            <p className="text-xs text-neutral-500 mb-1">{author}</p>
            {authorPoems.map((poem) => (
              <button
                key={poem.id}
                onClick={() => onSelect(poem)}
                className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors mb-0.5 ${
                  selected.id === poem.id
                    ? "bg-white/10 text-white"
                    : "text-neutral-400 hover:bg-white/5 hover:text-neutral-300"
                }`}
              >
                <span className="italic">{poem.title}</span>
                {poem.year && (
                  <span className="text-xs text-neutral-500 ml-2">
                    {poem.year}
                  </span>
                )}
              </button>
            ))}
          </div>
        ))}
        {filtered.length === 0 && (
          <p className="text-sm text-neutral-500 text-center py-4">
            No poems found
          </p>
        )}
      </div>
    </div>
  );
}
