"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import tabsectionleftimage from "@/public/images/tab-section-left-image.png";
import tabsectionrightimage from "@/public/images/tab-section-right-image.png";

const tabs = [
  {
    title: "Precision Execution, Every Shipment",
    subtitle: "Consistency is not optional—it's engineered.",
    description:
      "Our operations teams follow disciplined processes and measurable KPIs on every load. From tender to proof of delivery, your freight is executed with the same rigor—so exceptions are rare and recovery is fast when they happen.",
  },
  {
    title: "Transparent Pricing, Fair Margins",
    subtitle: "No hidden costs. No uncertainty.",
    description:
      "You see how rates are built, what drives cost, and where value shows up in your network. Fair margins and clear terms mean fewer surprises at invoice time and stronger trust with your logistics partner.",
  },
  {
    title: "Vetted Carrier Network",
    subtitle: "Capacity you can trust.",
    description:
      "Bluebird Logistics partners with carefully vetted carriers across North America and global shipping lanes. Every partner meets strict performance and safety standards to ensure your freight moves with reliability and professionalism.",
  },
  {
    title: "Real-Time Visibility & Control",
    subtitle: "Know where your freight is—at all times.",
    description:
      "Live status, milestones, and exception alerts keep your team aligned. Dashboards and updates are designed for operators who need clarity now—not after the fact—so you can act before small issues become delays.",
  },
  {
    title: "Customized Solutions, Guaranteed Performance",
    subtitle: "A New Standard in Logistics.",
    description:
      "High-touch freight, tight windows, and specialized handling get a playbook built around your business. We align service levels, coverage, and accountability so performance is defined upfront—not debated afterward.",
  },
  {
    title: "Protected Shipments by Design",
    subtitle: "Your shipment matters to us.",
    description:
      "Coverage, handling standards, and proactive communication are built into how we move freight. We design protection into the plan—not as an afterthought—so your cargo and your brand are defended at every step.",
  },
  {
    title: "Logistics Built to Scale",
    subtitle: "Defining true partnerships.",
    description:
      "Whether you are growing lanes, adding SKUs, or entering new markets, our model scales with structured onboarding and steady capacity. Partnership means we invest in your trajectory—not just today's shipment.",
  },
] as const;

const Tabsecion = () => {
  const [activeIndex, setActiveIndex] = useState(2);

  return (
    <section className="relative w-full overflow-hidde py-0 md:py-10 ">
      <div className="flex m flex-col items-stretch lg:flex-row lg:items-center">
        {/* Left image — hidden on small screens; fade into center on desktop */}
        <div className="relative hidden min-h-[220px] w-full shrink-0 lg:block lg:min-h-[560px] lg:w-[26%] xl:w-[28%]">
          <Image
            src={tabsectionleftimage}
            alt="left image"
           
            className="object-cover object-center "
           
          />
        </div>

        {/* Center — tabs */}
        <div className="relative z-10 w-full flex-1 px-4 py-8 sm:px-6 lg:max-w-2xl lg:px-8 lg:py-0 xl:max-w-2xl">
          <div className="flex flex-col gap-2 sm:gap-3">
            {tabs.map((tab, index) => {
              const isActive = activeIndex === index;
              return (
                <button
                  key={tab.title}
                  type="button"
                  aria-expanded={isActive}
                  onClick={() => setActiveIndex(index)}
                  className={`w-full rounded-2xl px-5 py-4 text-center transition-colors duration-200 sm:px-6  md:rounded-[1.125rem] ${
                    isActive
                      ? "bg-[#E9F2FF]"
                      : "bg-transparent hover:bg-[#E9F2FF]"
                  }`}
                >
                  <span className="block text-base font-bold text-foreground sm:text-lg">
                    {tab.title}
                  </span>
                  <span className="mt-1 block text-sm text-placeholder sm:text-base">
                    {tab.subtitle}
                  </span>
                  {isActive ? (
                    <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-placeholder sm:text-base">
                      {tab.description}
                    </p>
                  ) : null}
                </button>
              );
            })}
          </div>

          <div className="mt-8 flex justify-center sm:mt-10">
            <Link href="#" className="primary-button">
              Get Started Today
            </Link>
          </div>
        </div>

        {/* Right image */}
        <div className="absolute right-0 hidden  w-full lg:block lg:min-h-[560px] lg:w-[26%] xl:w-[28%]  ">
          <Image
            src={tabsectionrightimage}
            alt="left image"
           
         
          />
        </div>
      </div>
    </section>
  );
};

export default Tabsecion;
