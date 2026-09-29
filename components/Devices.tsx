import type { DeviceOption } from "@/lib/sanity/types";

const DEFAULT_DEVICES: DeviceOption[] = [
  { name: "Smart TV", icon: "📺" },
  { name: "Fire Stick / Fire TV", icon: "🔥" },
  { name: "Android / iOS", icon: "📱" },
  { name: "PC / Mac", icon: "💻" },
  { name: "MAG Box", icon: "📦" },
  { name: "Android TV Box", icon: "🎛️" },
];

export default function Devices({
  devices = DEFAULT_DEVICES,
}: {
  devices?: DeviceOption[];
}) {
  return (
    <section id="devices" className="px-6 py-24">
      <div className="mx-auto max-w-7xl rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.06] to-transparent p-10 sm:p-16">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-[family-name:var(--font-poppins)] text-3xl font-bold text-white sm:text-4xl">
            Compatible With All Your Devices
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-slate-400">
            Get IPTV with a subscription that works on every screen in your
            home, from your Smart TV to your phone.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {devices.map((device) => (
            <div
              key={device.name}
              className="glass flex flex-col items-center gap-3 rounded-2xl px-4 py-8 text-center"
            >
              <span className="text-3xl">{device.icon}</span>
              <span className="text-sm font-medium text-slate-200">
                {device.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
