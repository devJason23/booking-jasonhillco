import React from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

// ✅ NEW: Import images the Vite way
import jasonProfile from "@/assets/images/Jason Hill Profile.png";
import broJumping from "@/assets/images/Bro Jumping into Dads arms SHIP.png";

const BookingPage = () => {
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
            <AccordionItem value="30min" className="border-gray-200">
              <AccordionTrigger className="text-xl py-4 px-6 hover:bg-gray-100 rounded-lg transition-all">
                30-Minute Strategy Call
              </AccordionTrigger>
              <AccordionContent className="pt-4">
                <div className="rounded-lg overflow-hidden">
                  <iframe 
                    src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ2LqMcMB9GFZ21_Rny9D56oT2bVN8ucxACV_ryvI6FO_NNErpfGjjQpQhl0qXa9s1kHfbqP8WVa?gv=true" 
                    className="w-full h-[600px] border-0"
                  />
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="45min" className="border-gray-200">
              <AccordionTrigger className="text-xl py-4 px-6 hover:bg-gray-100 rounded-lg transition-all">
                45-Minute Deep Dive
              </AccordionTrigger>
              <AccordionContent className="pt-4">
                <div className="rounded-lg overflow-hidden">
                  <iframe 
                    src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ2_NRn4F6NESu9dbHdPLgqET8FWRQHrzFqfnLwJMaq_-lEFpcJlYf39drii1CUa3AJPJCbevADY?gv=true" 
                    className="w-full h-[600px] border-0"
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
              <p className="text-gray-600">Infinite Wealth Strategist & National Basketball Champion</p>
            </div>
          </div>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              As a lifelong entrepreneur who launched my first business at age 8, I've developed unique insights by implementing what works in my own ventures...
            </p>
            {/* (rest of your paragraphs unchanged) */}
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
            I am licensed to sell insurance and financial products in 37 states...
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
