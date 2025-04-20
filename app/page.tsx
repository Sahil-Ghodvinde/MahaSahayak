import React from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronDown, Search } from "lucide-react"

export default function Home() {
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
        <Link href="#" className="bg-orange-500 px-3 py-2 flex items-center gap-1">
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
          <Link key={i} href={i === 4 ? "/contact-us" : "#"} className="px-3 py-2 flex items-center gap-1">
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
        <div className="flex flex-1 z-10 relative">
          {/* Services section */}
          <div className="w-3/5 p-4">
            <h2 className="text-white text-center text-xl font-semibold bg-blue-500 py-2 mb-4">
              SERVICES AVAILABLE ONLINE
            </h2>

            <div className="bg-gray-800 text-white p-2 flex justify-between items-center">
              <div className="flex items-center gap-2">
                <Search className="w-4 h-4" />
                <span>Click below services for details</span>
              </div>
              <div className="flex items-center gap-2">
                <span>Toggle auto scrolling</span>
              </div>
            </div>

            <div className="bg-gray-800 p-2">
              <input
                type="text"
                placeholder="Search here online service"
                className="w-full p-2 bg-gray-700 text-white border border-gray-600 rounded"
              />
            </div>

            <div className="bg-black bg-opacity-80 p-2 text-yellow-400 font-semibold">Revenue Department</div>

            <div className="grid grid-cols-2 gap-1">
              {[
                "Age Nationality Domicile",
                "Income Certificate",
                "Temporary Residence Certificate",
                "Senior Citizen Certificate",
                "Solvency Certificate",
                "Cultural Programme Permission",
                "Certified Copy",
                "Small Land Holder Farmer Certificate",
                "LandLess Certificate",
                "Agricultural Certificate",
                "General Affidavit",
                "Certificate of Residence in Hilly Area",
              ].map((service, i) => (
                <div
                  key={i}
                  className="bg-gray-800 bg-opacity-80 text-white p-3 text-sm hover:bg-gray-700 cursor-pointer"
                >
                  {service}
                </div>
              ))}
            </div>
          </div>

          {/* Right sidebar */}
          <div className="w-2/5 p-4 flex flex-col gap-4">
            <div className="bg-orange-400 text-white p-2">
              <div className="flex justify-between items-center">
                <span>FAQs & Answers on Maharashtra Right to Public Services Act</span>
                <span className="bg-white text-orange-500 px-2 py-0.5 text-xs rounded">New</span>
              </div>
            </div>

            <div className="bg-orange-400 text-white p-2">
              <div className="flex justify-between items-center">
                <span className="text-sm">वारंवार विचारले जाणारे प्रश्न आणि त्यांची उत्तरे</span>
                <span className="bg-white text-orange-500 px-2 py-0.5 text-xs rounded">New</span>
              </div>
            </div>

            <div className="bg-orange-400 text-white p-2">
              <div className="flex justify-between items-center">
                <span>Annual Report 2022-2023</span>
                <span className="bg-white text-orange-500 px-2 py-0.5 text-xs rounded">New</span>
              </div>
            </div>

            <div className="bg-orange-400 text-white p-2">
              <div className="flex justify-between items-center">
                <span className="text-sm">वार्षिक अहवाल 2022-2023</span>
                <span className="bg-white text-orange-500 px-2 py-0.5 text-xs rounded">New</span>
              </div>
            </div>

            {/* Contact Us Prominent Box */}
            <div className="bg-blue-600 text-white p-4 rounded shadow-lg mb-4">
              <div className="flex items-center gap-3">
                <div className="bg-white rounded-full p-3">
                  <span className="text-blue-600 text-2xl">📞</span>
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-lg">Need Help?</h3>
                  <p className="text-sm">Reach out to our support team for any questions or assistance</p>
                </div>
                <Link 
                  href="/contact-us" 
                  className="bg-white text-blue-600 px-4 py-2 rounded-lg font-semibold hover:bg-blue-100 transition"
                >
                  Contact Us
                </Link>
              </div>
            </div>

            <div className="bg-green-500 text-white p-4 rounded">
              <p>Create your profile with this portal to apply online for notified services</p>

              <div className="flex gap-2 mt-2">
                <button className="bg-blue-600 text-white px-4 py-2 rounded flex-1 text-sm">
                  New User ? Register Here..
                </button>
                <button className="bg-red-500 text-white px-4 py-2 rounded flex-1 text-sm">V.L.E Login</button>
              </div>

              <div className="mt-4">
                <button className="bg-green-600 text-white px-4 py-2 rounded w-full text-left text-sm">
                  Already Registered? Login Here
                </button>
              </div>

              <div className="mt-4 flex flex-col gap-4">
                <div className="flex items-center gap-2">
                  <div className="bg-white text-green-500 rounded-full w-6 h-6 flex items-center justify-center">
                    👤
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="bg-white text-green-500 rounded-full w-6 h-6 flex items-center justify-center">
                    🔒
                  </div>
                </div>
              </div>

              <div className="mt-4 p-2 border border-white">
                <div className="flex gap-2">
                  <div className="bg-white p-2 flex-1">
                    <span className="text-blue-800 font-bold">YASXV</span>
                  </div>
                  <div className="flex-1">
                    <p className="text-xs">Try another</p>
                    <p className="text-xs">Enter the text below as you see in the captcha</p>
                  </div>
                </div>
              </div>

              <div className="mt-4 flex items-center gap-2">
                <span>📍</span>
                <select className="bg-green-600 text-white p-2 rounded w-full">
                  <option>---Your District---</option>
                </select>
              </div>

              <div className="mt-4 flex gap-2">
                <button className="bg-blue-600 text-white px-4 py-1 text-sm">LOGIN</button>
                <button className="bg-blue-600 text-white px-4 py-1 text-sm">Forgot Password?</button>
                <button className="bg-blue-600 text-white px-4 py-1 text-sm">Forgot Username</button>
              </div>
            </div>

            <div className="bg-orange-400 text-white p-4 flex gap-2">
              <div className="flex-1">
                <div className="flex flex-col items-center">
                  <div className="bg-white rounded-full w-10 h-10 flex items-center justify-center text-orange-500">
                    🔑
                  </div>
                  <span className="text-xs mt-1">CITIZEN LOGIN</span>
                </div>
              </div>
              <div className="flex-1">
                <div className="flex flex-col items-center">
                  <div className="bg-white rounded-full w-10 h-10 flex items-center justify-center text-orange-500">
                    📋
                  </div>
                  <span className="text-xs mt-1">TRACK YOUR APPLICATION</span>
                </div>
              </div>
              <div className="flex-1">
                <div className="flex flex-col items-center">
                  <div className="bg-white rounded-full w-10 h-10 flex items-center justify-center text-orange-500">
                    ✓
                  </div>
                  <span className="text-xs mt-1">VERIFY YOUR AUTHENTICATED CERTIFICATE</span>
                </div>
              </div>
              <div className="flex-1">
                <Link href="/contact-us" className="flex flex-col items-center">
                  <div className="bg-white rounded-full w-10 h-10 flex items-center justify-center text-orange-500">
                    📞
                  </div>
                  <span className="text-xs mt-1">CALL CENTER</span>
                </Link>
              </div>
            </div>

            <div className="bg-orange-400 text-white p-4 text-sm">
              <p>
                Please note that no physical visit is required for obtaining services on this portal unless mandated by
                law for the service
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Integration section */}
      <div className="grid grid-cols-5 gap-4 p-4 bg-white">
        <div className="col-span-1">
          <div className="bg-blue-500 text-white p-2 text-center">
            <p>Integrated with</p>
            <p className="font-bold">Digital Locker</p>
          </div>
          <div className="bg-blue-100 p-4 flex justify-center">
            <Image
              src="/placeholder.svg?height=80&width=80"
              alt="DigiLocker"
              width={80}
              height={80}
              className="object-contain"
            />
          </div>
        </div>
        <div className="col-span-1">
          <div className="bg-red-500 text-white p-2 text-center">
            <p>Integrated with</p>
            <p className="font-bold">Aadhaar</p>
          </div>
          <div className="bg-red-100 p-4 flex justify-center">
            <Image
              src="/placeholder.svg?height=80&width=80"
              alt="Aadhaar"
              width={80}
              height={80}
              className="object-contain"
            />
          </div>
        </div>
        <div className="col-span-1">
          <div className="bg-green-500 text-white p-2 text-center">
            <p>Integrated with</p>
            <p className="font-bold">Pay Gov India</p>
          </div>
          <div className="bg-green-100 p-4 flex justify-center">
            <Image
              src="/placeholder.svg?height=80&width=80"
              alt="Pay Gov India"
              width={80}
              height={80}
              className="object-contain"
            />
          </div>
        </div>
        <div className="col-span-1">
          <div className="bg-orange-500 text-white p-2 text-center">
            <p>Certificates</p>
            <p className="font-bold">Digitally signed</p>
          </div>
          <div className="bg-orange-100 p-4 flex justify-center">
            <Image
              src="/placeholder.svg?height=80&width=80"
              alt="Digital Signature"
              width={80}
              height={80}
              className="object-contain"
            />
          </div>
        </div>
        <div className="col-span-1">
          <div className="p-2 text-center text-sm text-blue-600">
            <p>Service Integration Documents</p>
            <p>Download Service Integration Folder</p>
            <p>RTS Dashboard Integration Document</p>
          </div>
          <div className="p-2 flex justify-center">
            <Image
              src="/placeholder.svg?height=60&width=240"
              alt="App Download"
              width={240}
              height={60}
              className="object-contain"
            />
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-gray-700 text-white p-4 text-xs">
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