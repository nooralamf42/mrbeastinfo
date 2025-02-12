"use client";

import { usePathname } from "next/navigation";
import React, { PropsWithChildren } from "react";

export default function BgManger({ children }: PropsWithChildren) {
  const pathname = usePathname();
  const imageHandler = () => {
    switch (pathname) {
      case "/":
        return "/images/homepagebg.webp";
      case "/sponsors":
        return "/images/sponserspagebg.webp";
      case "/products/mrbeast-burger":
        return "/images/mrbeastburgerbg.webp";
      case "/products/finger-on-the-app":
        return "/images/fotabg.webp";
      case "/products/mrbeast-bar":
        return "/images/mrbeastbarsbg.webp";
      case "/organisations/team-trees":
        return "/images/mrbeast_start_team_trees.webp";
      case "/organisations/team-seas":
        return "/images/mrbeastteamseas.webp";
      case "/organisations/philanthropy":
        return "/images/mrbeastphilanthropy.webp";
      case "/awards/streamy-awards":
        return "/images/mrbeaststreamyawards.webp";
      case "/awards/shorty-awards":
        return "/images/mrbeastshortaward.webp";
      case "/awards/kids-choice-awards":
        return "/images/mrbeastkidschoiceawards.webp";
      default:
        return "/images/homepagebg.webp"; // fallback image
    }
  };
  return (
    <>
      <img src={imageHandler()} className="min-h-screen object-cover w-full fixed inset-0"/>
      <div className="inset-0 bg-black/50 fixed"></div>
      <div className="relative">{children}</div>
    </>
  );
}
