"use client";

import { Home, LayoutDashboard, User, LogOut } from "lucide-react";
import { useState } from "react";

export default function Sidebar() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const handleLogout = () => {
    setIsLoggedIn(false);
    console.log("User logged out successfully");
  };

  return (
    <div className="flex min-h-screen bg-black text-white font-sans">
      <style>
        {`
        @keyframes glow-border {
          0% { opacity: 0; transform: scale(0.98); }
          50% { opacity: 1; transform: scale(1); }
          100% { opacity: 0; transform: scale(0.98); }
        }
        .interactive-glow {
          position: relative;
          overflow: hidden;
          transition: all 0.3s ease-in-out;
        }
        .interactive-glow::before {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: inherit;
          padding: 2px;
          background: linear-gradient(to bottom right, white, gray, black);
          opacity: 0;
          pointer-events: none;
          z-index: 0;
          transition: opacity 0.3s;
        }
        .interactive-glow:hover::before {
          opacity: 1;
          animation: glow-border 1.5s infinite alternate;
        }
        .interactive-glow > * {
          position: relative;
          z-index: 1;
        }
        `}
      </style>

      <aside className="w-64 bg-gray-900 p-4 shadow-xl rounded-xl m-4 flex flex-col justify-between border border-gray-700 interactive-glow">
        <div className="relative flex flex-col h-full z-10">
          <div className="text-2xl font-extrabold mb-8 text-center text-white py-2">
            My COMPONENT
          </div>

          <nav className="space-y-2 flex-grow">
            <a
              href="#"
              className="flex items-center p-3 rounded-lg text-white hover:bg-gray-800 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-black interactive-glow"
            >
              <Home className="mr-3 h-5 w-5" />
              <span>Home</span>
            </a>

            <a
              href="#"
              className="flex items-center p-3 rounded-lg text-white hover:bg-gray-800 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-black interactive-glow"
            >
              <LayoutDashboard className="mr-3 h-5 w-5" />
              <span>Dashboard</span>
            </a>
          </nav>

          {isLoggedIn && (
            <div className="mt-auto pt-4 border-t border-gray-800 relative z-10">
              <div className="flex items-center p-3 rounded-lg mb-4 bg-gray-800 interactive-glow">
                <User className="h-5 w-5" />
                <div className="ml-3">
                  <div className="font-medium text-white">User Doe</div>
                  <div className="text-sm text-gray-400">user@gmail.com</div>
                </div>
              </div>
            </div>
          )}

          <button
            onClick={handleLogout}
            className="w-full flex items-center justify-center p-3 rounded-lg bg-gray-700 text-white font-semibold hover:bg-gray-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black shadow-md hover:shadow-lg interactive-glow"
          >
            <LogOut className="mr-3 h-5 w-5" />
            <span>Logout</span>
          </button>
        </div>
      </aside>
    </div>
  );
}
