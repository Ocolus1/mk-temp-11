import React from "react";
import company1 from "../../src/assets/company-1.svg";
import company2 from "../../src/assets/company-2.svg";
import company3 from "../../src/assets/company-3.svg";
import company4 from "../../src/assets/company-4.svg";

function CompanyFeatured() {
  return (
    <section className="company__section max-w-5xl mx-auto pt-48 md:pt-72 pb-10 lg:py-20 px-10 lg:px-10 xl:px-0">
      <div className="flex items-center flex-col lg:flex-row gap-y-10 gap-x-5 border border-zinc-400/20 p-5 rounded-lg shadow-lg drop-shadow-lg">
        <div className="flex flex-col items-center justify-center w-72">
          <p className="font-bold text-2xl">10000+</p>
          <p className="text-slate-700/70 font-medium text-sm">
            Trusted Companie
          </p>
        </div>
        <div className="flex items-center flex-wrap gap-6 justify-between gap-x-5 w-[calc(100%-32px)]">
          <img src={company1} alt="" />
          <img src={company2} alt="" />
          <img src={company3} alt="" />
          <img src={company4} alt="" />
        </div>
      </div>
    </section>
  );
}

export default CompanyFeatured;
