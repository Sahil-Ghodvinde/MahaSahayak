"use client"

import Image from "next/image"
import Link from "next/link"
import { ChevronDown, Phone, X } from "lucide-react"
import { useState } from "react"
import React from "react"

export default function ContactUs() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Top bar */}
      <div className="bg-gray-100 flex justify-between items-center px-4 py-1 text-sm">
        <div className="flex items-center gap-1">
          <div className="bg-yellow-500 rounded-full w-4 h-4"></div>
          <span>Government of Maharashtra</span>
        </div>
        <div className="flex items-center gap-2">
          <button className="px-1">
            A<sup>+</sup>
          </button>
          <button className="px-1">
            A<sup>-</sup>
          </button>
          <button className="px-1">A</button>
          <button className="bg-black text-white px-2 py-0.5">A</button>
          <button className="px-1">A</button>
          <button className="bg-orange-400 text-white px-2 py-0.5 rounded">मराठी</button>
        </div>
      </div>

      {/* Logo and title bar */}
      <div className="flex flex-col md:flex-row justify-between items-center px-4 py-2 gap-4">
        <div className="flex items-center gap-2">
          <Image
            src="/images.png"
            alt="Government Logo"
            width={140}
            height={80}
            className="object-contain"
          />
        </div>
        <div className="flex flex-col items-center">
          <div className="flex flex-col md:flex-row items-center gap-2 text-center">
            <span className="text-amber-500 font-bold text-lg md:text-xl">MAHARASHTRA</span>
            <span className="text-green-600 font-bold text-lg md:text-xl">RIGHT TO PUBLIC SERVICES ACT</span>
          </div>
          <div className="flex items-center gap-2 text-blue-600">
            <Image
              src="/Right-Serve.png"
              alt="Service Logo"
              width={30}
              height={30}
              className="object-contain"
            />
            <span className="uppercase text-sm font-semibold">Your service is our duty</span>
          </div>
        </div>
        <div className="grid grid-cols-2 md:flex gap-3 md:gap-6">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="flex flex-col items-center">
              <Image
                src={i === 0 
                  ? "/Devendra_Fadanvis.png" 
                  : i === 1 
                    ? "/Eknath_Shinde.png" 
                    : i === 2 
                      ? "/ajit_pawar.png" 
                      : "/ashish_shelar.jpg"}
                alt={`Official ${i + 1}`}
                width={60}
                height={60}
                className="object-cover rounded-full border-2 border-gray-200"
              />
              <div className="text-center text-xs mt-1">
                <p className="font-semibold">
                  Shri.{" "}
                  {i === 0
                    ? "Devendra Fadnavis"
                    : i === 1
                      ? "Eknath Shinde"
                      : i === 2
                        ? "Ajit Pawar"
                        : "Adv. Ashish Shelar"}
                </p>
                <p className="text-xs text-gray-600">
                  Hon'ble{" "}
                  {i === 0
                    ? "Chief Minister"
                    : i === 1 || i === 2
                      ? "Deputy Chief Minister"
                      : "Minister of Information Technology"}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation bar */}
      <div className="bg-orange-400 text-white flex flex-wrap items-center px-2 py-1 text-xs">
        <Link href="/" className="px-3 py-2 flex items-center gap-1">
          <span className="inline-block w-4 h-4">🏠</span> HOME
        </Link>
        {[
          "ABOUT RTS COMMISSION",
          "DEPARTMENT NOTIFIED SERVICES",
          "EASE OF DOING BUSINESS",
          "SERVICE INFORMATION",
          "CONTACT US",
          "SEVA KENDRA",
          "DASHBOARD",
          "INSPECTION FORM",
        ].map((item, i) => (
          <Link 
            key={i} 
            href={i === 4 ? "/contact-us" : "#"} 
            className={`px-3 py-2 flex items-center gap-1 ${i === 4 ? "bg-orange-500" : ""}`}
          >
            <span className="inline-block w-4 h-4">
              {i === 0
                ? "📋"
                : i === 1
                  ? "🏢"
                  : i === 2
                    ? "📁"
                    : i === 3
                      ? "ℹ️"
                      : i === 4
                        ? "📞"
                        : i === 5
                          ? "🏪"
                          : i === 6
                            ? "📊"
                            : "🔍"}
            </span>
            {item}
          </Link>
        ))}
      </div>

      {/* Benefits bar */}
      <div className="bg-blue-500 text-white px-4 py-2 flex justify-center">
        <button className="flex items-center gap-2">
          Know Your Benefits <ChevronDown className="w-4 h-4" />
        </button>
      </div>

      {/* Main content */}
      <div className="flex flex-1 relative">
        {/* Background map image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=600&width=1200"
            alt="Maharashtra Map"
            fill
            className="object-cover opacity-30"
          />
        </div>

        {/* Main content area */}
        <div className="flex flex-1 z-10 relative p-4 md:p-8">
          <div className="w-full">
            <h2 className="text-white text-center text-xl font-semibold bg-blue-500 py-2 mb-4 md:mb-6">
              CONTACT US
            </h2>

            <div className="bg-white bg-opacity-90 p-4 md:p-6 rounded-lg shadow-lg max-w-3xl mx-auto">
              <div className="grid grid-cols-1 gap-6 md:gap-8">
                <div>
                  <h3 className="text-lg md:text-xl font-bold text-blue-600 mb-3 md:mb-4 text-center">Reach Out To Us</h3>
                  <div className="space-y-4 md:space-y-5 max-w-md mx-auto">
                    <div>
                      <h4 className="font-semibold text-gray-800">Address:</h4>
                      <p className="text-gray-600">
                        Maharashtra RTS Commission<br />
                        Government of Maharashtra<br />
                        Mantralaya, Mumbai - 400032
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Email:</h4>
                      <p className="text-gray-600">rtsc.maharashtra@gov.in</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Helpline:</h4>
                      <CopyablePhone phoneNumber="1800-2000-1234" />
                    </div>
                  </div>
                  
                  <div className="mt-6 md:mt-8 flex justify-center">
                    <CallHelpButton />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-gray-700 text-white p-4 text-xs mt-auto">
        <div className="flex flex-wrap justify-center gap-2 md:gap-4">
          <Link href="#">Disclaimer and Policies</Link>
          <span>|</span>
          <Link href="#">Accessibility Statement</Link>
          <span>|</span>
          <Link href="#">Sitemap</Link>
          <span>|</span>
          <Link href="#">Help</Link>
        </div>
        <div className="text-center mt-2">
          <p>Copyright © 2015 Maharashtra Information Technology Corporation. All Rights Reserved ©</p>
        </div>
      </div>
    </div>
  )
}

