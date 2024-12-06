"use client";
import { HeadingPrimary } from "@/components/Headings";
import SkillCard from "./SkillCard";
import { languages, frameworks, tools } from "@/data/SkillsData"
import React, { useState } from "react";
import { IoLanguageSharp, IoLibrary } from "react-icons/io5";
import { FaTools } from "react-icons/fa";

const Skills = () => {
    const [activeToggle, setActiveToggle] = useState("languages");
    
    const handleToggle = (tab: string): void => {
        setActiveToggle(tab);
      };
    
    const SkillsCategory = () => {
      return (
        <div className="space-x-4 text-secondary-light font-medium">
          <button
            onClick={() => handleToggle("languages")}
            className={`inline-flex items-center gap-1 ${
              activeToggle == "languages"
                ? "text-primary"
                : ""
            }`}
          >
            <IoLanguageSharp />
            Languages
          </button>
          <button
            onClick={() => handleToggle("frameworks")}
            className={`inline-flex items-center gap-1 ${
              activeToggle == "frameworks"
                ? "text-primary"
                : ""
            }`}
          >
            <IoLibrary />
            Frameworks
          </button>
          <button
            onClick={() => handleToggle("tools")}
            className={`inline-flex items-center gap-1 ${
              activeToggle == "tools" ? "text-primary" : ""
            }`}
          >
            <FaTools />
            Tools & Utilities
          </button>
        </div>
      );
    };

  return (
    <section className="section-container">
      <HeadingPrimary title="Skills" subtitle="My tech stack" context={<SkillsCategory />} />

      <div className="mt-8">
          <div
            className={`flex-wrap justify-center md:justify-normal gap-4 ${
              activeToggle == "languages" ? "flex" : "hidden"
            }`}
          >
            {languages.map((language) => (
              <SkillCard key={language.name} skill={language} />
            ))}
          </div>
          <div
            className={`flex-wrap justify-center md:justify-normal gap-4 ${
              activeToggle == "frameworks" ? "flex" : "hidden"
            }`}
          >
            {frameworks.map((framework) => (
              <SkillCard key={framework.name} skill={framework} />
            ))}
          </div>
          
          <div
            className={`flex-wrap justify-center md:justify-normal gap-4 ${
              activeToggle == "tools" ? "flex" : "hidden"
            }`}
          >
            {tools.map((tool) => (
              <SkillCard key={tool.name} skill={tool} />
            ))}
          </div>
        </div>
    </section>
  );
};

export default Skills;
