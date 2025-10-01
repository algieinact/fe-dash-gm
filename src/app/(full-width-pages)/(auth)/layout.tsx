import ThemeTogglerTwo from "@/components/common/ThemeTogglerTwo";
import { ThemeProvider } from "@/context/ThemeContext";
import LiquidEther from "@/components/effects/LiquidEther";
import React from "react";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative p-6 bg-white z-1 dark:bg-gray-900 sm:p-0">
      <ThemeProvider>
        <div className="relative flex lg:flex-row w-full h-screen justify-start flex-col dark:bg-gray-900 sm:p-0">
          {/* Fullscreen LiquidEther background */}
          <div className="absolute inset-0 z-0">
            <LiquidEther 
              className="absolute inset-0" 
              style={{ width: "100%", height: "100%" }}
              mouseForce={25}
              cursorSize={120}
              resolution={0.6}
              autoDemo={true}
              autoSpeed={0.3}
              autoIntensity={1.8}
              colors={['#30CA3', '#9209B7', '#4CC9F0']}
            />
          </div>
          {/* Left: children (form) - fixed left column, vertically centered */}
          <div className="relative z-10 w-full lg:w-1/2 min-h-screen flex items-center">
            {children}
          </div>
          {/* Right: spacer to keep split layout on large screens */}
          <div className="hidden lg:block lg:flex-1" />
          <div className="fixed bottom-6 right-6 z-50 hidden sm:block">
            <ThemeTogglerTwo />
          </div>
        </div>
      </ThemeProvider>
    </div>
  );
}
