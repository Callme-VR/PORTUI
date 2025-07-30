"use client";
import React, { ComponentPropsWithoutRef, ElementType } from "react";

interface StarBorderProps<T extends ElementType> {
  as?: T;
  children?: React.ReactNode;
  className?: string;
}

export default function StarBorder<T extends ElementType = "button">({
  as,
  children,
  className = "",
  ...props
}: StarBorderProps<T> &
  Omit<ComponentPropsWithoutRef<T>, keyof StarBorderProps<T>>) {
  const Component = as || "button";
  return (
    <Component
      className={`realtive inline-block p-[3px] rounded-full bg-gradient-to-r from-pink-600 via-purple-600 to-blue-500 animate-glow shadow-md ${className}`}
      {...props}
    >
      <div className="rounded-full bg-black text-green-100 tex-lg md:rexr-xl font-semibold px-8 py-4 min-w-[180px] text-center">
        {children} StarBorder
      </div>
    </Component>
  );
}
