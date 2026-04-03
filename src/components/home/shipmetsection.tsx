import React from "react";
import Image from "next/image";
import Link from "next/link";
import shipmetsectionbgimage from "@/public/images/shipment-bg-image.png";
import birdimage from "@/public/images/bird-image.png";

const Shipmetsection = () => {
  return (
    <section className="w-full">
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

      <div className="relative h-[min(55vw,420px)] w-full min-h-[220px] sm:min-h-[280px] md:h-[min(50vw,480px)] md:min-h-[320px] lg:min-h-[400px]">
        <Image
          src={shipmetsectionbgimage}
          alt=""
          fill
          className="object-cover object-[center_bottom]"
          sizes="100vw"
        />
      </div>
    </section>
  );
};

export default Shipmetsection;
