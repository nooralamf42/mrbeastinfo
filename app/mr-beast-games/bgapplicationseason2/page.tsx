'use client'

import React, { useState} from 'react';
import ReCAPTCHA from "react-google-recaptcha"

interface ApplicationFormProps {
  onSubmit?: (formData: { dateOfBirth: Date; isAdult: boolean }) => void;
}

const page: React.FC<ApplicationFormProps> = ({ onSubmit }) => {
  const [dateOfBirth, setDateOfBirth] = useState<Date | null>(null);
  const [dateInputValue, setDateInputValue] = useState('');
  const [showCalendar, setShowCalendar] = useState(false);
  const [currentMonth, setCurrentMonth] = useState<Date>(new Date());
  const [captchaVerified, setCaptchaVerified] = useState(false);
  const [isAdult, setIsAdult] = useState<boolean | null>(null);
  const [formSubmitted, setFormSubmitted] = useState(false);
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
        isCurrentMonth: false
      });
    }
    
    // Current month days
    for (let i = 1; i <= lastDay.getDate(); i++) {
      days.push({
        date: new Date(year, month, i),
        isCurrentMonth: true
      });
    }
    
    // Next month days to fill the last week
    const remainingDays = 42 - days.length; // 6 rows * 7 columns
    for (let i = 1; i <= remainingDays; i++) {
      days.push({
        date: new Date(year, month + 1, i),
        isCurrentMonth: false
      });
    }
    
    return days;
  };

  const calendarDays = generateCalendarDays();

  // Navigate to previous month
  const goToPrevMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1));
  };

  // Navigate to next month
  const goToNextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1));
  };

  // Format date for display
  const formatDate = (date: Date): string => {
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
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
    
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    
    setIsAdult(age >= 18);
    return age >= 18;
  };

  // Handle CAPTCHA verification
  const handleCaptchaVerify = (token: string | null) => {
    setCaptchaVerified(!!token);
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (dateOfBirth && captchaVerified) {
      const formData = {
        dateOfBirth,
        isAdult: isAdult || false
      };
      
      if (onSubmit) {
        onSubmit(formData);
      }
      
      setFormSubmitted(true);
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
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  return (
    <main className='mb-40 px-4 md:px-8'>
      <div className="w-full max-w-4xl mx-auto bg-white pt-10 pb-7 anton-regular mt-12 md:mt-24 mb-6">
      <h1 className="text-4xl font-bold text-center mb-6">Beast Games Season 2 Application</h1>
      </div>
      
    <div className="w-full max-w-4xl mx-auto bg-white p-6 rounded-b-lg pb-20">
  
      <form onSubmit={handleSubmit} className="w-full max-w-lg mx-auto">
        <div className="mb-6">
          <label className="block text-lg font-bold mb-2 tracking-tight">
            Please enter your Date of Birth to begin <span className="text-red-500">*</span>
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
                      {currentMonth.toLocaleString('default', { month: 'long' })}
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
                              currentMonth.getMonth() === index ? 'bg-blue-50' : ''
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
                              currentMonth.getFullYear() === year ? 'bg-blue-50' : ''
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
                  {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map((day) => (
                    <div key={day} className="text-center font-semibold text-sm py-1">
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
                        ${!day.isCurrentMonth ? 'text-gray-400' : ''}
                        ${
                          dateOfBirth &&
                          day.date.getDate() === dateOfBirth.getDate() &&
                          day.date.getMonth() === dateOfBirth.getMonth() &&
                          day.date.getFullYear() === dateOfBirth.getFullYear()
                            ? 'bg-blue-500 text-white hover:bg-blue-600'
                            : ''
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
            Please verify yourself via CAPTCHA <span className="text-red-500">*</span>
          </label>
          <div>
            <ReCAPTCHA
              sitekey="6Lf7afkqAAAAAA9xTyceSRdzSCJN1N_tXin8_Bk7" // This is a test key
              onChange={handleCaptchaVerify}
            />
          </div>
        </div>
        
        <div>
          <button
            type="submit"
            disabled={!dateOfBirth || !captchaVerified || isAdult === false}
            className={`
              px-4 py-2 rounded-lg text-white font-semibold
              ${
                !dateOfBirth || !captchaVerified || isAdult === false
                  ? 'hidden'
                  : 'bg-black'
              }
            `}
          >
            Submit
          </button>
        </div>
        
        {formSubmitted && (
          <div className="mt-6 p-4 bg-green-100 text-green-800 rounded-lg">
            Your application has been submitted successfully!
          </div>
        )}
      </form>
    </div>
    </main>
  );
};

export default page;



// const EligibilityRequirements: React.FC = () => {
//   const [agreementChecked, setAgreementChecked] = useState<boolean | null>(null);
//   const [falseInfoChecked, setFalseInfoChecked] = useState<boolean | null>(null);

//   const handleAgreementChange = (value: boolean) => {
//     setAgreementChecked(value);
//   };

//   const handleFalseInfoChange = (value: boolean) => {
//     setFalseInfoChecked(value);
//   };

//   const handleNext = () => {
//     // Handle next button click - navigate to next page or submit form
//     console.log("Next button clicked");
//   };

//   // Check if both options are selected as "Yes"
//   const canProceed = agreementChecked === true && falseInfoChecked === true;

//   return (
//     <div className="w-full max-w-4xl mx-auto p-6">
//       <h1 className="text-3xl font-bold text-center mb-6">CONTESTANT APPLICATION</h1>
      
//       <h2 className="text-2xl font-bold mb-4">PART I: ELIGIBILITY REQUIREMENTS</h2>
      
//       <div className="mb-6">
//         <p className="font-bold mb-2">
//           You must meet these eligibility requirements to compete in BEAST GAMES SEASON 2!
//         </p>
//         <ul className="list-disc pl-8 space-y-2">
//           <li>You need to be 18 or older by the time you submit for a chance to compete in the BEAST GAMES SEASON 2.</li>
//           <li>You need to have a valid passport that is good through January 2026.</li>
//           <li>You either need to be a legal citizen of the U.S. and able to legally travel and re-enter the U.S. from any foreign country or a permanent resident, green card holder, or have a work visa (e.g., HB-1, O1).</li>
//           <li>You need to have a valid U.S. Social Security or Tax ID number, or have appropriate visa(s) or waiver(s) to allow you to legally compete in BEAST GAMES in the United States.</li>
//           <li>You need to be free of any obligations and able to travel internationally for up to six consecutive weeks during the period of May to July 2025 (dates are subject to change). For purposes of contest secrecy and integrity, those who chose to compete in BEAST GAMES will need to be free of any and all obligations for the duration of the competition (including any personal, family or work demands or responsibilities) and without interference or interruption of any type.</li>
//           <li>You must not be a current candidate for public office or intend to be or intend to run for public office within one year as of July 1st, 2026.</li>
//           <li>You are not currently employed by or closely connected to anyone who is involved with the creation, production, administration or judging of BEAST GAMES or anyone working on the MrBeast YouTube channel.</li>
//         </ul>
//       </div>
      
//       <div className="mb-6">
//         <p className="font-bold mb-2">
//           I acknowledge and agree that I have read each of the Eligibility Requirements above and that I meet each of them: <span className="text-red-500">*</span>
//         </p>
//         <div className="flex space-x-4 mt-2">
//           <label className="flex items-center border rounded-lg px-6 py-2 cursor-pointer">
//             <input
//               type="radio"
//               name="eligibilityAgreement"
//               checked={agreementChecked === true}
//               onChange={() => handleAgreementChange(true)}
//               className="mr-2"
//             />
//             <span>Yes</span>
//           </label>
//           <label className="flex items-center border rounded-lg px-6 py-2 cursor-pointer">
//             <input
//               type="radio"
//               name="eligibilityAgreement"
//               checked={agreementChecked === false}
//               onChange={() => handleAgreementChange(false)}
//               className="mr-2"
//             />
//             <span>No</span>
//           </label>
//         </div>
//       </div>
      
//       <div className="mb-6">
//         <p className="font-bold mb-2">
//           I acknowledge and agree that submitting false, inaccurate, misleading or incomplete information in this submission or other materials submitted to BEAST GAMES may result in my disqualification from the selection process or from participation in BEAST GAMES, regardless of when such information is discovered. <span className="text-red-500">*</span>
//         </p>
//         <div className="flex space-x-4 mt-2">
//           <label className="flex items-center border rounded-lg px-6 py-2 cursor-pointer">
//             <input
//               type="radio"
//               name="falseInfoAgreement"
//               checked={falseInfoChecked === true}
//               onChange={() => handleFalseInfoChange(true)}
//               className="mr-2"
//             />
//             <span>Yes</span>
//           </label>
//           <label className="flex items-center border rounded-lg px-6 py-2 cursor-pointer">
//             <input
//               type="radio"
//               name="falseInfoAgreement"
//               checked={falseInfoChecked === false}
//               onChange={() => handleFalseInfoChange(false)}
//               className="mr-2"
//             />
//             <span>No</span>
//           </label>
//         </div>
//       </div>
      
//       {canProceed && (
//         <div className="flex justify-center mt-8">
//           <button
//             onClick={handleNext}
//             className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg"
//           >
//             Next
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };