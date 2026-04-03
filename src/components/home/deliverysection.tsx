import React from "react";
import Image from "next/image";
import deliveryleftimage from "@/public/images/deliver-left-image.png";

const Deliverysection = () => {
  return (
    <section className="w-full py-12 md:py-16 lg:py-24">
      <div className=" mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-12 xl:gap-16">
          <div className="order-1 w-full lg:order-none">
            <div className="relative w-full overflow-hidden  left-[0] md:left-[-35px] ">
              <Image
                src={deliveryleftimage}
                alt="Bluebird delivery professional loading shipments"
                className="h-auto w-full object-cover"
                width={960}
                height={720}
              />
            </div>
          </div>

          <div className="order-2 flex flex-col justify-center text-center lg:order-none lg:text-left">
            <p className="text-[20px] font-bold lowercase tracking-wide text-secondary md:text-base">
              bluebird logistics
            </p>
            <h2 className="mt-3 text-[30px] font-bold leading-[1.1] text-foreground md:text-[40px] md:leading-[1.15]  ">
              Built for <span className="text-primary">scale</span>. <br className="hidden md:block" /> trusted for
              performance.
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-[18px] leading-[1.5] text-placeholder sm:text-lg lg:mx-0">
              Bluebird Logistics is built to support growing businesses with the
              infrastructure, technology, and operational discipline required to
              move freight reliably at any scale.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Deliverysection;
