
import React from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const BookingPage = () => {
  const personalImages = [
    "/lovable-uploads/13f98996-0b65-4fe7-859f-14a46e2336b6.png",
    "/lovable-uploads/5eac070c-5319-422c-92ab-8261d2de2286.png",
    "/lovable-uploads/ab4a31e0-c280-4cf6-910d-b4b62d97c17c.png",
    "/lovable-uploads/8bae2e98-990c-4721-b88d-6131ff14fae8.png",
    "/lovable-uploads/b1e593e6-2f90-457d-8e5e-07052c37cb99.png"
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900 p-4 md:p-8">
      {/* Hero Section */}
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
          Let&apos;s Build Something Great Together
        </h1>
      </div>

      {/* Image Gallery */}
      <div className="max-w-4xl mx-auto grid grid-cols-2 gap-8 mb-12">
        {personalImages.slice(0, 2).map((src, index) => (
          <img 
            key={index} 
            src={src} 
            alt={`Personal photo ${index + 1}`} 
            className="w-full h-[500px] rounded-lg shadow-md object-cover object-center transition-transform duration-300 hover:scale-105"
          />
        ))}
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
              src="/lovable-uploads/13f98996-0b65-4fe7-859f-14a46e2336b6.png" 
              alt="Profile" 
              className="w-24 h-24 rounded-full mr-6 object-cover"
            />
            <div>
              <h2 className="text-2xl font-bold text-gray-800">About Me</h2>
              <p className="text-gray-600">Infinite Wealth Strategist & National Basketball Champion</p>
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
              My approach to wealth creation mirrors my coaching philosophy: strategic planning, disciplined execution, and a winning mindset.
            </p>
            <p>
              Let's connect to explore how my proven strategies can help you grow your business and most importantly, keep more of what you earn.
            </p>
            <p>
              You Work HARD for Your Money, Let's Help You KEEP It!
            </p>
            <img 
              src="/lovable-uploads/ee074751-1fc9-4ca9-a147-6290cb95ff4c.png" 
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
