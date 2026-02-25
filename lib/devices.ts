import { DevicePreset } from "./types";

export const devices: DevicePreset[] = [
  {
    id: "iphone-16-pro-max",
    name: "iPhone 16 Pro Max",
    width: 1320,
    height: 2868,
    category: "iphone",
  },
  {
    id: "iphone-16-pro",
    name: "iPhone 16 Pro",
    width: 1206,
    height: 2622,
    category: "iphone",
  },
  {
    id: "iphone-16",
    name: "iPhone 16 / 15",
    width: 1179,
    height: 2556,
    category: "iphone",
  },
  {
    id: "iphone-se",
    name: "iPhone SE",
    width: 750,
    height: 1334,
    category: "iphone",
  },
  {
    id: "galaxy-s24",
    name: "Samsung Galaxy S24",
    width: 1440,
    height: 3120,
    category: "android",
  },
  {
    id: "pixel-9",
    name: "Google Pixel 9",
    width: 1080,
    height: 2424,
    category: "android",
  },
];

export const defaultDevice = devices[1]; // iPhone 16 Pro
