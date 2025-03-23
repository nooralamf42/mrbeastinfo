import FormButton from "./formButton";

const Step4 = () => {
    return (
      <div className="w-full max-w-[660px] mx-auto p-5 bg-white rounded-xl shadow-xl">
        {/* Heading */}
        <h2 className="text-2xl font-extrabold mb-4 text-center text-black">
          PART IV: NOTICES, DISCLOSURES AND AGREEMENTS
        </h2>
  
        {/* List of Notices */}
        <ul className="list-disc pl-5 text-justify text-black mb-4">
          <li>
            If you decide to participate as a contestant in BEAST GAMES, you must
            sign additional required waivers, releases and rules agreements that
            allow us to use your appearance on YouTube or any other platforms in
            the future, as well as release Contest Producer and related entities
            of claims which may arise from your participation in BEAST GAMES.
          </li>
          <li>
            To ensure the health and safety of all competitors, if you choose to
            compete in BEAST GAMES, you will be required to complete a background
            check and physical and psychological exams.
          </li>
          <li>
            To compete in BEAST GAMES, you must be free from any contractual
            obligations that may interfere with your ability to participate for
            the duration of the Contest.
          </li>
          <li>
            If you chose to compete in BEAST GAMES, you will not have access to
            any device (including cell phones) to communicate with others outside
            the Contest.
          </li>
        </ul>
  
        {/* Next Button */}
        <div className="w-full flex justify-start">
          <FormButton
            type="button"
            className="inline-flex items-center bg-black text-white text-lg font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 py-1.5 w-full sm:w-auto justify-center shadow min-h-[42px] px-4 border-transparent rounded-md"
          >
            Next
          </FormButton>
        </div>
      </div>
    );
  };
  
  export default Step4;