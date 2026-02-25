import { toPng } from "html-to-image";

// Wait for Google Fonts to be fully loaded before export
async function waitForFonts(): Promise<void> {
  if (typeof document === "undefined") return;
  await document.fonts.ready;
  // Extra wait for Google Fonts network latency
  const fontFamilies = ["Cormorant Garamond", "Spectral"];
  const checks = fontFamilies.map((family) =>
    document.fonts.load(`400 44px "${family}"`)
  );
  await Promise.all(checks);
}

export async function exportLockScreen(
  elementId: string,
  filename: string
): Promise<void> {
  const node = document.getElementById(elementId);
  if (!node) throw new Error(`Element #${elementId} not found`);

  await waitForFonts();

  const dataUrl = await toPng(node, {
    width: node.offsetWidth,
    height: node.offsetHeight,
    pixelRatio: 1,
    cacheBust: true,
  });

  const link = document.createElement("a");
  link.download = filename;
  link.href = dataUrl;
  link.click();
}
