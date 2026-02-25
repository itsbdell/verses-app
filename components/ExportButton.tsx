"use client";

import { useState } from "react";
import { Poem, DevicePreset, ThemePreset } from "@/lib/types";

interface ExportButtonProps {
  poem: Poem;
  device: DevicePreset;
  theme: ThemePreset;
  exportElementId: string;
}

export default function ExportButton({
  poem,
  device,
  exportElementId,
}: ExportButtonProps) {
  const [exporting, setExporting] = useState(false);

  const handleExport = async () => {
    setExporting(true);
    try {
      const { exportLockScreen } = await import("@/lib/render");
      const filename = `verses-${poem.id}-${device.id}.png`;
      await exportLockScreen(exportElementId, filename);
    } catch (err) {
      console.error("Export failed:", err);
      alert("Export failed. Please try again.");
    } finally {
      setExporting(false);
    }
  };

  return (
    <button
      onClick={handleExport}
      disabled={exporting}
      className="w-full py-3 px-6 rounded-xl bg-white/10 hover:bg-white/15 disabled:opacity-50 disabled:cursor-not-allowed text-white font-medium text-sm tracking-wide transition-colors border border-white/10 hover:border-white/20"
    >
      {exporting ? (
        <span className="flex items-center justify-center gap-2">
          <svg
            className="animate-spin h-4 w-4"
            viewBox="0 0 24 24"
            fill="none"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
            />
          </svg>
          Rendering...
        </span>
      ) : (
        <>Download PNG</>
      )}
    </button>
  );
}
