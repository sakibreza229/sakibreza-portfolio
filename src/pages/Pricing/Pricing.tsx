import React from "react";
import { HeadingSecondary } from "@/components/Headings";
import Image from "next/image";
import { pricingPlans } from "@/data/PricingData";
import { FaCheck } from "react-icons/fa6";

const Pricing = () => {
  return (
    <section>
      <HeadingSecondary title="Pricing Plans" subtitle="Choose your plan" />
      <div className="grid grid-cols-1 gap-y-6 md:grid-cols-3 items-center max-w-screen-lg mx-auto px-4">
        {pricingPlans.map(
          ({
            title,
            description,
            price,
            billing,
            features,
            imgSrc,
            isRecommended,
          }) => (
            <div
              key={title}
              className={`${
                isRecommended ? "relative py-16" : "py-10"
              } px-10 bg-white text-center rounded-3xl shadow-xl cursor-help`}
            >
              <Image
                src={imgSrc}
                alt={title}
                width={64}
                height={64}
                className="mx-auto mb-5"
              />
              <h3 className="mb-2 text-xl font-semibold text-typography-title">{title}</h3>
              <p className="text-sm font-medium text-primary-dark">{description}</p>
              <ul className="my-4 text-sm">
                {features.map((feature, idx) => (
                  <li
                    key={idx}
                    className="flex items-center justify-center gap-x-1"
                  >
                    <FaCheck className="text-primary" />
                    {feature}
                  </li>
                ))}
              </ul>
              <h3 className="text-2xl font-bold mb-5">
                <em
                  className="text-sm mr-2 align-super not-italic"
                >
                  $
                </em>
                <span className="text-primary-dark">{price}</span>
                <span className="text-base font-normal ml-3">{billing}</span>
              </h3>
              <a
                href="#"
                className="inline-flex px-6 py-2 bg-primary text-typography-light font-medium rounded-full hover:scale-90 transition-transform ease-in"
              >
                Get Started
              </a>
              {isRecommended && (
                <span className="absolute left-0 top-9 text-typography-light bg-primary -rotate-90 px-3 py-1 text-sm rounded-tl-3xl rounded-bl-3xl">
                  Recommended
                </span>
              )}
            </div>
          )
        )}
      </div>
    </section>
  );
};

export default Pricing;
