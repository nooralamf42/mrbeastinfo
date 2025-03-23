import Link from 'next/link';
import React from 'react';

const BeastGamesS2 = () => {
  return (
    <section className="relative w-full overflow-hidden text-white tracking-tight mb-24">
      {/* Background section with space-themed image would go here */}
      <div className="w-full max-w-4xl mx-auto px-4 md:px-8 pt-12 md:pt-24">
        <div className="bg-white text-black rounded p-8 md:p-12">
          <h3 className="text-center text-4xl font-bold mb-6 anton-regular">We're Back!</h3>
          <h2 className="text-center text-5xl md:text-6xl font-bold mb-6 anton-regular">Beast Games Season 2</h2>
          
          <p className="font-[900] mb-4">Here's what you need to know about submitting for a chance to compete in BEAST GAMES Season 2.</p>
          
          <ul className="list-disc pl-5 mb-6 space-y-2  tracking-tight font-semibold">
            <li className="text-justify">You need to be 18 or older by the time you submit for a chance to compete in the BEAST GAMES SEASON 2.</li>
            <li className="text-justify">You need to have a valid passport that is good through January 2026.</li>
            <li className="text-justify">You either need to be a legal citizen of the U.S. and able to legally travel and re-enter the U.S. from any foreign country or a permanent resident, green card holder, or have a work visa (e.g., HB-1, O1).</li>
            <li className="text-justify">You need to have a valid U.S. Social Security or Tax ID number, or have appropriate visa(s) or waiver(s) to allow you to legally compete in BEAST GAMES in the United States.</li>
            <li className="text-justify">You need to be free of any obligations and able to travel internationally for up to six consecutive weeks during the period of May to July 2025 (dates are subject to change). For purposes of contest secrecy and integrity, those who chose to compete in BEAST GAMES will need to be free of any and all obligations for the duration of the competition (including any personal, family or work demands or responsibilities) and without interference or interruption of any type.</li>
            <li className="text-justify">You must not be a current candidate for public office or intend to be or intend to run for public office within one year as of July 1st, 2026.</li>
            <li className="text-justify">You are not currently employed by or closely connected to anyone who is involved with the creation, production, administration or judging of BEAST GAMES or anyone working on the MrBeast YouTube channel.</li>
          </ul>
          
          <p className="font-bold text-lg">🔥 TELL US WHO YOU ARE! 🔥</p>
          <p className="font-bold mt-4">Are you SMART or PHYSICALLY STRONG?</p>
          <p className="font-bold mb-4">Tell us why you are smart and the ultimate strategic thinker—analytical, clever, street smart and a master problem-solver who can outsmart the competition. Do you have a high IQ or a collection of impressive intellectual achievements?</p>
          <p className="font-bold text-center mb-4">OR</p>
          <p className="font-bold mb-4">Tell us how your strength, endurance, and physical dominance make you an unstoppable force in this competition!</p>
          
          <p className="font-bold underline mb-4">If you have already submitted DO NOT submit again (e.g. send another video or resubmit the application)</p>
          
          <p className="mb-4">Why are YOU deserving of a spot to compete in BEAST GAMES Season 2? Show us your energy and passion.</p>
          <p className="mb-4"><span className="font-bold">Be bold. Be fun. Be YOU.</span> You have ONE minute, this is your shot to compete—go all in!</p>
          
          <p className="font-bold mb-4">When you're ready, SUBMIT A 1-MINUTE VIDEO</p>
          <p className="mb-4">Tell us your name, age, where you live, and what you do for a living. BUT… don't just list them—<span className="font-bold">prove it!</span> Are you smart or physically strong? Take us into your world for a moment.</p>
          
          <p className="font-bold mb-4">MAKE SURE TO ANSWER AT LEAST TWO OR THREE OF THESE QUESTIONS:</p>
          <p className="mb-2">•<span className="font-bold">What was your favorite challenge from BEAST GAMES Season 1, and why?</span></p>
          <p className="mb-2">•<span className="font-bold">Who was your favorite contestant from Season 1, and what made them stand out to you?</span></p>
          <p className="mb-2">•<span className="font-bold">What makes YOU an unforgettable competitor?</span> What's your edge? Your secret weapon? Your unique skills? Your strongest skills?</p>
          <p className="mb-4">•<span className="font-bold">What would you do with $5,000,000?</span></p>
          
          <p className="font-bold mb-4">VIDEO FORMAT:</p>
          <p className="mb-2">•<span className="font-bold">Shoot horizontally</span> (wide-screen is best)</p>
          <p className="mb-2">•<span className="font-bold">Find good lighting</span>—we need to see your face</p>
          <p className="mb-2">•<span className="font-bold">Make sure we can hear you</span>—find a quiet space</p>
          <p className="mb-4">•<span className="font-bold">Keep it clean</span>—No personal details like addresses, SSNs, bank info or other private material.</p>
          
          <p className="font-bold mb-4">UPLOAD YOUR VIDEO (MP4, under 100MB)</p>
          <p className="mb-4">Need to shrink it? Use <span className="font-bold">Video Compress</span> (iOS) or <span className="font-bold">Compress Video Size Compressor</span> (Android).</p>
          
          <p className="font-bold mb-4">PHOTO: Get ready to upload a recent photos of yourself</p>
          <p className="mb-4">As a part of the submission process, we will not ask you for your banking or financial information. Please be aware of potential scams.</p>
          
          <div className="text-center my-6">
            <Link  href="mr-beast-games/bgapplicationseason2" className=" font-bold anton-regular text-4xl border-b-2 border-black">
              CLICK HERE TO BEGIN!
            </Link>
          </div>
          
          <p className="text-sm mt-8">Please reach out to support@mysticartpictures.net with any questions or technical issues. It may take us 72 hours to get back to you.</p>
        </div>
      </div>
      {/* Divider section */}
      {/* <div className="w-full h-16 bg-white" style={{ clipPath: 'polygon(0 0, 100% 100%, 100% 0)' }}></div> */}
    </section>
  );
};

export default BeastGamesS2;