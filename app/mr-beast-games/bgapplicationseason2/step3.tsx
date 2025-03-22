'use client'

import React, { useState } from 'react'
import FormButton from './formButton';

const Step3 = () => {

  const [arbitrationChecked, setArbitrationChecked] = useState<boolean | null>(null);


  const handleArbitrationChange = (value: boolean) => {
    setArbitrationChecked(value);
  };

  // Check if all options are selected as "Yes"
  const canProceed = arbitrationChecked === true;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <main className="flex flex-col items-center justify-center w-full flex-1 px-4 sm:px-20 text-center">
        
        <div className="w-full max-w-[650px] mx-auto p-5 bg-white rounded-xl shadow-xl mb-8">
          <h2 className="text-2xl font-extrabold mb-4 text-center">PART III: AGREEMENT TO ARBITRATE</h2>
          
          <div className="text-justify mb-4">
            <p>By submitting this application to compete in BEAST GAMES, you expressly agree and acknowledge that you and Trailblazer Events, LLC, including its parents, subsidiaries, affiliates, related entities, and partners (collectively, "<strong>Contest Affiliates</strong>") (Contest Affiliates and me, jointly referred to in this Part III as the "<strong>Parties</strong>") mutually agree to arbitrate any disputes, claims, or controversies arising out of or related to this application (including Parts I through XIII), the consideration process, or your participation in BEAST GAMES or related events. </p>
            <p>It is the intent of the Parties that any dispute, claim or controversy between them, including the interpretation, formation, scope or applicability of this agreement to arbitrate, shall be resolved by final and binding confidential arbitration administered by JAMS in accordance with its streamlined arbitration rules and procedures or subsequent versions thereof, including its optional appeal procedure (the "<strong>JAMS Rules</strong>"), including, without limitation, the Rule providing that each party shall pay <em>pro rata</em> its share of JAMS fees and expenses, and the Rules providing for limited discovery and other exchange of information. The JAMS Rules are available at <a href="http://www.jamsadr.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">www.jamsadr.com</a> and will be provided by Trailblazer Events upon request. The JAMS Rules for selection of an arbitrator shall be followed, except that the arbitrator shall be a retired judge or experienced in the entertainment industry and licensed to practice law in North Carolina. All arbitration proceedings will be conducted in Pitt County, North Carolina. The Parties agree that the remedy for any dispute, claim or controversy shall be limited to actual damages, and in no event shall any party be entitled to recover punitive or exemplary damages or to rescind this agreement to arbitrate or seek injunctive or any other equitable relief, to the extent permitted by applicable law. Further and <strong>notwithstanding the foregoing, to the extent required by law, the parties agree that with respect to the arbitration of any federal or state claim that arises from unwaivable public rights, whether statutory or nonstatutory, the following shall apply: the arbitrator may award any remedy that would have been available in court; the parties shall be permitted discovery adequate to secure the necessary information to present such claim or defend against such claim; and trailblazer events, llc shall pay all types of costs that are unique to arbitration</strong>. This agreement to arbitrate shall be governed by the Federal Arbitration Act and shall be interpreted under the internal, substantive laws of the State of North Carolina, without regard to the conflicts of law provisions thereof.</p>
            <p><strong>WAIVER OF CLASS, COLLECTIVE AND REPRESENTATIVE CLAIMS</strong> – By electronically signing and submitting this application, you are agreeing to resolve any and all disputes, controversies or claims arising out of or relating to this application, or any part of it, or your participation in or in connection with BEAST GAMES or related events on an individual basis only, and not in a class, collective, or representative basis to the extent permitted by applicable law. Accordingly, unless prohibited by applicable law, you and Contest Affiliates, agree to waive your respective rights to bring, maintain, and participate in any class, collective, and/or representative or collective action or proceeding. Furthermore, less the Parties agree in writing otherwise, the arbitrator may not consolidate more than one person's claims and may not otherwise preside over any form of a class, representative, or collective action or proceeding.  </p>
            <p>It is the Parties' intent to commit every dispute, claim, controversy of any type to binding arbitration, to the extent permitted by applicable law. Should any provision of this agreement to arbitrate be deemed unlawful or unenforceable, that provision and this agreement to arbitrate should be automatically, immediately and retroactively modified or amended to be enforceable and give effect to the Parties' intent and desire to arbitrate any claim, controversy or dispute between them. </p>
            <p><strong>BY SUBMITTING THIS APPLICATION YOU ARE AFFIRMING THAT YOU HAVE HAD SUFFICIENT TIME TO READ AND UNDERSTAND THE FOREGOING AGREEMENT TO ARBITRATE, FULLY UNDERSTAND IT AND VOLUNTARILY AGREE TO BE BOUND BY ITS TERMS. YOU UNDERSTAND AND AGREE THAT BY ENTERING INTO THIS AGREEMENT TO ARBITRATE, YOU ARE GIVING UP YOUR CONSTITUTIONAL RIGHT TO HAVE A TRIAL BY JURY. THIS AGREEMENT TO ARBITRATE SHALL BE BINDING UPON BOTH YOU AND CONTEST AFFILIATES UPON YOUR SUBMISSION OF THIS APPLICATION.</strong></p>
          </div>
          
          <div className="mb-6">
            <p className="font-medium mb-3">
              I FREELY AND KNOWINGLY AGREE TO BINDING ARBITRATION AS DESCRIBED ABOVE. <span className="text-red-500">*</span>
            </p>
            <div className="flex space-x-4 mt-2">
              <label className="flex items-center border rounded-lg px-6 py-2 cursor-pointer">
                <input
                  checked={arbitrationChecked === true}
                  onChange={() => handleArbitrationChange(true)}
                  type="radio"
                  name="arbitrationAccepted"
                  className="mr-2"
                />
                <span>Yes</span>
              </label>
              <label className="flex items-center border rounded-lg px-6 py-2 cursor-pointer">
                <input
                  checked={arbitrationChecked === false}
                  onChange={() => handleArbitrationChange(false)}
                  type="radio"
                  name="arbitrationAccepted"
                  className="mr-2"
                />
                <span>No</span>
              </label>
            </div>
          </div>
          {canProceed && (
        <div className="flex">
          <FormButton >Next</FormButton>
        </div>
      )}
        </div>
        
      </main>
    </div>
  );
};

export default Step3;