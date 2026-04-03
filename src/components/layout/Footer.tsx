import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Footerbgimage from '@/public/images/footer-bg-image.png';
import logo from '@/public/images/header-logo.png';
import MailIcon from '@/public/images/mail-icon.png';
import PhoneIcon from '@/public/images/phone-icon.png';
import FacebookIcon from '@/public/images/facebook-icon.png';
import InstagramIcon from '@/public/images/instagram-icon.png';
import LinkedinIcon from '@/public/images/linkedin-icon.png';
import TiktokIcon from '@/public/images/tiktok-icon.png';

const Footer = () => {
  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '#' },
    { name: 'Services', href: '#' },
    { name: 'Tracking', href: '#' },
    { name: 'Resources', href: '#' },
  ];

  const otherLinks = [
    { name: 'Privacy Policy', href: '#' },
    { name: 'Terms & Conditions', href: '#' },
    { name: 'Cookies Policy', href: '#' },
    { name: 'Contact Us', href: '#' },
    { name: 'FAQ', href: '#' },
  ];

  const socialIcons = [
    { name: 'Facebook', icon: FacebookIcon, href: '#' },
    { name: 'Instagram', icon: InstagramIcon, href: '#' },
    { name: 'LinkedIn', icon: LinkedinIcon, href: '#' },
    { name: 'TikTok', icon: TiktokIcon, href: '#' },
  ];

  return (
    <footer className="relative w-full overflow-hidden">
      {/* Background with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src={Footerbgimage}
          alt="Footer Background"
          fill
          className="object-cover"
          priority
        />

      </div>

      <div className="relative z-10 container mx-auto px-4 md:pt-[300px] pb-15 pt-50">
        {/* Top Centered Logo Pill */}
        <div className="flex justify-center mb-10">
          <div className=" px-10 py-6  inline-flex items-center justify-center">
            <Image
              src={logo}
              alt="Bluebird Logistics"
              width={300}
              height={150}
              className=" object-contain"
            />
          </div>
        </div>

        {/* Main Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-white">

          {/* Column 1: Quick Links */}
          <div className="footer-column">
            <h3 className="footer-heading">Quick Links</h3>
            <ul className="footer-list">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="hover:text-secondary transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: Other Links */}
          <div className="footer-column">
            <h3 className="footer-heading">Other Links</h3>
            <ul className="footer-list">
              {otherLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="hover:text-secondary transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Central Quote & Social Media */}
          <div className="relative flex flex-col gap-6 items-center text-center lg:left-[-140px] ">
            <h2 className="text-[24px] md:text-[28px] font-bold leading-[1.2] !max-w-[800px]">
              Delivering Reliable Shipping Solutions Worldwide.
            </h2>
            <div className="mt-4 flex flex-col items-center gap-4">
              <h3 className="footer-heading uppercase tracking-wider">Follow Us</h3>
              <div className="flex gap-2">
                {socialIcons.map((social) => (
                  <Link
                    key={social.name}
                    href={social.href}
                    className="w-10 h-10 flex items-center justify-center rounded-full hover:scale-110 transition-transform"
                  >
                    <Image src={social.icon} alt={social.name} width={15} height={15} />
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Column 4: Contact Info */}
          <div className="footer-column">
            <h3 className="footer-heading">Contact</h3>
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center  shadow-lg">
                  <Image src={MailIcon} alt="Email" width={40} height={40} />
                </div>
                <span className="footer-info">info@bluebirdlogistics.com</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center  shadow-lg">
                  <Image src={PhoneIcon} alt="Phone" width={40} height={40} />
                </div>
                <span className="footer-info">(877) 899-4838</span>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Copyright Bar */}
      <div className="relative z-10 bg-[#16214D]  py-4 text-center text-white text-[14px]">
        <div className="container mx-auto px-4  font-medium">
          &copy; 2026 Bluebird Logistics. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
