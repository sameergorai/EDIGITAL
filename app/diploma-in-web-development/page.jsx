'use client'
import Head from 'next/head';
import Script from 'next/script';
import { useState } from 'react';

export default function WebDevelopmentCoursePage() {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        mode: 'online',
        courseName: 'Web Development Diploma Course',
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
        alert('Thank you for your interest in Web Development Course! We\'ll contact you shortly.');
         try {
            const response = await fetch('/api/enrollments', {
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
        courseName: 'Web Development Diploma Course',
        background: '',
        message: ''
        });
        } catch (error) {
            console.error('Error submitting form:', error);

        } finally {}
    };

    return (
        <>
            <Head>
                <title>Web Development Diploma Course | Build Real Websites</title>
                <meta name="description" content="6-month PHP Web Development Diploma with PGDCA certificate. Learn to build secure, functional websites. Free laptop, job guarantee, and live projects included." />
                <meta name="keywords" content="PHP course, web development training, PHP MySQL course, full stack development, web developer course, backend development" />
                <link rel="canonical" href="https://edigitalindia.com/web-development-course" />
                <meta name="robots" content="index, follow" />
                <meta name="author" content="E Digital India" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                
                {/* Open Graph Meta Tags */}
                <meta property="og:title" content="PHP Web Development Diploma - Build Real Websites" />
                <meta property="og:description" content="6-month practical web development training with PHP, MySQL, and real projects. Job guarantee, free laptop, and industry mentorship." />
                <meta property="og:url" content="https://edigitalindia.com/web-development-course" />
                <meta property="og:site_name" content="E Digital India" />
                <meta property="og:type" content="website" />
                <meta property="og:locale" content="en_US" />
                <meta property="og:image" content="/images/web-development-course.jpg" />
                <meta property="og:image:width" content="1200" />
                <meta property="og:image:height" content="630" />
                <meta property="og:image:alt" content="PHP Web Development Course" />
                
                {/* Twitter Meta Tags */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Web Development Course – Build Real Websites with PHP" />
                <meta name="twitter:description" content="Master PHP, MySQL, and web development with hands-on projects and job placement support." />
                <meta name="twitter:image" content="/images/web-development-course.jpg" />
            </Head>

            <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
                {/* Hero Section */}
                <section className="relative py-16 md:py-24 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600 opacity-90"></div>
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-32 translate-x-32"></div>
                    <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full translate-y-48 -translate-x-48"></div>
                    
                    <div className="container mx-auto px-4 relative z-10">
                        <div className="max-w-4xl mx-auto text-center text-white">
                            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                                PHP Web Development Diploma
                            </h1>
                            <p className="text-xl md:text-2xl mb-8 leading-relaxed">
                                Build real websites — not just copy-paste code. Get practical skills you can actually use in the industry.
                            </p>
                            <p className="text-lg md:text-xl mb-10 opacity-90">
                                Start with PHP basics and work your way up to building secure, functional, and user-friendly sites. Code, problem-solve, and work on real projects with industry guidance.
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

                {/* Benefits Section */}
                <section className="py-16 bg-white">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl font-bold text-center mb-4 text-gray-800">
                            The Benefits of Our Web Diploma
                        </h2>
                        <p className="text-lg text-center text-gray-600 mb-12 max-w-3xl mx-auto">
                            We offer not only technical training but also career opportunities.
                        </p>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {[
                                { 
                                    icon: "💻", 
                                    title: "Free Laptop", 
                                    desc: "Each student is provided with a laptop to aid their learning.",
                                    color: "from-blue-500 to-cyan-500"
                                },
                                { 
                                    icon: "🏆", 
                                    title: "UGC-Approved PGDCA Certificate", 
                                    desc: "Issued by Asian University — add value to your resume with credible certification.",
                                    color: "from-purple-500 to-pink-500"
                                },
                                { 
                                    icon: "🎓", 
                                    title: "Online & Classroom Classes", 
                                    desc: "Opt for flexible learning modes based on your convenience.",
                                    color: "from-green-500 to-emerald-500"
                                },
                                { 
                                    icon: "⭐", 
                                    title: "ISO-Certified & Industry-Reputed", 
                                    desc: "Acquire globally accepted credentials recognized by the industry.",
                                    color: "from-yellow-500 to-orange-500"
                                },
                                { 
                                    icon: "💼", 
                                    title: "100% Job Guarantee", 
                                    desc: "With paid internships — boost your career with assured placement opportunities.",
                                    color: "from-red-500 to-pink-500"
                                },
                                { 
                                    icon: "🚀", 
                                    title: "Work on Real Projects", 
                                    desc: "Not just assignments — get hands-on with actual web applications.",
                                    color: "from-indigo-500 to-blue-500"
                                },
                                { 
                                    icon: "👨‍🏫", 
                                    title: "Learn from Industry Experts", 
                                    desc: "Our trainers have actual field experience — get useful career advice, not generic.",
                                    color: "from-teal-500 to-cyan-500"
                                },
                                { 
                                    icon: "📄", 
                                    title: "Mock Interviews & Resume Creation", 
                                    desc: "Prepare well for job placements with personalized guidance.",
                                    color: "from-purple-500 to-violet-500"
                                },
                                { 
                                    icon: "🎯", 
                                    title: "Placement Support", 
                                    desc: "Personalized support until you get your first job.",
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
                <section id="curriculum" className="py-16 bg-gradient-to-br from-blue-50 to-indigo-50">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
                            What You Will Learn
                        </h2>
                        <div className="max-w-5xl mx-auto">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                                {/* Left Column - PHP Fundamentals */}
                                <div className="space-y-6">
                                    <div className="bg-white rounded-2xl p-6 shadow-lg">
                                        <div className="flex items-center mb-4">
                                            <div className="bg-blue-100 p-3 rounded-lg mr-4">
                                                <span className="text-2xl">🌐</span>
                                            </div>
                                            <h3 className="font-bold text-xl text-blue-800">Web Development Fundamentals</h3>
                                        </div>
                                        <ul className="space-y-3">
                                            <li className="flex items-start">
                                                <span className="text-green-500 mr-2 mt-1">✓</span>
                                                <span>Introduction to Web Development</span>
                                            </li>
                                            <li className="flex items-start">
                                                <span className="text-green-500 mr-2 mt-1">✓</span>
                                                <span>HTML5 & CSS3 Fundamentals</span>
                                            </li>
                                            <li className="flex items-start">
                                                <span className="text-green-500 mr-2 mt-1">✓</span>
                                                <span>JavaScript Basics</span>
                                            </li>
                                            <li className="flex items-start">
                                                <span className="text-green-500 mr-2 mt-1">✓</span>
                                                <span>Responsive Web Design</span>
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="bg-white rounded-2xl p-6 shadow-lg">
                                        <div className="flex items-center mb-4">
                                            <div className="bg-purple-100 p-3 rounded-lg mr-4">
                                                <span className="text-2xl">⚡</span>
                                            </div>
                                            <h3 className="font-bold text-xl text-purple-800">PHP Programming</h3>
                                        </div>
                                        <ul className="space-y-3">
                                            <li className="flex items-start">
                                                <span className="text-green-500 mr-2 mt-1">✓</span>
                                                <span>PHP Syntax, Variables & Operators</span>
                                            </li>
                                            <li className="flex items-start">
                                                <span className="text-green-500 mr-2 mt-1">✓</span>
                                                <span>Control Structures & Loops</span>
                                            </li>
                                            <li className="flex items-start">
                                                <span className="text-green-500 mr-2 mt-1">✓</span>
                                                <span>Functions & Arrays</span>
                                            </li>
                                            <li className="flex items-start">
                                                <span className="text-green-500 mr-2 mt-1">✓</span>
                                                <span>Working with Forms & User Input</span>
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="bg-white rounded-2xl p-6 shadow-lg">
                                        <div className="flex items-center mb-4">
                                            <div className="bg-green-100 p-3 rounded-lg mr-4">
                                                <span className="text-2xl">🔐</span>
                                            </div>
                                            <h3 className="font-bold text-xl text-green-800">Security & Advanced Topics</h3>
                                        </div>
                                        <ul className="space-y-3">
                                            <li className="flex items-start">
                                                <span className="text-green-500 mr-2 mt-1">✓</span>
                                                <span>Security Best Practices</span>
                                            </li>
                                            <li className="flex items-start">
                                                <span className="text-green-500 mr-2 mt-1">✓</span>
                                                <span>Error Handling & Debugging</span>
                                            </li>
                                            <li className="flex items-start">
                                                <span className="text-green-500 mr-2 mt-1">✓</span>
                                                <span>RESTful APIs with PHP</span>
                                            </li>
                                            <li className="flex items-start">
                                                <span className="text-green-500 mr-2 mt-1">✓</span>
                                                <span>Performance Optimization</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                {/* Right Column - Database & Projects */}
                                <div className="space-y-6">
                                    <div className="bg-white rounded-2xl p-6 shadow-lg">
                                        <div className="flex items-center mb-4">
                                            <div className="bg-red-100 p-3 rounded-lg mr-4">
                                                <span className="text-2xl">🗄️</span>
                                            </div>
                                            <h3 className="font-bold text-xl text-red-800">Database with MySQL</h3>
                                        </div>
                                        <ul className="space-y-3">
                                            <li className="flex items-start">
                                                <span className="text-green-500 mr-2 mt-1">✓</span>
                                                <span>MySQL Database Design</span>
                                            </li>
                                            <li className="flex items-start">
                                                <span className="text-green-500 mr-2 mt-1">✓</span>
                                                <span>CRUD Operations (Create, Read, Update, Delete)</span>
                                            </li>
                                            <li className="flex items-start">
                                                <span className="text-green-500 mr-2 mt-1">✓</span>
                                                <span>Database Normalization</span>
                                            </li>
                                            <li className="flex items-start">
                                                <span className="text-green-500 mr-2 mt-1">✓</span>
                                                <span>PHP-MySQL Integration</span>
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="bg-white rounded-2xl p-6 shadow-lg">
                                        <div className="flex items-center mb-4">
                                            <div className="bg-yellow-100 p-3 rounded-lg mr-4">
                                                <span className="text-2xl">👤</span>
                                            </div>
                                            <h3 className="font-bold text-xl text-yellow-800">Advanced Features</h3>
                                        </div>
                                        <ul className="space-y-3">
                                            <li className="flex items-start">
                                                <span className="text-green-500 mr-2 mt-1">✓</span>
                                                <span>User Authentication & Login Systems</span>
                                            </li>
                                            <li className="flex items-start">
                                                <span className="text-green-500 mr-2 mt-1">✓</span>
                                                <span>Session Management</span>
                                            </li>
                                            <li className="flex items-start">
                                                <span className="text-green-500 mr-2 mt-1">✓</span>
                                                <span>File Upload & Handling</span>
                                            </li>
                                            <li className="flex items-start">
                                                <span className="text-green-500 mr-2 mt-1">✓</span>
                                                <span>Email Integration</span>
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="bg-white rounded-2xl p-6 shadow-lg">
                                        <div className="flex items-center mb-4">
                                            <div className="bg-indigo-100 p-3 rounded-lg mr-4">
                                                <span className="text-2xl">🚀</span>
                                            </div>
                                            <h3 className="font-bold text-xl text-indigo-800">Projects & Deployment</h3>
                                        </div>
                                        <ul className="space-y-3">
                                            <li className="flex items-start">
                                                <span className="text-green-500 mr-2 mt-1">✓</span>
                                                <span>Dynamic Web Application Development</span>
                                            </li>
                                            <li className="flex items-start">
                                                <span className="text-green-500 mr-2 mt-1">✓</span>
                                                <span>Full-Stack Development Fundamentals</span>
                                            </li>
                                            <li className="flex items-start">
                                                <span className="text-green-500 mr-2 mt-1">✓</span>
                                                <span>Project Development & Deployment</span>
                                            </li>
                                            <li className="flex items-start">
                                                <span className="text-green-500 mr-2 mt-1">✓</span>
                                                <span>Career Counseling & Freelancing Skills</span>
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
                                    <p className="text-gray-600 mt-2">Intensive coding training</p>
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
                                    <p className="text-gray-700 font-semibold text-lg">Diploma in Web Development + PGDCA Certificate</p>
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
                                    title: "Students & Graduates",
                                    description: "Looking to pursue a career in web development.",
                                    color: "bg-blue-100 text-blue-800"
                                },
                                {
                                    icon: "💼",
                                    title: "Job Seekers",
                                    description: "Seeking high-demand technical skills for better opportunities.",
                                    color: "bg-purple-100 text-purple-800"
                                },
                                {
                                    icon: "👨‍💻",
                                    title: "IT Professionals",
                                    description: "Looking to enhance their coding skills and career growth.",
                                    color: "bg-green-100 text-green-800"
                                },
                                {
                                    icon: "🚀",
                                    title: "Entrepreneurs & Freelancers",
                                    description: "Looking to create custom web applications or start web solutions business.",
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
                            Upon completion of this diploma, you can begin your career as:
                        </p>
                        
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                            {[
                                {
                                    role: "PHP Developer",
                                    description: "Develop and maintain PHP-based web applications and websites",
                                    icon: "⚡",
                                    salary: "₹3-8 LPA",
                                    demand: "High"
                                },
                                {
                                    role: "Web Application Developer",
                                    description: "Build custom web applications with PHP and modern frameworks",
                                    icon: "🌐",
                                    salary: "₹4-9 LPA",
                                    demand: "High"
                                },
                                {
                                    role: "Back-End Developer",
                                    description: "Focus on server-side logic, databases, and application integration",
                                    icon: "🔧",
                                    salary: "₹4-10 LPA",
                                    demand: "Very High"
                                },
                                {
                                    role: "Full-Stack Developer",
                                    description: "Handle both front-end and back-end development (with front-end experience)",
                                    icon: "🚀",
                                    salary: "₹5-12 LPA",
                                    demand: "Very High"
                                },
                                {
                                    role: "Web Solutions Entrepreneur",
                                    description: "Start your own web development agency or freelance business",
                                    icon: "👨‍💼",
                                    salary: "Varies (₹20k-2L+/month)",
                                    demand: "Growing"
                                },
                                {
                                    role: "Technical Support Engineer",
                                    description: "Provide technical support for web applications and websites",
                                    icon: "🛠️",
                                    salary: "₹3-6 LPA",
                                    demand: "Medium"
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
                                        <span className={`inline-block px-3 py-1 rounded-full text-sm ${
                                            job.demand === 'Very High' ? 'bg-green-500/30 text-green-200' :
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

                {/* Enrollment Form Section */}
                <section id="enroll" className="py-16 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="max-w-6xl mx-auto">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                                {/* Left Side - Course Highlights */}
                                <div>
                                    <h2 className="text-4xl font-bold mb-6 text-gray-800">
                                        Ready to Build <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500">Real Websites</span>?
                                    </h2>
                                    <p className="text-lg text-gray-600 mb-8">
                                        Join our comprehensive PHP Web Development course and transform from beginner to job-ready developer in just 6 months.
                                    </p>
                                    
                                    <div className="space-y-4 mb-8">
                                        <div className="flex items-center">
                                            <div className="bg-blue-100 p-2 rounded-lg mr-4">
                                                <span className="text-blue-600">💻</span>
                                            </div>
                                            <span className="text-gray-700">Free Laptop for Practical Coding</span>
                                        </div>
                                        <div className="flex items-center">
                                            <div className="bg-blue-100 p-2 rounded-lg mr-4">
                                                <span className="text-blue-600">💼</span>
                                            </div>
                                            <span className="text-gray-700">100% Job Guarantee with Paid Internship</span>
                                        </div>
                                        <div className="flex items-center">
                                            <div className="bg-blue-100 p-2 rounded-lg mr-4">
                                                <span className="text-blue-600">🏆</span>
                                            </div>
                                            <span className="text-gray-700">UGC-Approved PGDCA Certificate</span>
                                        </div>
                                        <div className="flex items-center">
                                            <div className="bg-blue-100 p-2 rounded-lg mr-4">
                                                <span className="text-blue-600">🚀</span>
                                            </div>
                                            <span className="text-gray-700">Real Client Projects & Portfolio Building</span>
                                        </div>
                                    </div>
                                    
                                    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-2xl border border-blue-100">
                                        <div className="flex items-center">
                                            <div className="bg-yellow-100 p-3 rounded-lg mr-4">
                                                <span className="text-2xl">⚡</span>
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-lg text-gray-800">Why PHP?</h4>
                                                <p className="text-gray-600">PHP powers 79% of all websites including Facebook, Wikipedia, and WordPress. High demand = High salary!</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Right Side - Enrollment Form */}
                                <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 shadow-2xl border border-gray-100">
                                    <div className="text-center mb-8">
                                        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-indigo-500 rounded-full mb-4">
                                            <span className="text-2xl text-white">💻</span>
                                        </div>
                                        <h3 className="text-2xl font-bold text-gray-800">Become a Web Developer</h3>
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
                                            <label className="block text-gray-700 font-medium mb-2">Technical Background *</label>
                                            <select
                                                name="background"
                                                value={formData.background}
                                                onChange={handleChange}
                                                required
                                                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition"
                                            >
                                                <option value="">Select your background</option>
                                                <option value="beginner">Beginner (No coding experience)</option>
                                                <option value="some-knowledge">Some coding knowledge</option>
                                                <option value="intermediate">Intermediate programmer</option>
                                                <option value="professional">IT Professional</option>
                                                <option value="student">Student (CS/IT background)</option>
                                            </select>
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
                                                            ? 'bg-gradient-to-r from-blue-600 to-indigo-500 text-white shadow-md' 
                                                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
                                                    >
                                                        {option.charAt(0).toUpperCase() + option.slice(1)}
                                                    </button>
                                                ))}
                                            </div>
                                        </div>

                                        <div>
                                            <label className="block text-gray-700 font-medium mb-2">Your Goals & Questions</label>
                                            <textarea
                                                name="message"
                                                value={formData.message}
                                                onChange={handleChange}
                                                rows="3"
                                                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition"
                                                placeholder="Tell us about your career goals, projects you want to build, or any questions..."
                                            ></textarea>
                                        </div>

                                        <button
                                            type="submit"
                                            className="w-full bg-gradient-to-r from-blue-600 to-indigo-500 hover:from-blue-700 hover:to-indigo-600 text-white font-bold py-4 px-4 rounded-xl transition-all duration-300 transform hover:scale-[1.02] shadow-lg hover:shadow-xl"
                                        >
                                            Start Your Web Development Journey
                                        </button>

                                        <p className="text-xs text-gray-500 text-center">
                                            Limited seats available. We'll contact you within 24 hours for counseling session.
                                        </p>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            {/* Structured Data for SEO */}
            <Script id="web-development-structured-data" type="application/ld+json">
                {JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "Course",
                    "name": "PHP Web Development Diploma",
                    "description": "6-month practical web development training with PHP, MySQL, real projects, job guarantee, free laptop, and industry mentorship.",
                    "provider": {
                        "@type": "Organization",
                        "name": "E Digital India",
                        "sameAs": "https://edigitalindia.com"
                    },
                    "educationalCredentialAwarded": "Diploma in Web Development and UGC-approved PGDCA Certificate",
                    "timeToComplete": "P6M",
                    "coursePrerequisites": "Basic computer knowledge. No prior coding experience required.",
                    "hasCourseInstance": {
                        "@type": "CourseInstance",
                        "courseMode": ["online", "offline", "mixed"],
                        "duration": "P6M"
                    },
                    "audience": {
                        "@type": "EducationalAudience",
                        "educationalRole": "Students, Job seekers, IT professionals, Entrepreneurs, Freelancers"
                    },
                    "offers": {
                        "@type": "Offer",
                        "priceCurrency": "INR",
                        "availability": "https://schema.org/InStock",
                        "itemOffered": {
                            "@type": "Service",
                            "includes": "Free laptop, 100% job guarantee, Paid internship, UGC-approved certification, Real projects"
                        }
                    },
                    "teaches": [
                        "PHP Programming",
                        "MySQL Database",
                        "Web Development Fundamentals",
                        "HTML5 & CSS3",
                        "JavaScript Basics",
                        "CRUD Operations",
                        "User Authentication",
                        "Web Security",
                        "Project Deployment",
                        "Full-Stack Development"
                    ],
                    "occupationalCategory": [
                        "PHP Developer",
                        "Web Application Developer",
                        "Back-End Developer",
                        "Full-Stack Developer",
                        "Web Solutions Entrepreneur"
                    ],
                    "about": {
                        "@type": "Thing",
                        "name": "Web Development"
                    }
                })}
            </Script>
        </>
    );
}