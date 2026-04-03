"use client";

import React, { useState } from 'react';
import logo from '@/public/images/header-logo.png';
import MailIcon from '@/public/images/mail-icon.png';
import PhoneIcon from '@/public/images/phone-icon.png';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, X, Home, Info, Truck, MapPin, FileBox, PhoneCall, Mail, Phone } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '/', icon: <Home className="w-5 h-5" /> },
    { name: 'About', href: '#', icon: <Info className="w-5 h-5" /> },
    { name: 'Services', href: '#', icon: <Truck className="w-5 h-5" /> },
    { name: 'Tracking', href: '#', icon: <MapPin className="w-5 h-5" /> },
    { name: 'Resources', href: '#', icon: <FileBox className="w-5 h-5" /> },
    { name: 'Contact Us', href: '#', icon: <PhoneCall className="w-5 h-5" /> },
  ];

  return (
    <header className="relative w-full z-50 ">
      {/* Top Bar */}
      <div className="bg-primary text-white py-2 hidden md:block">
        <div className="container mx-auto px-4 flex justify-end items-center gap-8 text-[12px] md:text-[15px] font-bold">
          <div className="flex items-center gap-1">
            <div className="w-10 h-10  flex items-center justify-center">
              <Image src={MailIcon} alt="Mail" width={30} height={30} />
            </div>
            <span>info@bluebirdlogistics.com</span>
          </div>
          <div className="flex items-center gap-1">
            <div className="w-10 h-10  flex items-center justify-center">
              <Image src={PhoneIcon} alt="Phone" width={30} height={30} />
            </div>
            <span>(877) 899-4838</span>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className=" relative">
        <div className="container mx-auto px-4 flex justify-between items-center h-[80px]">
          {/* Logo Container (Absolute positioned to overlap the top bar on desktop) */}
          <div className="relative z-10 md:-mt-10 px-8 py-4 transition-all duration-300">
             <Link href="/">
               <Image 
                 src={logo} 
                 alt="Bluebird Logistics" 
                 width={200} 
                 height={60} 
                 className="w-auto h-[60px] md:h-[100px] object-contain"
                 priority
               />
             </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href}
                className="text-accent hover:text-secondary font-medium text-[18px] transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <Link 
              href="/get-quote" 
              className="bg-secondary text-accent font-bold px-8 py-4 rounded-full hover:bg-opacity-90 transition-all shadow-md hidden md:block"
            >
              Get a Quote
            </Link>

            {/* Mobile Menu Button */}
            <button 
              className="lg:hidden p-2 text-primary hover:bg-gray-100 rounded-lg transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white border-t p-4 shadow-xl z-50">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href}
                className="flex items-center gap-4 text-accent font-medium py-3 px-2 border-b border-gray-100 hover:bg-gray-50 transition-all"
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="text-primary">{link.icon}</span>
                <span className="text-[16px]">{link.name}</span>
              </Link>
            ))}
            <Link 
              href="/get-quote" 
              className="bg-secondary text-accent font-bold px-8 py-3 rounded-full text-center mt-4 shadow-md hover:bg-opacity-90 transition-all"
              onClick={() => setIsMenuOpen(false)}
            >
              Get a Quote
            </Link>
            {/* Mobile Contact Info */}
            <div className="mt-6 pt-6 border-t flex flex-col gap-4">
              <div className="flex items-center gap-3 text-[14px]">
                <div className="w-8 h-8  flex items-center justify-center">
                  <Image src={MailIcon} alt="Mail" width={24} height={24} />
                </div>
                <span>info@bluebirdlogistics.com</span>
              </div>
              <div className="flex items-center gap-3 text-[14px]">
                <div className="w-8 h-8  flex items-center justify-center">
                  <Image src={PhoneIcon} alt="Phone" width={24} height={24} />
                </div>
                <span>(877) 899-4838</span>
              </div>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
