import React from "react";
import Image from "next/image";
import Link from "next/link";
import aboutsectionleftimg from "@/public/images/about-section-left-img.png";

const About = () => {
  return (
    <section className="w-full  py-12 md:py-16 lg:py-24">
      <div className="container mx-auto  px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-12 xl:gap-16">
          {/* Left: image only (single asset includes overlays/badge) */}
          <div className="order-1 w-full lg:order-none">
            <div className="relative mx-auto w-full  overflow-hidden ">
              <Image
                src={aboutsectionleftimg}
                alt="Bluebird Logistics team"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right: copy + CTA */}
          <div className="order-2 flex flex-col justify-center text-center lg:order-none lg:text-left">
            <p className="mb-3 text-[20px] font-bold text-secondary ">
              about
            </p>
            <h2 className="text-[30px] font-bold leading-tight text-accent  md:text-[40px] md:leading-[1.15] ">
              About{" "}
              <span className="text-primary">bluebird</span> logistics
            </h2>
            <div className="mt-6 space-y-5 text-[18px] leading-relaxed text-placeholder">
              <p>
                Bluebird Logistics was founded on the vision and inspiration of
                logistics professional Nancy Merritt, whose career in the
                transportation and logistics industry spans more than two
                decades.
              </p>
              <p>
                After spending over 20 years working across multiple areas of
                freight brokerage and supply chain operations, Nancy developed a
                deep understanding of the complexities of the logistics industry
                as well as the opportunities for innovation, leadership, and
                empowerment within it.
              </p>
            </div>
            <div className="mt-8 flex justify-center lg:justify-start">
              <Link href="#" className="primary-button inline-flex">
                Learn More About Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
