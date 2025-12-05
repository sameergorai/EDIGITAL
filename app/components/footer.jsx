// 'use client';

// import React, { useState } from 'react';
// import {
//   HiLocationMarker,
//   HiPhone,
//   HiMail,
//   HiGlobe,
//   HiChevronDown,
//   HiChevronUp,
//   HiExternalLink,
//   HiMap,
//   HiOfficeBuilding,
//   HiUserGroup,
//   HiBookOpen,
//   HiAcademicCap,
//   HiBriefcase,
//   HiShieldCheck
// } from 'react-icons/hi';
// import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube, FaWhatsapp } from 'react-icons/fa';

// const Footer = () => {
//   const [expandedSection, setExpandedSection] = useState(null);

//   const toggleSection = (section) => {
//     setExpandedSection(expandedSection === section ? null : section);
//   };

//   const offices = [
//     {
//       name: 'Head Office',
//       address: 'Citadel Apartment, Venkataraman Street, T. Nagar, Chennai, Tamil Nadu 600017',
//       icon: HiOfficeBuilding,
//       color: 'text-blue-500'
//     },
//     {
//       name: 'Branch 1',
//       address: '2nd Floor, Noorsarai, Maidan Garhi - South West Delhi, 110068',
//       icon: HiMap,
//       color: 'text-green-500'
//     },
//     {
//       name: 'Branch 2 (Jamshedpur)',
//       address: '2nd floor, Jayanta Tower, Sakchi Gol Chakkar, opposite Delhi Darbar, SNP Area, Sakchi, Jamshedpur, Jharkhand 831001',
//       icon: HiMap,
//       color: 'text-purple-500'
//     }
//   ];

//   const companyLinks = [
//     { name: 'About Us', href: '/about-us', icon: HiUserGroup },
//     { name: 'Contact Us', href: '/contact', icon: HiPhone },
//     { name: 'Apply Now', href: '/apply', icon: HiBriefcase },
//     // { name: 'Career', href: '/', icon: HiAcademicCap },
//     // { name: 'Terms & Conditions', href: '/', icon: HiShieldCheck }
//   ];

//   const courses = [
//     'Web Development',
//     'Digital Marketing',
//     'Data Science & AI',
//     'Android App Development',
//     'Business Comm. & Soft Skills',
//     'Sap Global Certification'
//   ];

//   const socialLinks = [
//     { icon: FaFacebook, href: 'https://www.facebook.com/people/E-Digital-INDIA/61574473705318/', label: 'Facebook', color: 'hover:bg-blue-600' },
//     // { icon: FaTwitter, href: 'https://twitter.com', label: 'Twitter', color: 'hover:bg-blue-400' },
//     { icon: FaInstagram, href: 'https://www.instagram.com/edigitalindia?igsh=MTF0bGwwYzZyaWYxYQ==', label: 'Instagram', color: 'hover:bg-pink-600' },
//     // { icon: FaLinkedin, href: 'https://linkedin.com', label: 'LinkedIn', color: 'hover:bg-blue-700' },
//     { icon: FaYoutube, href: 'https://www.youtube.com/@EDIGITALINDIA', label: 'YouTube', color: 'hover:bg-red-600' },
//     { icon: FaWhatsapp, href: 'https://wa.me/918448831264', label: 'WhatsApp', color: 'hover:bg-green-500' }
//   ];

//   return (
//     <footer className="bg-gradient-to-b from-gray-900 to-black text-white pt-12 pb-8 border-t border-white/10">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Main Footer Content */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
//           {/* Brand Section */}
//           <div className="lg:col-span-1">
//             <div className="mb-6">
//               <div className="flex items-center gap-3 mb-4">
//                 <div className="p-2 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-lg">
//                   <HiGlobe className="h-8 w-8 text-white" />
//                 </div>
//                 <div>
//                   <h2 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
//                     E-Digital India
//                   </h2>
//                   <p className="text-sm text-gray-400">Transforming Careers Digitally</p>
//                 </div>
//               </div>
//               <p className="text-gray-300 mb-6">
//                 Empowering the next generation of digital professionals with industry-relevant skills and practical training.
//               </p>
//             </div>

//             {/* Contact Info */}
//             <div className="space-y-4">
//               <a 
//                 href="tel:+919934141233" 
//                 className="flex items-center gap-3 group"
//               >
//                 <div className="p-2 bg-green-500/10 rounded-lg group-hover:bg-green-500/20 transition-colors">
//                   <HiPhone className="h-5 w-5 text-green-400" />
//                 </div>
//                 <div>
//                   <div className="text-lg font-semibold group-hover:text-green-400 transition-colors">
//                     +91 9934141233
//                   </div>
//                   <div className="text-sm text-gray-400">Call us for inquiries</div>
//                 </div>
//               </a>

