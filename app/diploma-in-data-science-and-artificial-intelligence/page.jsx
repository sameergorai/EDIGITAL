'use client'
import Head from 'next/head';
import Script from 'next/script';
import { useState } from 'react';

export default function DataScienceAICoursePage() {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        mode: 'online',
        courseName: 'Data Science & AI Course',
        background: '',
        message: ''
    });

    const handleChange = async (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        console.log('Form submitted:', formData);
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
            background: '',
            courseName: '',
            message: '' 
        });
        } catch (error) {
            console.error('Error submitting form:', error);

        } finally {
            // setLoading(false);
        }
        
    };

    return (
        <>
            <Head>
                <title>Data Science & AI Diploma Course | Machine Learning Training</title>
                <meta name="description" content="6-month Data Science & AI Diploma with Python, Machine Learning, Deep Learning. Free laptop, job guarantee, and real-world projects included." />
                <meta name="keywords" content="data science course, artificial intelligence course, machine learning training, Python data science, AI diploma, data analyst course" />
                <link rel="canonical" href="https://edigitalindia.com/data-science-ai-course" />
                <meta name="robots" content="index, follow" />
                <meta name="author" content="E Digital India" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                
                {/* Open Graph Meta Tags */}
                <meta property="og:title" content="Data Science & AI Diploma - Build Career in AI & Machine Learning" />
                <meta property="og:description" content="6-month practical Data Science & AI training with Python, ML, Deep Learning. Job guarantee, free laptop, and industry projects." />
                <meta property="og:url" content="https://edigitalindia.com/data-science-ai-course" />
                <meta property="og:site_name" content="E Digital India" />
                <meta property="og:type" content="website" />
                <meta property="og:locale" content="en_US" />
                <meta property="og:image" content="/images/data-science-ai-course.jpg" />
                <meta property="og:image:width" content="1200" />
                <meta property="og:image:height" content="630" />
                <meta property="og:image:alt" content="Data Science & Artificial Intelligence Course" />
                
                {/* Twitter Meta Tags */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Data Science & AI Course – Free Laptop & Job Guarantee" />
                <meta name="twitter:description" content="Master Python, Machine Learning, Deep Learning with hands-on projects and industry mentorship." />
                <meta name="twitter:image" content="/images/data-science-ai-course.jpg" />
            </Head>

            <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
                {/* Hero Section */}
                <section className="relative py-16 md:py-24 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 opacity-90"></div>
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-32 translate-x-32"></div>
                    <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full translate-y-48 -translate-x-48"></div>
                    
                    <div className="container mx-auto px-4 relative z-10">
                        <div className="max-w-4xl mx-auto text-center text-white">
                            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                                Diploma in Data Science & Artificial Intelligence
                            </h1>
                            <p className="text-xl md:text-2xl mb-8 leading-relaxed">
                                Data is everywhere—from YouTube videos to shopping recommendations. Behind it all is Data Science and AI.
                            </p>
                            <p className="text-lg md:text-xl mb-10 opacity-90">
                                If you've ever wondered "How does this work?" or thought about building a career in one of the fastest-growing industries—this is your entry point.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <a
                                    href="#enroll"
                                    className="bg-white text-indigo-600 hover:bg-gray-100 font-bold py-4 px-8 rounded-full text-lg transition transform hover:scale-105 shadow-lg"
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

                {/* Why Choose Section */}
                <section className="py-16 bg-white">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl font-bold text-center mb-4 text-gray-800">
                            Why Choose This Data Science & AI Course?
                        </h2>
                        <p className="text-lg text-center text-gray-600 mb-12 max-w-3xl mx-auto">
                            We know what students need: not just certificates, but real learning and real jobs.
                        </p>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {[
                                { 
                                    icon: "💻", 
                                    title: "Free Laptop", 
                                    desc: "For every student, so you learn without limits.",
                                    color: "from-indigo-500 to-purple-500"
                                },
                                { 
                                    icon: "🏆", 
                                    title: "UGC-Approved PGDCA Certificate", 
                                    desc: "From Asian University—add credibility to your profile.",
                                    color: "from-purple-500 to-pink-500"
                                },
                                { 
                                    icon: "⭐", 
                                    title: "ISO-Certified & Industry-Recognized", 
                                    desc: "Courses that strengthen your profile and career prospects.",
                                    color: "from-pink-500 to-rose-500"
                                },
                                { 
                                    icon: "💼", 
                                    title: "100% Job Guarantee", 
                                    desc: "With paid internships—assured placement opportunities.",
                                    color: "from-green-500 to-emerald-500"
                                },
                                { 
                                    icon: "🎓", 
                                    title: "Flexible Learning Modes", 
                                    desc: "Classroom, online, or both—learn your way.",
                                    color: "from-blue-500 to-cyan-500"
                                },
                                { 
                                    icon: "🚀", 
                                    title: "Hands-on Practice", 
                                    desc: "Work with live projects and real-world datasets.",
                                    color: "from-orange-500 to-red-500"
                                },
                                { 
                                    icon: "👨‍🏫", 
                                    title: "Guidance Beyond Classes", 
                                    desc: "Career counseling, resume building, and mock interviews.",
                                    color: "from-teal-500 to-cyan-500"
                                },
                                { 
                                    icon: "🎯", 
                                    title: "Placement Assistance", 
                                    desc: "Support until you're placed in your dream role.",
                                    color: "from-yellow-500 to-orange-500"
                                },
                                { 
                                    icon: "📊", 
                                    title: "Real-World Projects", 
                                    desc: "Handle actual datasets and solve real business problems.",
                                    color: "from-violet-500 to-purple-500"
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
                <section id="curriculum" className="py-16 bg-gradient-to-br from-indigo-50 to-purple-50">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
                            What You'll Learn Inside the Course
                        </h2>
                        <div className="max-w-5xl mx-auto">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                                {/* Left Column - Foundation & Python */}
                                <div className="space-y-6">
                                    <div className="bg-white rounded-2xl p-6 shadow-lg">
                                        <div className="flex items-center mb-4">
                                            <div className="bg-indigo-100 p-3 rounded-lg mr-4">
                                                <span className="text-2xl">🎯</span>
                                            </div>
                                            <h3 className="font-bold text-xl text-indigo-800">Foundation & Basics</h3>
                                        </div>
                                        <ul className="space-y-3">
                                            <li className="flex items-start">
                                                <span className="text-green-500 mr-2 mt-1">✓</span>
                                                <span>Getting started with Data Science & AI basics</span>
                                            </li>
                                            <li className="flex items-start">
                                                <span className="text-green-500 mr-2 mt-1">✓</span>
                                                <span>Understanding data ecosystems</span>
                                            </li>
                                            <li className="flex items-start">
                                                <span className="text-green-500 mr-2 mt-1">✓</span>
                                                <span>Mathematics for Data Science (Statistics, Probability)</span>
                                            </li>
                                            <li className="flex items-start">
                                                <span className="text-green-500 mr-2 mt-1">✓</span>
                                                <span>AI Ethics & Responsible AI</span>
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="bg-white rounded-2xl p-6 shadow-lg">
                                        <div className="flex items-center mb-4">
                                            <div className="bg-green-100 p-3 rounded-lg mr-4">
                                                <span className="text-2xl">🐍</span>
                                            </div>
                                            <h3 className="font-bold text-xl text-green-800">Python Programming</h3>
                                        </div>
                                        <ul className="space-y-3">
                                            <li className="flex items-start">
                                                <span className="text-green-500 mr-2 mt-1">✓</span>
                                                <span>Python for data science fundamentals</span>
                                            </li>
                                            <li className="flex items-start">
                                                <span className="text-green-500 mr-2 mt-1">✓</span>
                                                <span>NumPy, Pandas for data manipulation</span>
                                            </li>
                                            <li className="flex items-start">
                                                <span className="text-green-500 mr-2 mt-1">✓</span>
                                                <span>Data structures & algorithms</span>
                                            </li>
                                            <li className="flex items-start">
                                                <span className="text-green-500 mr-2 mt-1">✓</span>
                                                <span>Object-oriented programming concepts</span>
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="bg-white rounded-2xl p-6 shadow-lg">
                                        <div className="flex items-center mb-4">
                                            <div className="bg-blue-100 p-3 rounded-lg mr-4">
                                                <span className="text-2xl">📈</span>
                                            </div>
                                            <h3 className="font-bold text-xl text-blue-800">Data Processing & Visualization</h3>
                                        </div>
                                        <ul className="space-y-3">
                                            <li className="flex items-start">
                                                <span className="text-green-500 mr-2 mt-1">✓</span>
                                                <span>How to collect, clean, and prepare data</span>
                                            </li>
                                            <li className="flex items-start">
                                                <span className="text-green-500 mr-2 mt-1">✓</span>
                                                <span>Data wrangling & preprocessing</span>
                                            </li>
                                            <li className="flex items-start">
                                                <span className="text-green-500 mr-2 mt-1">✓</span>
                                                <span>Data visualization with Matplotlib, Seaborn</span>
                                            </li>
                                            <li className="flex items-start">
                                                <span className="text-green-500 mr-2 mt-1">✓</span>
                                                <span>Exploratory Data Analysis (EDA)</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                {/* Right Column - AI & Advanced */}
                                <div className="space-y-6">
                                    <div className="bg-white rounded-2xl p-6 shadow-lg">
                                        <div className="flex items-center mb-4">
                                            <div className="bg-purple-100 p-3 rounded-lg mr-4">
                                                <span className="text-2xl">🤖</span>
                                            </div>
                                            <h3 className="font-bold text-xl text-purple-800">Machine Learning</h3>
                                        </div>
                                        <ul className="space-y-3">
                                            <li className="flex items-start">
                                                <span className="text-green-500 mr-2 mt-1">✓</span>
                                                <span>Building smart systems using ML algorithms</span>
                                            </li>
                                            <li className="flex items-start">
                                                <span className="text-green-500 mr-2 mt-1">✓</span>
                                                <span>Supervised & Unsupervised Learning</span>
                                            </li>
                                            <li className="flex items-start">
                                                <span className="text-green-500 mr-2 mt-1">✓</span>
                                                <span>Regression, Classification, Clustering</span>
                                            </li>
                                            <li className="flex items-start">
                                                <span className="text-green-500 mr-2 mt-1">✓</span>
                                                <span>Model evaluation & optimization</span>
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="bg-white rounded-2xl p-6 shadow-lg">
                                        <div className="flex items-center mb-4">
                                            <div className="bg-pink-100 p-3 rounded-lg mr-4">
                                                <span className="text-2xl">🧠</span>
                                            </div>
                                            <h3 className="font-bold text-xl text-pink-800">Advanced AI Concepts</h3>
                                        </div>
                                        <ul className="space-y-3">
                                            <li className="flex items-start">
                                                <span className="text-green-500 mr-2 mt-1">✓</span>
                                                <span>Going deeper with Deep Learning & Neural Networks</span>
                                            </li>
                                            <li className="flex items-start">
                                                <span className="text-green-500 mr-2 mt-1">✓</span>
                                                <span>Understanding Natural Language Processing (NLP)</span>
                                            </li>
                                            <li className="flex items-start">
                                                <span className="text-green-500 mr-2 mt-1">✓</span>
                                                <span>Computer Vision fundamentals</span>
                                            </li>
                                            <li className="flex items-start">
                                                <span className="text-green-500 mr-2 mt-1">✓</span>
                                                <span>Reinforcement Learning basics</span>
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="bg-white rounded-2xl p-6 shadow-lg">
                                        <div className="flex items-center mb-4">
                                            <div className="bg-orange-100 p-3 rounded-lg mr-4">
                                                <span className="text-2xl">🚀</span>
                                            </div>
                                            <h3 className="font-bold text-xl text-orange-800">Projects & Career</h3>
                                        </div>
                                        <ul className="space-y-3">
                                            <li className="flex items-start">
                                                <span className="text-green-500 mr-2 mt-1">✓</span>
                                                <span>Exploring real-world AI applications</span>
                                            </li>
                                            <li className="flex items-start">
                                                <span className="text-green-500 mr-2 mt-1">✓</span>
                                                <span>Introduction to Big Data tools & concepts</span>
                                            </li>
                                            <li className="flex items-start">
                                                <span className="text-green-500 mr-2 mt-1">✓</span>
                                                <span>A capstone project that ties everything together</span>
                                            </li>
                                            <li className="flex items-start">
                                                <span className="text-green-500 mr-2 mt-1">✓</span>
                                                <span>Career guidance & portfolio building</span>
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
                                <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-8 rounded-2xl text-center shadow-lg">
                                    <div className="inline-flex items-center justify-center w-20 h-20 bg-indigo-100 rounded-full mb-6">
                                        <span className="text-3xl">⏱️</span>
                                    </div>
                                    <h3 className="font-bold text-2xl mb-3 text-indigo-800">Duration</h3>
                                    <p className="text-gray-700 font-semibold text-lg">6 Months</p>
                                    <p className="text-gray-600 mt-2">Comprehensive AI training</p>
                                </div>

                                <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-2xl text-center shadow-lg">
                                    <div className="inline-flex items-center justify-center w-20 h-20 bg-purple-100 rounded-full mb-6">
                                        <span className="text-3xl">🎓</span>
                                    </div>
                                    <h3 className="font-bold text-2xl mb-3 text-purple-800">Learning Mode</h3>
                                    <p className="text-gray-700 font-semibold text-lg">Classroom & Online</p>
                                    <p className="text-gray-600 mt-2">Flexible learning options</p>
                                </div>

                                <div className="bg-gradient-to-br from-pink-50 to-rose-50 p-8 rounded-2xl text-center shadow-lg">
                                    <div className="inline-flex items-center justify-center w-20 h-20 bg-pink-100 rounded-full mb-6">
                                        <span className="text-3xl">🏆</span>
                                    </div>
                                    <h3 className="font-bold text-2xl mb-3 text-pink-800">Certification</h3>
                                    <p className="text-gray-700 font-semibold text-lg">Diploma in Data Science & AI + PGDCA Certificate</p>
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
                            Who Can Join?
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                            {[
                                {
                                    icon: "🎓",
                                    title: "Students & Fresh Graduates",
                                    description: "Who want a career in AI and data science.",
                                    color: "bg-indigo-100 text-indigo-800"
                                },
                                {
                                    icon: "💼",
                                    title: "Job Seekers",
                                    description: "Who want to enter high-demand IT and analytics roles.",
                                    color: "bg-purple-100 text-purple-800"
                                },
                                {
                                    icon: "👨‍💻",
                                    title: "IT Professionals",
                                    description: "Ready to upskill and future-proof their careers.",
                                    color: "bg-pink-100 text-pink-800"
                                },
                                {
                                    icon: "🏢",
                                    title: "Business Owners & Managers",
                                    description: "Who want to use data for smarter decisions.",
                                    color: "bg-green-100 text-green-800"
                                },
                                {
                                    icon: "🚀",
                                    title: "Freelancers",
                                    description: "Eager to explore AI-driven opportunities.",
                                    color: "bg-orange-100 text-orange-800"
                                },
                                {
                                    icon: "🔬",
                                    title: "Researchers & Analysts",
                                    description: "Looking to add AI capabilities to their skillset.",
                                    color: "bg-blue-100 text-blue-800"
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
                <section className="py-16 bg-gradient-to-br from-indigo-900 to-purple-900 text-white">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl font-bold text-center mb-12">
                            Career Paths After This Course
                        </h2>
                        <p className="text-xl text-center mb-12 max-w-3xl mx-auto opacity-90">
                            With these skills, you'll be ready to take up roles such as:
                        </p>
                        
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                            {[
                                {
                                    role: "Data Analyst",
                                    description: "Analyze data to help businesses make informed decisions",
                                    icon: "📊",
                                    salary: "₹4-8 LPA",
                                    demand: "Very High"
                                },
                                {
                                    role: "Data Scientist",
                                    description: "Build predictive models and machine learning solutions",
                                    icon: "🔬",
                                    salary: "₹6-15 LPA",
                                    demand: "Very High"
                                },
                                {
                                    role: "Machine Learning Engineer",
                                    description: "Design and implement ML systems and algorithms",
                                    icon: "🤖",
                                    salary: "₹7-18 LPA",
                                    demand: "Very High"
                                },
                                {
                                    role: "AI Specialist",
                                    description: "Develop AI applications and intelligent systems",
                                    icon: "🧠",
                                    salary: "₹8-20 LPA",
                                    demand: "Very High"
                                },
                                {
                                    role: "Business Intelligence Analyst",
                                    description: "Create dashboards and reports for business insights",
                                    icon: "📈",
                                    salary: "₹5-10 LPA",
                                    demand: "High"
                                },
                                {
                                    role: "Python Developer",
                                    description: "Develop applications with Python for data and AI",
                                    icon: "🐍",
                                    salary: "₹4-12 LPA",
                                    demand: "High"
                                },
                                {
                                    role: "Research Analyst",
                                    description: "Conduct research using data analysis techniques",
                                    icon: "🔍",
                                    salary: "₹3-7 LPA",
                                    demand: "Medium"
                                },
                                {
                                    role: "AI Product Manager",
                                    description: "Manage AI product development and strategy",
                                    icon: "👨‍💼",
                                    salary: "₹10-25 LPA",
                                    demand: "High"
                                },
                                {
                                    role: "Freelance AI Consultant",
                                    description: "Provide AI solutions to businesses worldwide",
                                    icon: "🚀",
                                    salary: "Varies (₹30k-2L+/month)",
                                    demand: "Growing"
                                }
                            ].map((job, i) => (
                                <div key={i} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:-translate-y-1">
                                    <div className="flex items-center mb-4">
                                        <div className="bg-white/20 p-3 rounded-lg mr-4">
                                            <span className="text-2xl">{job.icon}</span>
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-xl">{job.role}</h3>
                                            <p className="text-indigo-200 text-sm mt-1">{job.salary}</p>
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

                {/* Why Now Section */}
                <section className="py-16 bg-gradient-to-r from-pink-50 to-rose-50">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto text-center">
                            <h2 className="text-3xl font-bold mb-6 text-gray-800">
                                Why Now?
                            </h2>
                            <div className="bg-white rounded-2xl p-8 shadow-lg">
                                <div className="text-6xl mb-6">🚀</div>
                                <p className="text-xl text-gray-700 mb-6">
                                    AI is not the future—it's happening right now. Every industry is hiring people who can understand data and build AI-driven solutions.
                                </p>
                                <p className="text-lg text-gray-600 mb-8">
                                    From healthcare and finance to retail and entertainment, organizations are investing billions in AI transformation. In just six months, you could be one of the professionals driving this change.
                                </p>
                                <div className="bg-gradient-to-r from-indigo-100 to-purple-100 p-6 rounded-xl">
                                    <h3 className="font-bold text-lg text-indigo-800 mb-2">Market Opportunity</h3>
                                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                        <div className="text-center">
                                            <div className="text-2xl font-bold text-indigo-600">$136B+</div>
                                            <div className="text-sm text-gray-600">AI Market Size 2024</div>
                                        </div>
                                        <div className="text-center">
                                            <div className="text-2xl font-bold text-purple-600">97M</div>
                                            <div className="text-sm text-gray-600">AI Jobs by 2025</div>
                                        </div>
                                        <div className="text-center">
                                            <div className="text-2xl font-bold text-pink-600">75%</div>
                                            <div className="text-sm text-gray-600">Companies Adopting AI</div>
                                        </div>
                                        <div className="text-center">
                                            <div className="text-2xl font-bold text-green-600">45%</div>
                                            <div className="text-sm text-gray-600">Salary Premium</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
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
                                        Start Your Journey in <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">Data Science & AI</span>
                                    </h2>
                                    <p className="text-lg text-gray-600 mb-8">
                                        Visit us at E Digital India, Jamshedpur, or connect with us online. Take your first step today—your future in Data Science & AI is waiting.
                                    </p>
                                    
                                    <div className="space-y-4 mb-8">
                                        <div className="flex items-center">
                                            <div className="bg-indigo-100 p-2 rounded-lg mr-4">
                                                <span className="text-indigo-600">💻</span>
                                            </div>
                                            <span className="text-gray-700">Free Laptop for AI & ML Projects</span>
                                        </div>
                                        <div className="flex items-center">
                                            <div className="bg-indigo-100 p-2 rounded-lg mr-4">
                                                <span className="text-indigo-600">💼</span>
                                            </div>
                                            <span className="text-gray-700">100% Job Guarantee with Paid Internship</span>
                                        </div>
                                        <div className="flex items-center">
                                            <div className="bg-indigo-100 p-2 rounded-lg mr-4">
                                                <span className="text-indigo-600">🏆</span>
                                            </div>
                                            <span className="text-gray-700">UGC-Approved PGDCA Certificate</span>
                                        </div>
                                        <div className="flex items-center">
                                            <div className="bg-indigo-100 p-2 rounded-lg mr-4">
                                                <span className="text-indigo-600">📊</span>
                                            </div>
                                            <span className="text-gray-700">Real-World Datasets & Industry Projects</span>
                                        </div>
                                    </div>
                                    
                                    <div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-6 rounded-2xl border border-indigo-100">
                                        <div className="flex items-center">
                                            <div className="bg-white p-3 rounded-lg mr-4 shadow">
                                                <span className="text-2xl text-indigo-600">📍</span>
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-lg text-gray-800">E Digital India, Jamshedpur</h4>
                                                <p className="text-gray-600">Visit our campus for a free counseling session and demo class</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Right Side - Enrollment Form */}
                                <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 shadow-2xl border border-gray-100">
                                    <div className="text-center mb-8">
                                        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full mb-4">
                                            <span className="text-2xl text-white">🤖</span>
                                        </div>
                                        <h3 className="text-2xl font-bold text-gray-800">Become an AI Professional</h3>
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
                                                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition"
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
                                                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition"
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
                                                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition"
                                                    placeholder="+91 98765 43210"
                                                />
                                            </div>
                                        </div>

                                        <div>
                                            <label className="block text-gray-700 font-medium mb-2">Educational/Professional Background *</label>
                                            <select
                                                name="background"
                                                value={formData.background}
                                                onChange={handleChange}
                                                required
                                                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition"
                                            >
                                                <option value="">Select your background</option>
                                                <option value="student">Student (Any Stream)</option>
                                                <option value="fresh-graduate">Fresh Graduate</option>
                                                <option value="working-professional">Working Professional</option>
                                                <option value="it-professional">IT Professional</option>
                                                <option value="business-owner">Business Owner/Manager</option>
                                                <option value="freelancer">Freelancer</option>
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
                                                        onClick={() => setFormData({...formData, mode: option})}
                                                        className={`py-3 rounded-lg font-medium transition ${formData.mode === option 
                                                            ? 'bg-gradient-to-r from-indigo-600 to-purple-500 text-white shadow-md' 
                                                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
                                                    >
                                                        {option.charAt(0).toUpperCase() + option.slice(1)}
                                                    </button>
                                                ))}
                                            </div>
                                        </div>

                                        <div>
                                            <label className="block text-gray-700 font-medium mb-2">Your AI Interests & Goals</label>
                                            <textarea
                                                name="message"
                                                value={formData.message}
                                                onChange={handleChange}
                                                rows="3"
                                                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition"
                                                placeholder="Tell us about your interests in AI/ML, career goals, or any specific questions..."
                                            ></textarea>
                                        </div>

                                        <button
                                            type="submit"
                                            className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-bold py-4 px-4 rounded-xl transition-all duration-300 transform hover:scale-[1.02] shadow-lg hover:shadow-xl"
                                        >
                                            Start Your AI & Data Science Journey
                                        </button>

                                        <p className="text-xs text-gray-500 text-center">
                                            Join the AI revolution! We'll contact you within 24 hours for a personalized counseling session.
                                        </p>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            {/* Structured Data for SEO */}
            <Script id="data-science-ai-structured-data" type="application/ld+json">
                {JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "Course",
                    "name": "Diploma in Data Science & Artificial Intelligence",
                    "description": "6-month comprehensive Data Science and AI training with Python, Machine Learning, Deep Learning, real-world projects, job guarantee, and free laptop.",
                    "provider": {
                        "@type": "Organization",
                        "name": "E Digital India",
                        "sameAs": "https://edigitalindia.com"
                    },
                    "educationalCredentialAwarded": "Diploma in Data Science & AI and UGC-approved PGDCA Certificate",
                    "timeToComplete": "P6M",
                    "coursePrerequisites": "Basic mathematics and computer knowledge. No prior coding experience required.",
                    "hasCourseInstance": {
                        "@type": "CourseInstance",
                        "courseMode": ["online", "offline", "mixed"],
                        "duration": "P6M"
                    },
                    "audience": {
                        "@type": "EducationalAudience",
                        "educationalRole": "Students, Graduates, IT Professionals, Business Owners, Freelancers, Career Switchers"
                    },
                    "offers": {
                        "@type": "Offer",
                        "priceCurrency": "INR",
                        "availability": "https://schema.org/InStock",
                        "itemOffered": {
                            "@type": "Service",
                            "includes": "Free laptop, 100% job guarantee, Paid internship, UGC-approved certification, Real-world datasets, Capstone project"
                        }
                    },
                    "teaches": [
                        "Python Programming",
                        "Data Analysis & Visualization",
                        "Statistics for Data Science",
                        "Machine Learning Algorithms",
                        "Deep Learning & Neural Networks",
                        "Natural Language Processing (NLP)",
                        "Big Data Concepts",
                        "AI Ethics & Applications",
                        "Real-world Project Development"
                    ],
                    "occupationalCategory": [
                        "Data Scientist",
                        "Machine Learning Engineer",
                        "Data Analyst",
                        "AI Specialist",
                        "Business Intelligence Analyst",
                        "Python Developer",
                        "Research Analyst"
                    ],
                    "about": {
                        "@type": "Thing",
                        "name": "Artificial Intelligence and Data Science"
                    }
                })}
            </Script>
        </>
    );
}