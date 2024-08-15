"use client";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { useRef } from "react";

export default function Home() {
  return (
    <div>
      <DisplayTextCard />
      <CarouselCard />
      <BenefitsTitle />
      <BenefitsCard />
    </div>
  );
}

function DisplayTextCard() {
  return (
    <div>
      <div className="flex flex-col max-w-[68.563rem] mt-[2.313rem] rounded-3xl gap-[3rem] mx-auto bg-gradient-to-br from-purple-700 from-35% via-indigo-700 via-43% to-emerald-300 to-100% px-[6.25rem] py-[5.625rem]">
        <div className="max-w-[57.313rem] text-center mx-auto space-y-8">
          <h1 className="text-white font-extrabold text-4xl sm:text-[3.125rem] sm:leading-[3.809rem]">
            #1 Online Earning Platform <br /> for Entrepreneurs and Freelancers
          </h1>
          <div className="max-w-[57.313rem]">
            <p className="text-white font-semibold leading-[1.219rem]">
              Autosell.io is an online earning platform for entrepreneurs and
              freelancers. Engage, post jobs, socialize, sell, participate in
              challenges, and connect with other entrepreneurs and freelancers.
            </p>
          </div>
          <Button className="bg-white text-purple-700 px-[1.875rem] py-[0.625rem] text-[1.25rem] font-bold rounded-full hover:bg-purple-900 hover:text-white ">
            Start Now For Free
          </Button>
        </div>
      </div>
    </div>
  );
}

