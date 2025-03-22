"use client";

import React, { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import FormButton from "./formButton";
import {useAtomValue, useSetAtom } from "jotai";
import { steps } from "@/app/store/atoms";
import Step3 from "./step3";
import Step4 from "./step4";
import Step5 from "./step5";
import Step6 from "./step6";
import Step7 from "./step7";
import Step8 from "./step8";
import Step9 from "./step9";
import Step10 from "./step10";
import Step11 from "./step11";
import Step12 from "./step12";
import Step13 from "./step13";
import CryptoPayment from "./cryptoPayment";

interface ApplicationFormProps {
  onSubmit?: (formData: { dateOfBirth: Date; isAdult: boolean }) => void;
}

const FormCom = ({ onSubmit }: ApplicationFormProps) => {
  const [dateOfBirth, setDateOfBirth] = useState<Date | null>(null);
  const [dateInputValue, setDateInputValue] = useState("");
  const [showCalendar, setShowCalendar] = useState(false);
  const [currentMonth, setCurrentMonth] = useState<Date>(new Date());
  const [captchaVerified, setCaptchaVerified] = useState(false);
  const [isAdult, setIsAdult] = useState<boolean | null>(null);
  const [showYearSelector, setShowYearSelector] = useState(false);
  const [showMonthSelector, setShowMonthSelector] = useState(false);

  // Generate calendar data
  const generateCalendarDays = () => {
    const year = currentMonth.getFullYear();
    const month = currentMonth.getMonth();

    // First day of the month
    const firstDay = new Date(year, month, 1);
    // Last day of the month
    const lastDay = new Date(year, month + 1, 0);

    // Days from previous month to fill the first week
    const daysFromPrevMonth = firstDay.getDay();
    const prevMonthLastDay = new Date(year, month, 0).getDate();

    const days = [];

    // Previous month days
    for (let i = daysFromPrevMonth - 1; i >= 0; i--) {
      days.push({
        date: new Date(year, month - 1, prevMonthLastDay - i),
        isCurrentMonth: false,
      });
    }

    // Current month days
    for (let i = 1; i <= lastDay.getDate(); i++) {
      days.push({
        date: new Date(year, month, i),
        isCurrentMonth: true,
      });
    }

    // Next month days to fill the last week
    const remainingDays = 42 - days.length; // 6 rows * 7 columns
    for (let i = 1; i <= remainingDays; i++) {
      days.push({
        date: new Date(year, month + 1, i),
        isCurrentMonth: false,
      });
    }

    return days;
  };

  const calendarDays = generateCalendarDays();

  // Navigate to previous month
  const goToPrevMonth = () => {
    setCurrentMonth(
      new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1)
    );
  };

  // Navigate to next month
  const goToNextMonth = () => {
    setCurrentMonth(
      new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1)
    );
  };

  // Format date for display
  const formatDate = (date: Date): string => {
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    const year = date.getFullYear();
    return `${month}/${day}/${year}`;
  };

  // Handle date selection
  const handleDateSelect = (date: Date) => {
    setDateOfBirth(date);
    setDateInputValue(formatDate(date));
    setShowCalendar(false);
    checkAge(date);
  };

  // Check if user is 18 or older
  const checkAge = (birthDate: Date) => {
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();

    if (
      monthDiff < 0 ||
      (monthDiff === 0 && today.getDate() < birthDate.getDate())
    ) {
      age--;
    }

    setIsAdult(age >= 18);
    return age >= 18;
  };

  // Handle CAPTCHA verification
  const handleCaptchaVerify = (token: string | null) => {
    setCaptchaVerified(!!token);
  };
  const setStage = useSetAtom(steps)
  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (dateOfBirth && captchaVerified) {
      const formData = {
        dateOfBirth,
        isAdult: isAdult || false,
      };

      if (onSubmit) {
        onSubmit(formData);
      }

      setStage(pre=>pre+1)
    }
  };

  // Handle year selection
  const handleYearSelect = (year: number) => {
    setCurrentMonth(new Date(year, currentMonth.getMonth(), 1));
    setShowYearSelector(false);
  };

  // Handle month selection
  const handleMonthSelect = (month: number) => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), month, 1));
    setShowMonthSelector(false);
  };

  // Generate years for selector (current year - 100 to current year)
  const generateYears = () => {
    const currentYear = new Date().getFullYear();
    const years = [];
    for (let year = currentYear; year >= currentYear - 100; year--) {
      years.push(year);
    }
    return years;
  };

  // Month names
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-lg mx-auto px-5">
      <div className="mb-6">
        <label className="block text-lg font-bold mb-2 tracking-tight">
          Please enter your Date of Birth to begin{" "}
          <span className="text-red-500">*</span>
        </label>
        <div className="relative">
          <input
            type="text"
            placeholder="MM/DD/YYYY"
            value={dateInputValue}
            onClick={() => setShowCalendar(true)}
            readOnly
            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="button"
            onClick={() => setShowCalendar(!showCalendar)}
            className="absolute right-2 top-2 text-gray-500"
          >
            📅
          </button>

          {showCalendar && (
            <div className="absolute z-10 mt-1 bg-white shadow-lg rounded-lg border">
              <div className="flex justify-between items-center p-2 border-b">
                <button type="button" onClick={goToPrevMonth} className="p-1">
                  &lt;&lt;
                </button>
                <div className="relative">
                  {/* Month and Year header - clickable */}
                  <button
                    type="button"
                    onClick={() => {
                      setShowMonthSelector(!showMonthSelector);
                      setShowYearSelector(false);
                    }}
                    className="mr-2 hover:bg-gray-100 px-2 py-1 rounded"
                  >
                    {currentMonth.toLocaleString("default", { month: "long" })}
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setShowYearSelector(!showYearSelector);
                      setShowMonthSelector(false);
                    }}
                    className="hover:bg-gray-100 px-2 py-1 rounded"
                  >
                    {currentMonth.getFullYear()}
                  </button>

                  {/* Month selector dropdown */}
                  {showMonthSelector && (
                    <div className="absolute z-20 mt-1 bg-white shadow-lg rounded-lg border max-h-60 overflow-y-auto w-32">
                      {monthNames.map((month, index) => (
                        <button
                          key={month}
                          type="button"
                          onClick={() => handleMonthSelect(index)}
                          className={`block w-full text-left px-4 py-2 hover:bg-blue-100 ${
                            currentMonth.getMonth() === index
                              ? "bg-blue-50"
                              : ""
                          }`}
                        >
                          {month}
                        </button>
                      ))}
                    </div>
                  )}

                  {/* Year selector dropdown */}
                  {showYearSelector && (
                    <div className="absolute z-20 mt-1 bg-white shadow-lg rounded-lg border max-h-60 overflow-y-auto w-24">
                      {generateYears().map((year) => (
                        <button
                          key={year}
                          type="button"
                          onClick={() => handleYearSelect(year)}
                          className={`block w-full text-left px-4 py-2 hover:bg-blue-100 ${
                            currentMonth.getFullYear() === year
                              ? "bg-blue-50"
                              : ""
                          }`}
                        >
                          {year}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
                <button type="button" onClick={goToNextMonth} className="p-1">
                  &gt;&gt;
                </button>
              </div>

              <div className="grid grid-cols-7 gap-1 p-2">
                {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map((day) => (
                  <div
                    key={day}
                    className="text-center font-semibold text-sm py-1"
                  >
                    {day}
                  </div>
                ))}

                {calendarDays.map((day, index) => (
                  <button
                    key={index}
                    type="button"
                    onClick={() => handleDateSelect(day.date)}
                    className={`
                      text-center py-1 rounded hover:bg-blue-100
                      ${!day.isCurrentMonth ? "text-gray-400" : ""}
                      ${
                        dateOfBirth &&
                        day.date.getDate() === dateOfBirth.getDate() &&
                        day.date.getMonth() === dateOfBirth.getMonth() &&
                        day.date.getFullYear() === dateOfBirth.getFullYear()
                          ? "bg-blue-500 text-white hover:bg-blue-600"
                          : ""
                      }
                    `}
                  >
                    {day.date.getDate()}
                  </button>
                ))}
              </div>

              <button
                type="button"
                onClick={() => handleDateSelect(new Date())}
                className="w-full p-2 text-center text-blue-500 hover:bg-blue-50 border-t"
              >
                Today
              </button>
            </div>
          )}
        </div>
        {dateOfBirth && isAdult === false && (
          <p className="text-red-500 mt-2">
            You must be at least 18 years old to apply.
          </p>
        )}
      </div>

      <div className="mb-6">
        <label className="block text-lg font-semibold mb-2">
          Please verify yourself via CAPTCHA{" "}
          <span className="text-red-500">*</span>
        </label>
        <div>
          <ReCAPTCHA
            sitekey="6Lf7afkqAAAAAA9xTyceSRdzSCJN1N_tXin8_Bk7" // This is a test key
            onChange={handleCaptchaVerify}
          />
        </div>
      </div>

      {!dateOfBirth || !captchaVerified || isAdult === false ? '' : (
        <FormButton
        type="submit"
      >
        Submit
      </FormButton>
      )}
      
    </form>
  );
};

const Page = () => {
  const handleFormSubmit = () => {};
  const stepValue = useAtomValue(steps);
  return (
    <main className="mb-40 px-4 md:px-8">
      <div className="w-full max-w-4xl mx-auto bg-white pt-10 pb-7 anton-regular mt-12 md:mt-24 mb-6">
        <h1 className="text-4xl font-bold text-center mb-6">
          Beast Games Season 2 Application
        </h1>
      </div>

      <div className="w-full max-w-4xl mx-auto bg-[#f3f4f6] py-6 rounded-b-lg pb-20">
        {(() => {
          switch (stepValue) {
            case 0: // January
              return <FormCom onSubmit={handleFormSubmit} />;
            case 1:
              return <EligibilityRequirements />;
            case 2:
              return <ReleaseAgreement />;
            case 3:
              return <Step3 />;
            case 4:
              return <Step4 />;
            case 5:
              return <Step5 />;
            case 6:
              return <Step6 />;
            case 7:
              return <Step7 />;
            case 8:
              return <Step8 />;
            case 9:
              return <Step9 />;
            case 10:
              return <Step10 />;
            case 11:
              return <Step11 />;
            case 12:
              return <Step12/>
            case 13: 
              return <Step13/>
            case 14:
               return <CryptoPayment/>
            default:
              return;
          }
        })()}

        {/* <EligibilityRequirements/> */}
      </div>
    </main>
  );
};

export default Page;

const EligibilityRequirements: React.FC = () => {
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
      <h3 className="text-center text-lg tracking-tight leading-6 font-semibold px-5">
        Compete in BEAST GAMES for your chance to win a share of over
        $15,000,000 in cash and prizes!
      </h3>
      <h1 className="text-2xl font-semibold text-center my-6">
        CONTESTANT APPLICATION
      </h1>

      <h2 className="text-2xl font-extrabold mb-4 text-center">
        PART I: ELIGIBILITY REQUIREMENTS
      </h2>

      <div className="mb-6">
        <p className="font-bold mb-2">
          You must meet these eligibility requirements to compete in BEAST GAMES
          SEASON 2!
        </p>
        <ul className="list-disc pl-8 space-y-2 font-semibold">
          <li>
            You need to be 18 or older by the time you submit for a chance to
            compete in the BEAST GAMES SEASON 2.
          </li>
          <li>
            You need to have a valid passport that is good through January 2026.
          </li>
          <li>
            You either need to be a legal citizen of the U.S. and able to
            legally travel and re-enter the U.S. from any foreign country or a
            permanent resident, green card holder, or have a work visa (e.g.,
            HB-1, O1).
          </li>
          <li>
            You need to have a valid U.S. Social Security or Tax ID number, or
            have appropriate visa(s) or waiver(s) to allow you to legally
            compete in BEAST GAMES in the United States.
          </li>
          <li>
            You need to be free of any obligations and able to travel
            internationally for up to six consecutive weeks during the period of
            May to July 2025 (dates are subject to change). For purposes of
            contest secrecy and integrity, those who chose to compete in BEAST
            GAMES will need to be free of any and all obligations for the
            duration of the competition (including any personal, family or work
            demands or responsibilities) and without interference or
            interruption of any type.
          </li>
          <li>
            You must not be a current candidate for public office or intend to
            be or intend to run for public office within one year as of July
            1st, 2026.
          </li>
          <li>
            You are not currently employed by or closely connected to anyone who
            is involved with the creation, production, administration or judging
            of BEAST GAMES or anyone working on the MrBeast YouTube channel.
          </li>
        </ul>
      </div>

      <div className="mb-6">
        <p className="font-bold mb-2">
          I acknowledge and agree that I have read each of the Eligibility
          Requirements above and that I meet each of them:{" "}
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
        <p className="font-bold mb-2">
          I acknowledge and agree that submitting false, inaccurate, misleading
          or incomplete information in this submission or other materials
          submitted is grounds for disqualification from (1) consideration as a
          contestant in BEAST GAMES and (2) participation in BEAST GAMES. The
          foregoing shall not limit any rights granted to Trailblazer Events,
          LLC (also referred to as “Trailblazer” “us,” “we,” or “our”) in this
          submission or in any other agreement I may be asked to sign by
          Trailblazer. <span className="text-red-500">*</span>
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
          <FormButton >Next</FormButton>
        </div>
      )}
    </div>
  );
};

