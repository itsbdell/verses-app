"use client";

import { DevicePreset } from "@/lib/types";
import { devices } from "@/lib/devices";

interface DevicePickerProps {
  selected: DevicePreset | null;
  onSelect: (device: DevicePreset) => void;
}

export default function DevicePicker({ selected, onSelect }: DevicePickerProps) {
  const iphones = devices.filter((d) => d.category === "iphone");
  const androids = devices.filter((d) => d.category === "android");

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const device = devices.find((d) => d.id === e.target.value);
    if (device) onSelect(device);
  };

  return (
    <div>
      <label className="block text-sm font-medium text-[#8C7E6E] mb-2 tracking-wide uppercase">
        Device
      </label>
      <select
        value={selected?.id ?? ""}
        onChange={handleChange}
        className="w-full px-3 py-2 rounded-lg bg-[#F0EBE4] border border-[#D6CFC5] text-sm text-[#2C2520] focus:outline-none focus:border-[#8C7E6E] appearance-none cursor-pointer"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%238C7E6E' stroke-width='2'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E")`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "right 12px center",
        }}
      >
        <option value="" disabled>Choose a device...</option>
        <optgroup label="iPhone">
          {iphones.map((device) => (
            <option key={device.id} value={device.id}>
              {device.name} — {device.width}×{device.height}
            </option>
          ))}
        </optgroup>
        <optgroup label="Android">
          {androids.map((device) => (
            <option key={device.id} value={device.id}>
              {device.name} — {device.width}×{device.height}
            </option>
          ))}
        </optgroup>
      </select>
    </div>
  );
}
