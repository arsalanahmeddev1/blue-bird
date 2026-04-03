import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import heroImage from '@/public/images/hero-section-bg.png';
// import herorightsideimg from '@/public/images/hero-right-side-img.png';
import herorightsidegif from '@/public/images/hero-right-side-gif.gif';

const Herosection = () => {
    return (
        <section className="relative w-full py-[50px] md:py-[100px] flex items-center pt-16 overflow-hidden">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <Image
                    src={heroImage}
                    alt="Bluebird Logistics Hero"
                    fill
                    className="object-cover"
                    priority
                />
             
            </div>

            <div className="relative z-10 container mx-auto px-6 md:px-12 py-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center ">
                    
                    {/* Left Side: Content Column */}
                    <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left text-white animate-in fade-in slide-in-from-left duration-1000 mt-[0px] md:mt-[-200px] ">
                        <div className="">
                            <span className="text-secondary font-bold italic tracking-[1px] text-[18px] md:text-[22px] uppercase">Bluebird</span>
                        </div>
                        
                        <h1 className="text-[30px] md:text-[50px]  font-bold leading-[1.1] mb-6 drop-shadow-2xl">
                            Reliability at the <br className="hidden md:block" />
                            speed of commerce
                        </h1>
                        
                        <p className="text-[15px] md:text-[18px] font-medium leading-[1.5] mb-10 max-w-[650px] opacity-90">
                            Premier 3PL Solutions delivering shipments On Time, Intact, Exception Free — every mile, every load, every time.
                        </p>
                        
                        <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6 w-full sm:w-auto">
                            <Link 
                                href="#" 
                                className="primary-button"
                            >
                                Get a Quote
                            </Link>
                            <Link 
                                href="#" 
                                className="secondary-button"
                            >
                                Track Your Shipment
                            </Link>
                        </div>
                    </div>

                    {/* Right Side: Visual Column */}
                    <div className="lg:col-span-5 flex justify-center lg:justify-end mt-12 lg:mt-0 animate-in fade-in slide-in-from-right duration-1000">
                        <div className="relative w-[280px] md:w-[380px] lg:w-[480px] aspect-square">
                            <Image
                                src={herorightsidegif}
                                alt="Bluebird Assets"
                                fill
                                className="object-contain drop-shadow-2xl"
                                priority
                            />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Herosection;