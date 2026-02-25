"use client";

import { DevicePreset } from "@/lib/types";
import { devices } from "@/lib/devices";

interface DevicePickerProps {
  selected: DevicePreset;
  onSelect: (device: DevicePreset) => void;
}

export default function DevicePicker({ selected, onSelect }: DevicePickerProps) {
  const iphones = devices.filter((d) => d.category === "iphone");
  const androids = devices.filter((d) => d.category === "android");

  return (
    <div>
      <label className="block text-sm font-medium text-neutral-400 mb-2 tracking-wide uppercase">
        Device
      </label>
      <div className="space-y-1">
        <p className="text-xs text-neutral-500 mt-0 mb-1">iPhone</p>
        {iphones.map((device) => (
          <button
            key={device.id}
            onClick={() => onSelect(device)}
            className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
              selected.id === device.id
                ? "bg-white/10 text-white"
                : "text-neutral-400 hover:bg-white/5 hover:text-neutral-300"
            }`}
          >
            <span>{device.name}</span>
            <span className="text-xs text-neutral-500 ml-2">
              {device.width}&times;{device.height}
            </span>
          </button>
        ))}
        <p className="text-xs text-neutral-500 mt-3 mb-1">Android</p>
        {androids.map((device) => (
          <button
            key={device.id}
            onClick={() => onSelect(device)}
            className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
              selected.id === device.id
                ? "bg-white/10 text-white"
                : "text-neutral-400 hover:bg-white/5 hover:text-neutral-300"
            }`}
          >
            <span>{device.name}</span>
            <span className="text-xs text-neutral-500 ml-2">
              {device.width}&times;{device.height}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
