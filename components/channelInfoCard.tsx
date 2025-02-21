"use client";

import React from "react";
import { motion } from "motion/react";
import Link from "next/link";
import { BsFacebook, BsInstagram, BsSnapchat, BsTiktok, BsTwitch, BsTwitterX, BsYoutube } from "react-icons/bs";
import { ImYoutube2 } from "react-icons/im";

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
  index,
  url,
  channelName,
  subscribersNumber,
  subsriberValue,
  socialIcon,
}: ChannelInfoCardProps) {

  const cardNumber = () => index%3
  return (
    <motion.div
      initial={{
        opacity: 0,
        rotateY: 100,
        translateX: cardNumber() == 0 ? "14vw" : cardNumber() ==2 ? "-14vw" : 0,
        filter: 'blur(5px)'
        // rotateX: cardNumber() == 1 ? 180 : ''
      }}
      whileInView={{
        opacity: 1, 
        translateX: 0, 
        rotateY: 0,
        filter: 'blur(0px)'

        }}
      transition={
        {
        // type: "spring",
        // bounce: 0.4,
        duration: 1, 
      }}
      // viewport={{ once: true , amount : 0.8 }}
      className=""
    >
      <Link href={url} className={`flex w-[140px] md:w-[300px] ${cardNumber() ==0 ? 'md:mt-16' : cardNumber() ==2 ? 'md:mt-20' : ''} ${index%2===0 && 'max-md:mt-20'} xl:w-[350px] items-center justify-center text-center flex-col group text-white md:text-nowrap`}>
        <div className="relative">
          {socialIcon ? (
            // Switch case for social icons
            (() => {
              switch (socialIcon) {
                case "snapchat":
                  return <BsSnapchat className="text-yellow-300 size-12 md:size-13 mb-3" />;
                case "twitter":
                  return <BsTwitterX className="size-12 md:size-13 mb-3" />;
                case "instagram":
                  return <BsInstagram className="size-12 md:size-13 mb-3" />;
                case "tiktok":
                  return <BsTiktok className="size-12 md:size-13 mb-3" />;
                case "twitch":
                  return <BsTwitch className="size-12 md:size-13 mb-3" />;
                case "facebook":
                  return <BsFacebook className="size-12 md:size-13 mb-3" />;
                default:
                  return null;
              }
            })()
          ) : (
            <div className="max-h-16">
              <ImYoutube2
              className="size-20 flex-shrink-0"
              color="red"
            />
            </div>
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