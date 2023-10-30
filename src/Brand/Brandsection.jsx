import React from "react";
import benefitImage from "../../src/assets/brandimg.png";
import brand1 from "../assets/itune.svg";
import brand2 from "../assets/amazon.svg";
import brand3 from "../assets/star.svg";

const brandData = [
  {
    name: "iTunes",
    image: brand1,
  },
  {
    name: "Amazon",
    image: brand2,
  },
  {
    name: "Vue gift cards",
    image: brand3,
  },
];

const BrandSection = () => (
  <section className="brand__section max-w-5xl mx-auto">
    <div>
      <div>
        <h2 className="font-bold text-2xl md:text-3xl lg:text-4xl">
          Best gift cards with your branding
        </h2>
        <p>
          Easily design beautiful gift cards/certificates with your branding &
          logo
        </p>
      </div>
      <div className="flex items-center justify-between py-7 gap-x-5">
        {brandData.map(({ name, image }) => (
          <div className="p-10 border border-slate-500/20 rounded-lg flex flex-col gap-y-2 items-center w-full lg:w-1/3">
            <img src={image} alt="" />
            <p>{name}</p>
          </div>
        ))}
      </div>
    </div>
    <div className="max-w-5xl bg-[#F5F3FE] rounded-xl mx-auto flex flex-col lg:flex-row lg:items-center lg:justify-between gap-x-10 px-7 lg:px-10 py-10 ">
      <div className="benefit-left-part w-full px-10 py-2 lg:p-0 lg:w-1/2 max-w-2xl mx-auto">
        <div className="benefit-headline flex flex-col gap-y-2">
          <h3 className="text-base md:text-lg lg:text-2xl font-semibold text-stone-600">
            Instant email & postal delivery
          </h3>
          <p className="text-slate-700 font-medium mt-2">
            We delivery best for our customers with an instant email through
            various platforms or through by the olden age postal delivery either
            way we deliver what you need
          </p>
          <a
            href=""
            className="bg-[#6738EE] text-white px-5 py-2 w-full lg:w-fit text-center lg:text-left rounded-lg"
          >
            Try for free
          </a>
        </div>
      </div>
      <div className="benefit-right-part w-full p-8 px-10 lg:p-0 lg:w-1/2 mx-auto">
        <img className="rounded-xl mx-auto ld:mx-0" src={benefitImage} alt="" />
      </div>
    </div>
  </section>
);

export default BrandSection;
