'use client'

import { OrbitingCircles } from "@/components/magicui/orbiting-circles";


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
  stumbleGuys: () => (<img src='images/stumbleguys.svg' className='size-40 object-contain' />),
  acorns: () => (<img src='images/acorns.svg' className='size-40 object-contain' />),
  cirkul: () => (<img src='images/cirkul.svg' className='size-40 object-contain' />),
  jinx: () => (<img src='images/jinx.avif' className='size-40 object-contain' />),
  surfshark: () => (<img src='images/surfshark.png' className='size-40 object-contain' />),
  immotals: () => (<img src='images/immotals.svg' className='size-40 object-contain' />),
  verizon: () => (<img src='images/verizon.png' className='size-40 object-contain' />),
  lectricBikes: () => (<img src='images/lectric bikes.avif' className='size-40 object-contain' />),
  shopapp: () => (<img src='images/shopapp.svg' className='size-40 object-contain' />),
  UNO: () => (<img src='images/UNO.png' className='size-40 object-contain' />),
  freefire: () => (<img src='images/freefire.png' className='size-40 object-contain' />),
  genshinImpact: () => (<img src='images/genshinimpact.webp' className='size-40 object-contain' />),
  ubisoft: () => (<img src='images/ubisoft.png' className='size-40 object-contain' />),
  displate: () => (<img src='images/displate.svg' className='size-40 object-contain' />),
  recroom: () => (<img src='images/recroom.png' className='size-40 object-contain' />),
  pringles: () => (<img src='images/pringles.svg' className='size-40 object-contain' />),
  cheezit: () => (<img src='images/cheezit.svg' className='size-40 object-contain' />),
  ea: () => (<img src='images/ea.svg' className='size-40 object-contain' />),
  theBattleCats: () => (<img src='images/thebattlecats.png' className='size-40 object-contain' />),
  omaze: () => (<img src='images/omaze.svg' className='size-40 object-contain' />),
  skillshare: () => (<img src='images/skillshare.png' className='size-40 object-contain' />),
  betterhelp: () => (<img src='images/betterhelp.png' className='size-40 object-contain' />),
  sunmaid: () => (<img src='images/sunmaid.webp' className='size-40 object-contain' />),
  kindsnacks: () => (<img src='images/kindsnacks.svg' className='size-40 object-contain' />),
  topEleven: () => (<img src='images/topeleven.png' className='size-40 object-contain' />),
  nordvpn: () => (<img src='images/nordvpn.png' className='size-40 object-contain' />),
  brawlstars: () => (<img src='images/brawlstars.webp' className='size-40 object-contain' />),
  antartic: () => (<img src='images/antartic.jpg' className='size-40 object-contain' />),
  shopify: () => (<img src='images/shopify.png' className='size-40 object-contain' />),
  helloNeighbour2: () => (<img src='images/helloneighbour2.avif' className='size-40 object-contain' />),
  divineKnockout: () => (<img src='images/divineknockout.webp' className='size-40 object-contain' />)
};
