"use client";

import { ThemePreset } from "@/lib/types";
import { themes } from "@/lib/themes";

interface ThemePickerProps {
  selected: ThemePreset;
  onSelect: (theme: ThemePreset) => void;
}

export default function ThemePicker({ selected, onSelect }: ThemePickerProps) {
  return (
    <div>
      <label className="block text-sm font-medium text-neutral-400 mb-2 tracking-wide uppercase">
        Theme
      </label>
      <div className="flex gap-2 flex-wrap">
        {themes.map((theme) => (
          <button
            key={theme.id}
            onClick={() => onSelect(theme)}
            className={`group relative rounded-lg overflow-hidden transition-all ${
              selected.id === theme.id
                ? "ring-2 ring-white/40 ring-offset-2 ring-offset-neutral-900"
                : "ring-1 ring-white/10 hover:ring-white/20"
            }`}
            title={theme.name}
          >
            <div
              style={{
                width: 48,
                height: 48,
                background: theme.bgGradient,
              }}
            />
            <span className="absolute inset-x-0 bottom-0 text-[9px] text-center text-white/70 bg-black/40 py-0.5">
              {theme.name}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