//               <a 
//                 href="mailto:info@edigitalindia.com" 
//                 className="flex items-center gap-3 group"
//               >
//                 <div className="p-2 bg-blue-500/10 rounded-lg group-hover:bg-blue-500/20 transition-colors">
//                   <HiMail className="h-5 w-5 text-blue-400" />
//                 </div>
//                 <div>
//                   <div className="font-medium group-hover:text-blue-400 transition-colors">
//                     info@edigitalindia.com
//                   </div>
//                   <div className="text-sm text-gray-400">Email us</div>
//                 </div>
//               </a>
//             </div>
//           </div>

//           {/* Our Offices - Mobile Accordion / Desktop Grid */}
//           <div className="">
//             <div 
//               className="md:hidden flex items-center justify-between mb-4 p-4 bg-white/5 rounded-lg cursor-pointer"
//               onClick={() => toggleSection('offices')}
//             >
//               <h3 className="text-lg font-semibold flex items-center gap-2">
//                 <HiLocationMarker className="h-5 w-5 text-red-400" />
//                 Our Offices
//               </h3>
//               {expandedSection === 'offices' ? 
//                 <HiChevronUp className="h-5 w-5" /> : 
//                 <HiChevronDown className="h-5 w-5" />
//               }
//             </div>
            
//             <div className={`${expandedSection === 'offices' ? 'block' : 'hidden'} md:block`}>
//               <h3 className="hidden md:block text-lg font-semibold mb-6 flex items-center gap-2">
//                 {/* <HiLocationMarker className="h-5 w-5 text-red-400" /> */}
//                 Our Offices
//               </h3>
              
//               <div className="space-y-6 max-h-30 grid col-2 row-2">
//                 {offices.map((office, index) => (
//                   <div key={index} className="group p-4 bg-white/5 hover:bg-white/10 rounded-xl transition-all duration-300">
//                     <div className="flex items-start gap-3">
//                       <div className={`p-2 rounded-lg ${office.color} bg-opacity-10`}>
//                         <office.icon className={`h-5 w-5 ${office.color}`} />
//                       </div>
//                       <div>
//                         <h4 className="font-semibold mb-2 group-hover:text-cyan-400 transition-colors">
//                           {office.name}
//                         </h4>
//                         <p className="text-sm text-gray-300 leading-relaxed">
//                           {office.address}
//                         </p>
//                         <button className="mt-3 text-sm text-cyan-400 hover:text-cyan-300 flex items-center gap-1">
//                           <HiExternalLink className="h-4 w-4" />
//                           View on Map
//                         </button>
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>

//           {/* Company Links - Mobile Accordion / Desktop Grid */}
//           <div className="lg:col-span-1">
//             <div 
//               className="md:hidden flex items-center justify-between mb-4 p-4 bg-white/5 rounded-lg cursor-pointer"
//               onClick={() => toggleSection('company')}
//             >
//               <h3 className="text-lg font-semibold">Company</h3>
//               {expandedSection === 'company' ? 
//                 <HiChevronUp className="h-5 w-5" /> : 
//                 <HiChevronDown className="h-5 w-5" />
//               }
//             </div>
            
//             <div className={`${expandedSection === 'company' ? 'block' : 'hidden'} md:block`}>
//               <h3 className="hidden md:block text-lg font-semibold mb-6">Company</h3>
//               <div className="space-y-3">
//                 {companyLinks.map((link, index) => (
//                   <a
//                     key={index}
//                     href={link.href}
//                     className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/5 group transition-colors"
//                   >
//                     <link.icon className="h-5 w-5 text-gray-400 group-hover:text-cyan-400 transition-colors" />
//                     <span className="text-gray-300 group-hover:text-white transition-colors">
//                       {link.name}
//                     </span>
//                   </a>
//                 ))}
//               </div>
//             </div>
//           </div>

//           {/* Top Courses - Mobile Accordion / Desktop Grid */}
//           <div className="lg:col-span-1">
//             <div 
//               className="md:hidden flex items-center justify-between mb-4 p-4 bg-white/5 rounded-lg cursor-pointer"
//               onClick={() => toggleSection('courses')}
//             >
//               <h3 className="text-lg font-semibold flex items-center gap-2">
//                 <HiBookOpen className="h-5 w-5 text-amber-400" />
//                 Top Courses
//               </h3>
//               {expandedSection === 'courses' ? 
//                 <HiChevronUp className="h-5 w-5" /> : 
//                 <HiChevronDown className="h-5 w-5" />
//               }
//             </div>
            
