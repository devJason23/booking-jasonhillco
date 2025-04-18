
import React from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card } from "@/components/ui/card";

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
            className="w-full h-[300px] rounded-lg shadow-md object-cover transition-transform duration-300 hover:scale-105"
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
              As a lifelong entrepreneur who launched my first business at age 8, I&apos;ve developed unique insights by implementing what works in my own ventures. Through my 20-year marketing company and financial firm, I&apos;ve gained perspective on how thousands of successful businesses operate—from doctors and dentists to real estate investors, crypto enthusiasts, roofers, and service providers.
            </p>
            <p>
              I&apos;m licensed in 37 states as an Infinite Wealth Strategist and Vortex Banker, offering one-of-a-kind tax strategies along with wealth generation and preservation methods rarely accessible to the average person. My proven approaches help entrepreneurs substantially increase revenue while legally deferring income taxes.
            </p>
            <p>
              Let&apos;s connect to explore how my proven strategies can help you grow your business and keep more of what you earn.
            </p>
            <img 
              src="/lovable-uploads/ab4a31e0-c280-4cf6-910d-b4b62d97c17c.png" 
              alt="Landscape" 
              className="w-full h-auto rounded-lg shadow-md mt-8 object-cover"
            />
          </div>
        </div>
      </Card>
    </div>
  );
};

export default BookingPage;
