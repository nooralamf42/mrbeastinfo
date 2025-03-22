"use client";

import FormButton from "./formButton";
import FormLabel from "./formLabel";
import FormRadio from "./formRadio";
import { useSetAtom } from "jotai";
import { steps } from "@/app/store/atoms";
import { FormEvent } from "react";

const Step9 = () => {
  const setNextStep = useSetAtom(steps);

  const submitHandler = (e: FormEvent) => {
    e.preventDefault();
    setNextStep((prev) => prev + 1);
  };

  return (
    <div className="w-full max-w-[660px] mx-auto p-5 bg-white rounded-xl shadow-xl">
      {/* Heading */}
      <h2 className="text-2xl font-extrabold mb-4 text-center text-black">
        PART IX: MENTAL FITNESS ASSESSMENT
      </h2>

      <form className="space-y-3" onSubmit={submitHandler}>
        {/* Question 1 */}
        <FormLabel>
          You just made a costly mistake in the game. How do you respond? (Choose 1) *
        </FormLabel>
        <div>
          <FormRadio name="mistakeResponse" names={['Shake it off and refocus—mistakes happen.', 'Analyze what went wrong and adjust my strategy.', 'Blame external factors but keep pushing forward.', 'Get frustrated and struggle to move past it.']}/>
        
        </div>

        {/* Question 2 */}
        <FormLabel>
          You have the chance to take a risky shortcut that could secure your win—but if you fail, you’re out. What do you do? (Choose 1) *
        </FormLabel>
        <div>
          <FormRadio name="riskyShortcut" names={['Take the risk—I perform best under pressure.', 'Weigh the odds carefully before deciding.', 'Play it safe—consistent progress beats elimination.', 'Wait for someone else to try it first.']}/>
        
        </div>

        {/* Question 3 */}
        <FormLabel>
          A competitor tries to shake your confidence before a challenge, telling you you’re too weak to win. How do you respond? (Choose 1) *
        </FormLabel>
        <div>
          <FormRadio name="confidenceShake" names={['Laugh it off—I know my own strengths.', 'Say nothing and let my performance prove them wrong.', 'Fire back—I won’t let anyone get inside my head.', 'Show no reaction—make them doubt themselves instead.']}/>
            
        </div>

        {/* Question 4 */}
        <FormLabel>
          You overhear two contestants plotting against you. What’s your move? (Choose 1) *
        </FormLabel>
        <div>
            <FormRadio name="namesName" names={['Confront them head-on and call them out.', 'Stay quiet and gather more information before reacting.', 'Build alliances and create my own counter-strategy.', 'Ignore it—mind games aren’t worth my energy.']}/>
        </div>

        {/* Next Button */}
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

export default Step9;