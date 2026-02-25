"use client";

import { Poem, DevicePreset, ThemePreset } from "@/lib/types";

interface LockScreenPreviewProps {
  poem?: Poem;
  device: DevicePreset;
  theme: ThemePreset;
  scale?: number;
  id?: string;
}

function parseStanzas(text: string): string[][] {
  return text.split("\n\n").map((stanza) => stanza.split("\n"));
}

// Scale font sizes for very long poems
function getFontScale(poem: Poem): number {
  const lineCount = poem.text.split("\n").length;
  if (lineCount > 40) return 0.75;
  if (lineCount > 30) return 0.85;
  if (lineCount > 24) return 0.9;
  return 1;
}

export default function LockScreenPreview({
  poem,
  device,
  theme,
  scale,
  id,
}: LockScreenPreviewProps) {
  const stanzas = poem ? parseStanzas(poem.text) : [];
  const fontScale = poem ? getFontScale(poem) : 1;

  const baseTitleSize = 58;
  const baseLineSize = 44;
  const baseAuthorSize = 32;
  const baseFooterSize = 24;
  const baseStanzaMargin = 55;
  const basePaddingV = 180;
  const basePaddingH = 70;

  const titleSize = baseTitleSize * fontScale;
  const lineSize = baseLineSize * fontScale;
  const authorSize = baseAuthorSize * fontScale;
  const footerSize = baseFooterSize * fontScale;
  const stanzaMargin = baseStanzaMargin * fontScale;
  const paddingV = basePaddingV * (fontScale < 0.9 ? 0.8 : 1);
  const paddingH = basePaddingH;

  const noiseDataUri = `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`;

  const glowBackground = theme.glows
    .map(
      (g) =>
        `radial-gradient(ellipse at ${g.cx} ${g.cy}, ${g.color} 0%, transparent ${g.radius})`
    )
    .join(", ");

  const containerStyle: React.CSSProperties = {
    width: device.width,
    height: device.height,
    background: theme.bgGradient,
    position: "relative",
    overflow: "hidden",
    ...(scale
      ? {
          transform: `scale(${scale})`,
          transformOrigin: "top left",
        }
      : {}),
  };

  return (
    <div id={id} style={containerStyle}>
      {/* Glow overlay — replaces body::before */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: glowBackground,
          pointerEvents: "none",
        }}
      />

      {/* Noise texture overlay — replaces body::after */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: noiseDataUri,
          opacity: theme.noiseOpacity,
          pointerEvents: "none",
        }}
      />

      {/* Center glow */}
      <div
        style={{
          position: "absolute",
          width: 800,
          height: 800,
          background: `radial-gradient(circle, ${theme.glows[0]?.color || "rgba(99,102,241,0.08)"} 0%, transparent 70%)`,
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      {/* Content container */}
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: `${paddingV}px ${paddingH}px`,
          position: "relative",
          zIndex: 1,
        }}
      >
        {poem && (
          <>
            <div style={{ textAlign: "left" }}>
              {/* Title */}
              <h1
                style={{
                  fontFamily: '"Cormorant Garamond", Georgia, serif',
                  fontSize: titleSize,
                  fontWeight: 300,
                  fontStyle: "italic",
                  color: theme.titleColor,
                  letterSpacing: "0.08em",
                  marginBottom: 20,
                  margin: 0,
                  marginTop: 0,
                  padding: 0,
                }}
              >
                {poem.title}
              </h1>

              {/* Author */}
              <p
                style={{
                  fontFamily: '"Spectral", Georgia, serif',
                  fontSize: authorSize,
                  fontWeight: 300,
                  color: theme.authorColor,
                  letterSpacing: "0.25em",
                  textTransform: "uppercase",
                  marginBottom: 90 * fontScale,
                  margin: 0,
                  marginTop: 0,
                  padding: 0,
                }}
              >
                {poem.author}
                {poem.year ? `, ${poem.year}` : ""}
              </p>

              {/* Spacer between author and poem */}
              <div style={{ height: 90 * fontScale }} />

              {/* Stanzas */}
              {stanzas.map((lines, si) => (
                <div
                  key={si}
                  style={{
                    marginBottom:
                      si < stanzas.length - 1 ? stanzaMargin : 0,
                  }}
                >
                  {lines.map((line, li) => (
                    <p
                      key={li}
                      style={{
                        fontFamily:
                          '"Cormorant Garamond", Georgia, serif',
                        fontSize: lineSize,
                        fontWeight: 400,
                        color: theme.textColor,
                        lineHeight: 1.75,
                        letterSpacing: "0.02em",
                        margin: 0,
                        padding: 0,
                      }}
                    >
                      {line}
                    </p>
                  ))}
                </div>
              ))}
            </div>

            {/* Footer */}
            <p
              style={{
                position: "absolute",
                bottom: 120,
                left: 0,
                right: 0,
                textAlign: "center",
                fontFamily: '"Spectral", Georgia, serif',
                fontSize: footerSize,
                fontWeight: 300,
                color: theme.footerColor,
                letterSpacing: "0.12em",
                margin: 0,
                padding: 0,
              }}
            >
              Verses
            </p>
          </>
        )}
      </div>
    </div>
  );
}
