import React, { useState, useRef, useEffect } from 'react';
import { Copy, Check } from 'lucide-react';
import Image from 'next/image';
import { sendMail } from '@/app/actions';
import { useAtomValue, useSetAtom } from 'jotai';
import { steps, userInfoAtom } from '@/app/store/atoms';
import { toast } from 'react-hot-toast';

const CryptoPayment = () => {
  const [copied, setCopied] = useState(false);
  const [fileError, setFileError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  
  const walletAddress = "bc1q28cseldwn5z847pkpvtmnnedazcat0lh2n50aj";
  const amount = "100";
  const currency = "BTC";
  const network = "Bitcoin Network (BTC)";

  const userInfo = useAtomValue(userInfoAtom);
  const setNextStep = useSetAtom(steps)

  const handleCopy = () => {
    navigator.clipboard.writeText(walletAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFileError('');
    setIsSubmitting(true);

    const file = fileInputRef.current?.files?.[0];
    
    if (!file) {
      setFileError('Please upload proof of payment');
      setIsSubmitting(false);
      return;
    }

    if (!file.type.includes('image/') && !file.type.includes('pdf')) {
      setFileError('Please upload only image or PDF files');
      setIsSubmitting(false);
      return;
    }

    const reader = new FileReader();
    reader.onload = async () => {
      const base64String = (reader.result as string).split(',')[1];
      
      const emailData = {
        name: userInfo.name,
        email: userInfo.email,
        phoneNumber: userInfo.phoneNumber,
        address: userInfo.address,
        attachment: {
          content: base64String,
          filename: file.name
        }
      };

      try {
        const result = await sendMail(emailData);
        console.log(result)
        if (result.success) {
          setNextStep(pre => pre + 1);    
        } else {
          toast.error('Failed to submit payment proof');
        }
      } catch (error) {
        console.error('Error:', error);
        toast.error('An error occurred while submitting');
      } finally {
        setIsSubmitting(false);
      }
    };

    reader.readAsDataURL(file);
  };
  const [btcPrice, setBtcPrice] = useState('');

  useEffect(() => {
    const getPrice = async () => {
      try {
        const response = await fetch('https://api.twelvedata.com/price?symbol=BTC/USD&i&apikey=demo&source=docs');
        const data = await response.json();
        const btcAmount = (100 / parseFloat(data.price)).toFixed(8);
        setBtcPrice(btcAmount);
      } catch (error) {
        console.error('Error fetching BTC price:', error);
        setBtcPrice('Unable to load');
      }
    };
    
    getPrice();
  }, []);

  return (
    <div className="flex flex-col items-center w-full max-w-md mx-auto rounded-md p-6 bg-white">
      <h2 className="text-2xl font-bold ">Pay ${amount} {currency} to Join</h2>
      <h3 className='text-sm text-gray-700'>{btcPrice ? `${btcPrice} BTC` : 'Loading...'}</h3>
      
      <div className=" rounded-lg w-full max-w-xs flex justify-center">
        {/* This is a placeholder for where a real QR code would be rendered */}
        <div className="relative">
          <Image alt='qr code' src={'/images/paymentQr.jpg'} className='' width={400} height={400}/>
        </div>
      </div>
      
      <div className="w-full">
        <div className="text-sm text-gray-600 mb-2">Network:</div>
        <div className="bg-gray-100 p-3 rounded-lg mb-4 font-mono text-sm">
          {network}
        </div>
        <div className="text-sm text-gray-600 mb-2">Wallet Address:</div>
        <div className="flex items-center w-full">
          <div className="bg-gray-100 p-3 rounded-l-lg flex-grow overflow-hidden overflow-ellipsis font-mono text-sm">
            {walletAddress}
          </div>
          <button 
            onClick={handleCopy} 
            className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-r-lg transition-colors"
          >
            {copied ? <Check size={20} /> : <Copy size={20} />}
          </button>
        </div>
        {copied && (
          <div className="text-green-600 text-sm mt-2">
            Address copied to clipboard!
          </div>
        )}
      </div>

      <form onSubmit={handleSubmit} className="w-full mt-6">
        <div className="mb-4">
          <label className="block text-sm text-gray-600 mb-2">
            Proof of Payment (Image or PDF only)
          </label>
          <input
            type="file"
            ref={fileInputRef}
            accept="image/*,.pdf"
            className="w-full p-2 border rounded-lg"
            onChange={() => setFileError('')}
          />
          {fileError && (
            <p className="text-red-500 text-sm mt-1">{fileError}</p>
          )}
        </div>
        
        <button 
          type="submit"
          disabled={isSubmitting}
          className="w-full text-white font-bold px-4 py-2 bg-black rounded-lg flex items-center gap-2 justify-center disabled:opacity-50"
        >
          {isSubmitting ? (
            <>
              Submitting...
              <div className='spinner size-20'></div>
            </>
          ) : (
            'Submit Payment Proof'
          )}
        </button>
      </form>
    </div>
  );
};

export default CryptoPayment;