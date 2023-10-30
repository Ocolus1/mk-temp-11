import React from "react";
import quote from "../../src/assets/quote.svg";

const TestimonialSection = () => (
  <section className="benefit__section">
    <div className="max-w-5xl mx-auto flex flex-col lg:flex-row lg:items-center lg:justify-between gap-x-10 px-7 lg:px-10 py-14 ">
      <div className="benefit-left-part w-full px-10 py-2 lg:p-0 lg:w-1/2 max-w-2xl mx-auto">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-center">
          Trusted clients
        </h2>
        <div className="benefit-headline flex flex-col gap-y-2">
          <img className="w-8 h-8" src={quote} alt="" />
          <h3 className="text-base md:text-lg lg:text-2xl font-medium text-stone-600">
            “Learning curve infrastructure value proposition advisor strategy
            user experience hypotheses investor.”
          </h3>
          <p className="text-slate-900 font-semibold mt-2">
            Larry D, Manager,{" "}
            <span className="text-slate-500/50">PRODUCT @ BEHANCE</span>
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default TestimonialSection;
