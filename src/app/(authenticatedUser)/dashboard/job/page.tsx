import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

// components/JobPosting.js
export default function JobPosting() {
  return (
    <div className="max-w-xl mx-auto p-4 bg-white shadow-md rounded-md">
      <div className="flex items-center space-x-4">
        <Avatar className=" w-12 h-12  border-2 border-purple-700">
          <AvatarImage src="" />
          <AvatarFallback>DZ</AvatarFallback>
        </Avatar>
        <div className="flex gap-[2rem]">
          <div>
            <h2 className="text-xl font-bold">Jane Doe </h2>
            <span className="text-sm text-gray-500">Pro Plus</span>
          </div>
          <div className="flex flex-wrap items-center space-x-2 mt-1">
            <span className="px-2 py-1 text-xs font-semibold text-white bg-purple-700 rounded-lg">
              Part-Time
            </span>
            <span className="px-2 py-1 text-xs font-semibold text-white bg-purple-700 rounded-lg">
              Remote
            </span>
            <span className="px-2 py-1 text-xs font-semibold text-white bg-purple-700 rounded-lg">
              No Experience
            </span>
            <span className="px-2 py-1 text-xs font-semibold text-white bg-purple-700 rounded-lg">
              Tech
            </span>
          </div>
        </div>
      </div>
      <div className="mt-4">
        <h3 className="text-2xl font-semibold">Job Title of the Job Posting</h3>
        <p className="text-gray-600">~ 40,000 Pesos</p>
        <p className="mt-2 text-gray-800">
          Job Description of the Job that is Posted by the User with all the
          Details but cutted to the first paragraph only and then replaced
          with....
        </p>
      </div>
      <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
        <button className=" px-4 py-2 text-purple-700 border border-purple-700 rounded-md">
          Save for Later
        </button>
        <button className=" px-4 py-2 text-white bg-purple-700 rounded-md">
          Apply Now
        </button>
      </div>
    </div>
  );
}
