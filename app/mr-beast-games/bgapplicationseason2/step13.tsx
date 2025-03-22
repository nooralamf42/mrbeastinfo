'use client'

import { useState } from "react";
import FormButton from "./formButton";

const Step13: React.FC = () => {
    const [agreementChecked, setAgreementChecked] = useState<boolean | null>(
      null
    );
    const [falseInfoChecked, setFalseInfoChecked] = useState<boolean | null>(
      null
    );
  
    const handleAgreementChange = (value: boolean) => {
      setAgreementChecked(value);
    };
  
    const handleFalseInfoChange = (value: boolean) => {
      setFalseInfoChecked(value);
    };
  
    // Check if both options are selected as "Yes"
    const canProceed = agreementChecked === true && falseInfoChecked === true;
  
    return (
      <div className="w-full max-w-[650px] mx-auto p-5 bg-white rounded-xl shadow-xl">
        <h2 className="text-2xl font-extrabold mb-4 text-center">
        PART XIII: MISCELLANEOUS
        </h2>
  
       
        <div className="mb-6">
          <p className="font-bold mb-2">
          I acknowledge and agree that Contest Producer is under no obligation to return to me any materials submitted by me in connection with this application and/or the competition, to select me as a contestant in the contest, to film me in the contest, or to hold the competition or film the competition. I further acknowledge and agree that Contest Producer is under no obligation to release audio or video capture of the contest.  *
            <span className="text-red-500">*</span>
          </p>
          <div className="flex space-x-4 mt-2">
            <label className="flex items-center border rounded-lg px-6 py-2 cursor-pointer">
              <input
                type="radio"
                name="eligibilityAgreement"
                checked={agreementChecked === true}
                onChange={() => handleAgreementChange(true)}
                className="mr-2"
              />
              <span>Yes</span>
            </label>
            <label className="flex items-center border rounded-lg px-6 py-2 cursor-pointer">
              <input
                type="radio"
                name="eligibilityAgreement"
                checked={agreementChecked === false}
                onChange={() => handleAgreementChange(false)}
                className="mr-2"
              />
              <span>No</span>
            </label>
          </div>
        </div>
  
        <div className="mb-6">
          <p className="font-bold mb-2 underline">
          Do you represent, warrant, and agree that you have completed this application in its entirety honestly and accurately? *<span className="text-red-500">*</span>
          </p>
          <div className="flex space-x-4 mt-2">
            <label className="flex items-center border rounded-lg px-6 py-2 cursor-pointer">
              <input
                type="radio"
                name="falseInfoAgreement"
                checked={falseInfoChecked === true}
                onChange={() => handleFalseInfoChange(true)}
                className="mr-2"
              />
              <span>Yes</span>
            </label>
            <label className="flex items-center border rounded-lg px-6 py-2 cursor-pointer">
              <input
                type="radio"
                name="falseInfoAgreement"
                checked={falseInfoChecked === false}
                onChange={() => handleFalseInfoChange(false)}
                className="mr-2"
              />
              <span>No</span>
            </label>
          </div>
        </div>
  
        <div className="mb-6">
          <h3 className="font-semibold tracking-tighter">
            All decisions around eligibility determinations will be made by
            Trailblazer in its sole discretion and are final and binding in all
            respects. We reserve the right to add to or modify the eligibility
            requirements or rules at any time. In addition, we reserve the right
            at any time to render ineligible any person who we determine, in our
            sole discretion, is sufficiently connected with the development,
            production, administration, judging, exhibition, distribution of BEAST
            GAMES or other exploitation of BEAST GAMES videography, or otherwise
            has a connection or relationship with an entity affiliated with BEAST
            GAMES such that your participation could create the appearance of
            impropriety.
          </h3>
        </div>
  
        {canProceed && (
          <div className="">
            <FormButton >Submit</FormButton>
          </div>
        )}
      </div>
    );
  };

  export default Step13