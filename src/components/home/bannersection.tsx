import React from "react";
import Image from "next/image";
import bannerbgimage from "@/public/images/banner-bg-image.png";
import bannerrightsideimage from "@/public/images/banner-right-image.png";
import starsimage from "@/public/images/stars-image.png";

const Bannersection = () => {
  return (
    <section className="relative w-full overflow-hidden  pb-0 pt-20" >
      <div className="absolute inset-0 z-0">
        <Image
          src={bannerbgimage}
          alt=""
          fill
          className="object-cover object-center"
       
    
        />
      </div>

  

      <div className="relative z-10 mx-auto container px-4 ">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-8 xl:gap-12">
          <div className="flex flex-col lg:col-span-6 xl:col-span-7">
            <div className="mb-6 flex justify-center lg:justify-start">
              <Image
                src={starsimage}
                alt="5 star rating"
                className=" object-contain "
             width={144}
             height={144}
              />
            </div>
            <blockquote className="text-center lg:text-left">
              <p className="text-[20px] font-bold  text-white  md:text-[30px] leading-[1.15] max-w-[500px] mx-auto md:mx-0">
                Bluebird Logistics delivers exactly what they
                promise—consistent, reliable service with full visibility every
                step of the way.
              </p>
              <footer className="mt-6 text-[18px] font-normal text-white md:mt-8">
                Operations Manager, National Distributor
              </footer>
            </blockquote>
          </div>

          <div className="flex justify-center lg:col-span-6 xl:col-span-5 lg:justify-end">
            <div className="relative ">
              <Image
                src={bannerrightsideimage}
                alt=""
                className="h-auto w-full object-contain object-bottom drop-shadow-2xl"
            
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Bannersection;
