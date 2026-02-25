export interface Poem {
  id: string;
  title: string;
  author: string;
  year: number | null;
  text: string; // \n for line breaks, \n\n for stanza breaks
  tags: string[];
}

export interface DevicePreset {
  id: string;
  name: string;
  width: number;
  height: number;
  category: "iphone" | "android" | "tablet";
}

export interface ThemePreset {
  id: string;
  name: string;
  bgGradient: string;
  glows: { color: string; cx: string; cy: string; radius: string }[];
  noiseOpacity: number;
  titleColor: string;
  textColor: string;
  authorColor: string;
  footerColor: string;
}
