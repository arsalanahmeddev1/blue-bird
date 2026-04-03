import React from "react";
import Image from "next/image";
import Link from "next/link";
import servicesectionbgimage from "@/public/images/service-section-bg-image.png";
import Serviceimage1 from "@/public/images/service-img-01.png";
import Serviceimage2 from "@/public/images/service-img-02.png";
import Serviceimage3 from "@/public/images/service-img-03.png";
import Serviceimage4 from "@/public/images/service-img-04.png";
import Serviceimage5 from "@/public/images/service-img-05.png";
import Serviceimage6 from "@/public/images/service-img-06.png";

const services = [
  {
    image: Serviceimage1,
    title: "Truckload (FTL)",
    description: "Dedicated Capacity for High-Performance Freight",
  },
  {
    image: Serviceimage2,
    title: "Less Than Truckload (LTL)",
    description: "Cost-Efficient Shipping Without Compromise",
  },
  {
    image: Serviceimage3,
    title: "Air Freight",
    description: "Speed When Every Minute Matters",
  },
  {
    image: Serviceimage4,
    title: "Ocean Freight",
    description: "Global Shipping with Precision and Control",
  },
  {
    image: Serviceimage5,
    title: "Custom & Guaranteed Services",
    description: "When Your Shipment Cannot Fail",
  },
  {
    image: Serviceimage6,
    title: "Warehouse",
    description: "Store Your Product with Confidence",
  },
] as const;

const ServiceSection = () => {
  return (
    <section className="relative w-full overflow-hidden py-14 md:py-20 lg:py-28">
      <div className="absolute inset-0 z-0">
        <Image
          src={servicesectionbgimage}
          alt=""
          fill
          className="object-cover object-center"
          sizes="100vw"
          priority
        />
      </div>

      <div className="relative z-10 mx-auto w-full container px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-10 max-w-4xl text-center">
          <p className=" text-[20px] font-bold text-secondary">
            our services
          </p>
          <h2 className="text-[30px] font-bold leading-tight text-accent  md:text-[40px] md:leading-[1.15] ">
            <span className="text-foreground">Global </span>
            <span className="text-primary">transportation</span>
            <span className="text-foreground">
              {" "}
              | precision execution | guaranteed delivery
            </span>
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-[18px] leading-[1.5] text-placeholder">
            Bluebird Logistics connects truckload, LTL, air, ocean, custom
            freight, and warehouse solutions through a unified logistics platform
            built for speed, visibility, and reliability.
          </p>
        </div>

        <ul className="mb-12 grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-9 lg:mb-16 lg:grid-cols-3 lg:gap-10 xl:gap-12">
          {services.map((item) => (
            <li key={item.title} className="flex flex-col">
              <div className="relative mb-4 h-[270px] w-full overflow-hidden  md:mb-5">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
             
                 
                />
              </div>
              <h3 className="text-[20px] font-bold text-accent  md:text-[24px]">
                {item.title}
              </h3>
              <p className="mt-2 text-[18px] leading-[1.5] text-placeholder">
                {item.description}
              </p>
            </li>
          ))}
        </ul>

        <div className="flex justify-center">
          <Link href="#" className="primary-button">
            Explore All Services
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
