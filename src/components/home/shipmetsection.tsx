import React from "react";
import Image from "next/image";
import Link from "next/link";
import shipmetsectionbgimage from "@/public/images/shipment-bg-image.png";
import birdimage from "@/public/images/bird-image.png";
import stayupdatedbannerimage from "@/public/images/stay-updated-bg.png";

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
      <div className="shipment-section-banner bg-no-repeat bg-cover pt-[200px] pb-[330px] bg-bottom relative"
      style={{backgroundImage: `url(${shipmetsectionbgimage.src})`}}>
        <div className="container">
            <div className="absolute bottom-[-250px] left-0 right-0 mx-auto w-full max-w-[85%]">
              {/* White sits behind the gradient card (pseudo + z-[-1] painted above the same el’s bg) */}
              <div
                className="pointer-events-none absolute inset-0 z-0 rounded-[60px] bg-white"
                style={{ transform: "translate(0, -18px) scale(1.02)" }}
                aria-hidden
              />
              <div className="stay-updated-banner relative z-[1] rounded-[60px] py-[70px] px-[100px]">
              <div className="max-w-[700px]">
               <h2 className="text-[20px] font-extrabold  text-white  md:text-[40px] leading-[1.15]  mx-auto md:mx-0 mb-[40px]">
               Stay Updated with Our Latest Services and Offers
               </h2>
               <form action="">
                  <div className="subscribe-form-wrapper bg-white rounded-[60px] relative p-[27px]">
                  <input type="text" className="" placeholder="Enter your email" />
                  <button type="submit" className="primary-button absolute right-0 top-0 bottom-0 m-[5px]">Subscribe</button>
                  </div>
               </form>
              </div>
              </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Shipmetsection;
