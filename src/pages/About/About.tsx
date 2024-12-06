import React from "react";
import { HeadingSecondary } from "@/components/Headings";
import Image from "next/image";
import Counter from "@/components/Counter";

import {
  FaDownload,
  FaPlay,
  FaHourglassHalf,
  FaClipboardCheck,
  FaMedal,
  FaUsers,
} from "react-icons/fa6";

const About = () => {
  return (
    <section id="about" className="section-container">
      <HeadingSecondary title="About Me" subtitle="Introducing myself" />
      <div className="flex h-max flex-col md:flex-row justify-center items-center gap-y-2 gap-x-16 mb-10">
        <div className="w-full md:w-[40%] mb-4 lg:mb-0">
          {/* about image */}
          <Image
            src="/about-img.webp"
            alt="Sakib Reza"
            width={428}
            height={256}
            className="w-full max-h-64 rounded-xl shadow-md"
          />
        </div>

        <div className="about-data h-full w-full md:w-[60%]">
          <p className="text-justify mb-4">
            Hello! My name is Awais Mughal. I am working as a web developer as I
            create beautiful and responsive websites for you. They work with a
            variety of programming languages and technologies, such as HTML,
            CSS, JavaScript, and PHP, to create user-friendly, interactive, and
            visually appealing websites. Web developers may work on the
            front-end, which is the part of the website that users interact
            with, development and individuals create online life cycle, from
            concept and design to testing and deployment. Web individuals create
            online presence development is a fast-growing field, businesses,
            organizations, and individuals create online presence. {` `}
            <a href="#" className="text-primary hover:underline">
              Read More...
            </a>
          </p>

          {/* about description end */}

          <div className="flex justify-center items-center gap-4 md:justify-start mt-6">
            <a
              download="Sakib Reza - CV"
              href="assets/documents/Sakib Reza - CV.pdf"
              className="btn btn-primary"
            >
              Download CV <FaDownload />
            </a>
            <button className="btn btn-secondary">
              <FaPlay /> Watch Intro
            </button>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        <Counter
          target={3}
          sign={"+"}
          icon={<FaHourglassHalf />}
          label={"Years of Experience"}
        />
        <Counter
          target={20}
          sign={"+"}
          icon={<FaClipboardCheck />}
          label={"Completed Projects"}
        />
        <Counter
          target={17}
          sign={"+"}
          icon={<FaUsers />}
          label={"Satisfied Clients"}
        />
        <Counter
          target={98}
          sign={"%"}
          icon={<FaMedal />}
          label={"Outstanding Success"}
        />
      </div>
    </section>
  );
};

export default About;