//             <div className={`${expandedSection === 'courses' ? 'block' : 'hidden'} md:block`}>
//               <h3 className="hidden md:block text-lg font-semibold mb-6 flex items-center gap-2">
//                 <HiBookOpen className="h-5 w-5 text-amber-400" />
//                 Top Courses
//               </h3>
//               <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
//                 {courses.map((course, index) => (
//                   <a
//                     key={index}
//                     // href={`/courses/${course.toLowerCase().replace(/\s+/g, '-')}`}
//                     className="p-3 bg-white/5 hover:bg-white/10 rounded-lg group transition-all duration-300"
//                   >
//                     <div className="flex items-center justify-between">
//                       <span className="text-sm text-gray-300 group-hover:text-white transition-colors">
//                         {course}
//                       </span>
//                       <HiExternalLink className="h-4 w-4 text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity" />
//                     </div>
//                   </a>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Social Media & Newsletter */}
//         <div className="border-t border-white/10 pt-8 mb-8">
//           <div className="flex flex-col md:flex-row justify-between items-center gap-6">
//             {/* Social Media */}
//             <div>
//               <h4 className="text-lg font-semibold mb-4 text-center md:text-left">Connect With Us</h4>
//               <div className="flex flex-wrap justify-center md:justify-start gap-3">
//                 {socialLinks.map((social, index) => (
//                   <a
//                     key={index}
//                     href={social.href}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className={`p-3 rounded-full bg-white/5 ${social.color} hover:text-white transition-all duration-300 group`}
//                     aria-label={social.label}
//                   >
//                     <social.icon className="h-5 w-5 text-gray-300 group-hover:text-white" />
//                   </a>
//                 ))}
//               </div>
//             </div>

//             {/* Newsletter */}
//             <div className="w-full md:w-auto">
//               <div className="max-w-md mx-auto">
//                 <h4 className="text-lg font-semibold mb-4 text-center">Get Updates</h4>
//                 <div className="flex gap-2">
//                   <input
//                     type="email"
//                     placeholder="Enter your email"
//                     className="flex-1 px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent placeholder-gray-400"
//                   />
//                   <button className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 rounded-lg font-medium transition-all duration-300 hover:scale-105">
//                     Subscribe
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Bottom Bar */}
//         <div className="border-t border-white/10 pt-8">
//           <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            

//             {/* Location Badge */}
//             <div className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full">
//               <HiLocationMarker className="h-4 w-4 text-cyan-400" />
//               <span className="text-sm">Serving India & International Students</span>
//             </div>
//           </div>

//           {/* Trust Badges */}
//           <div className="mt-8 flex flex-wrap justify-center gap-6">
//             <div className="flex items-center gap-2 text-sm text-gray-400">
//               <HiShieldCheck className="h-5 w-5 text-green-400" />
//               <span>ISO Certified</span>
//             </div>
//             <div className="flex items-center gap-2 text-sm text-gray-400">
//               <HiBriefcase className="h-5 w-5 text-blue-400" />
//               <span>100% Placement Assistance</span>
//             </div>
//             <div className="flex items-center gap-2 text-sm text-gray-400">
//               <HiAcademicCap className="h-5 w-5 text-amber-400" />
//               <span>Industry Certified Trainers</span>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Back to Top Button */}
//       <button
//         onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
//         className="fixed bottom-8 right-8 p-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full shadow-lg hover:scale-110 transition-all duration-300 z-50"
//         aria-label="Back to top"
//       >
//         <HiChevronUp className="h-6 w-6 text-white" />
//       </button>
//     </footer>
//   );
// };

// export default Footer;

'use client';

import { useState } from 'react';
import {
  HiPhone,
  HiMail,
  HiLocationMarker,
  HiGlobe,
  HiChevronUp,
  HiChevronDown,
  HiExternalLink,
  HiBookOpen,
  HiShieldCheck,
  HiBriefcase,
  HiAcademicCap,
  HiInformationCircle,
  HiNewspaper,
  HiUserGroup,
  HiCalendar,
  HiLibrary,
  HiChatAlt2,
  HiQuestionMarkCircle,
  HiStar,
  HiCheckCircle
} from 'react-icons/hi';
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaLinkedinIn,
  FaWhatsapp
} from 'react-icons/fa';

