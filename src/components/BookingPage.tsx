import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

import jasonProfile from "@/assets/images/Jason Hill Profile.png";
import twoJumpingBoys from "@/assets/images/Two Jumping Into Data Sets SHP.png";

const BookingPage = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="w-full flex flex-col text-center mb-12 pt-8">
        <h1 className="text-4xl font-bold text-gray-900 md:text-6xl">
          Let's Build Something Great Together
        </h1>
      </div>

      {/* Booking Section */}
      <Accordion type="single" collapsible className="px-8">
        <AccordionItem value="item-1" className="border-gray-200">
          <AccordionTrigger className="text-xl py-4 px-4 hover:bg-gray-100 rounded-lg transition-all">
            30-Minute Strategy Call
          </AccordionTrigger>
          <AccordionContent>
            <div className="w-full overflow-hidden">
              <iframe
                src="https://calendar.app.google/3tCZ3Ce3CrvT6qx36"
                className="w-full h-[600px] border-0"
              ></iframe>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2" className="border-gray-200">
          <AccordionTrigger className="text-xl py-4 px-4 hover:bg-gray-100 rounded-lg transition-all">
            45-Minute Deep Dive
          </AccordionTrigger>
          <AccordionContent>
            <div className="w-full overflow-hidden">
              <iframe
                src="https://calendar.app.google/1bbQ8NYoZjFEWtY38"
                className="w-full h-[600px] border-0"
              ></iframe>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      {/* Bio Section */}
      <Card className="max-w-4xl mx-auto mt-12 lg:p-8 border border-gray-200 shadow-sm">
        <div className="flex flex-col items-center">
          <img
            src={jasonProfile}
            alt="Jason Hill Profile"
            className="w-24 h-24 rounded-full mb-6 object-cover"
          />
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Jason Hill</h2>
          <p className="text-gray-600">Founder, The Vortex Banker, Infinite Wealth Strategist & Serial Entrepreneur</p>
        </div>

        <div className="space-y-4 text-gray-700 leading-relaxed mt-6">
          <p>
            As a lifelong entrepreneur who launched my first business at age 8, I've developed unique insights by implementing what works in my own ventures. Through my 20-year marketing career and entrepreneurial experience, I've learned how to protect, preserve, and grow wealth.
          </p>
          <p>
            I'm licensed in 17 states as an Infinite Wealth Strategist and Vortex Banker, offering one-of-a-kind tax strategies along with wealth generation and preservation methods rarely discussed publicly.
          </p>
          <p>
            My exclusive marketing systems help clients create environments where customers eagerly seek them out. This combination of marketing expertise and financial optimization creates opportunities that scale.
          </p>
          <p>
            Beyond business, I'm a dedicated father, husband, and a two-time national champion basketball coach who has played, coached, officiated, and refereed more than 30,000 basketball games across the country.
          </p>
          <p>
            My approach to entrepreneurship and wealth creation mirrors my coaching philosophy: strategic planning, disciplined execution, and a winning mindset.
          </p>
          <p>
            Let's connect to explore how my proven strategies can help you grow your business, build wealth, and most importantly, help you preserve it for generations to come.
          </p>
          <p className="text-xl font-bold">
            You Work Hard for Your Money. Let's Help You KEEP It!
          </p>
        </div>
      </Card>

      {/* Disclaimer Section */}
      <div className="max-w-4xl mx-auto mt-12 text-sm text-gray-600 p-6">
        <h3 className="text-lg font-semibold mb-2">Important Disclosures</h3>
        <p>
          I am licensed to sell insurance and financial products in 17 states. I will create a custom plan for your unique situation. This website and its content are for informational purposes only and do not constitute financial, legal, or tax advice.
        </p>
        <p className="text-xs mt-6">
          © {new Date().getFullYear()} All rights reserved. Insurance and Financial Services Professional.
        </p>
      </div>
    </>
  );
};

export default BookingPage;
