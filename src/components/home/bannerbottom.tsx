import React from "react";
import Image from "next/image";
import bannerbottomimage1 from "@/public/images/shipped-icon-1.png";
import bannerbottomimage2 from "@/public/images/shipped-icon-2.png";
import bannerbottomimage3 from "@/public/images/shipped-icon-3.png";
import bannerbottomimage4 from "@/public/images/shipped-icon-4.png";

const items = [
  {
    icon: bannerbottomimage1,
    lines: ["Fully Insured Shipments"],
  },
  {
    icon: bannerbottomimage2,
    lines: ["Vetted Carrier Network"],
  },
  {
    icon: bannerbottomimage3,
    lines: ["Real-Time Tracking Technology"],
  },
  {
    icon: bannerbottomimage4,
    lines: ["Transparent Pricing Model"],
  },
] as const;

const Bannerbottom = () => {
  return (
    <section className="w-full bg-white py-8 md:py-10 lg:py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-10 lg:grid-cols-4 lg:gap-6 xl:gap-10">
          {items.map((item) => (
            <div
              key={item.lines[0]}
              className="flex items-center gap-3 sm:gap-4 lg:justify-center lg:gap-3 xl:gap-4"
            >
              <div className="flex shrink-0 items-center justify-center rounded-2xl bg-[#E9F2FF] py-4 px-6">
                <Image
                  src={item.icon}
                  alt=""
                  width={44}
                  height={44}
                  className="h-8 w-8 object-contain sm:h-9 sm:w-9 md:h-10 md:w-10"
                />
              </div>
              <p className="max-w-[180px] text-left  font-bold leading-[1.2] text-accent text-[15px] md:text-[20px]" style={{ fontFamily: 'var(--font-onest)' }}>
                {item.lines.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Bannerbottom;
