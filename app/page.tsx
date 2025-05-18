"use client";
import Assistant from "@/components/assistant";

export default function Main() {
  return (
    <div className="flex justify-center h-screen bg-background text-foreground">
      <div className="w-full md:w-[70%] bg-background text-foreground border-l border-r border-[#23262B]">
        <Assistant />
      </div>
    </div>
  );
}
