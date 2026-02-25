"use client";

import { useState, useRef, useEffect } from "react";
import { Poem, DevicePreset, ThemePreset } from "@/lib/types";
import { defaultDevice } from "@/lib/devices";
import { defaultTheme } from "@/lib/themes";
import { defaultPoem } from "@/lib/poems";
import LockScreenPreview from "./LockScreenPreview";
import DevicePicker from "./DevicePicker";
import PoemPicker from "./PoemPicker";
import ThemePicker from "./ThemePicker";
import ExportButton from "./ExportButton";

const EXPORT_ID = "verses-export-target";

export default function VersesApp() {
  const [selectedPoem, setSelectedPoem] = useState<Poem>(defaultPoem);
  const [selectedDevice, setSelectedDevice] =
    useState<DevicePreset>(defaultDevice);
  const [selectedTheme, setSelectedTheme] =
    useState<ThemePreset>(defaultTheme);
  const [previewScale, setPreviewScale] = useState(0.25);
  const previewContainerRef = useRef<HTMLDivElement>(null);

  // Compute preview scale to fit container
  useEffect(() => {
    const updateScale = () => {
      if (!previewContainerRef.current) return;
      const containerWidth = previewContainerRef.current.clientWidth;
      // Leave some padding
      const availableWidth = containerWidth - 32;
      const scale = Math.min(availableWidth / selectedDevice.width, 0.4);
      setPreviewScale(scale);
    };

    updateScale();
    window.addEventListener("resize", updateScale);
    return () => window.removeEventListener("resize", updateScale);
  }, [selectedDevice]);

  const scaledWidth = selectedDevice.width * previewScale;
  const scaledHeight = selectedDevice.height * previewScale;

  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      {/* Header */}
      <header className="border-b border-white/5 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-baseline gap-3">
          <h1
            className="text-lg tracking-widest uppercase"
            style={{ fontFamily: '"Spectral", Georgia, serif' }}
          >
            Verses
          </h1>
          <span className="text-xs text-neutral-500">
            Lock screen wallpapers for poems
          </span>
        </div>
      </header>

      {/* Main layout */}
      <main className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Left panel — controls */}
          <div className="w-full md:w-[340px] flex-shrink-0 space-y-6">
            <DevicePicker
              selected={selectedDevice}
              onSelect={setSelectedDevice}
            />
            <ThemePicker
              selected={selectedTheme}
              onSelect={setSelectedTheme}
            />
            <PoemPicker selected={selectedPoem} onSelect={setSelectedPoem} />
          </div>

          {/* Right panel — preview + export */}
          <div className="flex-1 flex flex-col items-center" ref={previewContainerRef}>
            {/* Visible scaled preview */}
            <div
              className="rounded-2xl overflow-hidden shadow-2xl shadow-black/50 border border-white/5"
              style={{
                width: scaledWidth,
                height: scaledHeight,
              }}
            >
              <LockScreenPreview
                poem={selectedPoem}
                device={selectedDevice}
                theme={selectedTheme}
                scale={previewScale}
              />
            </div>

            {/* Device info */}
            <p className="text-xs text-neutral-500 mt-3 mb-4">
              {selectedDevice.name} &mdash; {selectedDevice.width}&times;
              {selectedDevice.height}
            </p>

            {/* Export button */}
            <div className="w-full max-w-xs">
              <ExportButton
                poem={selectedPoem}
                device={selectedDevice}
                theme={selectedTheme}
                exportElementId={EXPORT_ID}
              />
            </div>
          </div>
        </div>
      </main>

      {/* Hidden full-resolution export target */}
      <div
        style={{
          position: "fixed",
          left: "-99999px",
          top: 0,
          pointerEvents: "none",
          opacity: 0,
        }}
      >
        <LockScreenPreview
          id={EXPORT_ID}
          poem={selectedPoem}
          device={selectedDevice}
          theme={selectedTheme}
        />
      </div>
    </div>
  );
}
