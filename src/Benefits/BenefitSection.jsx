import React from "react";
import benefitImage from "../../src/assets/benefit-image.svg";
import checkMark from "../assets/checkmark.svg";

const BenefitSection = () => (
  <section className="benefit__section">
    <div className="max-w-5xl mx-auto flex flex-col lg:flex-row lg:items-center lg:justify-between gap-x-10 px-7 lg:px-10 py-14 ">
      <div className="benefit-left-part w-full px-10 py-2 lg:p-0 lg:w-1/2 max-w-2xl mx-auto">
        <div className="benefit-headline flex flex-col gap-y-2">
          <h3 className="text-base md:text-lg lg:text-2xl font-semibold text-stone-600">
            One click install in to any website
          </h3>
          <p className="text-slate-700 font-medium mt-2">
            Let your customers buy gift cards/certificates for your services &
            products already on your website
          </p>
        </div>
        <div className="flex flex-col gap-y-3.5 py-5">
          <div className="flex items-center gap-x-2">
            <img src={checkMark} alt="" />
            <p>Sell fixed value gift cards</p>
          </div>
          <div className="flex items-center gap-x-2">
            <img src={checkMark} alt="" />
            <p>Sell fixed value gift cards</p>
          </div>
          <div className="flex items-center gap-x-2">
            <img src={checkMark} alt="" />
            <p>Sell fixed value gift cards</p>
          </div>
        </div>
      </div>
      <div className="benefit-right-part w-full p-8 px-10 lg:p-0 lg:w-1/2 mx-auto">
        <img className="rounded-xl mx-auto ld:mx-0" src={benefitImage} alt="" />
      </div>
    </div>
  </section>
);

export default BenefitSection;
