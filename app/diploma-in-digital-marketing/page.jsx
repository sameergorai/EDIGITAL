'use client'
import Head from 'next/head';
import Script from 'next/script';
import { useState } from 'react';

export default function DigitalMarketingCoursePage() {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        mode: 'online',
        courseName: 'Diploma in Digital Marketing Course',
        background: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        try {
            const response = await fetch('https://edigitalindian.com/api/register.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            });

            const result = await response.json();

            if (!response.ok) {
                throw new Error(result.error || 'Failed to submit form');
            }

            console.log('Form submitted successfully:', result);
            alert('Thank you for your interest in SAP Certification Course! We\'ll contact you shortly.');
            
          setFormData({ 
            fullName: '', 
            email: '', 
            phone: '', 
            mode: 'online', 
        courseName: '',
            background: '',
            message: '' 
        });
        } catch (error) {
            console.error('Error submitting form:', error);

        } finally {}
            // s
        
    };

    return (
        <>
            <Head>
                <title>Diploma in Digital Marketing Course | Job Guarantee + Free Laptop</title>
                <meta name="description" content="Enroll in our 6-month Digital Marketing Diploma with UGC-approved PGDCA certificate, free laptop, 100% job guarantee, and live project experience." />
                <meta name="keywords" content="digital marketing course, SEO training, Google Ads course, social media marketing, digital marketing certification, online marketing course" />
                <link rel="canonical" href="https://edigitalindia.com/digital-marketing-course" />
                <meta name="robots" content="index, follow" />
                <meta name="author" content="E Digital India" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                
                {/* Open Graph Meta Tags */}
                <meta property="og:title" content="Diploma in Digital Marketing - 100% Job Guarantee + Free Laptop" />
                <meta property="og:description" content="6-month practical digital marketing training with live projects, UGC-approved certificate, and placement support. Learn SEO, Google Ads, Social Media Marketing." />
                <meta property="og:url" content="https://edigitalindia.com/digital-marketing-course" />
                <meta property="og:site_name" content="E Digital India" />
                <meta property="og:type" content="website" />
                <meta property="og:locale" content="en_US" />
                <meta property="og:image" content="/images/digital-marketing-course.jpg" />
                <meta property="og:image:width" content="1200" />
                <meta property="og:image:height" content="630" />
                <meta property="og:image:alt" content="Digital Marketing Certification Course" />
                
                {/* Twitter Meta Tags */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Digital Marketing Course – Free Laptop & Job Guarantee" />
                <meta name="twitter:description" content="Master SEO, Google Ads, Social Media Marketing with hands-on training and industry-recognized certification." />
                <meta name="twitter:image" content="/images/digital-marketing-course.jpg" />
            </Head>

            <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
                {/* Hero Section */}
                <section className="relative py-16 md:py-24 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 opacity-90"></div>
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-32 translate-x-32"></div>
                    <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full translate-y-48 -translate-x-48"></div>
                    
                    <div className="container mx-auto px-4 relative z-10">
                        <div className="max-w-4xl mx-auto text-center text-white">
                            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                                Diploma in Digital Marketing
                            </h1>
                            <p className="text-xl md:text-2xl mb-8 leading-relaxed">
                                Real job-ready skills in today's online world. Learn from industry experts, work on live projects, and master digital marketing that works.
                            </p>
                            <p className="text-lg md:text-xl mb-10 opacity-90">
                                From SEO and Google Ads to social media and content creation — learn how to promote brands, manage campaigns, generate leads, and grow businesses online.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <a
                                    href="#enroll"
                                    className="bg-white text-purple-600 hover:bg-gray-100 font-bold py-4 px-8 rounded-full text-lg transition transform hover:scale-105 shadow-lg"
                                >
                                    Enroll Now - Free Laptop Included
                                </a>
                                <a
                                    href="#curriculum"
                                    className="bg-transparent border-2 border-white hover:bg-white/10 font-bold py-4 px-8 rounded-full text-lg transition"
                                >
                                    View Curriculum
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Benefits Section */}
                <section className="py-16 bg-white">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl font-bold text-center mb-4 text-gray-800">
                            Benefits of Our Digital Marketing Course
                        </h2>
                        <p className="text-lg text-center text-gray-600 mb-12 max-w-3xl mx-auto">
                            At E Digital India, we focus on practical skills, career growth, and student success.
                        </p>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {[
                                { 
                                    icon: "💻", 
                                    title: "Free Laptop", 
                                    desc: "Get a personal laptop when you join, so you can hit the ground running, no extra gear needed.",
                                    color: "from-blue-500 to-cyan-500"
                                },
                                { 
                                    icon: "🏆", 
                                    title: "UGC-Approved PGDCA Certificate", 
                                    desc: "Add more credibility to your background with a recognized certification from Asian University.",
                                    color: "from-purple-500 to-pink-500"
                                },
                                { 
                                    icon: "🎓", 
                                    title: "Online & Classroom Classes", 
                                    desc: "Learn flexibly, whether in-person or from home.",
                                    color: "from-green-500 to-emerald-500"
                                },
                                { 
                                    icon: "⭐", 
                                    title: "ISO-Certified & Industry-Recognized", 
                                    desc: "Stand out with globally trusted certifications.",
                                    color: "from-yellow-500 to-orange-500"
                                },
                                { 
                                    icon: "💼", 
                                    title: "100% Job Guarantee", 
                                    desc: "Get a paid internship and 100% job placement support.",
                                    color: "from-red-500 to-pink-500"
                                },
                                { 
                                    icon: "🚀", 
                                    title: "Live Projects & Hands-on Learning", 
                                    desc: "Gain practical skills by working on real client projects.",
                                    color: "from-indigo-500 to-blue-500"
                                },
                                { 
                                    icon: "👨‍🏫", 
                                    title: "Expert Trainers", 
                                    desc: "Learn directly from experienced professionals with personalized career guidance.",
                                    color: "from-teal-500 to-cyan-500"
                                },
                                { 
                                    icon: "📄", 
                                    title: "Mock Interviews & Resume Building", 
                                    desc: "Prepare for interviews with confidence.",
                                    color: "from-purple-500 to-violet-500"
                                },
                                { 
                                    icon: "🎯", 
                                    title: "Placement Assistance", 
                                    desc: "End-to-end support until you land your dream job.",
                                    color: "from-green-600 to-lime-500"
                                },
                            ].map((item, i) => (
                                <div key={i} className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                                    <div className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${item.color} mb-4`}>
                                        <span className="text-2xl">{item.icon}</span>
                                    </div>
                                    <h3 className="font-bold text-xl mb-3 text-gray-800">{item.title}</h3>
                                    <p className="text-gray-600">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* What You'll Learn */}
                <section id="curriculum" className="py-16 bg-gradient-to-br from-purple-50 to-pink-50">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
                            What You Will Learn
                        </h2>
                        <div className="max-w-5xl mx-auto">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                                {/* Left Column - Foundation */}
                                <div className="space-y-6">
                                    <div className="bg-white rounded-2xl p-6 shadow-lg">
                                        <div className="flex items-center mb-4">
                                            <div className="bg-purple-100 p-3 rounded-lg mr-4">
                                                <span className="text-2xl">🌐</span>
                                            </div>
                                            <h3 className="font-bold text-xl text-purple-800">Digital Marketing Foundation</h3>
                                        </div>
                                        <ul className="space-y-3">
                                            <li className="flex items-start">
                                                <span className="text-green-500 mr-2 mt-1">✓</span>
                                                <span>Introduction to Digital Marketing</span>
                                            </li>
                                            <li className="flex items-start">
                                                <span className="text-green-500 mr-2 mt-1">✓</span>
                                                <span>Traditional vs Digital Marketing</span>
                                            </li>
                                            <li className="flex items-start">
                                                <span className="text-green-500 mr-2 mt-1">✓</span>
                                                <span>Digital Marketing Funnel & Strategy</span>
                                            </li>
                                            <li className="flex items-start">
                                                <span className="text-green-500 mr-2 mt-1">✓</span>
                                                <span>Customer Journey Mapping</span>
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="bg-white rounded-2xl p-6 shadow-lg">
                                        <div className="flex items-center mb-4">
                                            <div className="bg-blue-100 p-3 rounded-lg mr-4">
                                                <span className="text-2xl">🔍</span>
                                            </div>
                                            <h3 className="font-bold text-xl text-blue-800">SEO Mastery</h3>
                                        </div>
                                        <ul className="space-y-3">
                                            <li className="flex items-start">
                                                <span className="text-green-500 mr-2 mt-1">✓</span>
                                                <span>On-Page & Off-Page SEO</span>
                                            </li>
                                            <li className="flex items-start">
                                                <span className="text-green-500 mr-2 mt-1">✓</span>
                                                <span>Technical SEO & Site Speed</span>
                                            </li>
                                            <li className="flex items-start">
                                                <span className="text-green-500 mr-2 mt-1">✓</span>
                                                <span>Keyword Research & Analysis</span>
                                            </li>
                                            <li className="flex items-start">
                                                <span className="text-green-500 mr-2 mt-1">✓</span>
                                                <span>Local SEO & Google My Business</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                {/* Right Column - Advanced */}
                                <div className="space-y-6">
                                    <div className="bg-white rounded-2xl p-6 shadow-lg">
                                        <div className="flex items-center mb-4">
                                            <div className="bg-red-100 p-3 rounded-lg mr-4">
                                                <span className="text-2xl">🎯</span>
                                            </div>
                                            <h3 className="font-bold text-xl text-red-800">Google Ads / PPC</h3>
                                        </div>
                                        <ul className="space-y-3">
                                            <li className="flex items-start">
                                                <span className="text-green-500 mr-2 mt-1">✓</span>
                                                <span>Search & Display Network Ads</span>
                                            </li>
                                            <li className="flex items-start">
                                                <span className="text-green-500 mr-2 mt-1">✓</span>
                                                <span>Conversion Tracking & Optimization</span>
                                            </li>
                                            <li className="flex items-start">
                                                <span className="text-green-500 mr-2 mt-1">✓</span>
                                                <span>Remarketing & Audience Targeting</span>
                                            </li>
                                            <li className="flex items-start">
                                                <span className="text-green-500 mr-2 mt-1">✓</span>
                                                <span>Budget Management & ROI Analysis</span>
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="bg-white rounded-2xl p-6 shadow-lg">
                                        <div className="flex items-center mb-4">
                                            <div className="bg-pink-100 p-3 rounded-lg mr-4">
                                                <span className="text-2xl">📱</span>
                                            </div>
                                            <h3 className="font-bold text-xl text-pink-800">Social Media Marketing</h3>
                                        </div>
                                        <ul className="space-y-3">
                                            <li className="flex items-start">
                                                <span className="text-green-500 mr-2 mt-1">✓</span>
                                                <span>Facebook & Instagram Marketing</span>
                                            </li>
                                            <li className="flex items-start">
                                                <span className="text-green-500 mr-2 mt-1">✓</span>
                                                <span>LinkedIn for B2B Marketing</span>
                                            </li>
                                            <li className="flex items-start">
                                                <span className="text-green-500 mr-2 mt-1">✓</span>
                                                <span>Content Strategy & Creation</span>
                                            </li>
                                            <li className="flex items-start">
                                                <span className="text-green-500 mr-2 mt-1">✓</span>
                                                <span>Community Management & Engagement</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Course Details */}
                <section className="py-16 bg-white">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
                            Course Details
                        </h2>
                        <div className="max-w-4xl mx-auto">
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-2xl text-center shadow-lg">
                                    <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-100 rounded-full mb-6">
                                        <span className="text-3xl">⏱️</span>
                                    </div>
                                    <h3 className="font-bold text-2xl mb-3 text-blue-800">Duration</h3>
                                    <p className="text-gray-700 font-semibold text-lg">6 Months</p>
                                    <p className="text-gray-600 mt-2">Intensive practical training</p>
                                </div>

                                <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-2xl text-center shadow-lg">
                                    <div className="inline-flex items-center justify-center w-20 h-20 bg-purple-100 rounded-full mb-6">
                                        <span className="text-3xl">🎓</span>
                                    </div>
                                    <h3 className="font-bold text-2xl mb-3 text-purple-800">Learning Mode</h3>
                                    <p className="text-gray-700 font-semibold text-lg">Classroom & Online</p>
                                    <p className="text-gray-600 mt-2">Flexible learning options</p>
                                </div>

                                <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl text-center shadow-lg">
                                    <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-6">
                                        <span className="text-3xl">🏆</span>
                                    </div>
                                    <h3 className="font-bold text-2xl mb-3 text-green-800">Certification</h3>
                                    <p className="text-gray-700 font-semibold text-lg">Diploma in Digital Marketing + PGDCA Certificate</p>
                                    <p className="text-gray-600 mt-2">(Asian University)</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Who Can Join */}
                <section className="py-16 bg-gradient-to-r from-gray-50 to-white">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
                            Who Can Join This Course?
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                            {[
                                {
                                    icon: "🎓",
                                    title: "Students & Fresh Graduates",
                                    description: "Want a future-ready career in digital marketing.",
                                    color: "bg-blue-100 text-blue-800"
                                },
                                {
                                    icon: "💼",
                                    title: "Job Seekers",
                                    description: "Want real skills that companies are hiring for today.",
                                    color: "bg-purple-100 text-purple-800"
                                },
                                {
                                    icon: "🏢",
                                    title: "Business Owners",
                                    description: "Stop relying on agencies and learn to get leads yourself.",
                                    color: "bg-green-100 text-green-800"
                                },
                                {
                                    icon: "🚀",
                                    title: "Professionals & Freelancers",
                                    description: "Want to earn more or switch to digital marketing.",
                                    color: "bg-orange-100 text-orange-800"
                                }
                            ].map((item, i) => (
                                <div key={i} className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                                    <div className="flex items-start">
                                        <div className={`p-4 rounded-xl ${item.color} mr-4`}>
                                            <span className="text-2xl">{item.icon}</span>
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-xl mb-2 text-gray-800">{item.title}</h3>
                                            <p className="text-gray-600">{item.description}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Career Opportunities */}
                <section className="py-16 bg-gradient-to-br from-blue-900 to-purple-900 text-white">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl font-bold text-center mb-12">
                            Career Opportunities After This Course
                        </h2>
                        <p className="text-xl text-center mb-12 max-w-3xl mx-auto opacity-90">
                            By the end of the course, you'll be confident enough to take on roles like:
                        </p>
                        
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                            {[
                                {
                                    role: "SEO Executive",
                                    description: "Optimize websites for search engines and drive organic traffic",
                                    icon: "🔍",
                                    salary: "₹3-6 LPA"
                                },
                                {
                                    role: "PPC/Google Ads Specialist",
                                    description: "Manage paid advertising campaigns and maximize ROI",
                                    icon: "🎯",
                                    salary: "₹4-8 LPA"
                                },
                                {
                                    role: "Social Media Manager",
                                    description: "Create and manage brand presence across social platforms",
                                    icon: "📱",
                                    salary: "₹3-7 LPA"
                                },
                                {
                                    role: "Content Marketer",
                                    description: "Develop content strategies that engage and convert",
                                    icon: "✍️",
                                    salary: "₹3-6 LPA"
                                },
                                {
                                    role: "Digital Marketing Manager",
                                    description: "Oversee complete digital strategy and team management",
                                    icon: "👨‍💼",
                                    salary: "₹6-12 LPA"
                                },
                                {
                                    role: "Freelancer/Consultant",
                                    description: "Work independently with multiple clients globally",
                                    icon: "🚀",
                                    salary: "Varies (₹20k-1L+/month)"
                                }
                            ].map((job, i) => (
                                <div key={i} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:-translate-y-1">
                                    <div className="flex items-center mb-4">
                                        <div className="bg-white/20 p-3 rounded-lg mr-4">
                                            <span className="text-2xl">{job.icon}</span>
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-xl">{job.role}</h3>
                                            <p className="text-blue-200 text-sm mt-1">{job.salary}</p>
                                        </div>
                                    </div>
                                    <p className="text-gray-200 mb-4">{job.description}</p>
                                    <div className="pt-4 border-t border-white/10">
                                        <span className="inline-block bg-white/20 px-3 py-1 rounded-full text-sm">High Demand</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Enrollment Form Section */}
                <section id="enroll" className="py-16 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="max-w-6xl mx-auto">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                                {/* Left Side - Course Highlights */}
                                <div>
                                    <h2 className="text-4xl font-bold mb-6 text-gray-800">
                                        Ready to Start Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500">Digital Marketing</span> Career?
                                    </h2>
                                    <p className="text-lg text-gray-600 mb-8">
                                        Join hundreds of successful graduates who transformed their careers with our practical digital marketing training.
                                    </p>
                                    
                                    <div className="space-y-4 mb-8">
                                        <div className="flex items-center">
                                            <div className="bg-green-100 p-2 rounded-lg mr-4">
                                                <span className="text-green-600">✓</span>
                                            </div>
                                            <span className="text-gray-700">Free Laptop on Enrollment</span>
                                        </div>
                                        <div className="flex items-center">
                                            <div className="bg-green-100 p-2 rounded-lg mr-4">
                                                <span className="text-green-600">✓</span>
                                            </div>
                                            <span className="text-gray-700">100% Job Guarantee with Paid Internship</span>
                                        </div>
                                        <div className="flex items-center">
                                            <div className="bg-green-100 p-2 rounded-lg mr-4">
                                                <span className="text-green-600">✓</span>
                                            </div>
                                            <span className="text-gray-700">UGC-Approved PGDCA Certificate</span>
                                        </div>
                                        <div className="flex items-center">
                                            <div className="bg-green-100 p-2 rounded-lg mr-4">
                                                <span className="text-green-600">✓</span>
                                            </div>
                                            <span className="text-gray-700">Live Projects & Industry Mentorship</span>
                                        </div>
                                    </div>
                                    
                                    <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-2xl border border-blue-100">
                                        <div className="flex items-center">
                                            <div className="bg-yellow-100 p-3 rounded-lg mr-4">
                                                <span className="text-2xl">🎁</span>
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-lg text-gray-800">Limited Time Offer</h4>
                                                <p className="text-gray-600">First 50 enrollments get additional career counseling sessions</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Right Side - Enrollment Form */}
                                <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 shadow-2xl border border-gray-100">
                                    <div className="text-center mb-8">
                                        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-500 rounded-full mb-4">
                                            <span className="text-2xl text-white">📝</span>
                                        </div>
                                        <h3 className="text-2xl font-bold text-gray-800">Enrollment Form</h3>
                                        <p className="text-gray-600 mt-2">Get complete course details & fee structure</p>
                                    </div>

                                    <form onSubmit={handleSubmit} className="space-y-6">
                                        <div>
                                            <label className="block text-gray-700 font-medium mb-2">Full Name *</label>
                                            <input
                                                type="text"
                                                name="fullName"
                                                value={formData.fullName}
                                                onChange={handleChange}
                                                required
                                                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition"
                                                placeholder="Enter your full name"
                                            />
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div>
                                                <label className="block text-gray-700 font-medium mb-2">Email *</label>
                                                <input
                                                    type="email"
                                                    name="email"
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    required
                                                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition"
                                                    placeholder="your@email.com"
                                                />
                                            </div>

                                            <div>
                                                <label className="block text-gray-700 font-medium mb-2">Phone *</label>
                                                <input
                                                    type="tel"
                                                    name="phone"
                                                    value={formData.phone}
                                                    onChange={handleChange}
                                                    required
                                                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition"
                                                    placeholder="+91 98765 43210"
                                                />
                                            </div>
                                        </div>

                                        <div>
                                            <label className="block text-gray-700 font-medium mb-2">Highest Qualification *</label>
                                            <input
                                                type="text"
                                                name="background"
                                                value={formData.background}
                                                onChange={handleChange}
                                                required
                                                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition"
                                                placeholder="e.g., B.Tech, MBA, B.Com, 12th Pass"
                                            />
                                        </div>

                                        <div>
                                            <label className="block text-gray-700 font-medium mb-2">Preferred Learning Mode *</label>
                                            <div className="grid grid-cols-3 gap-3">
                                                {['online', 'classroom', 'hybrid'].map((option) => (
                                                    <button
                                                        key={option}
                                                        type="button"
                                                        onClick={() => setFormData({...formData, mode: option})}
                                                        className={`py-3 rounded-lg font-medium transition ${formData.mode === option 
                                                            ? 'bg-gradient-to-r from-purple-600 to-pink-500 text-white shadow-md' 
                                                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
                                                    >
                                                        {option.charAt(0).toUpperCase() + option.slice(1)}
                                                    </button>
                                                ))}
                                            </div>
                                        </div>

                                        <div>
                                            <label className="block text-gray-700 font-medium mb-2">Any Questions or Requirements?</label>
                                            <textarea
                                                name="message"
                                                value={formData.message}
                                                onChange={handleChange}
                                                rows="3"
                                                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition"
                                                placeholder="Tell us about your career goals or specific requirements..."
                                            ></textarea>
                                        </div>

                                        <button
                                            type="submit"
                                            className="w-full bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 text-white font-bold py-4 px-4 rounded-xl transition-all duration-300 transform hover:scale-[1.02] shadow-lg hover:shadow-xl"
                                        >
                                            Apply for Digital Marketing Course
                                        </button>

                                        <p className="text-xs text-gray-500 text-center">
                                            We respect your privacy. Your information will not be shared with third parties.
                                        </p>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            {/* Structured Data for SEO */}
            <Script id="digital-marketing-structured-data" type="application/ld+json">
                {JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "Course",
                    "name": "Diploma in Digital Marketing",
                    "description": "6-month practical digital marketing training with live projects, UGC-approved PGDCA certificate, job guarantee, and free laptop.",
                    "provider": {
                        "@type": "Organization",
                        "name": "E Digital India",
                        "sameAs": "https://edigitalindia.com"
                    },
                    "educationalCredentialAwarded": "Diploma in Digital Marketing and UGC-approved PGDCA Certificate",
                    "timeToComplete": "P6M",
                    "coursePrerequisites": "Basic computer knowledge recommended",
                    "hasCourseInstance": {
                        "@type": "CourseInstance",
                        "courseMode": ["online", "offline", "mixed"],
                        "duration": "P6M"
                    },
                    "audience": {
                        "@type": "EducationalAudience",
                        "educationalRole": "Students, Job seekers, Business owners, Professionals, Freelancers"
                    },
                    "offers": {
                        "@type": "Offer",
                        "priceCurrency": "INR",
                        "availability": "https://schema.org/InStock",
                        "itemOffered": {
                            "@type": "Service",
                            "includes": "Free laptop, 100% job guarantee, Paid internship, UGC-approved certification"
                        }
                    },
                    "teaches": [
                        "Search Engine Optimization (SEO)",
                        "Google Ads / PPC",
                        "Social Media Marketing",
                        "Content Marketing",
                        "Digital Marketing Strategy",
                        "Analytics & Reporting",
                        "Conversion Optimization"
                    ],
                    "occupationalCategory": [
                        "SEO Executive",
                        "PPC Specialist",
                        "Social Media Manager",
                        "Content Marketer",
                        "Digital Marketing Manager"
                    ]
                })}
            </Script>
        </>
    );
}