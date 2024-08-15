export default function Footer() {
    return (
      <footer className="bg-white py-8 border-t border-gray-200">
        <div className=" mx-auto grid max-w-[80rem]  px-4">
          <div className="md:flex justify-between">
            <div className=" text-center md:text-left">
              <h2 className="text-[2.5rem] font-extrabold text-purple-600">
                AutoSell.io
              </h2>
              <form className="mt-4 space-y-3">
                <label
                  htmlFor="email"
                  className="block text-[1.25rem] text-purple-700 text-sm font-bold"
                >
                  Join Our Email Newsletter
                </label>
                <div className="mt-1 flex rounded-md shadow-sm">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="flex-1 block w-full rounded-none rounded-l-md sm:text-sm border border-purple-700"
                  />
                  <button
                    type="submit"
                    className="inline-flex items-center px-5 h-[2.5rem] font-extrabold rounded-r-md border border-gray-300 bg-purple-600 text-white text-sm"
                  >
                    Submit
                  </button>
                </div>
                <p className="mt-2 text-xs text-gray-500">
                  By Clicking Submit You Agree to Our Policies
                </p>
              </form>
            </div>
            <div className="flex mt-[3rem] md:mt-[]">
              <div className="mr-[4.375rem] flex-1 text-start">
                <h2 className="font-extrabold mb-[1rem]">More</h2>
                <ul>
                  <li>We Are Hiring!</li>
                  <li>About</li>
                  <li>Price</li>
                  <li>Demo</li>
                  <li>Help Center</li>
                  <li>Blog</li>
                </ul>
              </div>
              <div className="flex flex-col gap-[2rem]">
                <div>
                  <h2 className="font-extrabold mb-[1rem]">Reach Out To Us</h2>
                  <ul>
                    <li>info@autosell.io</li>
                    <li>+63 (091) 234-5678</li>
                    <li>@autosell.io</li>
                  </ul>
                </div>
                <div>
                  <h2 className="font-extrabold mb-[1rem]">Docs</h2>
                  <ul>
                    <li>Privacy Policy</li>
                    <li>Refund Policy</li>
                    <li>Terms and Conditions</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="pt-[5rem]">
          <div className="container mx-auto text-center">
            <p className="text-sm">
              &copy; 2024 Autosell.io, All Rights Reserved
            </p>
          </div>
        </div>
      </footer>
    );
  }