import React from "react";
import Image from "next/image";
import bannerbottomimage1 from "@/public/images/banner-bottom-image-1.png";
import bannerbottomimage2 from "@/public/images/banner-bottom-image-2.png";
import bannerbottomimage3 from "@/public/images/banner-bottom-image-3.png";
import bannerbottomimage4 from "@/public/images/banner-bottom-image-4.png";

const items = [
  bannerbottomimage1,
  bannerbottomimage2,
  bannerbottomimage3,
  bannerbottomimage4,
] as const;

const Bannerbottom = () => {
  return (
    <section className="w-full  py-8 md:py-10 lg:py-12">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-6 gap-y-8 px-4 sm:gap-x-8 md:flex-nowrap md:justify-between md:gap-x-4 lg:gap-x-8">
        {items.map((src, index) => (
          <div
            key={index}
            className="flex w-[45%] max-w-[220px] shrink-0 justify-center sm:max-w-[260px] md:w-auto md:min-w-0 md:flex-1 md:max-w-none"
          >
            <Image
              src={src}
              alt=""
              width={280}
              height={100}
              className="h-auto w-full object-contain"
       
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Bannerbottom;
