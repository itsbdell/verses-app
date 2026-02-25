"use client";

import { useState, useRef, useEffect } from "react";
import { Poem, DevicePreset, ThemePreset } from "@/lib/types";
import LockScreenPreview from "./LockScreenPreview";
import DevicePicker from "./DevicePicker";
import PoemPicker from "./PoemPicker";
import ThemePicker from "./ThemePicker";
import ExportButton from "./ExportButton";

const EXPORT_ID = "verses-export-target";

export default function VersesApp() {
  const [selectedPoem, setSelectedPoem] = useState<Poem | null>(null);
  const [selectedDevice, setSelectedDevice] = useState<DevicePreset | null>(
    null
  );
  const [selectedTheme, setSelectedTheme] = useState<ThemePreset | null>(null);
  const [customTitle, setCustomTitle] = useState("");
  const [customAuthor, setCustomAuthor] = useState("");
  const [customText, setCustomText] = useState("");
  const [isCustom, setIsCustom] = useState(false);

  const handlePoemSelect = (poem: Poem) => {
    setSelectedPoem(poem);
    setIsCustom(false);
    setCustomTitle("");
    setCustomAuthor("");
    setCustomText("");
  };

  const handleCustomTextChange = (text: string) => {
    setCustomText(text);
    if (text.trim()) {
      setIsCustom(true);
      setSelectedPoem({
        id: "custom",
        title: customTitle || "Untitled",
        author: customAuthor || "",
        year: null,
        text: text.trim(),
        tags: [],
      });
    } else {
      setIsCustom(false);
      setSelectedPoem(null);
    }
  };

  const handleCustomMetaChange = (title: string, author: string) => {
    setCustomTitle(title);
    setCustomAuthor(author);
    if (customText.trim()) {
      setSelectedPoem({
        id: "custom",
        title: title || "Untitled",
        author: author || "",
        year: null,
        text: customText.trim(),
        tags: [],
      });
    }
  };
  const [previewScale, setPreviewScale] = useState(0.25);
  const previewContainerRef = useRef<HTMLDivElement>(null);

  // Compute preview scale to fit container (constrained by both width and height)
  useEffect(() => {
    const updateScale = () => {
      if (!previewContainerRef.current || !selectedDevice) return;
      const containerWidth = previewContainerRef.current.clientWidth;
      const containerHeight = previewContainerRef.current.clientHeight;
      const availableWidth = containerWidth - 32;
      const availableHeight = containerHeight - 80;
      const scaleW = availableWidth / selectedDevice.width;
      const scaleH = availableHeight / selectedDevice.height;
      const scale = Math.min(scaleW, scaleH, 0.4);
      setPreviewScale(scale);
    };

    updateScale();
    window.addEventListener("resize", updateScale);
    return () => window.removeEventListener("resize", updateScale);
  }, [selectedDevice]);

  const scaledWidth = selectedDevice
    ? selectedDevice.width * previewScale
    : 0;
  const scaledHeight = selectedDevice
    ? selectedDevice.height * previewScale
    : 0;

  return (
    <div className="min-h-screen flex flex-col md:h-screen md:overflow-hidden bg-[#FAF8F5] text-[#2C2520]">
      {/* Header */}
      <header className="border-b border-[#E8E2DA] px-6 py-3 flex-shrink-0">
        <div className="max-w-4xl mx-auto flex items-baseline justify-between gap-3">
          <div className="flex items-baseline gap-3">
            <h1
              className="text-lg tracking-widest uppercase"
              style={{ fontFamily: '"Spectral", Georgia, serif' }}
            >
              Verses
            </h1>
            <span className="text-xs text-[#8C7E6E] hidden sm:inline">
              Lock screen wallpapers for poems
            </span>
          </div>
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/itsbdell/verses-app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-[#8C7E6E] hover:text-[#2C2520] transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://briandell.xyz"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-[#8C7E6E] hover:text-[#2C2520] transition-colors"
            >
              briandell.xyz
            </a>
            <span
              className="text-[10px] text-[#8C7E6E] tracking-wider border border-[rgba(77,82,234,0.2)] rounded px-1.5 py-0.5"
            >
              AwAI
            </span>
          </div>
        </div>
      </header>

      {/* Main layout */}
      <main className="flex-1 overflow-y-auto md:overflow-hidden max-w-4xl mx-auto w-full px-6 py-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:h-full">
          {/* Left panel — controls */}
          <div className="rounded-2xl border border-[#E8E2DA] bg-white/50 p-6 space-y-4 md:overflow-y-auto">
            <DevicePicker
              selected={selectedDevice}
              onSelect={setSelectedDevice}
            />
            <ThemePicker
              selected={selectedTheme}
              onSelect={setSelectedTheme}
            />
            <PoemPicker
              selected={!isCustom ? selectedPoem : null}
              onSelect={handlePoemSelect}
            />

            {/* Divider */}
            <div className="flex items-center gap-3">
              <div className="flex-1 border-t border-[#E8E2DA]" />
              <span className="text-xs text-[#8C7E6E] italic">or paste your own</span>
              <div className="flex-1 border-t border-[#E8E2DA]" />
            </div>

            {/* Custom poem input */}
            <div className="space-y-2">
              <input
                type="text"
                placeholder="Title"
                value={customTitle}
                onChange={(e) => handleCustomMetaChange(e.target.value, customAuthor)}
                className="w-full px-3 py-2 rounded-lg bg-[#F0EBE4] border border-[#D6CFC5] text-sm text-[#2C2520] placeholder-[#B5AA9A] focus:outline-none focus:border-[#8C7E6E]"
              />
              <input
                type="text"
                placeholder="Author"
                value={customAuthor}
                onChange={(e) => handleCustomMetaChange(customTitle, e.target.value)}
                className="w-full px-3 py-2 rounded-lg bg-[#F0EBE4] border border-[#D6CFC5] text-sm text-[#2C2520] placeholder-[#B5AA9A] focus:outline-none focus:border-[#8C7E6E]"
              />
              <textarea
                placeholder="Paste poem text here..."
                value={customText}
                onChange={(e) => handleCustomTextChange(e.target.value)}
                rows={5}
                className="w-full px-3 py-2 rounded-lg bg-[#F0EBE4] border border-[#D6CFC5] text-sm text-[#2C2520] placeholder-[#B5AA9A] focus:outline-none focus:border-[#8C7E6E] resize-none"
                style={{ fontFamily: '"Spectral", Georgia, serif' }}
              />
            </div>

            {selectedPoem && selectedDevice && selectedTheme && (
              <div className="pt-2">
                <ExportButton
                  poem={selectedPoem}
                  device={selectedDevice}
                  theme={selectedTheme}
                  exportElementId={EXPORT_ID}
                />
              </div>
            )}
          </div>

          {/* Right panel — preview */}
          <div
            className="rounded-2xl border border-[#E8E2DA] bg-white/50 p-6 flex flex-col items-center justify-center overflow-hidden"
            ref={previewContainerRef}
          >
            {!selectedDevice ? (
              <p
                className="text-[#8C7E6E] text-sm tracking-wide italic"
                style={{ fontFamily: '"Spectral", Georgia, serif' }}
              >
                Select a device to begin
              </p>
            ) : !selectedTheme ? (
              <>
                <div
                  className="rounded-2xl border border-dashed border-[#D6CFC5] flex items-center justify-center"
                  style={{ width: scaledWidth, height: scaledHeight }}
                >
                  <p
                    className="text-[#8C7E6E] text-sm tracking-wide italic"
                    style={{ fontFamily: '"Spectral", Georgia, serif' }}
                  >
                    Choose a theme
                  </p>
                </div>
                <p className="text-xs text-[#8C7E6E] mt-3">
                  {selectedDevice.name} &mdash; {selectedDevice.width}&times;
                  {selectedDevice.height}
                </p>
              </>
            ) : (
              <>
                <div
                  className="rounded-2xl overflow-hidden shadow-2xl shadow-black/10 border border-[#E8E2DA]"
                  style={{ width: scaledWidth, height: scaledHeight }}
                >
                  <LockScreenPreview
                    poem={selectedPoem ?? undefined}
                    device={selectedDevice}
                    theme={selectedTheme}
                    scale={previewScale}
                  />
                </div>

                <p className="text-xs text-[#8C7E6E] mt-3">
                  {selectedDevice.name} &mdash; {selectedDevice.width}&times;
                  {selectedDevice.height}
                </p>

                {!selectedPoem && (
                  <p
                    className="text-[#8C7E6E] text-sm tracking-wide italic mt-2"
                    style={{ fontFamily: '"Spectral", Georgia, serif' }}
                  >
                    Choose a poem to complete
                  </p>
                )}
              </>
            )}
          </div>
        </div>
      </main>

      {/* Hidden full-resolution export target — only when all selections made */}
      {selectedPoem && selectedDevice && selectedTheme && (
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
      )}
    </div>
  );
}
