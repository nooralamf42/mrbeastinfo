import { steps } from '@/app/store/atoms';
import { useSetAtom } from 'jotai';
import React, { useState, useRef } from 'react';
import FormButton from './formButton';

const Step7: React.FC = () => {
  const [videoFile, setVideoFile] = useState<File | null>(null);
  const [videoName, setVideoName] = useState<string | null>(null);
  
  const videoInputRef = useRef<HTMLInputElement>(null);

  const handleVideoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      setVideoFile(file);
      setVideoName(file.name);
    }
  };

  const handleVideoRemove = () => {
    setVideoFile(null);
    setVideoName(null);
    if (videoInputRef.current) {
      videoInputRef.current.value = '';
    }
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleVideoFileDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0];
      setVideoFile(file);
      setVideoName(file.name);
    }
  };

  const setNextStep = useSetAtom(steps);
  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    setNextStep(pre => pre + 1);
  };

  return (
    <form onSubmit={submitHandler} className="w-full max-w-[660px] mx-auto p-5 bg-white rounded-xl shadow-xl">
      {/* Title */}
      <h2 className="text-2xl font-extrabold mb-4 text-center text-black">
        PART VII: VIDEO SUBMISSION
      </h2>

      {/* Video Upload Instructions */}
      <div className="w-full flex flex-col">
        <div className="w-full font-semibold tracking-tight mb-3">
          <p className="text-justify text-black">
            *Please submit a 1-minute video. *Tell us your name, age, where you live, and what you do for a living. Your video should answer at least one or two of the following questions:
          </p>
          <ul className="list-disc pl-6 mt-2 text-black">
            <li>What type of strategist are you - Hero, Villain, Social, Brainiac, Charming, something else or a combination?</li>
            <li>Favorite Challenge in BEAST GAMES Season 1 and why?</li>
            <li>Favorite Contestant from BEAST GAMES Season 1 and why?</li>
            <li>What makes you unique?</li>
            <li>What would you do with $5,000,000?</li>
          </ul>
          <p className="mt-2 text-black">
            *Please upload a video. When you upload, make sure the video is an mp4 and doesn't go over 100 megabytes. Apps like Video Compress on iOS or Compress Video Size Compressor on Android can help reduce it to the right size.
          </p>
        </div>

        {/* Video Upload Section */}
        <div className="w-full mt-4">
          <div className="flex flex-col">
            <div className="font-semibold tracking-tight mb-3">
              <p className="text-black">Upload Video (.mp4 only) <span className="text-red-500">*</span></p>
            </div>

            <div className="border border-gray-300 rounded-md">
              {videoFile ? (
                <div className="relative p-4 flex items-center">
                  <button 
                    onClick={handleVideoRemove} 
                    className="absolute top-4 left-4 bg-black text-white w-6 h-6 rounded-full flex items-center justify-center z-10"
                  >
                    ×
                  </button>
                  <div className="flex items-center w-full">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div className="text-gray-800">{videoName}</div>
                  </div>
                </div>
              ) : (
                <div 
                  className="p-4 flex flex-col items-center justify-center min-h-16"
                  onDragOver={handleDragOver}
                  onDrop={handleVideoFileDrop}
                >
                  <label className="flex flex-col items-center cursor-pointer py-3 text-gray-500">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-6 h-6 mb-0.5">
                      <path d="M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"></path>
                    </svg>
                    <div>
                      Drag & drop a file or <span className="underline">browse</span>
                    </div>
                    <input
                      ref={videoInputRef}
                      type="file"
                      className="hidden"
                      accept="video/mp4"
                      onChange={handleVideoChange}
                      required
                    />
                  </label>
                </div>
              )}
            </div>
            {!videoFile && (
              <p className="text-red-500 text-sm mt-1">Field is required</p>
            )}
          </div>
        </div>
      </div>

      {/* Next Button */}
      <div className="w-full flex justify-start mt-6">
        <FormButton
                      normalBtn={true}

        >
          Next
        </FormButton>
      </div>
    </form>
  );
};

export default Step7;