// CallHelpButton component with popup functionality
function CallHelpButton() {
  const [isOpen, setIsOpen] = useState(false)
  const [agentSiteUrl, setAgentSiteUrl] = useState("")
  const [permissionError, setPermissionError] = useState(false)
  
  const handleStartCall = () => {
    // Use a simple approach that works across all browsers
    try {
      // Only try to request permissions if the API is available
      if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        navigator.mediaDevices.getUserMedia({ audio: true })
          .then(() => {
            // Permission granted, proceed with opening the chat
            setPermissionError(false);
            setAgentSiteUrl("https://front-six-gules.vercel.app/voice-chat");
          })
          .catch((err) => {
            // Permission denied or error occurred
            setPermissionError(true);
          });
      } else {
        // For browsers without MediaDevices API support,
        // go directly to the iframe which will handle permissions itself
        setAgentSiteUrl("https://front-six-gules.vercel.app/voice-chat");
      }
    } catch (error) {
      // Fallback for any unexpected errors
      setAgentSiteUrl("https://front-six-gules.vercel.app/voice-chat");
    }
  };
  
  const handleCloseCall = () => {
    setAgentSiteUrl("");
    setPermissionError(false);
    setIsOpen(false);
  };
  
  const retryPermission = () => {
    setPermissionError(false);
    // Add a small delay before retrying
    setTimeout(handleStartCall, 500);
  };
  
  return (
    <>
      <button 
        onClick={() => setIsOpen(true)}
        className="bg-green-500 text-white flex items-center gap-2 px-4 py-3 rounded-lg hover:bg-green-600 transition shadow-md w-full md:w-auto justify-center"
      >
        <Phone className="w-5 h-5" />
        <span className="font-semibold">Call For Help</span>
      </button>
      
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-3 md:p-0">
          <div className="bg-gray-900 rounded-xl shadow-2xl w-full max-w-4xl overflow-hidden">
            {permissionError ? (
              // Permission error screen
              <div className="p-6 text-white bg-gradient-to-b from-gray-800 to-gray-900">
                <div className="text-center mb-6">
                  <div className="w-20 h-20 bg-red-500 rounded-full mx-auto flex items-center justify-center">
                    <X className="w-10 h-10 text-white" />
                  </div>
                  <h4 className="font-bold text-xl mt-4">Microphone Permission Required</h4>
                </div>
                
                <div className="mb-6 text-center">
                  <p className="text-gray-300 mb-4">
                    We couldn't access your microphone. For voice calls, you need to allow microphone access.
                  </p>
                  <div className="bg-gray-700 p-4 rounded-lg text-sm mb-6 text-left">
                    <p className="font-bold mb-2 text-orange-400">How to fix this:</p>
                    <ol className="list-decimal list-inside space-y-2 text-gray-300">
                      <li>Check if your browser blocked the permission popup</li>
                      <li>Look for the camera/microphone icon in your address bar</li>
                      <li>Click it and select "Always allow"</li>
                      <li>On mobile, check your device settings for browser permissions</li>
                    </ol>
                  </div>
                </div>
                
                <div className="flex flex-col md:flex-row justify-center gap-3">
                  <button 
                    onClick={retryPermission}
                    className="bg-orange-500 text-white px-6 py-3 rounded-full flex items-center justify-center gap-2 hover:bg-orange-600 transition w-full md:w-auto"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clipRule="evenodd" />
                    </svg>
                    <span>Try Again</span>
                  </button>
                  <button
                    onClick={handleCloseCall} 
                    className="bg-gray-700 text-white px-6 py-3 rounded-full hover:bg-gray-600 transition w-full md:w-auto mt-2 md:mt-0"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            ) : !agentSiteUrl ? (
              // Pre-call screen
              <>
                <div className="bg-orange-500 text-white p-3 md:p-4 flex justify-between items-center">
                  <div className="flex items-center gap-2 md:gap-3">
                    <div className="bg-white rounded-full p-1.5 md:p-2 flex items-center justify-center h-10 w-10 md:h-12 md:w-12">
                      <Image
                        src="/images.png"
                        alt="Maharashtra Logo"
                        width={40}
                        height={40}
                        className="object-contain"
                      />
                    </div>
                    <h3 className="font-bold text-base md:text-lg">RTS Helpline</h3>
                  </div>
                  <button onClick={() => setIsOpen(false)} className="text-white hover:bg-orange-600 p-2 rounded-full">
                    <X className="w-5 h-5" />
                  </button>
                </div>
                
                <div className="p-4 md:p-8 text-white bg-gradient-to-b from-gray-800 to-gray-900">
                  <div className="text-center mb-6 md:mb-8">
                    <div className="w-20 h-20 md:w-28 md:h-28 bg-orange-500 rounded-full mx-auto flex items-center justify-center">
                      <Phone className="w-10 h-10 md:w-14 md:h-14 text-white" />
                    </div>
                    <h4 className="font-bold text-xl md:text-2xl mt-4 md:mt-5">RTS Support</h4>
                    <p className="text-gray-300 text-base md:text-lg">Aaple Sarkar</p>
                    <p className="text-gray-400 mt-2">Available: 9:00 AM - 6:00 PM (Mon-Sat)</p>
                  </div>
                  
                  <div className="mt-4 md:mt-6">
                    <p className="text-gray-300 text-center text-sm md:text-base mb-3 md:mb-4">
                      You're about to connect with our support team. This will open a support call interface that requires microphone access.
                    </p>
                    <div className="bg-blue-900 bg-opacity-50 p-4 rounded-lg mb-4 md:mb-6">
                      <p className="text-gray-200 text-sm font-medium mb-2">
                        <span className="text-yellow-400">Important:</span> You will need to allow microphone permissions
                      </p>
                      <ul className="text-xs text-gray-300 list-disc list-inside space-y-1">
                        <li>Your browser will ask for permission to use your microphone</li>
                        <li>Look for a popup or notification at the top of your screen</li>
                        <li>Click "Allow" or "Accept" when prompted</li>
                        <li>If you don't see a popup, check if it was blocked in your browser settings</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="flex flex-col md:flex-row justify-center gap-3 md:space-x-4">
                    <button 
                      onClick={handleStartCall}
                      className="bg-orange-500 text-white px-6 md:px-8 py-3 rounded-full flex items-center justify-center gap-2 hover:bg-orange-600 transition shadow-lg w-full md:w-auto"
                    >
                      <Phone className="w-5 h-5" />
                      <span>Connect to Agent</span>
                    </button>
                    <button
                      onClick={() => setIsOpen(false)} 
                      className="bg-gray-700 text-white px-6 md:px-8 py-3 rounded-full hover:bg-gray-600 transition w-full md:w-auto mt-2 md:mt-0"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              </>
            ) : (
              // Agent website iframe
              <div className="flex flex-col h-[80vh] md:h-[600px]">
                <div className="bg-orange-500 text-white p-3 flex justify-between items-center">
                  <div className="flex items-center gap-2 md:gap-3">
                    <div className="bg-white rounded-full p-1.5 flex items-center justify-center h-8 w-8 md:h-10 md:w-10">
                      <Image
                        src="/images.png"
                        alt="Maharashtra Logo"
                        width={28}
                        height={28}
                        className="object-contain"
                      />
                    </div>
                    <h3 className="font-bold text-base md:text-lg">RTS Support Call</h3>
                  </div>
                  <button onClick={handleCloseCall} className="text-white hover:bg-orange-600 p-2 rounded-full">
                    <X className="w-5 h-5" />
                  </button>
                </div>
                
                <div className="flex-1 relative">
                  <iframe 
                    src={agentSiteUrl}
                    className="absolute inset-0 w-full h-full border-0"
                    allow="microphone; camera; autoplay; display-capture; clipboard-read; clipboard-write"
                    allowFullScreen
                    sandbox="allow-same-origin allow-scripts allow-forms allow-popups allow-popups-to-escape-sandbox allow-downloads"
                  ></iframe>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  )
}

// CopyablePhone component
function CopyablePhone({ phoneNumber }: { phoneNumber: string }) {
  const [copied, setCopied] = useState(false);
  
  const handleCopyClick = () => {
    // Check if clipboard API is available
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(phoneNumber)
        .then(() => {
          setCopied(true);
          setTimeout(() => setCopied(false), 2000);
        })
        .catch(err => {
          console.error('Failed to copy: ', err);
          // Fallback: show the number for manual copy
          alert(`Please copy this number manually: ${phoneNumber}`);
        });
    } else {
      // Fallback for browsers that don't support clipboard API
      const textArea = document.createElement("textarea");
      textArea.value = phoneNumber;
      textArea.style.position = "fixed";  // Avoid scrolling to bottom
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      
      try {
        const successful = document.execCommand('copy');
        if (successful) {
          setCopied(true);
          setTimeout(() => setCopied(false), 2000);
        } else {
          alert(`Please copy this number manually: ${phoneNumber}`);
        }
      } catch (err) {
        console.error('Fallback: Oops, unable to copy', err);
        alert(`Please copy this number manually: ${phoneNumber}`);
      }
      
      document.body.removeChild(textArea);
    }
  };
  
  return (
    <div className="flex flex-wrap items-center gap-2">
      <p className="text-gray-600">{phoneNumber}</p>
      <button 
        onClick={handleCopyClick}
        className="bg-blue-500 text-white p-1.5 rounded hover:bg-blue-600 transition-colors flex items-center gap-1 text-xs mt-1 md:mt-0"
      >
        {copied ? (
          <>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            Copied!
          </>
        ) : (
          <>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
              <path d="M8 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z" />
              <path d="M6 3a2 2 0 00-2 2v11a2 2 0 002 2h8a2 2 0 002-2V5a2 2 0 00-2-2 3 3 0 01-3 3H9a3 3 0 01-3-3z" />
            </svg>
            Copy
          </>
        )}
      </button>
    </div>
  );
} 