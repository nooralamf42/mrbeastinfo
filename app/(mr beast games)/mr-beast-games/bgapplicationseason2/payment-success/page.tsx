"use client";

import { Confetti, ConfettiRef } from "@/components/magicui/confetti";
import { useRef } from "react";


export default function Success() {
  const confettiRef = useRef<ConfettiRef>(null);

  return (
    <div className="relative flex h-[500px] w-full flex-col items-center justify-center  rounded-lg border bg-background">
      <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-600 bg-clip-text text-center text-4xl sm:text-6xl lg:text-8xl font-semibold leading-none text-transparent ">
        Payment Success
      </span>
      <h2 className="text-lg text-neutral-600 mt-2 text-center px-3">You will receive confimation mail within 2-3 working days</h2>

      <Confetti
        ref={confettiRef}
        className="absolute left-0 top-0 z-0 size-full"
        onMouseEnter={() => {
          confettiRef.current?.fire({});
        }}
      />
    </div>
  );
}
