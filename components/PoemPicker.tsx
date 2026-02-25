"use client";

import { useMemo } from "react";
import { Poem } from "@/lib/types";
import { poems } from "@/lib/poems";

interface PoemPickerProps {
  selected: Poem | null;
  onSelect: (poem: Poem) => void;
}

export default function PoemPicker({ selected, onSelect }: PoemPickerProps) {
  const grouped = useMemo(() => {
    const map = new Map<string, Poem[]>();
    for (const poem of poems) {
      const existing = map.get(poem.author) || [];
      existing.push(poem);
      map.set(poem.author, existing);
    }
    return map;
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const poem = poems.find((p) => p.id === e.target.value);
    if (poem) onSelect(poem);
  };

  return (
    <div>
      <label className="block text-sm font-medium text-[#8C7E6E] mb-2 tracking-wide uppercase">
        Poem
      </label>
      <select
        value={selected?.id ?? ""}
        onChange={handleChange}
        className="w-full px-3 py-2 rounded-lg bg-[#F0EBE4] border border-[#D6CFC5] text-sm text-[#2C2520] focus:outline-none focus:border-[#8C7E6E] appearance-none cursor-pointer"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%238C7E6E' stroke-width='2'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E")`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "right 12px center",
        }}
      >
        <option value="" disabled>Choose a poem...</option>
        {Array.from(grouped.entries()).map(([author, authorPoems]) => (
          <optgroup key={author} label={author}>
            {authorPoems.map((poem) => (
              <option key={poem.id} value={poem.id}>
                {poem.title}{poem.year ? ` (${poem.year})` : ""}
              </option>
            ))}
          </optgroup>
        ))}
      </select>
    </div>
  );
}
