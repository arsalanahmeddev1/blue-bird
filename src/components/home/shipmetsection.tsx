import React from "react";
import Image from "next/image";
import Link from "next/link";
import shipmetsectionbgimage from "@/public/images/shipment-bg-image.png";
import birdimage from "@/public/images/bird-image.png";
import stayupdatedbannerimage from "@/public/images/stay-updated-bg.png";
import bottombannerrightimage from "@/public/images/bottom-banner-rigt-image.png";

const Shipmetsection = () => {
  return (
    <section className="shipment-sec">
      <div className="container">
      <div className=" px-4 pb-10 pt-12 sm:px-6 sm:pb-12 sm:pt-14  md:pt-16  lg:pt-20">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-8 flex justify-center">
            <Image
              src={birdimage}
              alt=""
              width={120}
              height={120}
              className="h-auto w-24 object-contain sm:w-28 md:w-32"
              priority
            />
          </div>
          <h2 className="text-[30px] font-bold leading-[1.1] text-foreground md:text-[40px] md:leading-[1.15]  ">
            Ready to ship with <br className="hidden md:block" />
            <span className="text-primary">bluebird</span> logistics?
          </h2>
          <p className="mx-auto mt-5 max-w-[500px] text-[18px] leading-[1.5] text-placeholder md:mt-6">
            Start with our reliable logistics services. Need a quote or want to
            track your shipment? We&apos;re here to help.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-5 sm:mt-10 sm:flex-row sm:gap-6">
            <Link href="#" className="primary-button w-full sm:w-auto">
              Get a Quote
            </Link>
            <Link href="#" className="secondary-button w-full sm:w-auto">
              Track My Shipment
            </Link>
          </div>
        </div>
      </div>
      </div>

      {/* <div className="relative h-[min(55vw,420px)] w-full min-h-[220px] sm:min-h-[280px] md:h-[min(50vw,480px)] md:min-h-[320px] lg:min-h-[400px]">
        <Image
          src={shipmetsectionbgimage}
          alt=""
          fill
          className="object-cover object-[center_bottom]"
          sizes="100vw"
        />
      </div> */}
   <div
  className="shipment-section-banner bg-no-repeat bg-cover bg-bottom relative pt-[120px] pb-[180px] md:pt-[200px] md:pb-[330px]"
  style={{ backgroundImage: `url(${shipmetsectionbgimage.src})` }}
>
  <div className="container px-4">
    
    <div className="absolute md:bottom-[-250px] bottom-[-140px] left-0 right-0 mx-auto w-full max-w-[95%] md:max-w-[85%]">
      
      {/* White background */}
      <div
        className="pointer-events-none absolute inset-0 z-0 rounded-[30px] md:rounded-[60px] bg-white"
        style={{ transform: "translate(0, -10px) scale(1.02)" }}
      />

      <div className="stay-updated-banner relative z-[1] rounded-[30px] md:rounded-[60px] py-[40px] px-[20px] md:py-[5
      0px] md:px-[100px] overflow-hidden">
        
        <div className="max-w-[700px] mx-auto md:mx-0 text-center md:text-left">
          
          <h2 className="text-[22px] md:text-[40px] font-extrabold text-white leading-[1.2] mb-[25px] md:mb-[40px]">
            Stay Updated with Our Latest Services and Offers
          </h2>

          <form>
            <div className="subscribe-form-wrapper bg-white rounded-[40px] md:rounded-[60px] p-[10px] md:p-[10px] flex flex-col md:flex-row gap-3">
              
              <input
                type="text"
                className="w-full outline-none px-4 py-1 rounded-[30px]"
                placeholder="Enter your email"
              />

              <button
                type="submit"
                className="primary-button px-6 py-3 md:ml-auto"
              >
                Subscribe
              </button>

            </div>
          </form>
        </div>

        {/* ✅ Bird Image Fix */}
        <div className="hidden md:block absolute bottom-0 right-0 w-[220px] lg:w-[300px]">
          <Image
            src={bottombannerrightimage}
            alt="bottom banner right image"
            className="w-full h-auto object-contain"
          />
        </div>

      </div>
    </div>

  </div>
</div>
    </section>
  );
};

export default Shipmetsection;