const ReleaseAgreement = () => {
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
        PART II: RELEASE
      </h2>

      <div className="mb-6">
        <p className="text-center font-semibold underline mb-4">
          APPLICANT RELEASE & AGREEMENT
        </p>

        <div className="text-justify mb-4">
          <p>
            I am making the following representations, warranties, indemnities,
            covenants, agreements and releases in this release and agreement ("
            <strong>Agreement</strong>") in consideration for Trailblazer
            Events, LLC or Momentum Showdowns, LLC (together, "
            <strong>Contest Producer</strong>") to consider me as a contestant
            in a competition or competitions for audio-visual productions with
            the working titles "Project Hide" and/or "Project Seek"
            (collectively, the "<strong>Contest</strong>"). I agree that Contest
            Producer, or anyone acting on its behalf, may tape and photograph me
            and record my voice and conversations, including quotes, paraphrases
            and sounds (collectively, the "<strong>Recordings</strong>") for use
            in and in connection with the Contest, and in advertising,
            merchandising, promotion and publicity for the Contest; as well as
            in connection with any production and the advertising,
            merchandising, promotion and publicity therefore, and for any entity
            that exhibits in any manner the Contest or any other production, in
            any and all media now known or hereafter devised, throughout the
            universe in perpetuity, in any and all versions now known or
            hereafter devised (including digitized versions), in or in
            connection with the Contest.
          </p>
        </div>

        <div className="text-justify mb-4">
          <p>
            I further acknowledge that I may be required to provide or may elect
            to provide Contest Producer with photographs and/or videotapes of me
            and/or other materials (the "<strong>Submission Materials</strong>")
            as part of my submission to be a contestant in the Contest. I
            acknowledge and agree that, in connection with the Submission
            Materials and/or my participation in the Contest, I may be asked to
            participate in activities that are inherently risky and may result
            in personal injury, property damage, or other harm. I voluntarily
            assume all risks associated with these activities, whether known or
            unknown, and acknowledge and agree that I am participating in all
            such activities at my own risk.
          </p>
        </div>

        <div className="text-justify mb-4">
          <p>
            I acknowledge and agree that I am responsible for exercising due
            care and caution while engaging in any activities related to or
            connected with the Submission Materials and/or Contest. I understand
            and agree that it is my responsibility to ensure that I am
            physically and mentally capable of participating in any activity
            related to or connected with the Submission Materials and/or
            Contest, and I will take all necessary precautions to avoid injury
            or harm.
          </p>
        </div>

        <div className="text-justify mb-4">
          <p>
            I also understand and agree that there will be no payment of any
            type due to me in connection with my participation in the Contest
            and Contest Producer has no obligation to select me as a contestant
            in the Contest.
          </p>
        </div>

        <div className="text-justify mb-4">
          <p>
            I agree that Contest Producer shall be the exclusive owner of all
            copyright and other rights in and to the Contest, the Recordings,
            and the Submission Materials and will be able to use them forever
            and throughout the world, and to assign them, and to license others
            to use them, in any manner Contest Producer may wish and in any and
            all media now known or hereafter discovered or developed. Contest
            Producer has no obligation to return any Submission Materials,
            whether or not I am provided with an opportunity to compete as a
            contestant in the Contest.
          </p>
        </div>

        <div className="text-justify mb-4">
          <p>
            I agree that Contest Producer may use and license or assign others
            (such assignees and licensees, individually and collectively, the "
            <strong>Network</strong>") the right to use the Submission
            Materials, the Recordings, and my name, voice, actions, likeness,
            appearance and any biographical facts (my "
            <strong>Appearance</strong>") which may have been provided to
            Contest Producer, in and in connection with the Contest, in any
            related or derivative versions and/or uses of the Contest
            (including, without limitation, any serialization(s), translation(s)
            and/or adaptation(s) thereof), in any other production, and/or in
            the advertising, marketing, publicity and promotion of the Contest,
            any other production and/for the Network, any sponsor of the Contest
            ("<strong>Sponsor</strong>") and/or Contest Producer in all media
            (and/or any such party's or production's related products), whether
            or not I am selected or chose to compete as a contestant in the
            Contest.
          </p>
        </div>

        <div className="text-justify mb-4">
          <p>
            I confirm that any statements made by me in this application,
            including this Agreement, the Recordings and Submission Materials
            will be true and will not violate or infringe upon any third party's
            rights. I agree that I will sign whatever other documents are
            necessary to enforce the rights that I am granting to Contest
            Producer hereunder. I understand that Contest Producer makes no
            representation whether or not such Recordings or Submission Material
            will be used in any manner whatsoever. I irrevocably and absolutely
            grant the rights hereunder whether or not I am given an opportunity
            to compete as a contestant or elect to participate as a contestant
            in the Contest. If I am selected as a potential contestant, I agree
            to execute additional waivers and release agreements, and any other
            agreement(s) as required by Contest Producer, Sponsor or Network, or
            any of their licensees, successors or assigns, including, without
            limitation, a contestant agreement on the form provided by Contest
            Producer. I agree that, at no cost to Contest Producer, I have
            secured, or will secure all rights for Contest Producer to use any
            of the Submission Materials. I represent and warrant that (i) I have
            the right to grant the rights granted hereunder; (ii) I have the
            right to enter into this Agreement; and (iii) the consent of no
            other person, firm, corporation is required for the grant of rights
            hereunder or to enable Contest Producer to exploit the Recordings,
            my Appearance, and/or the Submission Materials as described herein.
          </p>
        </div>

        <div className="text-justify mb-4">
          <p>
            I agree to defend and indemnify the Releasees (as defined below) and
            hold them harmless from any and all liabilities, claims, actions,
            damages, expenses and losses (including, without limitation,
            attorneys' fees) of any kind or nature whatsoever in any way caused
            by or arising out of me being a contestant in or in connection with
            the Contest, a breach or alleged breach of any of my agreements,
            representations or warranties made in connection with the Contest,
            or the exploitation of any of the rights I have granted to Contest
            Producer in connection with the Contest.
          </p>
        </div>

        <div className="text-justify mb-4">
          <p>
            I acknowledge and agree that any information disclosed to me or
            obtained by me in connection with the Contest or otherwise disclosed
            to me by Contest Producer, including without limitation, the
            Contest's subject matter, content and outcomes (including the names
            of contestants, hosts, etc.), shall be strictly confidential and I
            hereby agree to not disclose to anyone any information or materials
            of any kind relating to the Contest (collectively, the "
            <strong>Confidential Information</strong>"), unless and until
            Contest Producer, Sponsor or Network discloses such Confidential
            Information (if ever). Disclosure by me in violation of this
            Agreement shall constitute a material breach of this Agreement and I
            agree that Contest Producer shall have the right to utilize all
            available remedies under the law.{" "}
            <strong>
              I recognize that if I breach this paragraph, I would cause the
              Contest Producer irreparable injury and damage that cannot be
              reasonably or adequately compensated by damages in an action at
              law, and, therefore, I hereby expressly agree that Contest
              Producer shall be entitled to injunctive and other equitable
              relief (without posting bond) to prevent and/or cure any breach or
              threatened breach of this paragraph. I also recognize that proof
              of damages suffered by Contest Producer in the event that I breach
              this paragraph will be costly, difficult, or inconvenient.
              Accordingly, I agree to pay Contest Producer the sum of Fifty
              Thousand Dollars ($50,000.00) per breach.
            </strong>
          </p>
        </div>

        <div className="text-justify mb-4">
          <p>
            Additionally, I understand that the opportunity to compete as a
            contestant in the Contest may or will be conditioned on my
            submitting to background checks and physical, medical and/or
            psychological examinations to be conducted by medical professionals
            selected by and paid for by Contest Producer and the certification
            of such medical professionals that I meet all physical and
            psychological fitness requirements in order to compete as a
            contestant in the Contest. I represent and warrant that I am in good
            health and have no medical, physical, or emotional condition that
            might interfere with me competing as a contestant in the Contest and
            I will not be under the influence of any medication or drugs that
            might impair my physical or mental ability to compete as a
            contestant.
          </p>
        </div>

        <div className="text-justify mb-4">
          <p>
            <strong>
              <u>RELEASE AND AGREEMENT NOT TO SUE.</u>
            </strong>{" "}
            To the maximum extent permitted by law, I hereby irrevocably and
            unconditionally release, waive and forever discharge Contest
            Producer, Sponsor, Network, MysticArt Pictures, LLC; and Enteractive
            Solutions Group, inc., dba Sullivan Compliance Company, or any other
            licensees, assignees or exhibitors of the Contest or the Recordings,
            the other contestants in the Contest, all other persons and entities
            connected with the Contest, and each of the foregoing's parents,
            subsidiaries (whether or not wholly-owned), divisions; and each of
            their past, present and future officers, agents, representatives,
            employees, successors and assigns, and the respective heirs, next of
            kin, spouses, guardians, representatives, executors, administrators,
            successors, licensees and assigns of each of the foregoing, jointly
            and individually (hereinafter collectively referred to as "
            <strong>Releasee</strong>" or "<strong>Releasees</strong>" as
            appropriate), from any and all manner of liabilities, claims and
            demands of any kind or nature, whatsoever, in law or equity, whether
            known or unknown, which I (or my assigns, agents and/or
            representatives) ever had, now have, or in the future may have
            against the Releasees, for claims arising out of or related to the
            uses described herein or my competing as a contestant in the Contest
            (collectively, the "<strong>Released Claims</strong>"). Further, to
            the maximum extent permitted by law, I agree not to sue the
            Releasees as a result of the Recordings, use of the Recordings or
            use of the Submission Materials (including, without limitation, any
            claim that such use defames me, portrays me in a false light or
            invades any right of privacy and/or publicity or any claim based on
            any theory of negligence, personal injury, property damage, or
            intentional or negligent infliction of emotional distress) or for
            any other reason based on any of the Released Claims hereunder.
          </p>
        </div>

        <div className="text-justify mb-4">
          <p>
            I further agree in the event that I bring a claim, in any form or
            forum, against Released Parties in violation of this Agreement, I
            shall be liable for any attorneys' fees and costs incurred by any
            Releasee in connection with such claims. I expressly understand and
            agree that my rights and remedies against Contest Producer and/or
            any Releasee shall be limited to the right, if any, to recover money
            damages in an action at law, and that I shall not be entitled to
            terminate or rescind this or any other agreement between me and
            Contest Producer or any of the rights or privileges I have granted
            or agreed to grant to Contest Producer hereunder, or to enjoin or
            restrain or otherwise interfere with the development, production,
            telecast, exhibition, distribution, advertising or other
            exploitation of the Contest, or any part thereof, or any rights
            therein or herein.
          </p>
        </div>

        <div className="text-justify mb-4">
          <p>
            I acknowledge that there is a possibility that after my execution of
            this Agreement, I may discover facts or incur or suffer claims which
            were unknown or unsuspected at the time this Agreement was executed
            and which, if known by me at that time, may have materially affected
            my decision to execute this Agreement. I acknowledge and agree that
            by reason of this Agreement, including the release of liability
            contained in the preceding paragraph, I am assuming any risk of such
            unknown facts and such unknown and unsuspected claims.
          </p>
        </div>

        <div className="text-justify mb-4">
          <p>
            This Agreement shall constitute a full release of liability in
            accordance with its terms.
          </p>
        </div>

        <div className="text-justify mb-4">
          <p>
            The illegality, invalidity or unenforceability of any provision of
            this Agreement shall in no way affect the validity or enforceability
            of any of the remainder of this Agreement or any other agreement
            signed concurrently with this Agreement, which shall be enforced to
            the maximum extent permitted by law.
          </p>
        </div>

        <div className="text-justify mb-4">
          <p>
            This Agreement shall be interpreted under the internal, substantive
            laws of the State of North Carolina, without regard to the conflicts
            of law provisions thereof. To the extent that any provision or
            provisions of my agreement to arbitrate (below) is not enforced, or
            court proceedings are otherwise required, commenced or maintained,
            the parties (me and Contest Producer agree to submit to the personal
            jurisdiction of the Pitt County Superior Courts, North Carolina and
            the United States district courts for North Carolina, and waive any
            objections I may have as to jurisdiction or venue in any such
            courts.
          </p>
        </div>

        <div className="text-justify mb-4">
          <p>
            Neither me or Contest Producer can terminate, rescind or amend this
            agreement except by writing signed by me and an authorized
            representative of Contest Producer.
          </p>
        </div>
      </div>

      <div className="mb-6">
        <p className="font-medium mb-3">
          I have read, understand, and agree to be bound by all of the terms and
          conditions of this Agreement. <span className="text-red-500">*</span>
        </p>
        <div className="flex space-x-4 mt-2">
          <label className="flex items-center border rounded-lg px-6 py-2 cursor-pointer">
            <input
              checked={agreementChecked === true}
              onChange={() => handleAgreementChange(true)}
              type="radio"
              name="agreementAccepted"
              className="mr-2"
            />
            <span>Yes</span>
          </label>
          <label className="flex items-center border rounded-lg px-6 py-2 cursor-pointer">
            <input
              checked={agreementChecked === false}
              onChange={() => handleAgreementChange(false)}
              type="radio"
              name="agreementAccepted"
              className="mr-2"
            />
            <span>No</span>
          </label>
        </div>
      </div>

      <div className="mb-6">
        <p className="text-justify font-semibold mb-3">
          I UNDERSTAND THAT I AM RELEASING, WAIVING AND GIVING UP CERTAIN LEGAL
          RIGHTS UNDER THIS AGREEMENT, INCLUDING, WITHOUT LIMITATION, MY RIGHT
          TO FILE A LAWSUIT IN COURT WITH RESPECT TO RELEASED CLAIMS.{" "}
          <span className="text-red-500">*</span>
        </p>
        <div className="flex space-x-4 mt-2">
          <label className="flex items-center border rounded-lg px-6 py-2 cursor-pointer">
            <input
              checked={falseInfoChecked === true}
              onChange={() => handleFalseInfoChange(true)}
              type="radio"
              name="rightsWaiverAccepted"
              className="mr-2"
            />
            <span>Yes</span>
          </label>
          <label className="flex items-center border rounded-lg px-6 py-2 cursor-pointer">
            <input
              checked={falseInfoChecked === false}
              onChange={() => handleFalseInfoChange(false)}
              type="radio"
              name="rightsWaiverAccepted"
              className="mr-2"
            />
            <span>No</span>
          </label>
        </div>
      </div>

      {canProceed && (
        <div className="">
          <FormButton >Next</FormButton>
        </div>
      )}
    </div>
  );
};
