'use client'

import ChannelInfoCard from '@/components/channelInfoCard'
import {motion} from 'motion/react'
export default function page() {
  type FollowerInfo = {
    image: string;
    url: string;
    channelName: string;
    subscribersNumber: string;
    subsriberValue: string;
    socialIcon?: "snapchat" | "twitter" | 'instagram' | undefined | 'tiktok' | 'twitch' | 'facebook'; // Optional property
  };

  const followersInfo: FollowerInfo[] = 
   [ 
     {
       image: '/images/mrbeastgamingchannel.jpg',
       url: 'https://www.youtube.com/@MrBeastGaming',
       channelName: "MrBeast Gaming",
       subscribersNumber: "46.6",
       subsriberValue: 'M',
     },
    {
      image: '/images/mrbeastchannel.jpg',
      url: 'https://www.youtube.com/@MrBeast',
      channelName: "MrBeast",
      subscribersNumber: "360",
      subsriberValue: 'M',
    },
    {
      image: '/images/mrbeastreactchannel.jpg',
      url: 'https://www.youtube.com/@BeastReacts',
      channelName: "Beast Reacts",
      subscribersNumber: "34.5",
      subsriberValue: 'M',
    },
    {
      image: '/images/mrbeastphilanthropychannel.jpg',
      url: 'https://www.youtube.com/@BeastPhilanthropy',
      channelName: "Beast Philanthropy",
      subscribersNumber: "27.4",
      subsriberValue: 'M',
    },
    {
      image: '/images/mrbeast2channel.jpg',
      url: 'https://www.youtube.com/@MrBeast2',
      channelName: "MrBeast 2",
      subscribersNumber: "48.7",
      subsriberValue: 'M',
    },
    {
      image: '/images/mrbeastchannel.jpg',
      url: 'www.youtube.com/@mrbeastthree',
      channelName: "MrBeast 3",
      subscribersNumber: "7.06",
      subsriberValue: 'M',
    },
    {
      image: '/images/mrbeastespanolchannel.jpg',
      url: 'https://www.youtube.com/@MrBeastenEspa%C3%B1ol',
      channelName: "MrBeast en Español",
      subscribersNumber: "26.5",
      subsriberValue: 'M',
    },
    {
      image: '/images/mrbeastchannel.jpg',
      url: 'https://www.youtube.com/@dontsubscribe6555',
      channelName: "Don't Subscribe",
      subscribersNumber: "1.28",
      subsriberValue: 'M',
    },
    {
      image: '/images/mrbeastgamingespanolchannel.jpg',
      url: 'https://www.youtube.com/@mrbeastgamingespanol',
      channelName: "MrBeast Gaming en Español",
      subscribersNumber: "5.71",
      subsriberValue: 'M',
    },
    {
      image: '/images/mrbeastbrazilchannel.jpg',
      url: 'https://www.youtube.com/@mrbeastbrasil',
      channelName: "MrBeast Brasil",
      subscribersNumber: "6.45",
      subsriberValue: 'M',
    },
    {
      image: '/images/mrbeastreactespanolchannel.jpg',
      url: 'https://www.youtube.com/@beastreactsespanol',
      channelName: "Beast Reacts en Español",
      subscribersNumber: "6.29",
      subsriberValue: 'M',
    },
    {
      image: '/images/mrbeastgamingbrasilchannel.jpg',
      url: 'https://www.youtube.com/@mrbeastgamingbrasil',
      channelName: "MrBeast Gaming Brasil",
      subscribersNumber: "1.67",
      subsriberValue: 'M',
    },
    {
      image: '/images/mrbeastrussianchannel.jpg',
      url: 'https://www.youtube.com/@MrBeastRussian',
      channelName: "MrBeast На Русском",
      subscribersNumber: "6.75",
      subsriberValue: 'M',
    },
    {
      image: '/images/mrbeastreactsportugesechannel.jpg',
      url: 'https://www.youtube.com/@beastreactsportuguese',
      channelName: "Beast Reacts em Português",
      subscribersNumber: "1.08",
      subsriberValue: 'M',
    },
    {
      image: '/images/mrbeastgamingrussianchannel.jpg',
      url: 'https://www.youtube.com/@mrbeastgamingrussian',
      channelName: "MrBeast Gaming На Русском",
      subscribersNumber: "1.55",
      subsriberValue: 'M',
    },
    {
      image: '/images/mrbeastfrancechannel.jpg',
      url: 'https://www.youtube.com/@mrbeastenfrancais',
      channelName: "MrBeast en Français",
      subscribersNumber: "1.82",
      subsriberValue: 'M',
    },
    {
      image: '/images/mrbeastreactrussianchannel.jpg',
      url: 'https://www.youtube.com/@beastreactsrussian',
      channelName: "Beast Reacts На Русском",
      subscribersNumber: "863",
      subsriberValue: 'K',
    },
    {
      image: '/images/mrbeastchannel.jpg',
      url: 'https://www.instagram.com/mrbeast/',
      channelName: "MrBeast",
      subscribersNumber: "65.7",
      subsriberValue: 'M',
      socialIcon: 'instagram'
    },
    {
      image: '/images/mrbeastchannel.jpg',
      url: 'https://www.tiktok.com/@mrbeast',
      channelName: "MrBeast",
      subscribersNumber: "114",
      subsriberValue: 'M',
      socialIcon: 'tiktok'
    },
    {
      image: '/images/mrbeastsnaplogo.jpg',
      url: 'https://www.snapchat.com/p/a09100de-b072-479a-a1c5-fc5af4cc45b5/1536403637850112',
      channelName: "MrBeast Show",
      subscribersNumber: "4.24",
      subsriberValue: 'M',
      socialIcon: 'snapchat'
    },
    {
      image: '/images/mrbeastsnaplogo2.jpg',
      url: 'https://www.snapchat.com/p/a09100de-b072-479a-a1c5-fc5af4cc45b5/1536403637850112',
      channelName: "MrBeast Snap Star",
      subscribersNumber: "1.01",
      subsriberValue: 'M',
      socialIcon: 'snapchat'
    },
    {
      image: '/images/mrbeastxlogo.jpg',
      url: 'https://x.com/@MrBeast',
      channelName: "MrBeast",
      subscribersNumber: "32.1",
      subsriberValue: 'M',
      socialIcon: 'twitter'
    },
    {
      image: '/images/mrbeastchannel.jpg',
      url: 'https://www.facebook.com/@MrBeast6000',
      channelName: "MrBeast",
      subscribersNumber: "26",
      subsriberValue: 'M',
      socialIcon: 'facebook'
    },
    {
      image: '/images/mrbeasttwitchlogo.png',
      url: 'https://www.twitch.tv/mrbeast6000',
      channelName: "MrBeast6000",
      subscribersNumber: "576",
      subsriberValue: 'K',
      socialIcon: 'twitch'
    },
  ]
  return (
    <div className='px-4 mx-auto container h-[100vh] relative py-12'>
      <motion.h1 className='text-3xl text-center mb-10 text-white' 
      initial={{
        filter: 'blur(5px)'
      }} 
      whileInView={{
        filter: 'blur(0)'
      }}
      transition={{
        duration:0.3
      }}
      >All Followers Details</motion.h1>
      <div className='grid w-fit gap-10 md:gap-20 grid-cols-2 md:grid-cols-3 mx-auto pb-40'>
        {
          followersInfo.map((cardData, index) => (
            <ChannelInfoCard 
              channelName={cardData.channelName} 
              image={cardData.image} 
              index={index} 
              subscribersNumber={cardData.subscribersNumber}
              subsriberValue={cardData.subsriberValue} 
              url={cardData.url} 
              socialIcon={cardData?.socialIcon} 
              key={index}
            />
          ))
        }
      </div>
    </div>
  )
}
