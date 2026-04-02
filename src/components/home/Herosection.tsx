import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import heroImage from '@/public/images/hero-section-bg.png';
import herorightsideimg from '@/public/images/hero-right-side-img.png';

const Herosection = () => {
    return (
        <section className="relative w-full min-h-screen flex items-center pt-16 overflow-hidden">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <Image
                    src={heroImage}
                    alt="Bluebird Logistics Hero"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-[#000d2b]/50"></div>
            </div>

            <div className="relative z-10 container mx-auto px-6 md:px-12 py-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                    
                    {/* Left Side: Content Column */}
                    <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left text-white animate-in fade-in slide-in-from-left duration-1000">
                        <div className="mb-6">
                            <span className="text-secondary font-black tracking-[4px] text-[18px] md:text-[22px] uppercase">Bluebird</span>
                        </div>
                        
                        <h1 className="text-[38px] md:text-[58px] lg:text-[72px] font-black leading-[1.1] mb-6 drop-shadow-2xl">
                            Reliability at the <br className="hidden md:block" />
                            speed of commerce
                        </h1>
                        
                        <p className="text-[17px] md:text-[20px] font-medium leading-relaxed mb-10 max-w-[650px] opacity-90">
                            Premier 3PL Solutions delivering shipments On Time, Intact, Exception Free — every mile, every load, every time.
                        </p>
                        
                        <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6 w-full sm:w-auto">
                            <Link 
                                href="/get-quote" 
                                className="bg-secondary text-primary font-black px-12 py-5 rounded-full hover:scale-105 transition-all shadow-xl text-[18px] min-w-[200px] text-center"
                            >
                                Get a Quote
                            </Link>
                            <Link 
                                href="/track-shipment" 
                                className="bg-primary text-white font-bold px-12 py-5 rounded-full hover:bg-opacity-90 transition-all border border-white/20 shadow-xl text-[18px] min-w-[200px] text-center"
                            >
                                Track Your Shipment
                            </Link>
                        </div>
                    </div>

                    {/* Right Side: Visual Column */}
                    <div className="lg:col-span-5 flex justify-center lg:justify-end mt-12 lg:mt-0 animate-in fade-in slide-in-from-right duration-1000">
                        <div className="relative w-[280px] md:w-[380px] lg:w-[480px] aspect-square">
                            <Image
                                src={herorightsideimg}
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