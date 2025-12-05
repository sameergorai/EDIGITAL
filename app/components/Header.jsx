'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  Menu, X, ChevronDown, BookOpen, Calendar, Home, 
  Images, FileQuestion, Phone, Facebook, Instagram, 
  Youtube, Smartphone, User, GraduationCap, Users, 
  Book, Activity, FileText, Award, Library, Star, 
  ClipboardCheck, Info, MessageSquare, Newspaper, 
  FileCheck, Mail, School, Trophy, Globe,
  MapPin,
  MessageSquareHeart
} from 'lucide-react';
import Image from 'next/image';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const pathname = usePathname();
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Contact information
  const contactInfo = {
    email: 'info@edigitalindian.com',
    phone: '9934141233',
    social: {
      facebook: 'https://www.facebook.com/people/E-Digital-INDIA/61574473705318/',
      instagram: 'https://www.instagram.com/edigitalindia?igsh=MTF0bGwwYzZyaWYxYQ==',
      youtube: 'https://www.youtube.com/@EDIGITALINDIA',
      whatsapp: 'https://wa.me/918448831264',
      socialX: 'https://x.com/edigitalindian',
      pinterest: 'https://in.pinterest.com/edigitaljsr/',
      map: 'https://www.google.com/maps/dir//2nd+floor,+E-DIGITALINDIA-+Best+Digital+Marketing+Course+in+Jamshedpur,+Jayanta+Tower,+Sakchi+Gol+Chakkar,+opposite+Delhi+Darbar,+SNP+Area,+Sakchi,+Jamshedpur,+Jharkhand+831001,+India/@22.8013493,86.2056833,15z/data=!4m8!4m7!1m0!1m5!1m1!1s0x39f5e3d507584243:0x58705df840f5f9d4!2m2!1d86.2030646!2d22.8052486?entry=ttu&g_ep=EgoyMDI1MTIwMi4wIKXMDSoASAFQAw%3D%3D',

    }
  };

  // Main navigation items with categories
  const navItems = [
    { 
      name: 'Home', 
      href: '/', 
      icon: <Home size={18} />,
      type: 'link'
    },
    { 
      name: 'About', 
      href: '/about-us', 
      icon: <Info size={18} />,
      type: 'link'
    },
    // { 
    //   name: 'Academic', 
    //   // icon: <GraduationCap size={18} />,
    //   // type: 'dropdown',
    //    href: '/', 
    //   type: 'link'

    //   // items: [
    //   //   { name: 'Digital Library', href: '/academic/library', icon: <BookOpen size={16} /> },
    //   //   { name: 'Academic Calendar', href: '/academic/calendar', icon: <Calendar size={16} /> },
    //   //   { name: 'Time Table', href: '/academic/timetable', icon: <Calendar size={16} /> },
    //   //   { name: 'Holiday List', href: '/academic/holidays', icon: <Calendar size={16} /> },
    //   //   { name: 'Previous Year Questions', href: '/academic/previous-questions', icon: <FileQuestion size={16} /> },
    //   // ]
    // },
    { 
      name: 'Workshop/Seminar', 
      href: '/workshop', 
      icon: <Activity size={18} />,
      type: 'link',
      // badge: 'FDP'
    },
    { 
      name: 'Cources', 
      icon: <FileText size={18} />,
      type: 'dropdown',
      items: [
        { name: 'Digital Marketing', href: '/diploma-in-digital-marketing', icon: <Newspaper size={16} /> },
        { name: 'Web Development', href: '/diploma-in-web-development', icon: <FileText size={16} /> },
        { name: 'Data Science & AI', href: '/diploma-in-data-science-and-artificial-intelligence', icon: <FileText size={16} /> },
        { name: 'Android App Development', href: '/diploma-in-android-app-development', icon: <FileText size={16} /> },
        { name: 'Business Communication & Soft Skills', href: '/diploma-in-business-communication-and-soft-skills', icon: <FileText size={16} /> },
        { name: 'Sap Global Certification Course', href: '/sap-global-certification-course', icon: <FileText size={16} /> },
      ]
    },
    { 
      name: 'Admission', 
      href: '/apply', 
      icon: <ClipboardCheck size={18} />,
      type: 'link'
    },

    // { 
    //   name: 'Blogs', 
    //   href: '/Blogs', 
    //   icon: <User size={18} />,
    //   type: 'link'
    // },
    // { 
    //   name: 'NAAC', 
    //   href: '/naac', 
    //   icon: <Award size={18} />,
    //   type: 'link'
    // },
    // { 
    //   name: 'IQAC & Cell', 
    //   icon: <Star size={18} />,
    //   type: 'dropdown',
    //   items: [
    //     { name: 'IQAC Committee', href: '/iqac/committee', icon: <Users size={16} /> },
    //     { name: 'IQAC Activities', href: '/iqac/activities', icon: <Activity size={16} /> },
    //     { name: 'Various Cells', href: '/cells', icon: <Globe size={16} /> },
    //   ]
    // },
    // { 
    //   name: 'Library', 
    //   href: '/library', 
    //   icon: <Library size={18} />,
    //   type: 'link'
    // },
    // { 
    //   name: 'Curricular Activities', 
    //   href: '/curricular-activities', 
    //   icon: <Trophy size={18} />,
    //   type: 'link'
    // },
    // { 
    //   name: 'Quality Audits', 
    //   href: '/quality-audits', 
    //   icon: <FileCheck size={18} />,
    //   type: 'link'
    // },
    // { 
    //   name: 'Information', 
    //   href: '/information', 
    //   icon: <Info size={18} />,
    //   type: 'link'
    // },
    // { 
    //   name: 'Feedback', 
    //   href: '/feedback', 
    //   icon: <MessageSquare size={18} />,
    //   type: 'link'
    // },
    // { 
    //   name: 'Press Release', 
    //   href: '/press-release', 
    //   icon: <Newspaper size={18} />,
    //   type: 'link'
    // },
    // { 
    //   name: 'ISO Certificate', 
    //   href: '/iso-certificate', 
    //   icon: <FileCheck size={18} />,
    //   type: 'link'
    // },
    { 
      name: 'Contact Us', 
      href: '/contact', 
      icon: <Mail size={18} />,
      type: 'link'
    },
  ];

  // Top quick links for the contact bar
  const topQuickLinks = [
    // { name: 'Digital Library', href: '/academic/library', icon: <BookOpen size={14} /> },
    { name: 'Gallery', href: '/gallery', icon: <Images size={14} /> },
    // { name: 'Holiday List', href: '/academic/holidays', icon: <Calendar size={14} /> },
    // { name: 'PYQ', href: '/academic/previous-questions', icon: <FileQuestion size={14} /> },
  ];

  // Check if a link is active
  const isActive = (href) => {
    return pathname === href || pathname?.startsWith(href + '/');
  };

  return (
    <>
      {/* Top Contact Bar with Quick Links */}
      <div className="bg-gradient-to-r from-blue-800 to-blue-900 text-white hidden lg:block">
        <div className="container mx-auto px-4 py-2">
          <div className="flex justify-between items-center">
            {/* Contact Info */}
            <div className="flex items-center space-x-6">
              <a 
                href={`mailto:${contactInfo.email}`}
                className="flex items-center gap-2 hover:text-blue-200 transition text-sm"
              >
                <Mail size={14} />
                <span>{contactInfo.email}</span>
              </a>
              <a 
                href={`tel:${contactInfo.phone}`}
                className="flex items-center gap-2 hover:text-blue-200 transition text-sm"
              >
                <Phone size={14} />
                <span>{contactInfo.phone}</span>
              </a>
            </div>
            
            {/* Quick Links and Social */}
            <div className="flex items-center space-x-6">
              {/* Quick Links */}
              <div className="flex items-center space-x-4 border-r border-blue-700 pr-6">
                {topQuickLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="flex items-center gap-1 hover:text-blue-200 transition text-sm"
                  >
                    {link.icon}
                    <span>{link.name}</span>
                  </Link>
                ))}
              </div>
              
              {/* Social Icons */}
              <div className="flex items-center space-x-4">
                <a 
                  href={contactInfo.social.facebook} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-blue-200 transition"
                >
                  <Facebook size={18} />
                </a>
                <a 
                  href={contactInfo.social.instagram} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-blue-200 transition"
                >
                  <Instagram size={18} />
                </a>
                <a 
                  href={contactInfo.social.youtube} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-blue-200 transition"
                >
                  <Youtube size={18} />
                </a>
                 <a 
                  href={contactInfo.social.pinterest} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-blue-200 transition"
                >
               <MessageSquareHeart size={18} />
                </a>
                 <a 
                  href={contactInfo.social.socialX} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-blue-200 transition"
                >
                 X {/* <Youtube size={18} /> */}
                  {/* <X /> */}
                </a>
                 <a 
                  href={contactInfo.social.map} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-blue-200 transition"
                >
                  <MapPin size={18} />
                 
                </a>
                <a 
                  href={contactInfo.social.whatsapp} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 bg-green-600 hover:bg-green-700 px-3 py-1 rounded-md transition"
                >
                  <Smartphone size={16} />
                  <span className="text-sm">WhatsApp</span>
                </a>
                {/* <div className="flex items-center gap-1 bg-green-700 px-3 py-1 rounded-md">
                  <Smartphone size={16} />
                  <span className="text-sm">Android</span>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav className={`sticky top-0 z-50 transition-all duration-300 h-20 ${
        scrolled ? 'bg-white shadow-lg' : 'bg-gradient-to-r from-white via-blue-400 to-blue-950'
      }`}>
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3">
              <div className={`font-bold text-xl ${
                scrolled ? 'text-blue-900' : 'text-white'
              }`}>
                {/* <div className="flex flex-col">
                  <span className="text-5xl ">E Digital</span>
                  {/* <span className="text-sm font-normal opacity-80">Educational Institute</span> */}
                {/* </div> */} 
                <img
        src="/logo.png" // Path relative to the public folder
        alt="A description of the image"
        className='w-40 h-17 mt-3'
       
      />
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1" ref={dropdownRef}>
              {navItems.slice(0, 8).map((item) => (
                <div key={item.name} className="relative">
                  {item.type === 'link' ? (
                    <Link
                      href={item.href}
                      className={`flex items-center gap-2 px-3 py-2 rounded-md transition relative ${
                        isActive(item.href)
                          ? scrolled 
                            ? 'bg-blue-600 text-white' 
                            : 'bg-blue-700 text-white'
                          : scrolled 
                            ? 'text-gray-700 hover:bg-blue-50 hover:text-blue-700' 
                            : 'text-white hover:bg-blue-800'
                      }`}
                    >
                      {item.icon}
                      <span className="font-medium text-sm">{item.name}</span>
                      {item.badge && (
                        <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs px-1 py-0.5 rounded">
                          {item.badge}
                        </span>
                      )}
                    </Link>
                  ) : (
                    <button
                      onClick={() => setOpenDropdown(openDropdown === item.name ? null : item.name)}
                      className={`flex items-center gap-2 px-3 py-2 rounded-md transition ${
                        openDropdown === item.name
                          ? scrolled 
                            ? 'bg-blue-600 text-white' 
                            : 'bg-blue-700 text-white'
                          : scrolled 
                            ? 'text-gray-700 hover:bg-blue-50 hover:text-blue-700' 
                            : 'text-white hover:bg-blue-800'
                      }`}
                    >
                      {item.icon}
                      <span className="font-medium text-sm">{item.name}</span>
                      <ChevronDown size={16} className={`transition-transform ${
                        openDropdown === item.name ? 'rotate-180' : ''
                      }`} />
                    </button>
                  )}
                  
                  {/* Dropdown Menu */}
                  {item.type === 'dropdown' && openDropdown === item.name && (
                    <div className="absolute top-full left-0 mt-1 w-56 bg-white shadow-xl rounded-lg py-2 z-50">
                      {item.items.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          onClick={() => setOpenDropdown(null)}
                          className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition"
                        >
                          {subItem.icon}
                          <span className="text-sm">{subItem.name}</span>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              
              {/* More dropdown for remaining items */}
              <div className="relative" ref={dropdownRef}>
                {/* <button
                  onClick={() => setOpenDropdown(openDropdown === 'More' ? null : 'More')}
                  className={`flex items-center gap-2 px-3 py-2 rounded-md transition ${
                    openDropdown === 'More'
                      ? scrolled 
                        ? 'bg-blue-600 text-white' 
                        : 'bg-blue-700 text-white'
                      : scrolled 
                        ? 'text-gray-700 hover:bg-blue-50 hover:text-blue-700' 
                        : 'text-white hover:bg-blue-800'
                  }`}
                >
                  <span className="font-medium text-sm">More</span>
                  <ChevronDown size={16} className={`transition-transform ${
                    openDropdown === 'More' ? 'rotate-180' : ''
                  }`} />
                </button> */}
                
                {openDropdown === 'More' && (
                  <div className="absolute top-full right-0 mt-1 w-56 bg-white shadow-xl rounded-lg py-2 z-50">
                    {navItems.slice(8).map((item) => (
                      <div key={item.name}>
                        {item.type === 'link' ? (
                          <Link
                            href={item.href}
                            onClick={() => setOpenDropdown(null)}
                            className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition"
                          >
                            {item.icon}
                            <span className="text-sm">{item.name}</span>
                          </Link>
                        ) : (
                          <div className="border-t border-gray-100 mt-2 pt-2">
                            <div className="px-4 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                              {item.name}
                            </div>
                            {item.items.map((subItem) => (
                              <Link
                                key={subItem.name}
                                href={subItem.href}
                                onClick={() => setOpenDropdown(null)}
                                className="flex items-center gap-3 px-4 py-2 pl-8 text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition text-sm"
                              >
                                {subItem.icon}
                                {subItem.name}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`lg:hidden p-2 rounded-md ${
                scrolled ? 'text-blue-900' : 'text-white'
              }`}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isOpen && (
            <div className="lg:hidden bg-white shadow-lg rounded-b-lg max-h-[80vh] overflow-y-auto">
              <div className="px-2 pt-2 pb-3 space-y-1">
                {navItems.map((item) => (
                  <div key={item.name}>
                    {item.type === 'link' ? (
                      <Link
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className={`flex items-center justify-between gap-3 px-4 py-3 rounded-md transition ${
                          isActive(item.href)
                            ? 'bg-blue-600 text-white'
                            : 'text-gray-700 hover:bg-blue-50 hover:text-blue-700'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          {item.icon}
                          <span className="font-medium">{item.name}</span>
                        </div>
                        {item.badge && (
                          <span className="bg-red-500 text-white text-xs px-2 py-1 rounded">
                            {item.badge}
                          </span>
                        )}
                      </Link>
                    ) : (
                      <div>
                        <div className="flex items-center justify-between px-4 py-3 text-gray-700">
                          <div className="flex items-center gap-3">
                            {item.icon}
                            <span className="font-medium">{item.name}</span>
                          </div>
                          <ChevronDown size={16} />
                        </div>
                        <div className="ml-8 space-y-1 border-l border-gray-200 pl-2">
                          {item.items.map((subItem) => (
                            <Link
                              key={subItem.name}
                              href={subItem.href}
                              onClick={() => setIsOpen(false)}
                              className="flex items-center gap-3 px-4 py-2 text-gray-600 hover:text-blue-700 hover:bg-blue-50 rounded-md transition"
                            >
                              {subItem.icon}
                              <span className="text-sm">{subItem.name}</span>
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
                
                {/* Mobile Contact Info */}
                <div className="border-t pt-4 mt-2">
                  <div className="space-y-3 px-4">
                    <div className="grid grid-cols-2 gap-3">
                      <a 
                        href={`mailto:${contactInfo.email}`}
                        className="flex items-center gap-2 text-blue-600 hover:text-blue-800 bg-blue-50 p-3 rounded-md"
                      >
                        <Mail size={16} />
                        <span className="text-sm">Email</span>
                      </a>
                      <a 
                        href={`tel:${contactInfo.phone}`}
                        className="flex items-center gap-2 text-blue-600 hover:text-blue-800 bg-blue-50 p-3 rounded-md"
                      >
                        <Phone size={16} />
                        <span className="text-sm">Call Now</span>
                      </a>
                    </div>
                    
                    <div className="flex justify-center space-x-4 pt-2">
                      <a href={contactInfo.social.facebook} className="text-blue-600 hover:text-blue-800">
                        <Facebook size={20} />
                      </a>
                      <a href={contactInfo.social.instagram} className="text-pink-600 hover:text-pink-800">
                        <Instagram size={20} />
                      </a>
                      <a href={contactInfo.social.youtube} className="text-red-600 hover:text-red-800">
                        <Youtube size={20} />
                      </a>
                      <a href={contactInfo.social.whatsapp} className="text-green-600 hover:text-green-800">
                        <Smartphone size={20} />
                      </a>
                    </div>
                    
                    <div className="flex gap-2 pt-2">
                      <a 
                        href={contactInfo.social.whatsapp}
                        className="flex-1 flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white p-2 rounded-md text-sm"
                      >
                        <Smartphone size={16} />
                        WhatsApp
                      </a>
                      <div className="flex-1 flex items-center justify-center gap-2 bg-green-700 text-white p-2 rounded-md text-sm">
                        <Smartphone size={16} />
                        Android
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;