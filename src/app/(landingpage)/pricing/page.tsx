import { Button } from "@/components/ui/button";
import React from "react";

export default function Page() {
  return (
    <div>
      <DisplayTextCard />
      <PricingTable />
      <DisplayTextDivider />
    </div>
  );
}

function DisplayTextCard() {
  return (
    <div className="flex flex-col gap-[3rem] mx-auto bg-gradient-to-br from-purple-700 from-35% via-indigo-700 via-43% to-emerald-300 to-100% px-[6.25rem] py-[5.625rem]">
      <div className="max-w-[57.313rem] text-center mx-auto space-y-[1.875rem]">
        <h1 className="text-white font-extrabold text-4xl sm:text-[3.125rem] sm:leading-[3.809rem]">
          Pricing
        </h1>
        <div className="max-w-[52.75rem]">
          <p className="text-white text-[1rem] font-semibold leading-[1.219rem]">
            Autosell.io is an online earning platform for entrepreneurs and
            freelancers. Engage, post jobs, socialize, sell, participate in
            challenges, and connect with other entrepreneurs and freelancers.
          </p>
        </div>
        <div className="space-x-[0.625rem] space-y-[0.625rem]">
          <Button className="bg-white text-purple-700 w-[15.75rem] text-[1.25rem] font-bold rounded-full hover:bg-purple-900 hover:text-white ">
            Start Now For Free
          </Button>
          <Button className="bg-transparent textwhite border border-white w-[15.75rem] text-[1.25rem] font-bold rounded-full hover:bg-purple-900 hover:text-white ">
            About Us
          </Button>
        </div>
      </div>
    </div>
  );
}