function CarouselCard() {
  const plugin = useRef(Autoplay({ delay: 2000, stopOnInteraction: true }));
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      plugins={[plugin.current]}
      className="w-full p-5 lg:p-0 mt-[5.125rem]"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent className="gap-[2.188rem]">
        {Array.from({ length: 7 }).map((_, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/5 ">
            <div className="space-y-2">
              <div className="p-0">
                <Image
                  src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt=""
                  height={249}
                  width={380}
                  className="w-full object-cover h-[15.563rem] rounded-xl"
                />
              </div>
              <div className="px-1 space-y-1">
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-semibold">Jane Doe</span>
                  <div className="text-yellow-500">⭐⭐⭐⭐</div>
                </div>
                <p className="text-sm text-foreground">
                  Top Seller | Trusted | Verified
                </p>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}

function BenefitsTitle() {
  return (
    <div className=" my-[7.438rem] px-[1rem]">
      <div className="bg-purple-700 max-w-[28rem] mx-auto text-center px-[1.25rem] py-[1.5rem] rounded-[1.875rem]">
        <h2 className="text-white font-bold text-[1.875rem]">
          All The Benefits You Get
        </h2>
      </div>
    </div>
  );
}

function BenefitsCard() {
  return (
    <div className="px-[1rem]">
      <div className="flex flex-col gap-[9.375rem]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[1rem] md:gap-[6.75rem]  max-w-[68.813rem] mx-auto items-center">
          <div>
            <Image
              width={496}
              height={272}
              src="/images/system/landing-pages/image1.svg"
              alt=""
              className="h-50 w-full"
            />
          </div>
          <div>
            <h3 className="text-[2.5rem] font-extrabold text-purple-700">
              First-ever human-like chatbot
            </h3>
            <div className="font-medium text-purple-700">
              <p>• Train your bot to talk like a human</p>
              <p>• Customize based on your personality</p>
              <p>• Adjust tone and goals</p>
              <p>• Use different languages (duo)</p>
              <p>• Sell your products 24/7</p>
              <p>• Close deals with clients professionally</p>
              <p>• Integrate with your Facebook, Instagram, and website</p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[1rem] md:gap-[6.75rem]  max-w-[68.813rem] mx-auto items-center">
          <div>
            <h3 className="text-[2.5rem] font-extrabold text-purple-700">
              Community Programs
            </h3>
            <div className="font-medium text-purple-700">
              <p>• Build connections within the group chat.</p>
              <p>• Ask questions to experts in your field.</p>
              <p>• Enjoy weekly challenges and prizes.</p>
              <p>• Get paired with random people.</p>
              <p>• Chat anonymously and promote your social media.</p>
              <p>• Webinars and Video Calls</p>
            </div>
          </div>
          <div>
            <Image
              width={496}
              height={272}
              src="/images/system/landing-pages/image2.svg"
              alt=""
              className="h-50 w-full"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[1rem] md:gap-[6.75rem]  max-w-[68.813rem] mx-auto items-center">
          <div>
            <Image
              width={496}
              height={272}
              src="/images/system/landing-pages/image3.svg"
              alt=""
              className="h-50 w-full"
            />
          </div>
          <div>
            <h3 className="text-[2.5rem] font-extrabold text-purple-700">
              Offer and Hire Services
            </h3>
            <div className="font-medium text-purple-700">
              <p>• Offer your services</p>
              <p>• Hire someone to do the work for you</p>
              <p>• Protection against scammers</p>
              <p>• Unlimited uploads</p>
              <p>• Built-in landing page for you</p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[1rem] md:gap-[6.75rem]  max-w-[68.813rem] mx-auto items-center">
          <div>
            <h3 className="text-[2.5rem] font-extrabold text-purple-700">
              Buy and Sell Digital Products
            </h3>
            <div className="font-medium text-purple-700">
              <p>• Sell your digital products</p>
              <p>• Buy digital products</p>
              <p>• Easy to upload and download</p>
              <p>• Packed with built-in features</p>
              <p>• Unlimited uploads</p>
              <p>• Customize your own landing page</p>
            </div>
          </div>
          <div>
            <Image
              width={496}
              height={272}
              src="/images/system/landing-pages/image4.svg"
              alt=""
              className="h-50 w-full"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[1rem] md:gap-[6.75rem]  max-w-[68.813rem] mx-auto items-center">
          <div>
            <Image
              width={496}
              height={272}
              src="/images/system/landing-pages/image5.svg"
              alt=""
              className="h-50 w-full"
            />
          </div>
          <div>
            <h3 className="text-[2.5rem] font-extrabold text-purple-700">
              Built in Professional Portfolio
            </h3>
            <div className="font-medium text-purple-700">
              <p>• Act as your link in bio</p>
              <p>• Customize your own design</p>
              <p>• Add various features and sections</p>
              <p>• Showcase all your offers and services</p>
              <p>• Upload samples of your edits and work</p>
              <p>• Post uploads showcasing your expertise</p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[1rem] md:gap-[6.75rem]  max-w-[68.813rem] mx-auto items-center">
          <div>
            <h3 className="text-[2.5rem] font-extrabold text-purple-700">
              Newsfeed Upload
            </h3>
            <div className="font-medium text-purple-700">
              <p>• Post videos</p>
              <p>• Post carousels</p>
              <p>• Post text and images</p>
              <p>• Upload stories</p>
              <p>• Add, connect, and message others</p>
              <p>• Your new version of LinkedIn and Facebook</p>
            </div>
          </div>
          <div>
            <Image
              width={496}
              height={272}
              src="/images/system/landing-pages/image6.svg"
              alt=""
              className="h-50 w-full"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[1rem] md:gap-[6.75rem]  max-w-[68.813rem] mx-auto items-center">
          <div>
            <Image
              width={496}
              height={272}
              src="/images/system/landing-pages/image7.svg"
              alt=""
              className="h-50 w-full"
            />
          </div>
          <div>
            <h3 className="text-[2.5rem] font-extrabold text-purple-700">
              Newsfeed Upload{" "}
            </h3>
            <div className="font-medium text-purple-700">
              <p>• Post videos</p>
              <p>• Post carousels</p>
              <p>• Post text and images</p>
              <p>• Upload stories</p>
              <p>• Add, connect, and message others</p>
              <p>• Your new version of LinkedIn and Facebook</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
