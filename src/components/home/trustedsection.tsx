import React from "react";
import Image from "next/image";
import trustedsectionbottomimage1 from "@/public/images/trust-bottom-image-1.png";
import trustedsectionbottomimage2 from "@/public/images/trust-bottom-image-2.png";

const Trustedsection = () => {
  return (
    <section className="w-full py-10">
      <div className="mx-auto container px-4 text-center sm:px-6 lg:px-8">
        <p className="text-[20px] font-bold lowercase tracking-wide text-secondary ma ">
          trusted by industry leaders
        </p>
        <h2 className="mt-3 text-[30px] font-bold leading-tight text-foreground md:text-[40px] md:leading-[1.15] ">
          Powering <span className="text-primary">reliable logistics</span> <br className="hidden md:block" />
          across growing businesses
        </h2>
        <p className="mx-auto mt-5 max-w-3xl text-[18px] leading-[1.5] text-placeholder">
          From emerging brands to established shippers, companies trust Bluebird
          Logistics to deliver freight with precision, transparency, and
          consistency.
        </p>
      </div>

      <div className=" mx-auto mt-10 grid  grid-cols-1 px-4 sm:px-6  md:grid-cols-2  lg:px-8 gap-10 md:gap-0">
        <div className="relative flex w-full items-center justify-center">
          <Image
            src={trustedsectionbottomimage1}
            alt=""
            className="h-auto w-full max-w-full object-contain mix-blend-multiply"

          />
        </div>
        <div className="relative flex w-full items-center justify-center">
          <Image
            src={trustedsectionbottomimage2}
            alt=""
            className="h-auto w-full max-w-full object-contain mix-blend-multiply"

          />
        </div>
      </div>
      <div className="mx-auto mt-10 md:mt-20 flex justify-center items-center ">
  <div className="w-full max-w-lg h-[2px] bg-[#E1E1E1] hidden md:block"></div>
</div>
    </section>
  );
};

export default Trustedsection;
