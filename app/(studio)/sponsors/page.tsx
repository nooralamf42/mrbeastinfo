'use client'

import { OrbitingCircles } from "@/components/magicui/orbiting-circles";
import Image from "next/image";


export default function OrbitingCirclesDemo() {
  return (
    <div className="relative flex backdrop-blur-sm  h-[100vh] w-full flex-col items-center justify-center overflow-hidden">
      <OrbitingCircles iconSize={40} radius={300}>
        <Icons.stumbleGuys />
        <Icons.acorns />
        <Icons.cirkul />
        <Icons.jinx />
        <Icons.surfshark />
        <Icons.immotals />
        <Icons.verizon />
        <Icons.lectricBikes />
        <Icons.shopapp />
        <Icons.UNO />
      </OrbitingCircles>
      <OrbitingCircles iconSize={35} radius={200} reverse speed={1.5}>
        <Icons.freefire />
        <Icons.genshinImpact />
        <Icons.ubisoft />
        <Icons.displate />
        <Icons.recroom />
        <Icons.pringles />
        <Icons.cheezit />
        <Icons.ea />
        <Icons.theBattleCats />
        <Icons.omaze />
      </OrbitingCircles>
      <OrbitingCircles iconSize={30} radius={100} speed={2}>
        <Icons.skillshare />
        <Icons.betterhelp />
        <Icons.sunmaid />
        <Icons.kindsnacks />
        <Icons.topEleven />
        <Icons.nordvpn />
        <Icons.brawlstars />
        <Icons.antartic />
        <Icons.shopify />
        <Icons.helloNeighbour2 />
        <Icons.divineKnockout />
      </OrbitingCircles>
    </div>
  );
}

const Icons = {
  stumbleGuys: () => (<Image alt='bg img' width={10} height={10}  src='/images/stumbleguys.svg' className='size-40 object-contain' />),
  acorns: () => (<Image alt='bg img' width={10} height={10}  src='/images/acorns.svg' className='size-40 object-contain' />),
  cirkul: () => (<Image alt='bg img' width={10} height={10}  src='/images/cirkul.svg' className='size-40 object-contain' />),
  jinx: () => (<Image alt='bg img' width={10} height={10}  src='/images/jinx.avif' className='size-40 object-contain' />),
  surfshark: () => (<Image alt='bg img' width={10} height={10}  src='/images/surfshark.png' className='size-40 object-contain' />),
  immotals: () => (<Image alt='bg img' width={10} height={10}  src='/images/immotals.svg' className='size-40 object-contain' />),
  verizon: () => (<Image alt='bg img' width={10} height={10}  src='/images/verizon.png' className='size-40 object-contain' />),
  lectricBikes: () => (<Image alt='bg img' width={10} height={10}  src='/images/lectric bikes.avif' className='size-40 object-contain' />),
  shopapp: () => (<Image alt='bg img' width={10} height={10}  src='/images/shopapp.svg' className='size-40 object-contain' />),
  UNO: () => (<Image alt='bg img' width={10} height={10}  src='/images/UNO.png' className='size-40 object-contain' />),
  freefire: () => (<Image alt='bg img' width={10} height={10}  src='/images/freefire.png' className='size-40 object-contain' />),
  genshinImpact: () => (<Image alt='bg img' width={10} height={10}  src='/images/genshinimpact.webp' className='size-40 object-contain' />),
  ubisoft: () => (<Image alt='bg img' width={10} height={10}  src='/images/ubisoft.png' className='size-40 object-contain' />),
  displate: () => (<Image alt='bg img' width={10} height={10}  src='/images/displate.svg' className='size-40 object-contain' />),
  recroom: () => (<Image alt='bg img' width={10} height={10}  src='/images/recroom.png' className='size-40 object-contain' />),
  pringles: () => (<Image alt='bg img' width={10} height={10}  src='/images/pringles.svg' className='size-40 object-contain' />),
  cheezit: () => (<Image alt='bg img' width={10} height={10}  src='/images/cheezit.svg' className='size-40 object-contain' />),
  ea: () => (<Image alt='bg img' width={10} height={10}  src='/images/ea.svg' className='size-40 object-contain' />),
  theBattleCats: () => (<Image alt='bg img' width={10} height={10}  src='/images/thebattlecats.png' className='size-40 object-contain' />),
  omaze: () => (<Image alt='bg img' width={10} height={10}  src='/images/omaze.svg' className='size-40 object-contain' />),
  skillshare: () => (<Image alt='bg img' width={10} height={10}  src='/images/skillshare.png' className='size-40 object-contain' />),
  betterhelp: () => (<Image alt='bg img' width={10} height={10}  src='/images/betterhelp.png' className='size-40 object-contain' />),
  sunmaid: () => (<Image alt='bg img' width={10} height={10}  src='/images/sunmaid.webp' className='size-40 object-contain' />),
  kindsnacks: () => (<Image alt='bg img' width={10} height={10}  src='/images/kindsnacks.svg' className='size-40 object-contain' />),
  topEleven: () => (<Image alt='bg img' width={10} height={10}  src='/images/topeleven.png' className='size-40 object-contain' />),
  nordvpn: () => (<Image alt='bg img' width={10} height={10}  src='/images/nordvpn.png' className='size-40 object-contain' />),
  brawlstars: () => (<Image alt='bg img' width={10} height={10}  src='/images/brawlstars.webp' className='size-40 object-contain' />),
  antartic: () => (<Image alt='bg img' width={10} height={10}  src='/images/antartic.jpg' className='size-40 object-contain' />),
  shopify: () => (<Image alt='bg img' width={10} height={10}  src='/images/shopify.png' className='size-40 object-contain' />),
  helloNeighbour2: () => (<Image alt='bg img' width={10} height={10}  src='/images/helloneighbour2.avif' className='size-40 object-contain' />),
  divineKnockout: () => (<Image alt='bg img' width={10} height={10}  src='/images/divineknockout.webp' className='size-40 object-contain' />)
};
