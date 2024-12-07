"use client";
import React, { useState } from "react";
import { HeadingPrimary } from "@/components/Headings";
import Timeline from "@/components/Timeline/Timeline";
import { experience, education, awards } from "@/data/QualificationData";
import { HiBriefcase } from "react-icons/hi2";
import { FaUserGraduate, FaTrophy } from "react-icons/fa6";
import { PiCertificateFill, PiArrowRightBold } from "react-icons/pi";
import { IoDocumentText } from "react-icons/io5";

const Qualification = () => {
  const [activeTab, setActiveTab] = useState("experience");

  const handleTabClick = (tab: string): void => {
    setActiveTab(tab);
  };

  return (
    <section className="qualification section-container">
      <HeadingPrimary
        title={"Qualification"}
        subtitle={"My Personal Journey"}
        context={
          <div className="hidden md:inline">
            <button className="btn btn-primary"><IoDocumentText />My Resume</button>
          </div>
        }
      />

      <div className="">
        {/* Qualification Tabs */}
        <div className="flex justify-center flex-wrap md:gap-x-8 gap-4 mb-12">
          <button
            className={`font-medium cursor-pointer hover:text-primary-hover inline-flex items-center gap-x-1 ${
              activeTab === "experience" ? "text-primary" : "text-gray-500"
            }`}
            onClick={() => handleTabClick("experience")}
          >
            <HiBriefcase className="text-xl" /> Experience
          </button>
          <button
            className={`font-medium cursor-pointer hover:text-primary-hover inline-flex items-center gap-x-1 ${
              activeTab === "education" ? "text-primary" : "text-gray-500"
            }`}
            onClick={() => handleTabClick("education")}
          >
            <FaUserGraduate /> Education
          </button>
          <button
            className={`font-medium cursor-pointer hover:text-primary-hover inline-flex items-center gap-x-1 ${
              activeTab === "achievements"
                ? "text-primary"
                : "text-gray-500"
            }`}
            onClick={() => handleTabClick("achievements")}
          >
            <FaTrophy className="text-lg" /> Achievement
          </button>
        </div>

        {/* Qualification Content */}
        <div>
          {activeTab === "experience" && <Timeline timelineData={experience} />}

          {activeTab === "education" && <Timeline timelineData={education} />}

          {activeTab === "achievements" &&
            awards.map((award, idx) => (
              <div
                key={idx}
                className="grid grid-cols-1 md:grid-cols-2 items-center gap-x-16 mt-24"
              >
                <div className={`${idx % 2 !== 0 ? "order-2" : ""}`}>
                  <img
                    src="https://www.programming-hero.com/_next/image?url=%2FourCourses%2Fweb-thumbnail.png&w=640&q=75"
                    alt=""
                  />
                </div>
                <div className={`${idx % 2 !== 0 ? "order-1 text-right" : ""}`}>
                  <h3 className="text-2xl font-semibold text-typography-title">{award.title}</h3>
                  <p className="mt-2 text-primary text-sm">
                    <span>
                      <strong>Date:</strong> March 2024
                    </span>{" "}
                    •{" "}
                    <span>
                      <strong>Issued by:</strong> Programming Hero
                    </span>
                  </p>
                  <p className="my-4">{award.description}</p>
                  <div
                    className={`flex gap-x-4 ${
                      idx % 2 !== 0 ? "justify-end" : ""
                    }`}
                  >
                    <button className="btn btn-primary">
                      <PiCertificateFill /> Certificate
                    </button>
                    <button className="btn btn-secondary">
                      View Details <PiArrowRightBold />
                    </button>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Qualification;
