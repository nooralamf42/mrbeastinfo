"use client";

import FormButton from "./formButton";
import FormLabel from "./formLabel";
import FormInput from "./formInput";
import FormTextarea from "./formTextarea";
import FormCheckbox from "./formCheckbox";
import { useSetAtom } from "jotai";
import { steps } from "@/app/store/atoms";
import FormRadio from "./formRadio";
import { FormEvent } from "react";

const Step8 = () => {
  const setNextStep = useSetAtom(steps);

  const submitHandler = (e: FormEvent) => {
    e.preventDefault();
    setNextStep((prev) => prev + 1);
  };

  return (
    <div className="w-full max-w-[660px] mx-auto p-5 bg-white rounded-xl shadow-xl">
      {/* Heading */}
      <h2 className="text-2xl font-extrabold mb-4 text-center text-black">
        PART VIII: GAMEPLAY
      </h2>

      <form className="space-y-3" onSubmit={submitHandler}>
        {/* Textarea: Why do you want to compete in BEAST GAMES? */}
        <FormLabel>Why do you want to compete in BEAST GAMES?</FormLabel>
        <FormTextarea />

        {/* Textarea: Favorite challenge in Season 1 */}
        <FormLabel>
          What was your favorite challenge in BEAST GAMES Season 1? How would
          you have approached the challenge?
        </FormLabel>
        <FormTextarea />

        {/* Input: Money to eliminate yourself */}
        <FormLabel>
          How much money would it take for you to eliminate yourself from the
          competition?
        </FormLabel>
        <FormInput />

        {/* Input: Money to eliminate your #1 */}
        <FormLabel>
          How much money would it take for you to eliminate your #1 (best
          friend, mom, child, etc. and you cannot split with them!) from the
          competition?
        </FormLabel>
        <FormInput />

        {/* Textarea: Fears or phobias */}
        <FormLabel>Do you have any fears or phobias?</FormLabel>
        <FormTextarea />

        {/* Input: Self-eliminate or conquer fear */}
        <FormLabel>
          Would you self eliminate if you had to face your above fear or would
          you conquer it in the competition?
        </FormLabel>
        <FormInput />

        {/* Multi-select: For $1,000,000, which would you do */}
        <div className="pb-4">
        <FormLabel>
          For $1,000,000, which of the following would you do: (select all that
          apply)
        </FormLabel>
        <FormCheckbox>Sky dive</FormCheckbox>
        <FormCheckbox>Free fall 50 feet</FormCheckbox>
        <FormCheckbox>
          Bury yourself in a casket underground for 5 hours (with flowing
          oxygen)
        </FormCheckbox>
        <FormCheckbox>Climb a moving train</FormCheckbox>
        <FormCheckbox>
          Jump off a boat and swim 1 mile to a remote island
        </FormCheckbox>
        <FormCheckbox>
          Speak in front of 10,000 people in a bathing suit
        </FormCheckbox>
        <FormCheckbox>Climb a building with a harness</FormCheckbox>
        </div>
        {/* Note: Specific options are not provided in the HTML snippet; placeholders are used. Adjust as needed. */}

        {/* Textarea: How others describe you */}
        <FormLabel>How would others describe you?</FormLabel>
        <FormTextarea />

        {/* Radio: Do you know how to swim? */}
        <FormLabel>Do you know how to swim? *</FormLabel>
        <div>
          <FormRadio name="55dsfds" />
        </div>

        {/* Textarea: Physical activities */}
        <FormLabel>
          List your regular physical activities and how many times per week
          (weight training, running, etc.)
        </FormLabel>
        <FormTextarea />

        {/* Textarea: Preferred challenge type */}
        <FormLabel>
          Which type of challenge would you prefer – please choose one of the
          following and explain your choice: Physical, Mental, or Chance?
        </FormLabel>
        <FormTextarea />

        {/* Radio: Stronger or smarter */}
        <FormLabel>
          Would you consider yourself stronger or smarter? *
        </FormLabel>
        <div>
          <FormRadio name="testing" names={["Stronger","Smarter"]} />
        </div>

        {/* Textarea: Preparation for BEAST GAMES */}
        <FormLabel>How would you prepare to compete in BEAST GAMES?</FormLabel>
        <FormTextarea />

        {/* Radio: Competed in Season 1 */}
        <FormLabel>Did you compete in the BEAST GAMES Season 1? *</FormLabel>
        <div>
          <FormRadio name="test445sdfds" />
        </div>

        {/* Textarea: Red cube game */}
        <FormLabel>
          Imagine you were in the red cube game (shown in Episode 3), what would
          you have asked for? (You can’t keep what you ask for. If you don’t
          remember or don’t know, please leave blank)
        </FormLabel>
        <FormTextarea />

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

export default Step8;
