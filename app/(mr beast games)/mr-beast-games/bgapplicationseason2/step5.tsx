import FormButton from "./formButton";
import FormLabel from "./formLabel";
import FormInput from "./formInput";
import FormCheckbox from "./formCheckbox";
import FormTextarea from "./formTextarea";
import FormRadio from "./formRadio";
import { useSetAtom } from "jotai";
import { steps, userInfoAtom } from "@/app/store/atoms";

const Step5 = () => {
    const setNextStep = useSetAtom(steps);
    const setUserInfo = useSetAtom(userInfoAtom);

    const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const formData = new FormData(e.currentTarget);
      
      setUserInfo({
        name: formData.get('name') as string,
        email: formData.get('email') as string,
        phoneNumber: formData.get('phone') as string,
        address: `${formData.get('street')}, ${formData.get('city')}, ${formData.get('state')} ${formData.get('zip')}`,
      });
      
      setNextStep(pre => pre + 1);
    }

    return (
      <div className="w-full max-w-[660px] mx-auto p-5 bg-white rounded-xl shadow-xl">
        {/* Heading */}
        <h2 className="text-2xl font-extrabold mb-4 text-center text-black">
          PART V: CONTESTANT INFORMATION
        </h2>
        <form className="space-y-3" onSubmit={submitHandler}>
        <FormLabel >First Name and Last Name as it appears on your government issued identification (e.g., driver's license, passport). *</FormLabel>
        <FormInput name="name" required/>
        <FormLabel >Street Address</FormLabel>
        <FormInput name="street" required/>
        <FormLabel >City *</FormLabel>
        <FormInput name="city" required/>
        <FormLabel >State *</FormLabel>
        <FormInput name="state" required/>
        <FormLabel >Zip *</FormLabel>
        <FormInput name="zip" required/>
        <FormLabel >Cell Phone *</FormLabel>
        <FormInput name="phone" required/>
        <FormLabel >Email *</FormLabel>
        <FormInput name="email" type="email" required/>
        <FormLabel >Date of Birth FOR VERIFICATION PURPOSES ONLY PURSUANT TO 18 U.S.C. §§ 2256 ET SEQ.*</FormLabel>
        <FormInput type='date'/>
        <FormLabel >Pronouns (select all that apply) *</FormLabel>
        <FormCheckbox>She/Her</FormCheckbox>
        <FormCheckbox>He/Him</FormCheckbox>
        <FormCheckbox>They/Them</FormCheckbox>
        <FormCheckbox>Other</FormCheckbox>
        <FormLabel >WHAT ARE YOUR SOCIAL HANDLES, IE INSTAGRAM, FACEBOOK, X, YOUTUBE, TIKTOK, TWITCH, THREADS, REDDIT ETC. *</FormLabel>
        <FormTextarea/>
        <FormLabel >Ethnicity *</FormLabel>
        <FormInput/>
        <FormLabel >Nationality *</FormLabel>
        <FormInput/>
        <FormLabel >How did you hear about Beast Games Season2? *</FormLabel>
        <FormInput/>
        <FormLabel >If applicable, how would your employer feel about you competing in BEAST GAMES? Do you expect that your employer will grant your request for time off so you can compete in BEAST GAMES?</FormLabel>
        <FormTextarea/>
        <FormLabel >What is your occupation? *</FormLabel>
        <FormInput/>
        <FormLabel >To your knowledge, do you know anyone else applying for BEAST GAMES Season 2? If so, what is their name and what is your relationship? What is their contact number?</FormLabel>
        <FormTextarea/>
        <FormLabel >What is going to be your strategy to win BEAST GAMES Season 2? How would winning change your life?</FormLabel>
        <FormTextarea/>
        <FormLabel >What is the amount of money or prize that would make you feel satisfied to take home?</FormLabel>
        <FormInput/>
        <FormLabel >Did you compete in Beast Games Season 1 or the qualifying games in Las Vegas, NV? *</FormLabel>
        <FormRadio name="test"/>
        <FormLabel >Have you ever competed in any other MrBeast contest or competition or appeared in any MrBeast content (e.g., YouTube)? If yes, please copy and paste url below: *Please note this does not disqualify you from participating in BEAST GAMES*</FormLabel>
        <FormRadio name="best"/>
        <div className="w-full flex justify-start">
          <FormButton
            normalBtn={true}
          >
            Next
          </FormButton>
        </div>
        </form>
        {/* Next Button */}
      </div>
    );
  };
  
  export default Step5;