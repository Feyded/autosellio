import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

export default function Page() {
  return (
    <div>
      <DisplayTextCard />
      <BenefitsCard />
      <DisplayTextDivider />
    </div>
  );
}

function DisplayTextCard() {
  return (
    <div className="flex flex-col gap-[3rem] mx-auto bg-gradient-to-br from-purple-700 from-35% via-indigo-700 via-43% to-emerald-300 to-100% px-[6.25rem] py-[5.625rem]">
      <div className="max-w-[57.313rem] text-center mx-auto space-y-[1.875rem]">
        <h1 className="text-white font-extrabold text-4xl sm:text-[3.125rem] sm:leading-[3.809rem]">
          About Us
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

function BenefitsCard() {
  return (
    <div className="px-[1rem] my-[11.438rem]">
      <div className="flex flex-col gap-[9.375rem]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[1rem] md:gap-[6.75rem]  max-w-[68.813rem] mx-auto items-center">
          <div>
            <h3 className="text-[2.5rem] mb-[1rem] font-extrabold text-purple-700">
              About Us
            </h3>
            <div className="font-medium text-purple-700">
              <p>
                Autosell.io is your ultimate platform for connecting, growing,
                and succeeding as an entrepreneur. We bring together a vibrant
                community of like-minded individuals to offer services, buy and
                sell digital products, and customize landing pages. Our goal is
                to provide an all-in-one solution that eliminates the need for
                multiple tools, saving you time and money while boosting your
                productivity and sales.
              </p>
            </div>
          </div>
          <div>
            <Image
              width={496}
              height={364}
              src="/images/system/landing-pages/image8.svg"
              alt=""
              className="h-50 w-full"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[1rem] md:gap-[6.75rem]  max-w-[68.813rem] mx-auto items-center">
          <div>
            <Image
              width={496}
              height={364}
              src="/images/system/landing-pages/image9.svg"
              alt=""
              className="h-50 w-full"
            />
          </div>
          <div>
            <h3 className="text-[2.5rem] mb-[1rem] font-extrabold text-purple-700">
              Vision
            </h3>
            <div className="font-medium text-purple-700">
              <p>
                At Autosell.io, we envision a thriving community where
                entrepreneurs grow and succeed together. Our platform empowers
                users to earn, offer services, and automate their businesses for
                more sales. We aim to create a network of successful
                entrepreneurs, providing an all-in-one solution that saves money
                by replacing the need for multiple expensive tools.
              </p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[1rem] md:gap-[6.75rem]  max-w-[68.813rem] mx-auto items-center">
          <div>
            <h3 className="text-[2.5rem] mb-[1rem] font-extrabold text-purple-700">
              Why Choose Us?
            </h3>
            <div className="font-medium text-purple-700">
              <p>
                Autosell.io is designed for modern entrepreneurs, offering a
                comprehensive platform to showcase portfolios, streamline
                operations, and grow brands. Enjoy unlimited uploads,
                customizable landing pages, and a dynamic community. With robust
                scam protection and a supportive network, Autosell.io helps you
                focus on growth and success. Embrace the future of
                entrepreneurship with Autosell.io, where innovation meets
                opportunity.
              </p>
            </div>
          </div>
          <div>
            <Image
              width={496}
              height={364}
              src="/images/system/landing-pages/image10.svg"
              alt=""
              className="h-50 w-full"
            />
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
