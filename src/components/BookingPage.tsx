<Accordion type="single" collapsible className="px-8">
  <AccordionItem value="item-1" className="border-gray-200">
    <AccordionTrigger className="text-xl py-4 px-4 hover:bg-gray-100 rounded-lg transition-all">
      30-Minute Strategy Call
    </AccordionTrigger>
    <AccordionContent>
      <div className="max-w-4xl mx-auto relative w-full overflow-hidden min-h-[600px] flex justify-center items-start mt-8">
        {loading30 && (
          <div className="absolute inset-0 flex flex-col items-center justify-start pt-12 z-10">
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
        ></iframe>
      </div>
    </AccordionContent>
  </AccordionItem>

  <AccordionItem value="item-2" className="border-gray-200">
    <AccordionTrigger className="text-xl py-4 px-4 hover:bg-gray-100 rounded-lg transition-all">
      45-Minute Deep Dive
    </AccordionTrigger>
    <AccordionContent>
      <div className="max-w-4xl mx-auto relative w-full overflow-hidden min-h-[600px] flex justify-center items-start mt-8">
        {loading45 && (
          <div className="absolute inset-0 flex flex-col items-center justify-start pt-12 z-10">
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
        ></iframe>
      </div>
    </AccordionContent>
  </AccordionItem>
</Accordion>
