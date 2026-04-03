import React from "react";

const stats = [
  {
    value: "98%+",
    label: "On-Time Delivery Performance",
  },
  {
    value: "100%",
    label: "Shipments Monitored with Real-Time Tracking",
  },
  {
    value: "24/7",
    label: "Operational Support & Shipment Visibility",
  },
] as const;

const Bythenumber = () => {
  return (
    <section className="bg-background w-full  py-14 md:py-20 lg:py-24">
      <div className="mx-auto container px-4 ">
        <div className="  md:text-left text-center">
          <h2 className="text-[30px] font-bold text-accent md:text-[48px] md:leading-[1.15] ">
            By the <span className="text-primary">numbers</span>
          </h2>
          <p className="mt-2 text-[18px] leading-[1.5] text-placeholder">
            Performance You Can Measure
          </p>
        </div>

        <div className="relative pt-20 sm:pt-[4.5rem] md:pt-16">
          {/* Tilted callout — sits higher above the white card */}
          <div
            className="absolute left-1/2 top-[10px] z-20 w-[min(100%,17rem)] -translate-x-1/2 -rotate-6 rounded-[30px] bg-primary px-5 py-4 text-center shadow-lg sm:left-auto sm:top-[-3.5rem] sm:w-[min(100%,15rem)] sm:translate-x-0 sm:right-[4%] md:top-[-4.5rem] md:right-[6%] md:w-56 lg:top-[-3rem] lg:right-[8%] lg:px-6 lg:py-5"
          >
            <p className="text-lg font-bold leading-tight text-secondary md:text-xl">
              Nationwide
            </p>
            <p className="mt-1 text-xs font-medium leading-snug text-white sm:text-sm">
              Coverage Across All Major Freight Lanes
            </p>
          </div>

          <div className="relative  bg-background px-6  shadow-sm rounded-[50px]  py-3  md:mt-0 mt-10">
            <div className="grid grid-cols-1 gap-10 sm:gap-12 md:grid-cols-3 md:gap-8 lg:gap-10">
              {stats.map((item) => (
                <div
                  key={item.value}
                  className="flex flex-col mx-auto md:px-2"
                >
                  <p className="text-[35px] font-extrabold tracking-tight text-accent  md:text-[50px]">
                    {item.value}
                  </p>
                  <p className=" text-[18px] leading-[1.2] text-placeholder ">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Bythenumber;