const Footer = () => {
  const [expandedSection, setExpandedSection] = useState(null);

  const toggleSection = (section) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  // Offices data
  const offices = [
    {
      name: 'Head Office - Chennai',
      address: 'T. Nagar, Chennai, Tamil Nadu',
      icon: HiLocationMarker,
      color: 'text-red-500'
    },
    {
      name: 'Delhi Branch',
      address: 'South West Delhi',
      icon: HiLocationMarker,
      color: 'text-blue-500'
    },
    {
      name: 'Jamshedpur Campus',
      address: 'Jayanta Tower, Sakchi, Jamshedpur, Jharkhand 831001',
      icon: HiLocationMarker,
      color: 'text-green-500'
    }
  ];

  // Company links
  const companyLinks = [
    { name: 'About Us', href: '/about', icon: HiInformationCircle },
    { name: 'Our Courses', href: '/courses', icon: HiBookOpen },
    { name: 'Blog', href: '/blog', icon: HiNewspaper },
    { name: 'Careers', href: '/careers', icon: HiUserGroup },
    { name: 'Events', href: '/events', icon: HiCalendar },
    { name: 'Library', href: '/library', icon: HiLibrary },
    { name: 'FAQ', href: '/faq', icon: HiQuestionMarkCircle },
    { name: 'Contact', href: '/contact', icon: HiChatAlt2 }
  ];

  // Top courses
  const courses = [
    'Digital Marketing',
    'Web Development',
    'Data Science & AI',
    'Android App Development',
    'Business Communication',
    'SAP Certification'
  ];

  // Social links
  const socialLinks = [
    {
      icon: FaFacebookF,
      href: 'https://www.facebook.com/people/E-Digital-INDIA/61574473705318/',
      label: 'Facebook',
      color: 'hover:bg-blue-600'
    },
    {
      icon: FaInstagram,
      href: 'https://www.instagram.com/edigitalindia',
      label: 'Instagram',
      color: 'hover:bg-pink-600'
    },
    {
      icon: FaTwitter,
      href: 'https://x.com/edigitalindian',
      label: 'Twitter',
      color: 'hover:bg-black'
    },
    {
      icon: FaYoutube,
      href: 'https://www.youtube.com/@EDIGITALINDIA',
      label: 'YouTube',
      color: 'hover:bg-red-600'
    },
    {
      icon: FaLinkedinIn,
      href: '#',
      label: 'LinkedIn',
      color: 'hover:bg-blue-700'
    },
    {
      icon: FaWhatsapp,
      href: 'https://wa.me/918448831264',
      label: 'WhatsApp',
      color: 'hover:bg-green-600'
    }
  ];

  // Certification badges
  const certifications = [
    { text: 'ISO 9001:2015 Certified', icon: HiCheckCircle, color: 'text-green-400' },
    { text: '100% Placement Assistance', icon: HiBriefcase, color: 'text-blue-400' },
    { text: 'Industry Expert Trainers', icon: HiAcademicCap, color: 'text-amber-400' },
    { text: 'Live Project Training', icon: HiStar, color: 'text-purple-400' }
  ];

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          
          {/* Brand & Contact Section */}
          <div className="lg:col-span-2">
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-xl">
                  <HiGlobe className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                    E-Digital India
                  </h2>
                  <p className="text-sm text-gray-400 mt-1">ISO Certified Digital Skills Institute</p>
                </div>
              </div>
              <p className="text-gray-300 mb-8 leading-relaxed">
                Transforming careers through industry-relevant digital education. Offering 100% job guarantee with practical training and expert mentorship.
              </p>
            </div>

            {/* Contact Information */}
            <div className="space-y-4">
              <a 
                href="tel:+919934141233" 
                className="flex items-center gap-4 p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-all group"
              >
                <div className="p-3 bg-green-500/10 rounded-lg group-hover:bg-green-500/20 transition-colors">
                  <HiPhone className="h-6 w-6 text-green-400" />
                </div>
                <div className="flex-1">
                  <div className="text-lg font-semibold group-hover:text-green-400 transition-colors">
                    +91 99341 41233
                  </div>
                  <div className="text-sm text-gray-400">Call for Course Inquiry</div>
                </div>
                <HiExternalLink className="h-5 w-5 text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>

              <a 
                href="mailto:info@edigitalindia.com" 
                className="flex items-center gap-4 p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-all group"
              >
                <div className="p-3 bg-blue-500/10 rounded-lg group-hover:bg-blue-500/20 transition-colors">
                  <HiMail className="h-6 w-6 text-blue-400" />
                </div>
                <div className="flex-1">
                  <div className="font-medium group-hover:text-blue-400 transition-colors truncate">
                    info@edigitalindia.com
                  </div>
                  <div className="text-sm text-gray-400">Email for Support</div>
                </div>
                <HiExternalLink className="h-5 w-5 text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 pb-3 border-b border-white/10">
              Quick Links
            </h3>
            <div className="space-y-3">
              {companyLinks.slice(0, 6).map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/5 group transition-all"
                >
                  <link.icon className="h-5 w-5 text-gray-400 group-hover:text-cyan-400 transition-colors" />
                  <span className="text-gray-300 group-hover:text-white transition-colors">
                    {link.name}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Our Courses */}
          <div>
            <h3 className="text-lg font-semibold mb-6 pb-3 border-b border-white/10 flex items-center gap-2">
              <HiBookOpen className="h-5 w-5 text-amber-400" />
              Popular Courses
            </h3>
            <div className="space-y-3">
              {courses.map((course, index) => (
                <a
                  key={index}
                  href={`/courses/${course.toLowerCase().replace(/\s+/g, '-')}`}
                  className="block p-3 bg-white/5 hover:bg-white/10 rounded-lg group transition-all"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-300 group-hover:text-white transition-colors">
                      {course}
                    </span>
                    <HiExternalLink className="h-4 w-4 text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Our Offices */}
          <div>
            <h3 className="text-lg font-semibold mb-6 pb-3 border-b border-white/10 flex items-center gap-2">
              <HiLocationMarker className="h-5 w-5 text-red-400" />
              Our Campuses
            </h3>
            <div className="space-y-4">
              {offices.map((office, index) => (
                <div key={index} className="group p-3 bg-white/5 hover:bg-white/10 rounded-lg transition-all">
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-white/5">
                      <office.icon className={`h-5 w-5 ${office.color}`} />
                    </div>
                    <div>
                      <h4 className="font-medium mb-1 group-hover:text-cyan-400 transition-colors">
                        {office.name}
                      </h4>
                      <p className="text-xs text-gray-400 leading-relaxed">
                        {office.address}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Certification & Trust Badges */}
        <div className="py-8 border-y border-white/10 mb-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {certifications.map((cert, index) => (
              <div key={index} className="flex items-center gap-3 p-4 bg-white/5 rounded-xl">
                <cert.icon className={`h-6 w-6 ${cert.color}`} />
                <span className="text-sm font-medium">{cert.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Social Media & Newsletter */}
        <div className="mb-8">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
            {/* Social Media */}
            <div className="text-center lg:text-left">
              <h4 className="text-lg font-semibold mb-4">Stay Connected</h4>
              <div className="flex flex-wrap justify-center lg:justify-start gap-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 rounded-full bg-white/5 hover:bg-white/10 ${social.color} transition-all duration-300 group`}
                    aria-label={social.label}
                  >
                    <social.icon className="h-5 w-5 text-gray-300 group-hover:text-white" />
                  </a>
                ))}
              </div>
            </div>

            {/* Newsletter */}
            <div className="w-full lg:w-auto">
              <div className="max-w-md mx-auto">
                <h4 className="text-lg font-semibold mb-4 text-center">Subscribe to Newsletter</h4>
                <div className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent placeholder-gray-400 text-white"
                  />
                  <button className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 rounded-lg font-semibold transition-all duration-300 hover:scale-105 whitespace-nowrap">
                    Subscribe
                  </button>
                </div>
                <p className="text-xs text-gray-400 mt-2 text-center">
                  Get updates on new courses, workshops, and career opportunities
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <p className="text-gray-400 text-sm">
                © {new Date().getFullYear()} E-Digital India. All rights reserved.
              </p>
              <p className="text-gray-500 text-xs mt-1">
                Transforming Digital Education Across India
              </p>
            </div>

            {/* Location Badge */}
            <div className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full border border-cyan-500/20">
              <HiLocationMarker className="h-4 w-4 text-cyan-400" />
              <span className="text-sm text-gray-300">Serving Pan India</span>
            </div>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 p-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 z-50 group"
        aria-label="Back to top"
      >
        <HiChevronUp className="h-6 w-6 text-white group-hover:animate-bounce" />
      </button>
    </footer>
  );
};

export default Footer;