import { steps } from '@/app/store/atoms';
import { useSetAtom } from 'jotai';
import React, { useState, useRef } from 'react';
import FormButton from './formButton';
import Image from 'next/image';

const Step6: React.FC = () => {
  const [selfieFile, setSelfieFile] = useState<File | null>(null);
  const [selfiePreview, setSelfiePreview] = useState<string | null>(null);
  const [fullLengthFile, setFullLengthFile] = useState<File | null>(null);
  const [fullLengthPreview, setFullLengthPreview] = useState<string | null>(null);
  
  const selfieInputRef = useRef<HTMLInputElement>(null);
  const fullLengthInputRef = useRef<HTMLInputElement>(null);

  const handleSelfieChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      setSelfieFile(file);
      
      // Create and set the preview URL
      const previewUrl = URL.createObjectURL(file);
      setSelfiePreview(previewUrl);
    }
  };

  const handleFullLengthChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      setFullLengthFile(file);
      
      // Create and set the preview URL
      const previewUrl = URL.createObjectURL(file);
      setFullLengthPreview(previewUrl);
    }
  };

  const handleSelfieRemove = () => {
    if (selfiePreview) {
      URL.revokeObjectURL(selfiePreview);
    }
    setSelfieFile(null);
    setSelfiePreview(null);
    if (selfieInputRef.current) {
      selfieInputRef.current.value = '';
    }
  };

  const handleFullLengthRemove = () => {
    if (fullLengthPreview) {
      URL.revokeObjectURL(fullLengthPreview);
    }
    setFullLengthFile(null);
    setFullLengthPreview(null);
    if (fullLengthInputRef.current) {
      fullLengthInputRef.current.value = '';
    }
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleSelfieFileDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0];
      setSelfieFile(file);
      const previewUrl = URL.createObjectURL(file);
      setSelfiePreview(previewUrl);
    }
  };

  const handleFullLengthFileDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0];
      setFullLengthFile(file);
      const previewUrl = URL.createObjectURL(file);
      setFullLengthPreview(previewUrl);
    }
  };
  const setNextStep = useSetAtom(steps)
    const submitHandler = (e:any) => {
      e.preventDefault()
      setNextStep(pre=>pre+1)
    }
  return (
    <form onSubmit={submitHandler} className="w-full max-w-[660px] mx-auto p-5 bg-white rounded-xl shadow-xl">
      {/* Title */}
      <h2 className="text-2xl font-extrabold mb-4 text-center text-black">
      PART VI: PHOTO PROFILE SUBMISSION
        </h2>

      {/* Selfie Upload */}
      <div className="w-full flex flex-col">
        <div className="">
          <div className=" mt-1">
            <div className="flex flex-col">
              <div className="w-full font-semibold tracking-tight mb-3">
                <p className="text-justify text-black">
                  *Upload recent pictures of yourself. Please don't wear a hat or sunglasses. We want to see you! Photos should be in jpg, png or gif formats, and can't be more than 5mb in size.
                </p>
                <p className="mt-2 text-black">
                  *Selfie <span className="text-black">(required for profile identification): Upload File (File types supported: </span>jpg, jpeg, png, gif, webp)<span className="text-red-500"> *</span>
                </p>
              </div>

              {/* Selfie Upload Section */}
              <div className="border border-gray-300 rounded-md">
                {selfiePreview ? (
                  <div className="relative p-2">
                    <button 
                      onClick={handleSelfieRemove} 
                      className="absolute top-4 left-4 bg-black text-white w-6 h-6 rounded-full flex items-center justify-center z-10"
                    >
                      ×
                    </button>
                    <div className="text-xs text-gray-500 mb-1">{selfieFile?.name || 'trademark.png'}</div>
                    <Image
                      width={40}
                      height={40} 
                      src={selfiePreview} 
                      alt="Selfie Preview" 
                      className="w-full h-auto max-h-64 object-contain bg-black"
                    />
                  </div>
                ) : (
                  <div 
                    className="p-4 flex flex-col items-center justify-center min-h-16"
                    onDragOver={handleDragOver}
                    onDrop={handleSelfieFileDrop}
                  >
                    <label className="flex flex-col items-center cursor-pointer py-3 text-gray-500">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-6 h-6 mb-0.5">
                        <path d="M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"></path>
                      </svg>
                      <div>
                        Drag & drop a file or <span className="underline">browse</span>
                        <div className="text-xs">Max file size is 19 MB</div>
                      </div>
                      <input
                        ref={selfieInputRef}
                        type="file"
                        className="hidden"
                        accept="image/jpeg,image/jpg,image/png,image/gif,image/webp"
                        onChange={handleSelfieChange}
                        required
                      />
                    </label>
                  </div>
                )}
              </div>
            </div>
          </div>
          
        </div>
      </div>

      {/* Full Length Photo Upload */}
      <div className="w-full flex flex-col mt-4">
        <div className="">
          <div className=" mt-1">
            <div className="flex flex-col">
              <div className="w-full font-semibold tracking-tight mb-3">
                <p className="text-black">Full Length Photo</p>
              </div>

              {/* Full Length Photo Upload Section */}
              <div className="border border-gray-300 rounded-md">
                {fullLengthPreview ? (
                  <div className="relative p-2">
                    <button 
                      onClick={handleFullLengthRemove} 
                      className="absolute top-4 left-4 bg-black text-white w-6 h-6 rounded-full flex items-center justify-center z-10"
                    >
                      ×
                    </button>
                    <div className="text-xs text-gray-500 mb-1">{fullLengthFile?.name}</div>
                    <Image
                      width={50}
                      height={50} 
                      src={fullLengthPreview} 
                      alt="Full Length Preview" 
                      className="w-full h-auto max-h-64 object-contain"
                    />
                  </div>
                ) : (
                  <div 
                    className="p-4 flex flex-col items-center justify-center min-h-16"
                    onDragOver={handleDragOver}
                    onDrop={handleFullLengthFileDrop}
                  >
                    <label className="flex flex-col items-center cursor-pointer py-3 text-gray-500">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-6 h-6 mb-0.5">
                        <path d="M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"></path>
                      </svg>
                      <div>
                        Drag & drop a file or <span className="underline">browse</span>
                        <div className="text-xs">Max file size is 19 MB</div>
                      </div>
                      <input
                        ref={fullLengthInputRef}
                        type="file"
                        className="hidden"
                        accept="image/jpeg,image/jpg,image/png,image/gif,image/webp"
                        onChange={handleFullLengthChange}
                      />
                    </label>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Next Button */}
      <div className="w-full flex justify-start mt-6">
          <FormButton
            notSumit={ true}
            type="button"
            className="inline-flex items-center bg-black text-white text-lg font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 py-1.5 w-full sm:w-auto justify-center shadow min-h-[42px] px-4 border-transparent rounded-md"
          >
            Next
          </FormButton>
        </div>
    </form>
  );
};

export default Step6;