import React, { useState } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

// ✅ Local images
import jasonProfile from "@/assets/images/Jason Hill Profile.png";
import broJumping from "@/assets/images/Bro Jumping into Dads arms SHIP.png";

const BookingPage = () => {
  const [loading30, setLoading30] = useState(true);
  const [loading45, setLoading45] = useState(true);

  return (
    <div className="min-h-screen bg-white text-gray-900 p-4 md:p-8">
      {/* Hero Section */}
      <div className="max-w-4xl mx-auto text-center mb-12 mt-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
          Let&apos;s Build Something Great Together
        </h1>
      </div>

      {/* Booking Section */}
      <Card className="max-w-4xl mx-auto bg-gray-50 border border-gray-200 shadow-sm">
        <div className="p-6">
          <Accordion type="single" collapsible className="space-y-4">
            {/* 30-Minute Strategy Call */}
            <AccordionItem value="30min" className="border-gray-200">
              <AccordionTrigger className="text-xl py-4 px-6 hover:bg-gray-100 rounded-lg transition-all">
                30-Minute Strategy Call
              </AccordionTrigger>
              <AccordionContent className="pt-4">
                <div className="relative w-full overflow-hidden min-h-[600px] flex justify-center items-start">
                  {loading30 && (
                    <div className="absolute inset-0 flex flex-col items-center justify-center pt-12 z-10 bg-white">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="blue"
                        className="w-20 h-20 animate-bounce-smooth mb-4"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M8 7V3M16 7V3M3 11h18M5 20h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v11a2 2 0 002 2z"
                        />
                      </svg>
                      <p className="text-2xl font-extrabold text-blue-600 tracking-wide">
                        Dialing In Your Private Strategy Session...
                      </p>
                    </div>
                  )}
                  <iframe 
                    src="https://calendar.app.google/3tCZ3Ce3CrvT6qx36" 
                    className="w-full h-[600px] border-0"
                    onLoad={() => setLoading30(false)}
                  />
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* 45-Minute Deep Dive */}
            <AccordionItem value="45min" className="border-gray-200">
              <AccordionTrigger className="text-xl py-4 px-6 hover:bg-gray-100 rounded-lg transition-all">
                45-Minute Deep Dive
              </AccordionTrigger>
              <AccordionContent className="pt-4">
                <div className="relative w-full overflow-hidden min-h-[600px] flex justify-center items-start">
                  {loading45 && (
                    <div className="absolute inset-0 flex flex-col items-center justify-center pt-12 z-10 bg-white">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="indigo"
                        className="w-20 h-20 animate-bounce-smooth mb-4"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M8 7V3M16 7V3M3 11h18M5 20h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v11a2 2 0 002 2z"
                        />
                      </svg>
                      <p className="text-2xl font-extrabold text-indigo-600 tracking-wide">
                        Dialing In Your Private Strategy Session...
                      </p>
                    </div>
                  )}
                  <iframe 
                    src="https://calendar.app.google/1bbQ8NYoZjFEWtY38" 
                    className="w-full h-[600px] border-0"
                    onLoad={() => setLoading45(false)}
                  />
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </Card>

      {/* Bio Section */}
      <Card className="max-w-4xl mx-auto mt-12 bg-gray-50 border border-gray-200 shadow-sm">
        <div className="p-8">
          <div className="flex items-center mb-8">
            <img 
              src={jasonProfile} 
              alt="Jason Hill Profile" 
              className="w-24 h-24 rounded-full mr-6 object-cover"
            />
            <div>
              <h2 className="text-2xl font-bold text-gray-800">About Me</h2>
              <p className="text-gray-600">The Vortex Banker, Infinite Wealth Strategist & Lifelong Entrepreneur</p>
            </div>
          </div>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              As a lifelong entrepreneur who launched my first business at age 8, I've developed unique insights by implementing what works in my own ventures. Through my 20-year marketing company and financial firm, I've gained perspective on how thousands of successful businesses operate—from doctors and dentists to real estate investors, crypto enthusiasts, roofers, and service providers.
            </p>
            <p>
              I'm licensed in 37 states as an Infinite Wealth Strategist and Vortex Banker, offering one-of-a-kind tax strategies along with wealth generation and preservation methods rarely accessible to the average person. My proven approaches help entrepreneurs substantially increase revenue while legally deferring income taxes. One client successfully deferred taxes on over $100 million in income, while our innovative strategy helps W2 earners reduce their tax burden by up to 50%.
            </p>
            <p>
              My exclusive marketing systems help clients create environments where customers eagerly seek them out. This combination of marketing expertise and financial optimization creates a powerful approach to wealth building that few can match.
            </p>
            <p>
              Beyond business, I'm a dedicated father, husband, and a two-time national champion basketball coach who has played, coached, officiated and refereed more than 30,000 basketball games. I've experienced the sport from every angle—as a high-level player, coach, official, and parent—giving me a comprehensive understanding few others possess.
            </p>
            <p>
              My approach to entrepreneurship and wealth creation mirrors my coaching philosophy: strategic planning, disciplined execution, and a winning mindset.
            </p>
            <p>
              Let's connect to explore how my proven strategies can help you grow your business, build wealth and most importantly, help you preserve it for generations to come.
            </p>
            <p>
              You Work HARD for Your Money, Let's Help You KEEP It!
            </p>
            <img 
              src={broJumping} 
              alt="Basketball coaching moment" 
              className="w-full h-auto rounded-lg shadow-md mt-8 object-cover"
            />
          </div>
        </div>
      </Card>

      {/* Disclaimer Section */}
      <div className="max-w-4xl mx-auto mt-12 text-xs text-gray-600">
        <Separator className="my-8" />
        <div className="space-y-4">
          <p className="font-semibold">Important Disclosures:</p>
          <p>
            I am licensed to sell insurance and financial products in 37 states. I will create a custom plan for your unique situation. This website and its content are for informational purposes only and should not be considered as financial, tax, or legal advice. The information presented here does not constitute an offer to sell or a solicitation of an offer to buy any securities, insurance products, or other financial products.
          </p>
          <p className="text-xs mt-6">
            © {new Date().getFullYear()} All rights reserved. Insurance and Financial Services Professional.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BookingPage;