function PricingTable() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <div className="w-full max-w-6xl mx-auto">
        <div className="flex items-center justify-center mt-[3.25rem] mb-[3.5rem]">
          <button className="px-[4.5rem] py-2 font-semibold text-white bg-purple-700 rounded-l-full focus:outline-none">
            Monthly
          </button>
          <button className="px-[4.5rem] py-2 font-semibold text-purple-500 bg-white border rounded-r-full focus:outline-none">
            Yearly
          </button>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 p-2">
          {/* Basic Plan */}
          <div className="p-6 bg-white rounded-lg border border-purple-700 shadow-md">
            <h2 className="text-center font-semibold text-[1.563rem] text-purple-700 mb-[2.688rem]">
              Basic
            </h2>
            <p className="mb-4 text-4xl font-bold text-center text-purple-700">
              $4<span className="text-lg font-normal">/month</span>
            </p>
            <p className="mb-6 text-center text-gray-600">billed Monthly</p>
            <ul className="mb-6 space-y-2 text-gray-800">
              <li className="flex items-center">
                <span className="mr-2 text-purple-500">•</span> 6% Transaction
                Fee
              </li>
              <li className="flex items-center">
                <span className="mr-2 text-purple-500">•</span> 30 Network New
                People
              </li>
              <li className="flex items-center">
                <span className="mr-2 text-purple-500">•</span> 3 Group chats
              </li>
              <li className="flex items-center">
                <span className="mr-2 text-purple-500">•</span> 500 Chatbot
                Contacts
              </li>
              <li className="flex items-center">
                <span className="mr-2 text-purple-500">•</span> Unlock Courses
              </li>
              <li className="flex items-center">
                <span className="mr-2 text-purple-500">•</span> Customize
                Portfolio
              </li>
              <li className="flex items-center">
                <span className="mr-2 text-purple-500">•</span> Customize
                Landing Page
              </li>
              <li className="flex items-center">
                <span className="mr-2 text-purple-500">•</span> Add Videos
              </li>
              <li className="flex items-center">
                <span className="mr-2 text-purple-500">•</span> Add Animations
              </li>
              <li className="flex items-center">
                <span className="mr-2 text-purple-500">•</span> Myday Feature
              </li>
              <li className="flex items-center">
                <span className="mr-2 text-purple-500">•</span> Webinars
              </li>
              <li className="flex items-center">
                <span className="mr-2 text-purple-500">•</span> Weekly meetings
              </li>
              <li className="flex items-center">
                <span className="mr-2 text-purple-500">•</span> Community
                Programs
              </li>
              <li className="flex items-center">
                <span className="mr-2 text-purple-500">•</span> Integrate
              </li>
              <li className="flex items-center">
                <span className="mr-2 text-purple-500">•</span> Analytics
              </li>
              <li className="flex items-center">
                <span className="mr-2 text-purple-500">•</span> Payment Links
              </li>
            </ul>
            <button className="w-full px-4 py-2 font-semibold text-white bg-gradient-to-r from-purple-400 to-blue-500 rounded-full">
              3 Days Trial
            </button>
            <p className="mt-4 text-sm text-center text-gray-500">
              Cancel Anytime
            </p>
          </div>
          {/* Pro Plan */}
          <div className="p-6 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg shadow-md text-white">
            <h2 className="text-center font-semibold text-[1.563rem] mb-[2.688rem]">
              Pro
            </h2>
            <p className="mb-4 text-4xl font-bold text-center text-white">
              $7<span className="text-lg font-normal">/month</span>
            </p>{" "}
            <p className="mb-6 text-center">billed Monthly</p>
            <ul className="mb-6 space-y-2">
              <li className="flex items-center">
                <span className="mr-2">•</span> Blue Check
              </li>
              <li className="flex items-center">
                <span className="mr-2">•</span> 5% Transaction Fee
              </li>
              <li className="flex items-center">
                <span className="mr-2">•</span> 5 Network New People
              </li>
              <li className="flex items-center">
                <span className="mr-2">•</span> 5 Group chats
              </li>
              <li className="flex items-center">
                <span className="mr-2">•</span>Unlock Courses
              </li>
              <li className="flex items-center">
                <span className="mr-2">•</span>Customize Portfolio
              </li>
              <li className="flex items-center">
                <span className="mr-2">•</span>Customize Landing Page
              </li>
              <li className="flex items-center">
                <span className="mr-2">•</span>Add Videos
              </li>
              <li className="flex items-center">
                <span className="mr-2">•</span>Add Animation
              </li>
              <li className="flex items-center">
                <span className="mr-2">•</span>Stories Feature
              </li>
              <li className="flex items-center">
                <span className="mr-2">•</span>Webinars
              </li>
              <li className="flex items-center">
                <span className="mr-2">•</span>Weekly meetings
              </li>
              <li className="flex items-center">
                <span className="mr-2">•</span>Community Programs
              </li>
              <li className="flex items-center">
                <span className="mr-2">•</span>Integrate
              </li>
              <li className="flex items-center">
                <span className="mr-2">•</span>Analytics
              </li>
              <li className="flex items-center">
                <span className="mr-2">•</span>Payment Links
              </li>
            </ul>
            <button className="w-full px-4 py-2 font-semibold text-purple-700 bg-white rounded-full">
              3 Days Trial
            </button>
            <p className="mt-4 text-sm text-center text-white">
              Cancel Anytime
            </p>
          </div>
          {/* Pro+ Plan */}
          <div className="p-6 bg-white rounded-lg border border-purple-700 shadow-md">
            <h2 className="text-center font-semibold text-[1.563rem] text-purple-700 mb-[2.688rem]">
              Pro+
            </h2>
            <p className="mb-4 text-4xl font-bold text-center text-purple-700">
              $39.9<span className="text-lg font-normal">/month</span>
            </p>
            <p className="mb-6 text-center">billed Monthly</p>
            <ul className="mb-6 space-y-2">
              <li className="flex items-center">
                <span className="mr-2">•</span> Blue Check
              </li>
              <li className="flex items-center">
                <span className="mr-2">•</span> 5% Transaction Fee
              </li>
              <li className="flex items-center">
                <span className="mr-2">•</span> 5 Network New People
              </li>
              <li className="flex items-center">
                <span className="mr-2">•</span> 5 Group chats
              </li>
              <li className="flex items-center">
                <span className="mr-2">•</span>Unlock Courses
              </li>
              <li className="flex items-center">
                <span className="mr-2">•</span>Customize Portfolio
              </li>
              <li className="flex items-center">
                <span className="mr-2">•</span>Customize Landing Page
              </li>
              <li className="flex items-center">
                <span className="mr-2">•</span>Add Videos
              </li>
              <li className="flex items-center">
                <span className="mr-2">•</span>Add Animation
              </li>
              <li className="flex items-center">
                <span className="mr-2">•</span>Stories Feature
              </li>
              <li className="flex items-center">
                <span className="mr-2">•</span>Webinars
              </li>
              <li className="flex items-center">
                <span className="mr-2">•</span>Weekly meetings
              </li>
              <li className="flex items-center">
                <span className="mr-2">•</span>Community Programs
              </li>
              <li className="flex items-center">
                <span className="mr-2">•</span>Integrate
              </li>
              <li className="flex items-center">
                <span className="mr-2">•</span>Analytics
              </li>
              <li className="flex items-center">
                <span className="mr-2">•</span>Payment Links
              </li>
            </ul>
            <button className="w-full px-4 py-2 font-semibold text-white bg-gradient-to-r from-purple-400 to-blue-500 rounded-full">
              3 Days Trial
            </button>
            <p className="mt-4 text-sm text-center text-gray-500">
              Cancel Anytime
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function DisplayTextDivider() {
  return (
    <div className="bg-gradient-to-b from-purple-700 to-emerald-300 mt-[7.438rem] flex flex-col items-center px-[3.125rem] py-[4.625rem] gap-[2.125rem]">
      <h2 className="font-bold text-[2.188rem] text-white">
        “We Want To See Millions Of Entrepreneurs Succeed”
      </h2>
      <Button className="bg-white text-purple-700 w-[15.75rem] text-[1.25rem] font-bold rounded-full hover:bg-purple-900 hover:text-white ">
        Start Now For Free
      </Button>
    </div>
  );
}


