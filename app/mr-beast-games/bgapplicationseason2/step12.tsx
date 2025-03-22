"use client";

import FormButton from "./formButton";
import FormLabel from "./formLabel";
import FormRadio from "./formRadio";
import FormCheckbox from "./formCheckbox";
import { useSetAtom } from "jotai";
import { steps } from "@/app/store/atoms";

const Step12 = () => {
  const setNextStep = useSetAtom(steps);

  const submitHandler = (e: any) => {
    e.preventDefault();
    setNextStep((prev) => prev + 1);
  };

  return (
    <div className="w-full max-w-[660px] mx-auto p-5 bg-white rounded-xl shadow-xl">
      <h2 className="text-2xl font-extrabold mb-4 text-center text-black">
        PART XII: PARTICIPATION ADVISORY
      </h2>
      <form className="space-y-3" onSubmit={submitHandler}>
        <div className="text-sm font-bold tracking-tight text-black mb-4 text-justify">
          <p>
            In order to participate, you need to be in good physical and mental health, and be able to physically and emotionally withstand intense stress and physical conditions. Individuals with heart conditions (for example, previous heart attack or irregular heartbeat), who are pregnant, who have high blood pressure, or who have other physical or emotional conditions that may be aggravated by the factors described above, should not participate. (Note, this is not a complete list of conditions that are not recommended for participation.)
          </p>
          <p>
            BEAST GAMES will involve physically and emotionally challenging activities, as well as training, learning, coordinating, competing in, and engaging in physical and strenuous activities and/or using equipment and facilities. Some activities will be vigorous, and all will be performed in a competitive atmosphere which may be stressful, strenuous or dangerous. This may include psychological or physical activities such as being surprised or scared (including, without limitation, water based activities, strength activities, being suspended and/or height based activities, building activities, throwing activities, jumping, running, etc.), and engaging in other physical and mental challenges and competitions. I understand that such activities may cause me illness, injury (including, but not limited to exhaustion, dehydration, overexertion, burns, and heat stroke) or even death.
          </p>
        </div>

        <FormLabel>
          I understand and accept the risks involved. *
        </FormLabel>
        <div>
          <FormRadio name="acceptRisks" names={["Yes", "No"]} />
        </div>

        <FormLabel>
          Have you read the application and disclosures thoroughly and carefully considered the risks in regards to applying to being a contestant? *
        </FormLabel>
        <div>
          <FormRadio name="readApplication" names={["Yes", "No"]} />
        </div>

        <div className="text-sm text-black mb-4 text-justify">
          If you would like to be contacted for more information on competing in MrBeast or other competitions, click below to opt into the MysticArt Pictures or BEAST GAMES newsletters.
        </div>

        <div className="font-semibold">
        <FormCheckbox>MysticArt Newsletter</FormCheckbox>
        <FormCheckbox>MrBeast Newsletter</FormCheckbox>
        </div>

        <div className="w-full flex justify-start">
          <FormButton
                        normalBtn={true}

          >
            Next
          </FormButton>
        </div>
      </form>
    </div>
  );
};

export default Step12;