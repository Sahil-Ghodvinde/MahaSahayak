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
      <div className="flex justify-between items-center px-4 py-2">
        <div className="flex items-center gap-2">
          <Image
            src="/placeholder.svg?height=80&width=140"
            alt="Government Logo"
            width={140}
            height={80}
            className="object-contain"
          />
        </div>
        <div className="flex flex-col items-center">
          <div className="flex items-center gap-2">
            <span className="text-amber-500 font-bold text-xl">MAHARASHTRA</span>
            <span className="text-green-600 font-bold text-xl">RIGHT TO PUBLIC SERVICES ACT</span>
          </div>
          <div className="flex items-center gap-2 text-blue-600">
            <Image
              src="/placeholder.svg?height=30&width=30"
              alt="Service Logo"
              width={30}
              height={30}
              className="object-contain"
            />
            <span className="uppercase text-sm font-semibold">Your service is our duty</span>
          </div>
        </div>
        <div className="flex gap-6">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="flex flex-col items-center">
              <Image
                src="/placeholder.svg?height=60&width=60"
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
      <div className="bg-orange-400 text-white flex items-center px-2 py-1 text-xs">
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
        <div className="flex flex-1 z-10 relative p-8">
          <div className="w-full">
            <h2 className="text-white text-center text-xl font-semibold bg-blue-500 py-2 mb-6">
              CONTACT US
            </h2>

            <div className="bg-white bg-opacity-90 p-6 rounded-lg shadow-lg max-w-3xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-blue-600 mb-4">Reach Out To Us</h3>
                  <div className="space-y-4">
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
                      <p className="text-gray-600">1800-2000-1234</p>
                    </div>
                  </div>
                  
                  <div className="mt-8">
                    <CallHelpButton />
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold text-blue-600 mb-4">Send Us A Message</h3>
                  <form className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                      <input 
                        type="text" 
                        className="w-full p-2 border border-gray-300 rounded" 
                        placeholder="Enter your full name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                      <input 
                        type="email" 
                        className="w-full p-2 border border-gray-300 rounded" 
                        placeholder="Enter your email"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                      <input 
                        type="text" 
                        className="w-full p-2 border border-gray-300 rounded" 
                        placeholder="Enter subject"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                      <textarea 
                        className="w-full p-2 border border-gray-300 rounded h-24" 
                        placeholder="Enter your message"
                      ></textarea>
                    </div>
                    <button 
                      type="submit" 
                      className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                    >
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-gray-700 text-white p-4 text-xs mt-auto">
        <div className="flex justify-center gap-4">
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
  const [callActive, setCallActive] = useState(false)
  const [callTime, setCallTime] = useState(0)
  
  // Simulate call timer when call is active
  React.useEffect(() => {
    let timer: ReturnType<typeof setInterval> | undefined;
    if (callActive) {
      timer = setInterval(() => {
        setCallTime(prev => prev + 1);
      }, 1000);
    }
    return () => {
      if (timer) clearInterval(timer);
    };
  }, [callActive]);

  // Format seconds into MM:SS
  const formatTime = (seconds: number): string => {
    const mins = Math.floor(seconds / 60).toString().padStart(2, '0');
    const secs = (seconds % 60).toString().padStart(2, '0');
    return `${mins}:${secs}`;
  };
  
  const handleStartCall = () => {
    setCallActive(true);
  };
  
  const handleEndCall = () => {
    setCallActive(false);
    setCallTime(0);
    // Wait a bit before closing the modal
    setTimeout(() => setIsOpen(false), 500);
  };
  
  return (
    <>
      <button 
        onClick={() => setIsOpen(true)}
        className="bg-green-500 text-white flex items-center gap-2 px-4 py-3 rounded-lg hover:bg-green-600 transition shadow-md"
      >
        <Phone className="w-5 h-5" />
        <span className="font-semibold">Call For Help</span>
      </button>
      
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
          <div className="bg-gray-900 rounded-xl shadow-2xl w-full max-w-md overflow-hidden">
            {!callActive ? (
              // Pre-call screen
              <>
                <div className="bg-blue-600 text-white p-4 flex justify-between items-center">
                  <h3 className="font-bold text-lg">RTS Helpline</h3>
                  <button onClick={() => setIsOpen(false)} className="text-white">
                    <X className="w-5 h-5" />
                  </button>
                </div>
                
                <div className="p-6 text-white">
                  <div className="text-center mb-6">
                    <div className="w-24 h-24 bg-blue-700 rounded-full mx-auto flex items-center justify-center">
                      <Phone className="w-12 h-12 text-white" />
                    </div>
                    <h4 className="font-bold text-xl mt-4">RTS Support</h4>
                    <p className="text-gray-400">1800-2000-1234</p>
                    <p className="text-gray-400 mt-2">Available: 9:00 AM - 6:00 PM (Mon-Sat)</p>
                  </div>
                  
                  <div className="mt-8 flex justify-center space-x-4">
                    <button 
                      onClick={handleStartCall}
                      className="bg-green-500 text-white px-6 py-3 rounded-full flex items-center gap-2 hover:bg-green-600 transition"
                    >
                      <Phone className="w-5 h-5" />
                      <span>Start Call</span>
                    </button>
                    <button
                      onClick={() => setIsOpen(false)} 
                      className="bg-gray-700 text-white px-6 py-3 rounded-full hover:bg-gray-600 transition"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              </>
            ) : (
              // Active call screen
              <div className="flex flex-col h-[500px]">
                <div className="flex-1 bg-gradient-to-b from-gray-800 to-gray-900 flex flex-col items-center justify-center p-6">
                  <div className="relative">
                    <div className="w-32 h-32 bg-blue-700 rounded-full mx-auto flex items-center justify-center">
                      <Phone className="w-16 h-16 text-white" />
                    </div>
                    <div className="absolute -bottom-1 -right-1 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    </div>
                  </div>
                  
                  <h3 className="font-bold text-white text-2xl mt-6">RTS Support</h3>
                  <p className="text-gray-400 text-lg">1800-2000-1234</p>
                  
                  <div className="mt-4 text-white font-medium">
                    {callTime === 0 ? (
                      <p className="text-green-400 flex items-center gap-2">
                        <span className="inline-block w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
                        Connecting...
                      </p>
                    ) : (
                      <p>{formatTime(callTime)}</p>
                    )}
                  </div>
                </div>
                
                <div className="bg-gray-800 p-6">
                  <div className="flex justify-center space-x-6">
                    <button className="w-12 h-12 rounded-full bg-gray-700 flex items-center justify-center text-white">
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"></path><path d="M19 10v2a7 7 0 0 1-14 0v-2"></path><line x1="12" y1="19" x2="12" y2="23"></line><line x1="8" y1="23" x2="16" y2="23"></line>
                      </svg>
                    </button>
                    
                    <button onClick={handleEndCall} className="w-16 h-16 rounded-full bg-red-600 flex items-center justify-center text-white">
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M10.68 13.31a16 16 0 0 0 3.41 2.6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7 2 2 0 0 1 1.72 2v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.42 19.42 0 0 1-3.33-2.67m-2.67-3.34a19.79 19.79 0 0 1-3.07-8.63A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91" />
                        <line x1="23" y1="1" x2="1" y2="23" />
                      </svg>
                    </button>
                    
                    <button className="w-12 h-12 rounded-full bg-gray-700 flex items-center justify-center text-white">
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M15.6 11.6L22 7v10l-6.4-4.5v-1zM4 5h9a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7c0-1.1.9-2 2-2z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  )
} 