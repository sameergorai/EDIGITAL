'use client'
import Head from 'next/head';
import Script from 'next/script';
import { useState } from 'react';

export default function SAPCertificationCoursePage() {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        mode: 'online',
        courseName: 'SAP Global Certification Course',
        background: '',
        message: ''
    });
    
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');
        
        console.log('Form submitted:', formData);
        
        try {
            const response = await fetch('/api/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    ...formData,
                    source: 'course'
                })
            });

            const result = await response.json();

            if (!response.ok) {
                throw new Error(result.error || 'Failed to submit form');
            }

            console.log('Form submitted successfully:', result);
            alert('Thank you for your interest in SAP Certification Course! We\'ll contact you shortly.');
            
            // Reset form
            setFormData({ 
                fullName: '',
                email: '',
                phone: '',
                mode: 'online',
                courseName: 'SAP Global Certification Course',
                background: '',
                message: ''
            });
        } catch (error) {
            console.error('Error submitting form:', error);
            setError(error.message);
            alert(error.message || 'Something went wrong. Please try again.');
        } finally {
            setLoading(false);
        }
    };


    return (
        <>
            <Head>
                <title>SAP Global Certification Course | Enterprise ERP Training</title>
                <meta name="description" content="6-month SAP Certification Course with FI, CO, MM, SD, HCM modules. Get SAP Global Certificate + PGDCA, free laptop, job guarantee, and live projects." />
                <meta name="keywords" content="SAP certification, SAP course, SAP training, SAP FI CO, SAP MM SD, SAP consultant, ERP training, SAP certification course" />
                <link rel="canonical" href="https://edigitalindia.com/sap-certification-course" />
                <meta name="robots" content="index, follow" />
                <meta name="author" content="E Digital India" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />

                {/* Open Graph Meta Tags */}
                <meta property="og:title" content="SAP Global Certification Course - Become SAP Certified Professional" />
                <meta property="og:description" content="6-month SAP certification training with FI, CO, MM, SD modules. Get SAP Global Certificate + PGDCA, job guarantee, and free laptop." />
                <meta property="og:url" content="https://edigitalindia.com/sap-certification-course" />
                <meta property="og:site_name" content="E Digital India" />
                <meta property="og:type" content="website" />
                <meta property="og:locale" content="en_US" />
                <meta property="og:image" content="/images/sap-certification-course.jpg" />
                <meta property="og:image:width" content="1200" />
                <meta property="og:image:height" content="630" />
                <meta property="og:image:alt" content="SAP Global Certification Course" />

                {/* Twitter Meta Tags */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="SAP Certification Course – Job Guarantee & Free Laptop" />
                <meta name="twitter:description" content="Master SAP modules with hands-on training and become industry-ready SAP professional." />
                <meta name="twitter:image" content="/images/sap-certification-course.jpg" />
            </Head>

            <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
                {/* Hero Section */}
                <section className="relative py-16 md:py-24 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-800 opacity-90"></div>
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-32 translate-x-32"></div>
                    <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full translate-y-48 -translate-x-48"></div>

                    <div className="container mx-auto px-4 relative z-10">
                        <div className="max-w-4xl mx-auto text-center text-white">
                            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                                SAP Global Certification Course
                            </h1>
                            <p className="text-xl md:text-2xl mb-8 leading-relaxed">
                                Build your career in SAP—whether for corporate jobs, freelancing, or managing enterprise systems.
                            </p>
                            <p className="text-lg md:text-xl mb-10 opacity-90">
                                From basic modules to advanced implementation, learn how to work on real-world SAP solutions that businesses actually use.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <a
                                    href="#enroll"
                                    className="bg-white text-blue-600 hover:bg-gray-100 font-bold py-4 px-8 rounded-full text-lg transition transform hover:scale-105 shadow-lg"
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

                {/* Core Benefits Section */}
                <section className="py-16 bg-white">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl font-bold text-center mb-4 text-gray-800">
                            Core Benefits of Our SAP Training Course
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {[
                                {
                                    icon: "💻",
                                    title: "Free Laptop on Enrollment",
                                    desc: "Start learning without any extra cost.",
                                    color: "from-blue-500 to-cyan-500"
                                },
                                {
                                    icon: "🏆",
                                    title: "Dual Certification",
                                    desc: "Industry-recognized SAP Certificate + UGC-approved PGDCA Certificate.",
                                    color: "from-indigo-500 to-purple-500"
                                },
                                {
                                    icon: "🎓",
                                    title: "Flexible Learning",
                                    desc: "Attend online, classroom, or hybrid mode—whatever fits your schedule.",
                                    color: "from-teal-500 to-green-500"
                                },
                                {
                                    icon: "💼",
                                    title: "Job Guarantee with Internship",
                                    desc: "Paid internship included—gain practical experience and enter SAP industry.",
                                    color: "from-orange-500 to-amber-500"
                                },
                                {
                                    icon: "🚀",
                                    title: "Work on Real Projects",
                                    desc: "Implement SAP modules on live case studies for your portfolio.",
                                    color: "from-purple-500 to-pink-500"
                                },
                                {
                                    icon: "👨‍🏫",
                                    title: "Career Guidance",
                                    desc: "Resume building, interview prep, and placement support.",
                                    color: "from-red-500 to-rose-500"
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
                <section id="curriculum" className="py-16 bg-gradient-to-br from-blue-50 to-indigo-50">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
                            What You Will Learn
                        </h2>
                        <div className="max-w-5xl mx-auto">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                                {/* Left Column - Foundation & Core Modules */}
                                <div className="space-y-6">
                                    <div className="bg-white rounded-2xl p-6 shadow-lg">
                                        <div className="flex items-center mb-4">
                                            <div className="bg-blue-100 p-3 rounded-lg mr-4">
                                                <span className="text-2xl">🏢</span>
                                            </div>
                                            <h3 className="font-bold text-xl text-blue-800">SAP ERP Foundation</h3>
                                        </div>
                                        <ul className="space-y-3">
                                            <li className="flex items-start">
                                                <span className="text-green-500 mr-2 mt-1">✓</span>
                                                <span>Introduction to SAP ERP & SAP Architecture</span>
                                            </li>
                                            <li className="flex items-start">
                                                <span className="text-green-500 mr-2 mt-1">✓</span>
                                                <span>Overview of SAP Modules (FI, CO, MM, SD, HCM, PP, etc.)</span>
                                            </li>
                                            <li className="flex items-start">
                                                <span className="text-green-500 mr-2 mt-1">✓</span>
                                                <span>SAP System Navigation & User Interface</span>
                                            </li>
                                            <li className="flex items-start">
                                                <span className="text-green-500 mr-2 mt-1">✓</span>
                                                <span>Understanding SAP client-server architecture</span>
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="bg-white rounded-2xl p-6 shadow-lg">
                                        <div className="flex items-center mb-4">
                                            <div className="bg-green-100 p-3 rounded-lg mr-4">
                                                <span className="text-2xl">💰</span>
                                            </div>
                                            <h3 className="font-bold text-xl text-green-800">Financial Modules</h3>
                                        </div>
                                        <ul className="space-y-3">
                                            <li className="flex items-start">
                                                <span className="text-green-500 mr-2 mt-1">✓</span>
                                                <span>SAP Financial Accounting (FI) Fundamentals</span>
                                            </li>
                                            <li className="flex items-start">
                                                <span className="text-green-500 mr-2 mt-1">✓</span>
                                                <span>General Ledger, Accounts Payable/Receivable</span>
                                            </li>
                                            <li className="flex items-start">
                                                <span className="text-green-500 mr-2 mt-1">✓</span>
                                                <span>SAP Controlling (CO) – Cost Center Accounting</span>
                                            </li>
                                            <li className="flex items-start">
                                                <span className="text-green-500 mr-2 mt-1">✓</span>
                                                <span>Profit Center Accounting & Internal Orders</span>
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="bg-white rounded-2xl p-6 shadow-lg">
                                        <div className="flex items-center mb-4">
                                            <div className="bg-purple-100 p-3 rounded-lg mr-4">
                                                <span className="text-2xl">👥</span>
                                            </div>
                                            <h3 className="font-bold text-xl text-purple-800">Human Capital Management</h3>
                                        </div>
                                        <ul className="space-y-3">
                                            <li className="flex items-start">
                                                <span className="text-green-500 mr-2 mt-1">✓</span>
                                                <span>SAP HR/HCM (Human Capital Management) basics</span>
                                            </li>
                                            <li className="flex items-start">
                                                <span className="text-green-500 mr-2 mt-1">✓</span>
                                                <span>Organizational Management & Personnel Administration</span>
                                            </li>
                                            <li className="flex items-start">
                                                <span className="text-green-500 mr-2 mt-1">✓</span>
                                                <span>Time Management & Payroll Processing</span>
                                            </li>
                                            <li className="flex items-start">
                                                <span className="text-green-500 mr-2 mt-1">✓</span>
                                                <span>Employee Self-Service (ESS) & Manager Self-Service (MSS)</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                {/* Right Column - Logistics & Advanced */}
                                <div className="space-y-6">
                                    <div className="bg-white rounded-2xl p-6 shadow-lg">
                                        <div className="flex items-center mb-4">
                                            <div className="bg-orange-100 p-3 rounded-lg mr-4">
                                                <span className="text-2xl">📦</span>
                                            </div>
                                            <h3 className="font-bold text-xl text-orange-800">Logistics Modules</h3>
                                        </div>
                                        <ul className="space-y-3">
                                            <li className="flex items-start">
                                                <span className="text-green-500 mr-2 mt-1">✓</span>
                                                <span>SAP Materials Management (MM) Fundamentals</span>
                                            </li>
                                            <li className="flex items-start">
                                                <span className="text-green-500 mr-2 mt-1">✓</span>
                                                <span>Procurement Process & Inventory Management</span>
                                            </li>
                                            <li className="flex items-start">
                                                <span className="text-green-500 mr-2 mt-1">✓</span>
                                                <span>SAP Sales Distribution (SD) – Order to Cash</span>
                                            </li>
                                            <li className="flex items-start">
                                                <span className="text-green-500 mr-2 mt-1">✓</span>
                                                <span>Pricing, Billing, and Shipping Processes</span>
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="bg-white rounded-2xl p-6 shadow-lg">
                                        <div className="flex items-center mb-4">
                                            <div className="bg-red-100 p-3 rounded-lg mr-4">
                                                <span className="text-2xl">⚙️</span>
                                            </div>
                                            <h3 className="font-bold text-xl text-red-800">Configuration & Technical</h3>
                                        </div>
                                        <ul className="space-y-3">
                                            <li className="flex items-start">
                                                <span className="text-green-500 mr-2 mt-1">✓</span>
                                                <span>SAP System Configuration Basics</span>
                                            </li>
                                            <li className="flex items-start">
                                                <span className="text-green-500 mr-2 mt-1">✓</span>
                                                <span>Transaction Codes & SPRO Configuration</span>
                                            </li>
                                            <li className="flex items-start">
                                                <span className="text-green-500 mr-2 mt-1">✓</span>
                                                <span>Basic ABAP Concepts for Consultants</span>
                                            </li>
                                            <li className="flex items-start">
                                                <span className="text-green-500 mr-2 mt-1">✓</span>
                                                <span>Data Migration & Reporting Tools</span>
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="bg-white rounded-2xl p-6 shadow-lg">
                                        <div className="flex items-center mb-4">
                                            <div className="bg-indigo-100 p-3 rounded-lg mr-4">
                                                <span className="text-2xl">📊</span>
                                            </div>
                                            <h3 className="font-bold text-xl text-indigo-800">Real-World Applications</h3>
                                        </div>
                                        <ul className="space-y-3">
                                            <li className="flex items-start">
                                                <span className="text-green-500 mr-2 mt-1">✓</span>
                                                <span>Real-time business scenarios with case studies</span>
                                            </li>
                                            <li className="flex items-start">
                                                <span className="text-green-500 mr-2 mt-1">✓</span>
                                                <span>End-to-end business process implementation</span>
                                            </li>
                                            <li className="flex items-start">
                                                <span className="text-green-500 mr-2 mt-1">✓</span>
                                                <span>Integration between SAP modules (FI-MM, SD-MM, etc.)</span>
                                            </li>
                                            <li className="flex items-start">
                                                <span className="text-green-500 mr-2 mt-1">✓</span>
                                                <span>Project documentation & support processes</span>
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
                                    <p className="text-gray-600 mt-2">Comprehensive SAP training</p>
                                </div>

                                <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-8 rounded-2xl text-center shadow-lg">
                                    <div className="inline-flex items-center justify-center w-20 h-20 bg-indigo-100 rounded-full mb-6">
                                        <span className="text-3xl">🎓</span>
                                    </div>
                                    <h3 className="font-bold text-2xl mb-3 text-indigo-800">Learning Mode</h3>
                                    <p className="text-gray-700 font-semibold text-lg">Classroom & Online</p>
                                    <p className="text-gray-600 mt-2">Flexible learning options</p>
                                </div>

                                <div className="bg-gradient-to-br from-teal-50 to-green-50 p-8 rounded-2xl text-center shadow-lg">
                                    <div className="inline-flex items-center justify-center w-20 h-20 bg-teal-100 rounded-full mb-6">
                                        <span className="text-3xl">🏆</span>
                                    </div>
                                    <h3 className="font-bold text-2xl mb-3 text-teal-800">Certification</h3>
                                    <p className="text-gray-700 font-semibold text-lg">SAP Global Certification + PGDCA Certificate</p>
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
                            This Course Is Ideal If You Are:
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                            {[
                                {
                                    icon: "🎓",
                                    title: "Students",
                                    description: "Planning a career in IT/ERP systems and enterprise solutions.",
                                    color: "bg-blue-100 text-blue-800"
                                },
                                {
                                    icon: "💼",
                                    title: "Professionals",
                                    description: "Looking to upgrade skills in SAP for better career opportunities.",
                                    color: "bg-indigo-100 text-indigo-800"
                                },
                                {
                                    icon: "🚀",
                                    title: "Entrepreneurs",
                                    description: "Wanting to manage your own SAP-based business operations.",
                                    color: "bg-teal-100 text-teal-800"
                                },
                                {
                                    icon: "👨‍💻",
                                    title: "Freelancers",
                                    description: "Aiming to provide SAP consulting services to businesses.",
                                    color: "bg-green-100 text-green-800"
                                },
                                {
                                    icon: "🏢",
                                    title: "IT Graduates",
                                    description: "Computer science/IT graduates seeking SAP specialization.",
                                    color: "bg-purple-100 text-purple-800"
                                },
                                {
                                    icon: "🔄",
                                    title: "Career Switchers",
                                    description: "Wanting to transition into high-demand SAP consulting roles.",
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
                <section className="py-16 bg-gradient-to-br from-blue-900 to-indigo-900 text-white">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl font-bold text-center mb-12">
                            Career Opportunities After This Course
                        </h2>
                        <p className="text-xl text-center mb-12 max-w-3xl mx-auto opacity-90">
                            With SAP certification, you can pursue these high-demand roles:
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                            {[
                                {
                                    role: "SAP Consultant",
                                    description: "Specialize in FI, CO, MM, SD, HCM modules for enterprise clients",
                                    icon: "👨‍💼",
                                    salary: "₹6-15 LPA",
                                    demand: "Very High"
                                },
                                {
                                    role: "SAP End-User / Power User",
                                    description: "Master SAP for day-to-day business operations in companies",
                                    icon: "💼",
                                    salary: "₹4-9 LPA",
                                    demand: "High"
                                },
                                {
                                    role: "SAP ABAP Developer",
                                    description: "Develop custom programs and reports in SAP ABAP",
                                    icon: "💻",
                                    salary: "₹5-12 LPA",
                                    demand: "High"
                                },
                                {
                                    role: "ERP Business Analyst",
                                    description: "Analyze business processes and implement SAP solutions",
                                    icon: "📊",
                                    salary: "₹6-14 LPA",
                                    demand: "Very High"
                                },
                                {
                                    role: "Freelance SAP Consultant",
                                    description: "Provide SAP implementation services independently",
                                    icon: "🚀",
                                    salary: "₹8-25 LPA",
                                    demand: "Growing"
                                },
                                {
                                    role: "SAP Support Specialist",
                                    description: "Provide technical support and troubleshooting for SAP systems",
                                    icon: "🔧",
                                    salary: "₹4-8 LPA",
                                    demand: "High"
                                },
                                {
                                    role: "SAP Project Manager",
                                    description: "Lead SAP implementation projects and teams",
                                    icon: "👨‍💼",
                                    salary: "₹10-25 LPA",
                                    demand: "Very High"
                                },
                                {
                                    role: "SAP Basis Administrator",
                                    description: "Manage SAP system installation, configuration, and maintenance",
                                    icon: "⚙️",
                                    salary: "₹7-18 LPA",
                                    demand: "High"
                                },
                                {
                                    role: "SAP FICO Consultant",
                                    description: "Specialize in Financial Accounting and Controlling modules",
                                    icon: "💰",
                                    salary: "₹8-20 LPA",
                                    demand: "Very High"
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
                                    <div className="pt-4 border-t border-white/10 flex justify-between items-center">
                                        <span className={`inline-block px-3 py-1 rounded-full text-sm ${job.demand === 'Very High' ? 'bg-green-500/30 text-green-200' :
                                            job.demand === 'High' ? 'bg-blue-500/30 text-blue-200' :
                                                'bg-yellow-500/30 text-yellow-200'
                                            }`}>
                                            {job.demand} Demand
                                        </span>
                                        <span className="text-sm opacity-80">Global Opportunities</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Market Stats Section */}
                <section className="py-16 bg-gradient-to-r from-indigo-50 to-blue-50">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto text-center">
                            <h2 className="text-3xl font-bold mb-6 text-gray-800">
                                Why SAP Certification?
                            </h2>
                            <div className="bg-white rounded-2xl p-8 shadow-lg">
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                                    <div className="text-center">
                                        <div className="text-3xl font-bold text-blue-600">92%</div>
                                        <div className="text-sm text-gray-600">Fortune 1000 Companies</div>
                                        <p className="text-xs text-gray-500 mt-1">Use SAP solutions</p>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-3xl font-bold text-indigo-600">450,000+</div>
                                        <div className="text-sm text-gray-600">Customers Worldwide</div>
                                        <p className="text-xs text-gray-500 mt-1">Across 180+ countries</p>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-3xl font-bold text-teal-600">100M+</div>
                                        <div className="text-sm text-gray-600">Cloud Users</div>
                                        <p className="text-xs text-gray-500 mt-1">SAP S/4HANA cloud</p>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-3xl font-bold text-purple-600">₹10-50L</div>
                                        <div className="text-sm text-gray-600">Experienced Consultants</div>
                                        <p className="text-xs text-gray-500 mt-1">Annual salary range</p>
                                    </div>
                                </div>
                                <p className="text-gray-700">
                                    SAP powers 77% of the world's transaction revenue and is used by 92% of Forbes Global 2000 companies. With digital transformation accelerating globally, certified SAP professionals are in unprecedented demand across all industries.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Final CTA Section */}
                <section id="enroll" className="py-16 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
                    <div className="container mx-auto px-4 text-center">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">
                            Enroll Now
                        </h2>
                        <p className="text-xl max-w-3xl mx-auto mb-8">
                            If building a future in SAP technology is your goal—this is the right time. Our course will take you from beginner to job-ready SAP professional, with full support at every step.
                        </p>
                        <div className="flex justify-center space-x-4">
                            <a
                                href="#enroll-form"
                                className="bg-white text-blue-600 hover:bg-gray-100 font-bold py-3 px-8 rounded-full text-lg transition transform hover:scale-105"
                            >
                                Apply Now
                            </a>
                            <a
                                href="#"
                                className="bg-transparent border-2 border-white hover:bg-white/10 font-bold py-3 px-8 rounded-full text-lg transition"
                            >
                                Download Brochure
                            </a>
                        </div>
                    </div>
                </section>

                {/* Enrollment Form Section */}
                <section id="enroll-form" className="py-16 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="max-w-6xl mx-auto">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                                {/* Left Side - Course Highlights */}
                                <div>
                                    <h2 className="text-4xl font-bold mb-6 text-gray-800">
                                        Start Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">SAP Career</span>
                                    </h2>
                                    <p className="text-lg text-gray-600 mb-8">
                                        With hands-on training, live projects, and expert mentorship, you will be able to design, configure, and manage SAP applications for enterprises across industries.
                                    </p>

                                    <div className="space-y-4 mb-8">
                                        <div className="flex items-center">
                                            <div className="bg-blue-100 p-2 rounded-lg mr-4">
                                                <span className="text-blue-600">🏢</span>
                                            </div>
                                            <span className="text-gray-700">Learn all major SAP modules: FI, CO, MM, SD, HCM</span>
                                        </div>
                                        <div className="flex items-center">
                                            <div className="bg-blue-100 p-2 rounded-lg mr-4">
                                                <span className="text-blue-600">💼</span>
                                            </div>
                                            <span className="text-gray-700">100% Job Guarantee with paid internship</span>
                                        </div>
                                        <div className="flex items-center">
                                            <div className="bg-blue-100 p-2 rounded-lg mr-4">
                                                <span className="text-blue-600">🏆</span>
                                            </div>
                                            <span className="text-gray-700">Dual certification: SAP Global + PGDCA</span>
                                        </div>
                                        <div className="flex items-center">
                                            <div className="bg-blue-100 p-2 rounded-lg mr-4">
                                                <span className="text-blue-600">📊</span>
                                            </div>
                                            <span className="text-gray-700">Real-world case studies & implementation projects</span>
                                        </div>
                                    </div>

                                    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-2xl border border-blue-100">
                                        <div className="flex items-center">
                                            <div className="bg-white p-3 rounded-lg mr-4 shadow">
                                                <span className="text-2xl text-blue-600">🎯</span>
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-lg text-gray-800">Why SAP Professionals Earn More</h4>
                                                <p className="text-gray-600">SAP consultants enjoy 25-40% higher salaries compared to other IT professionals due to specialized expertise</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Right Side - Enrollment Form */}
                                <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 shadow-2xl border border-gray-100">
                                    <div className="text-center mb-8">
                                        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full mb-4">
                                            <span className="text-2xl text-white">🏢</span>
                                        </div>
                                        <h3 className="text-2xl font-bold text-gray-800">Become SAP Certified</h3>
                                        <p className="text-gray-600 mt-2">Fill form to get complete course details & fee structure</p>
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
                                                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition"
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
                                                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition"
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
                                                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition"
                                                    placeholder="+91 98765 43210"
                                                />
                                            </div>
                                        </div>

                                        <div>
                                            <label className="block text-gray-700 font-medium mb-2">Professional/Educational Background *</label>
                                            <select
                                                name="background"
                                                value={formData.background}
                                                onChange={handleChange}
                                                required
                                                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition"
                                            >
                                                <option value="">Select your background</option>
                                                <option value="student">Student (Any Stream)</option>
                                                <option value="fresh-graduate">Fresh Graduate</option>
                                                <option value="it-professional">IT Professional</option>
                                                <option value="finance-professional">Finance/Accounting Professional</option>
                                                <option value="mba-graduate">MBA/B.Com Graduate</option>
                                                <option value="working-professional">Working Professional</option>
                                                <option value="career-switcher">Career Switcher</option>
                                            </select>
                                        </div>

                                        <div>
                                            <label className="block text-gray-700 font-medium mb-2">Preferred Learning Mode *</label>
                                            <div className="grid grid-cols-3 gap-3">
                                                {['online', 'classroom', 'hybrid'].map((option) => (
                                                    <button
                                                        key={option}
                                                        type="button"
                                                        onClick={() => setFormData({ ...formData, mode: option })}
                                                        className={`py-3 rounded-lg font-medium transition ${formData.mode === option
                                                            ? 'bg-gradient-to-r from-blue-600 to-indigo-500 text-white shadow-md'
                                                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
                                                    >
                                                        {option.charAt(0).toUpperCase() + option.slice(1)}
                                                    </button>
                                                ))}
                                            </div>
                                        </div>

                                        <div>
                                            <label className="block text-gray-700 font-medium mb-2">Your Career Goals & Questions</label>
                                            <textarea
                                                name="message"
                                                value={formData.message}
                                                onChange={handleChange}
                                                rows="3"
                                                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition"
                                                placeholder="Tell us about your career goals, preferred SAP modules, or any specific questions..."
                                            ></textarea>
                                        </div>

                                        <button
                                            type="submit"
                                            disabled={loading}
                                            className={`w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold py-4 px-4 rounded-xl transition-all duration-300 ${loading ? 'opacity-50 cursor-not-allowed' : 'transform hover:scale-[1.02]'} shadow-lg hover:shadow-xl`}
                                        >
                                            {loading ? 'Submitting...' : 'Start Your SAP Certification Journey'}
                                        </button>

                                        {error && (
                                            <div className="mt-4 p-3 bg-red-100 text-red-700 rounded-lg">
                                                {error}
                                            </div>
                                        )}

                                        <p className="text-xs text-gray-500 text-center">
                                            Next batch starting soon. Limited seats for personalized SAP training.
                                        </p>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            {/* Structured Data for SEO */}
            <Script id="sap-certification-structured-data" type="application/ld+json">
                {JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "Course",
                    "name": "SAP Global Certification Course",
                    "description": "6-month comprehensive SAP certification training with FI, CO, MM, SD, HCM modules. Get SAP Global Certificate + PGDCA, job guarantee, free laptop, and live enterprise projects.",
                    "provider": {
                        "@type": "Organization",
                        "name": "E Digital India",
                        "sameAs": "https://edigitalindia.com"
                    },
                    "educationalCredentialAwarded": "SAP Global Certification and UGC-approved PGDCA Certificate",
                    "timeToComplete": "P6M",
                    "coursePrerequisites": "Basic computer knowledge. Background in finance/accounting helpful but not required.",
                    "hasCourseInstance": {
                        "@type": "CourseInstance",
                        "courseMode": ["online", "offline", "mixed"],
                        "duration": "P6M"
                    },
                    "audience": {
                        "@type": "EducationalAudience",
                        "educationalRole": "Students, IT Professionals, Finance Professionals, MBA Graduates, Career Switchers, Entrepreneurs"
                    },
                    "offers": {
                        "@type": "Offer",
                        "priceCurrency": "INR",
                        "availability": "https://schema.org/InStock",
                        "itemOffered": {
                            "@type": "Service",
                            "includes": "Free laptop, 100% job guarantee, Paid internship, Dual certification, Real-world projects, Placement support"
                        }
                    },
                    "teaches": [
                        "SAP FI (Financial Accounting)",
                        "SAP CO (Controlling)",
                        "SAP MM (Materials Management)",
                        "SAP SD (Sales Distribution)",
                        "SAP HCM (Human Capital Management)",
                        "SAP System Navigation",
                        "SAP Configuration",
                        "ERP Implementation",
                        "Business Process Integration"
                    ],
                    "occupationalCategory": [
                        "SAP Consultant",
                        "SAP FICO Consultant",
                        "SAP MM Consultant",
                        "SAP SD Consultant",
                        "ERP Business Analyst",
                        "SAP Project Manager",
                        "Freelance SAP Consultant"
                    ],
                    "about": {
                        "@type": "Thing",
                        "name": "Enterprise Resource Planning and SAP ERP Systems"
                    }
                })}
            </Script>
        </>
    );
}