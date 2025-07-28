"use client";

import { useState } from "react";
import { Home, Flame, Settings, User } from "lucide-react";

const menuItems = [
  { label: "Home", icon: <Home size={20} /> },
  { label: "Explore", icon: <Flame size={20} /> },
  { label: "Profile", icon: <User size={20} /> },
  { label: "Settings", icon: <Settings size={20} /> },
];

export default function GlowingMenuCard() {
  const [active, setActive] = useState("Home");

  return (
    <div className="glowing-card p-6 rounded-2xl bg-black/80 border border-blue-500 shadow-xl backdrop-blur-md">
      <h2 className="text-white text-xl font-semibold text-center mb-4">
        Glowing Menu
      </h2>

      <nav className="flex gap-4 justify-center items-center flex-wrap">
        {menuItems.map((item) => (
          <button
            key={item.label}
            onClick={() => setActive(item.label)}
            className={`
              flex items-center gap-2 px-4 py-2 rounded-lg
              text-white font-medium
              transition-all duration-300
              border border-zinc-800
              ${active === item.label ? "glow border-blue-500" : "hover:glow"}
            `}
          >
            {item.icon}
            <span>{item.label}</span>
          </button>
        ))}
      </nav>
    </div>
  );
}
