
import { useState } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card } from "@/components/ui/card";

export const BookingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1A1F2C] to-[#2A3040] text-white p-4 md:p-8">
      {/* Hero Section */}
      <div className="max-w-4xl mx-auto text-center mb-12 animate-fade-in">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
          Let&apos;s Build Something Great Together
        </h1>
      </div>

      {/* Booking Section */}
      <Card className="max-w-4xl mx-auto bg-white/5 backdrop-blur-lg border-white/10">
        <div className="p-6">
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="30min" className="border-white/10">
              <AccordionTrigger className="text-xl py-4 px-6 hover:bg-white/5 rounded-lg transition-all">
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

            <AccordionItem value="45min" className="border-white/10">
              <AccordionTrigger className="text-xl py-4 px-6 hover:bg-white/5 rounded-lg transition-all">
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
      <Card className="max-w-4xl mx-auto mt-12 bg-white/5 backdrop-blur-lg border-white/10">
        <div className="p-8">
          <h2 className="text-2xl font-bold mb-6 text-center">About Me</h2>
          <div className="space-y-4 text-gray-200 leading-relaxed">
            <p>
              As a lifelong entrepreneur who launched my first business at age 8, I&apos;ve developed unique insights by implementing what works in my own ventures. Through my 20-year marketing company and financial firm, I&apos;ve gained perspective on how thousands of successful businesses operate—from doctors and dentists to real estate investors, crypto enthusiasts, roofers, and service providers.
            </p>
            <p>
              I&apos;m licensed in 37 states as an Infinite Wealth Strategist and Vortex Banker, offering one-of-a-kind tax strategies along with wealth generation and preservation methods rarely accessible to the average person. My proven approaches help entrepreneurs substantially increase revenue while legally deferring income taxes. One client successfully deferred taxes on over $100 million in income, while our innovative strategy helps W2 earners reduce their tax burden by up to 50%.
            </p>
            <p>
              My exclusive marketing systems help clients create environments where customers eagerly seek them out. This combination of marketing expertise and financial optimization creates a powerful approach to wealth building that few can match.
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default BookingPage;
