import React, { useState } from 'react';
import { Copy, Check, QrCode } from 'lucide-react';
import Image from 'next/image';

const CryptoPayment = () => {
  const [copied, setCopied] = useState(false);
  const walletAddress = "bc1q28cseldwn5z847pkpvtmnnedazcat0lh2n50aj";
  const amount = "100";
  const currency = "BTC";

  const handleCopy = () => {
    navigator.clipboard.writeText(walletAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex flex-col items-center w-full max-w-md mx-auto rounded-md p-6 bg-white">
      <h2 className="text-2xl font-bold ">Pay {amount}$ {currency} to Join</h2>
      
      <div className=" rounded-lg w-full max-w-xs flex justify-center">
        {/* This is a placeholder for where a real QR code would be rendered */}
        <div className="relative">
          <Image alt='qr code' src={'/images/paymentQr.jpg'} className='' width={400} height={400}/>
        </div>
      </div>
      
      <div className="w-full">
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
    </div>
  );
};

export default CryptoPayment;