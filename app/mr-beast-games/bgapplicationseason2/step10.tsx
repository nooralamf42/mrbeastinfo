import FormButton from "./formButton";
import FormLabel from "./formLabel";
import FormInput from "./formInput";
import { useSetAtom } from "jotai";
import { steps } from "@/app/store/atoms";

const Step10 = () => {
    const setNextStep = useSetAtom(steps)
    const submitHandler = (e:any) => {
      e.preventDefault()
      setNextStep(pre=>pre+1)
    }
    return (
      <div className="w-full max-w-[660px] mx-auto p-5 bg-white rounded-xl shadow-xl">
        {/* Heading */}
        <h2 className="text-2xl font-extrabold mb-4 text-center text-black">
        PART X: STRENGTH & FITNESS ASSESSMENT
        </h2>
        <h3 className="font-bold tracking-tighter mb-4">We are looking for a full range of contestants from Level 0 to Level 5. Please answer honestly and accordingly. If you don't know the answer, please put your best guess.</h3>
        <form className="space-y-3" onSubmit={submitHandler}>
        <FormLabel >What is your height? *</FormLabel>
        <FormInput/>
        <FormLabel >What is your weight? *</FormLabel>
        <FormInput/>
        <FormLabel >What is your t-shirt size? *</FormLabel>
        <FormInput/>
        <FormLabel >What is your shoe size? *</FormLabel>
        <FormInput/>
        <FormLabel >What is your waist size? *</FormLabel>
        <FormInput/>
        <FormLabel >Leg Press – What is the maximum weight you can leg press? *</FormLabel>
        <FormInput/>
        <FormLabel >Bench Press – What is the maximum weight you can bench press? *</FormLabel>
        <FormInput/>
        <FormLabel >Deadlift – What is the maximum weight you can deadlift? *</FormLabel>
        <FormInput/>
        <FormLabel >Pull-Ups – How many strict (chest-to-bar) pull-ups can you do consecutively? *</FormLabel>
        <FormInput/>

        <FormLabel >Push-Ups – How many standard push-ups can you do consecutively? *</FormLabel>
        <FormInput/>
        <div className="w-full flex justify-start">
          <FormButton
            notSumit={true}
            type="button"
            className="inline-flex items-center bg-black text-white text-lg font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 py-1.5 w-full sm:w-auto justify-center shadow min-h-[42px] px-4 border-transparent rounded-md"
          >
            Next
          </FormButton>
        </div>
        </form>
        {/* Next Button */}
      </div>
    );
  };
  
  export default Step10;