"use client";
import React from "react";
import { Typewriter } from "react-simple-typewriter";
import { Tooltip } from "antd";
import Link from "next/link";
import { IoChevronDownOutline } from "react-icons/io5";
import {
  FaLinkedinIn,
  FaXTwitter,
  FaGithub,
  FaBehance,
  FaDribbble,
  FaArrowUpFromBracket,
  FaArrowRightToBracket,
} from "react-icons/fa6";
import HeroBgAnimation from "./HeroBgAnimation";
import HeroBg from "../../assets/images/hero.svg";
import Image from "next/image";

const Hero = () => {
  return (
    <section
      id="#hero"
      className="relative h-full w-full bg-[#1A1A2E] text-typography-light [clip-path:_polygon(0%_0%,_100%_0,_100%_94%,_50%_100%,_0_94%)]"
    >
      <div className="flex flex-col mt-16 sm:mt-24 md:flex-row items-center justify-center md:justify-between section-container">
        {/* <!-- ========== home blob start ========== --> */}
        <div className="self-center order-1 sm:order-2">
          <svg
            className="w-56 fill-primary md:w-72 lg:w-96"
            viewBox="0 0 200 187"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
          >
            <mask id="mask0" style={{ maskType: "alpha" }}>
              <path
                d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 165.547
                                        130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 129.362C2.45775
                                        97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 -0.149132 97.9666
                                        0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z"
              />
            </mask>
            <g mask="url(#mask0)">
              <path
                d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346
                                        165.547 130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403
                                        129.362C2.45775 97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028
                                        -0.149132 97.9666 0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z"
              />
              {/* <!-- home image --> */}
              {/* <image className="w-44" x="34" y="16" xlinkHref={HomeImage} /> */}
              {/* <!-- home image --> */}
            </g>
          </svg>
        </div>
        {/* <!-- ========== home blob end ========== --> */}

        {/* <!-- ========== home texts start ========== --> */}
        <div className="max-w-[598px] text-center md:text-left order-2 md:order-1">
          <h6 className="font-medium text-primary-light mt-4 md:mt-0 mb-2 md:mb-4">
            Hello, my name is{" "}
            <span className="animate-blink font-bold text-typography-muted">
              _
            </span>
          </h6>
          <h1 className="font-bold text-4xl sm:text-7xl font-secondary text-primary">
            Sakib Reza
          </h1>
          {/* <!-- home typing animated text --> */}
          <h3 className="mt-2 md:mt-6 font-medium text-xl md:text-3xl">
            I{`'`}m a{" "}
            <span className="text-primary font-secondary">
              <Typewriter
                cursor
                cursorBlinking
                cursorColor="#fff"
                delaySpeed={2000}
                deleteSpeed={80}
                loop={0}
                typeSpeed={120}
                words={[
                  "Web & App Developer",
                  "Ui/Ux Designer",
                  "Software Engineer",
                  "Full-Stack Developer",
                  "Continuous Learner",
                ]}
              />
            </span>
          </h3>

          <p className="mt-4 mb-6 text-sm sm:text-base">
            I’m a Front-end Web developer who is passionate about making
            error-free websites with 100% client satisfaction. I am strategic,
            goal-oriented, and always work with an end goal in mind.
          </p>

          <div className="flex justify-center md:justify-start gap-x-4">
            <a href="#contact" className="btn btn-primary" role="button">
              Higher Me <FaArrowUpFromBracket />
            </a>
            <a href="#portfolio" className="btn btn-secondary" role="button">
              See Projects <FaArrowRightToBracket />
            </a>
          </div>
        </div>
        {/* <!-- ========== home Contents end ========== --> */}
      </div>

      {/* home social */}
      <div className="flex xl:flex-col items-center gap-y-5 gap-x-3 justify-center md:justify-start w-full xl:w-min absolute bottom-20 left-0 md:left-2 lg:left-4 xl:bottom-36 xl:left-6 before:content-[''] before:absolute before:-bottom-24 before:left-[6px] before:h-14 before:w-[1px] before:bg-white before:hidden xl:before:block">
        <span className="text-sm xl:hidden">Checkout My: </span>
        <Tooltip title="LinkedIn" placement="right" color={"#4C516D"}>
        <a href="#" className="hover:text-primary transition-colors">
          <FaLinkedinIn />
        </a>
        </Tooltip>
        <Tooltip title="X - Twitter" placement="right" color={"#4C516D"}>
        <a href="#" className="hover:text-primary transition-colors">
          <FaXTwitter />
        </a>
        </Tooltip>
        <Tooltip title="GitHub" placement="right" color={"#4C516D"}>
        <a href="#" className="hover:text-primary transition-colors">
          <FaGithub />
        </a>
        </Tooltip>
        <Tooltip title="Behance" placement="right" color={"#4C516D"}>
        <a href="#" className="hover:text-primary transition-colors">
          <FaBehance />
        </a>
        </Tooltip>
        <Tooltip title="Dribbble" placement="right" color={"#4C516D"}>
        <a href="#" className="hover:text-primary transition-colors">
          <FaDribbble />
        </a>
        </Tooltip>
      </div>

      {/* <!-- ========== scroll down indicator start ========== --> */}
      <div className="w-full flex justify-center mt-12">
        <Tooltip title="Scroll Down" placement="top" color={"#4C516D"}>
          <Link href="#about" className="text-4xl animate-bounce">
            <IoChevronDownOutline />
          </Link>
        </Tooltip>
      </div>
      {/* <!-- ========== scroll down indicator end ========== --> */}

      {/* Animated Square */}
      <HeroBgAnimation />

      {/* Hero Background Images */}
      <Image
        src={HeroBg}
        alt=""
        className="absolute top-0 left-0 -z-10 hidden md:block"
      />
    </section>
  );
};

export default Hero;
