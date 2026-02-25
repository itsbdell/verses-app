import { ThemePreset } from "./types";

export const themes: ThemePreset[] = [
  {
    id: "midnight",
    name: "Midnight",
    bgGradient:
      "linear-gradient(165deg, #0a0a0f 0%, #0d1117 15%, #111827 35%, #1a1f2e 50%, #1e293b 65%, #0f172a 85%, #030712 100%)",
    glows: [
      {
        color: "rgba(99, 102, 241, 0.08)",
        cx: "20%",
        cy: "20%",
        radius: "50%",
      },
      {
        color: "rgba(139, 92, 246, 0.06)",
        cx: "80%",
        cy: "30%",
        radius: "45%",
      },
      {
        color: "rgba(59, 130, 246, 0.05)",
        cx: "60%",
        cy: "80%",
        radius: "50%",
      },
    ],
    noiseOpacity: 0.03,
    titleColor: "rgba(226, 232, 240, 0.95)",
    textColor: "rgba(241, 245, 249, 0.92)",
    authorColor: "rgba(148, 163, 184, 0.8)",
    footerColor: "rgba(148, 163, 184, 0.5)",
  },
  {
    id: "ember",
    name: "Ember",
    bgGradient:
      "linear-gradient(165deg, #0f0a05 0%, #1a1008 15%, #201408 35%, #2a1a0a 50%, #1a1008 65%, #120c04 85%, #0a0704 100%)",
    glows: [
      {
        color: "rgba(251, 146, 60, 0.07)",
        cx: "25%",
        cy: "25%",
        radius: "50%",
      },
      {
        color: "rgba(234, 88, 12, 0.05)",
        cx: "75%",
        cy: "35%",
        radius: "45%",
      },
      {
        color: "rgba(180, 83, 9, 0.04)",
        cx: "50%",
        cy: "75%",
        radius: "50%",
      },
    ],
    noiseOpacity: 0.035,
    titleColor: "rgba(254, 243, 199, 0.95)",
    textColor: "rgba(255, 247, 237, 0.92)",
    authorColor: "rgba(194, 165, 132, 0.8)",
    footerColor: "rgba(194, 165, 132, 0.5)",
  },
  {
    id: "forest",
    name: "Forest",
    bgGradient:
      "linear-gradient(165deg, #050f0a 0%, #071a10 15%, #0a2018 35%, #0d2a1e 50%, #0a1a12 65%, #071208 85%, #030a07 100%)",
    glows: [
      {
        color: "rgba(52, 211, 153, 0.06)",
        cx: "20%",
        cy: "20%",
        radius: "50%",
      },
      {
        color: "rgba(16, 185, 129, 0.05)",
        cx: "80%",
        cy: "35%",
        radius: "45%",
      },
      {
        color: "rgba(6, 95, 70, 0.04)",
        cx: "55%",
        cy: "80%",
        radius: "50%",
      },
    ],
    noiseOpacity: 0.03,
    titleColor: "rgba(209, 250, 229, 0.95)",
    textColor: "rgba(236, 253, 245, 0.92)",
    authorColor: "rgba(134, 188, 164, 0.8)",
    footerColor: "rgba(134, 188, 164, 0.5)",
  },
  {
    id: "dawn",
    name: "Dawn",
    bgGradient:
      "linear-gradient(165deg, #0f0a0a 0%, #1a1015 15%, #201520 35%, #2a1a28 50%, #1a1018 65%, #120a10 85%, #0a0708 100%)",
    glows: [
      {
        color: "rgba(244, 114, 182, 0.06)",
        cx: "25%",
        cy: "20%",
        radius: "50%",
      },
      {
        color: "rgba(251, 146, 60, 0.05)",
        cx: "80%",
        cy: "30%",
        radius: "45%",
      },
      {
        color: "rgba(192, 132, 252, 0.04)",
        cx: "50%",
        cy: "80%",
        radius: "50%",
      },
    ],
    noiseOpacity: 0.025,
    titleColor: "rgba(253, 242, 248, 0.95)",
    textColor: "rgba(255, 241, 242, 0.92)",
    authorColor: "rgba(186, 154, 170, 0.8)",
    footerColor: "rgba(186, 154, 170, 0.5)",
  },
  {
    id: "obsidian",
    name: "Obsidian",
    bgGradient:
      "linear-gradient(165deg, #080808 0%, #0a0a0a 15%, #111111 35%, #141414 50%, #101010 65%, #0a0a0a 85%, #050505 100%)",
    glows: [
      {
        color: "rgba(163, 163, 163, 0.03)",
        cx: "30%",
        cy: "25%",
        radius: "50%",
      },
      {
        color: "rgba(115, 115, 115, 0.02)",
        cx: "70%",
        cy: "35%",
        radius: "45%",
      },
      {
        color: "rgba(82, 82, 82, 0.02)",
        cx: "50%",
        cy: "75%",
        radius: "50%",
      },
    ],
    noiseOpacity: 0.04,
    titleColor: "rgba(229, 229, 229, 0.95)",
    textColor: "rgba(245, 245, 245, 0.9)",
    authorColor: "rgba(163, 163, 163, 0.75)",
    footerColor: "rgba(163, 163, 163, 0.45)",
  },
  {
    id: "parchment",
    name: "Parchment",
    bgGradient:
      "linear-gradient(165deg, #f5f0e8 0%, #efe8dc 15%, #e8e0d0 35%, #f2ead8 50%, #ebe3d3 65%, #f0e8da 85%, #f6f1e9 100%)",
    glows: [
      {
        color: "rgba(205, 180, 145, 0.12)",
        cx: "25%",
        cy: "20%",
        radius: "55%",
      },
      {
        color: "rgba(190, 160, 120, 0.08)",
        cx: "75%",
        cy: "35%",
        radius: "45%",
      },
      {
        color: "rgba(175, 150, 110, 0.06)",
        cx: "50%",
        cy: "80%",
        radius: "50%",
      },
    ],
    noiseOpacity: 0.05,
    titleColor: "rgba(60, 45, 30, 0.92)",
    textColor: "rgba(55, 40, 25, 0.88)",
    authorColor: "rgba(120, 95, 65, 0.75)",
    footerColor: "rgba(120, 95, 65, 0.4)",
  },
];

export const defaultTheme = themes[0]; // Midnight
