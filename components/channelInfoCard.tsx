"use client";

import React from "react";
import { motion } from "motion/react";
import Link from "next/link";
import { BsFacebook, BsInstagram, BsSnapchat, BsTiktok, BsTwitch, BsTwitterX, BsYoutube } from "react-icons/bs";
import Image from "next/image";

type ChannelInfoCardProps = {
  image: string;
  url: string;
  channelName: string;
  subscribersNumber: string;
  subsriberValue: string;
  socialIcon?: "snapchat" | "twitter" | "instagram" | 'tiktok' | 'twitch' | 'facebook';
  index: number;
};

export default function ChannelInfoCard({
  image,
  url,
  channelName,
  subscribersNumber,
  subsriberValue,
  socialIcon,
}: ChannelInfoCardProps) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        translateY: 0
      }}
      whileInView={{
         opacity: 1, 
         translateY: 40 
        }}
      transition={{type: "spring",
        bounce: 0.4,
        duration: 0.8, }}
      viewport={{ once: true , amount : 0.8 }}
      className="backdrop-blur-lg w-fit p-2 lg:p-4 rounded-2xl bg-gray-400/20"
    >
      <Link href={url} className="flex lg:flex-row w-[140px] md:w-[300px] xl:w-[350px] items-center flex-col gap-3 md:gap-6 group text-white md:text-nowrap">
        <div className="relative flex gap-1 items-center justify-center flex-shrink-0">
          <Image
            src={image} 
            className="rounded-full size-12 md:size-13  z-20"
            width={12}
            height={12}
            alt={channelName + "image"}
          />
          {socialIcon ? (
            // Switch case for social icons
            (() => {
              switch (socialIcon) {
                case "snapchat":
                  return <BsSnapchat className="text-yellow-300 size-12 md:size-13" />;
                case "twitter":
                  return <BsTwitterX className="size-12 md:size-13" />;
                case "instagram":
                  return <BsInstagram className="size-12 md:size-13" />;
                case "tiktok":
                  return <BsTiktok className="size-12 md:size-13" />;
                case "twitch":
                  return <BsTwitch className="size-12 md:size-13" />;
                case "facebook":
                  return <BsFacebook className="size-12 md:size-13" />;
                default:
                  return null;
              }
            })()
          ) : (
            <BsYoutube
              className="size-12 md:size-13 flex-shrink-0"
              color="red"
            />
          )}
        </div>
        <div className="max-lg:text-center text-wrap">
          <h1 className="font-semibold md:text-xl text-base text-pretty">{channelName}</h1>
          {url.includes("@") && <p className="text-xs md:text-sm text-neutral-200">@{url.split("@")[1]}</p>}
          <h2 className="text-sm md:text-base mt-1 font-bold tracking-tight">
            {subscribersNumber}
            {subsriberValue} subscribers
          </h2>
        </div>
      </Link>
    </motion.div>
  );
}
