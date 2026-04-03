"use client";

import React, { useState } from "react";
import Image from "next/image";
import bookingformbgimage from "@/public/images/booking-form-bg.png";

const Bookingform = () => {
  const [shippingOption, setShippingOption] = useState<"ltl" | "ftl">("ltl");
  const [shippingSpeed, setShippingSpeed] = useState<
    "same-day" | "express" | "standard"
  >("same-day");

  return (
    <section className="relative w-full overflow-hidden py-[210px]"
    style={{backgroundImage: `url(${bookingformbgimage.src})`}}>
      <div className="relative z-10 mx-auto w-full container">
        {/* Header */}
        <div className="mb-4 text-center">
          <p className="mb-3 text-[20px] font-semibold  tracking-wide text-secondary ">
            rates
          </p>
          <h2 className="mx-auto  text-[30px] font-bold leading-[1.1] text-white md:text-[40px]">
            <span className="text-white">Transparent </span>
            <span className="text-secondary">pricing.</span>
            <br className="hidden sm:block" />
            <span className="text-white sm:ml-0">
              <span className="sm:hidden"> </span>enterprise reliability.
            </span>
          </h2>
          <p className="mx-auto mt-4  text-[18px] leading-[1.5] max-w-[550px] text-white">
            Transparent rates with fair margins, built-in shipment protection,
            and volume-based pricing designed to reward your growth.
          </p>
        </div>

        {/* Form card */}
        <div className="mx-auto w-full max-w-3xl rounded-[1.75rem] bg-white p-6 shadow-xl sm:p-8 md:rounded-[2rem] md:p-10">
          <form className="flex flex-col gap-8 md:gap-10" action="#" method="post">
            {/* Section 1 */}
            <div className="space-y-4">
              <h3 className="form-section-title">
                Select Your Shipping Option
              </h3>
              <div
                className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-8"
                role="radiogroup"
                aria-label="Shipping option"
              >
                <label className="form-radio-label">
                  <span className="shipping-radio-button">
                    <input
                      type="radio"
                      name="shippingOption"
                      value="ltl"
                      checked={shippingOption === "ltl"}
                      onChange={() => setShippingOption("ltl")}
                      className="peer sr-only"
                    />
                    <span className="radio-button" />
                  </span>
                  LTL (Less-than-Truckload)
                </label>
                <label className="form-radio-label">
                  <span className="shipping-radio-button">
                    <input
                      type="radio"
                      name="shippingOption"
                      value="ftl"
                      checked={shippingOption === "ftl"}
                      onChange={() => setShippingOption("ftl")}
                      className="peer sr-only"
                    />
                    <span className="radio-button" />
                  </span>
                  Full Truckload
                </label>
              </div>
            </div>

            {/* Section 2 */}
            <div className="space-y-4">
              <h3 className="form-section-title">
                Enter Pickup &amp; Delivery Locations
              </h3>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <input
                  type="text"
                  name="pickup"
                  placeholder="e.g., Los Angeles, CA 90001"
                  className="form-input"
                />
                <input
                  type="text"
                  name="delivery"
                  placeholder="e.g., New York, NY 10001"
                  className="form-input"
                />
              </div>
            </div>

            {/* Section 3 */}
            <div className="space-y-4">
              <h3 className="form-section-title">
                Enter Shipment Details
              </h3>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {(
                  [
                    { name: "length", placeholder: "Length", unit: "inches" },
                    { name: "width", placeholder: "Width", unit: "inches" },
                    { name: "height", placeholder: "Height", unit: "inches" },
                    { name: "weight", placeholder: "Weight", unit: "lbs" },
                  ] as const
                ).map((field) => (
                  <div
                    key={field.name}
                    className="flex overflow-hidden rounded-xl bg-neutral-100 ring-primary/20 focus-within:ring-2"
                  >
                    <input
                      type="text"
                      inputMode="decimal"
                      name={field.name}
                      placeholder={field.placeholder}
                      className="form-input"
                    />
                    <span
                      className="flex shrink-0 items-center border-l border-primary/15 px-3 text-[14px] font-semibold text-primary "
                      aria-hidden
                    >
                      {field.unit}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Section 4 */}
            <div className="space-y-4">
              <h3 className="form-section-title">
                Select Shipping Speed
              </h3>
              <div
                className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-6 lg:gap-8"
                role="radiogroup"
                aria-label="Shipping speed"
              >
                {(
                  [
                    { id: "same-day" as const, label: "Same-Day Delivery" },
                    { id: "express" as const, label: "Express Shipping" },
                    { id: "standard" as const, label: "Standard Shipping" },
                  ] as const
                ).map(({ id, label }) => (
                  <label
                    key={id}
                    className="form-radio-label"
                  >
                    <span className="shipping-radio-button">
                      <input
                        type="radio"
                        name="shippingSpeed"
                        value={id}
                        checked={shippingSpeed === id}
                        onChange={() => setShippingSpeed(id)}
                        className="peer sr-only"
                      />
                      <span className="radio-button" />
                    </span>
                    {label}
                  </label>
                ))}
              </div>
            </div>

            <div className="space-y-4 pt-2">
              <button
                type="submit"
                className="primary-button w-full"
              > 
                View My Rates
              </button>
              <p className="text-center text-[14px] leading-relaxed text-placeholder sm:text-sm md:px-4">
                Click to get live shipping rates and compare options from FedEx,
                UPS, and USPS.
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Bookingform;
