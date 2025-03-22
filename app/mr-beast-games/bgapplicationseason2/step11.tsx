"use client";

import FormButton from "./formButton";
import FormLabel from "./formLabel";
import FormInput from "./formInput";
import FormTextarea from "./formTextarea";
import FormRadio from "./formRadio";
import { useSetAtom } from "jotai";
import { steps } from "@/app/store/atoms";

const Step11 = () => {
  const setNextStep = useSetAtom(steps);

  const submitHandler = (e: any) => {
    e.preventDefault();
    setNextStep((prev) => prev + 1);
  };

  return (
    <div className="w-full max-w-[660px] mx-auto p-5 bg-white rounded-xl shadow-xl">
      {/* Heading */}
      <h2 className="text-2xl font-extrabold mb-4 text-center text-black">
        PART XI: LEGAL/MEDICAL
      </h2>

      <form className="space-y-3" onSubmit={submitHandler}>
        {/* Question 1: Passport validity */}
        <FormLabel>Do you have a passport that is valid through January 2026? *</FormLabel>
        <div>
          <FormRadio name="passportValid" names={["Yes", "No"]} />
        </div>

        {/* Question 2: Lived outside US */}
        <FormLabel>Have you lived in any locations outside of the United States? *</FormLabel>
        <div>
          <FormRadio name="livedOutsideUS" names={["Yes", "No"]} />
        </div>

        {/* Question 3: Number of countries lived in */}
        <FormLabel>How many countries have you lived in during the past 10 years? *</FormLabel>
        <FormInput />

        {/* Question 4: Passport holder countries */}
        <FormLabel>If you are a non-us citizen, what country(ies) are you a passport holder of? *</FormLabel>
        <FormTextarea />

        {/* Question 5: US citizen travel */}
        <FormLabel>Are you a citizen of the United States and able to legally travel and re-enter the U.S. from any foreign country in connection with your participation in the contest? *</FormLabel>
        <div>
          <FormRadio name="usCitizenTravel" names={["Yes", "No"]} />
        </div>

        {/* Question 6: Visa denial */}
        <FormLabel>To the best of your knowledge, is there any reason you would be denied a Visa to enter a foreign country (such reasons include, but are not limited to: (i) arrested, detained, or convicted of a felony or misdemeanor offense either as a juvenile or as an adult; (ii) DUI/DWI; or (iii) reckless endangerment)? If so, please provide details and dates: *</FormLabel>
        <div>
          <FormRadio name="visaDenial" names={["Yes", "No"]} />
        </div>

        {/* Question 7: Allergies */}
        <FormLabel>Do you have allergies? Please list anything you are allergic to including: foods, medications, materials, textiles, insects, etc. *</FormLabel>
        <FormTextarea />

        {/* Question 8: Physical conditions */}
        <FormLabel>Certain aspects of our competition will involve strenuous physical activities. Please let us know if you have had any of the following: back or neck surgery, shoulder or knee dislocation or ACL/MCL tears. *</FormLabel>
        <FormTextarea />

        {/* Next Button */}
        <div className="w-full flex justify-start">
          <FormButton
            type="submit"
            className="inline-flex items-center bg-black text-white text-lg font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 py-1.5 w-full sm:w-auto justify-center shadow min-h-[42px] px-4 border-transparent rounded-md"
          >
            Next
          </FormButton>
        </div>
      </form>
    </div>
  );
};

export default Step11;