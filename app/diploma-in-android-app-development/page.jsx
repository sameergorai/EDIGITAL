'use client'
import Head from 'next/head';
import Script from 'next/script';
import { useState } from 'react';

export default function AndroidAppDevelopmentCoursePage() {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        mode: 'online',
        courseName: 'Android App Development Course',
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
        // setLoading(true);
        // setError('');

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
            
            // Reset form
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

        } finally {
            setLoading(false);
        }
    };


  
    //     e.preventDefault();
    //     console.log('Form submitted:', formData);
        
    //     alert('Thank you for your interest in Android App Development Course! We\'ll contact you shortly.');
    //     setFormData({ 
    //         fullName: '', 
    //         email: '', 
    //         phone: '', 
    //         mode: 'online', 
    //         courseName: '',
    //         background: '',
    //         message: '' 
    //     });
    // };

    return (
        <>
            <Head>
                <title>Android App Development Course | Build Real Android Apps</title>
                <meta name="description" content="6-month Android App Development Diploma with Kotlin, Java, Firebase. Free laptop, job guarantee, and publish apps to Google Play Store." />
                <meta name="keywords" content="android development course, mobile app development, kotlin android, java android, android studio, app development course" />
                <link rel="canonical" href="https://edigitalindia.com/android-app-development-course" />
                <meta name="robots" content="index, follow" />
                <meta name="author" content="E Digital India" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                
                {/* Open Graph Meta Tags */}
                <meta property="og:title" content="Android App Development Course - Build & Publish Real Apps" />
                <meta property="og:description" content="6-month Android development training with Kotlin, Java, Firebase. Build real apps and publish to Google Play Store with job guarantee." />
                <meta property="og:url" content="https://edigitalindia.com/android-app-development-course" />
                <meta property="og:site_name" content="E Digital India" />
                <meta property="og:type" content="website" />
                <meta property="og:locale" content="en_US" />
                <meta property="og:image" content="/images/android-development-course.jpg" />
                <meta property="og:image:width" content="1200" />
                <meta property="og:image:height" content="630" />
                <meta property="og:image:alt" content="Android App Development Course" />
                
                {/* Twitter Meta Tags */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Android App Development – Free Laptop & Job Guarantee" />
                <meta name="twitter:description" content="Master Android development with Kotlin, Java, and Firebase. Build real apps and launch your developer career." />
                <meta name="twitter:image" content="/images/android-development-course.jpg" />
            </Head>

            <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
                {/* Hero Section */}
                <section className="relative py-16 md:py-24 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-green-600 via-emerald-500 to-teal-600 opacity-90"></div>
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-32 translate-x-32"></div>
                    <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full translate-y-48 -translate-x-48"></div>
                    
                    <div className="container mx-auto px-4 relative z-10">
                        <div className="max-w-4xl mx-auto text-center text-white">
                            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                                Android App Development Course
                            </h1>
                            <p className="text-xl md:text-2xl mb-8 leading-relaxed">
                                Build your own Android apps — for work, freelancing, or launching your idea. From basic coding to advanced features.
                            </p>
                            <p className="text-lg md:text-xl mb-10 opacity-90">
                                Learn to build real apps that run smoothly across devices with hands-on training, live projects, and expert mentorship.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <a
                                    href="#enroll"
                                    className="bg-white text-green-600 hover:bg-gray-100 font-bold py-4 px-8 rounded-full text-lg transition transform hover:scale-105 shadow-lg"
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
                            Core Benefits of Our Android App Development Course
                        </h2>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {[
                                { 
                                    icon: "💻", 
                                    title: "Free Laptop", 
                                    desc: "When you join — so you don't have to worry about gear.",
                                    color: "from-green-500 to-emerald-500"
                                },
                                { 
                                    icon: "🏆", 
                                    title: "Dual Certification", 
                                    desc: "Android Development certificate + UGC-approved PGDCA certificate to boost your resume.",
                                    color: "from-teal-500 to-cyan-500"
                                },
                                { 
                                    icon: "🎓", 
                                    title: "Flexible Learning", 
                                    desc: "Learn online, in class, or both — choose what works for your schedule.",
                                    color: "from-blue-500 to-indigo-500"
                                },
                                { 
                                    icon: "💼", 
                                    title: "Job Guarantee with Internship", 
                                    desc: "Paid internship included — finish with experience and a foot in the door.",
                                    color: "from-orange-500 to-amber-500"
                                },
                                { 
                                    icon: "🚀", 
                                    title: "Work on Real Projects", 
                                    desc: "Build apps you can actually show to future employers in your portfolio.",
                                    color: "from-purple-500 to-pink-500"
                                },
                                { 
                                    icon: "👨‍🏫", 
                                    title: "Beyond Classroom Guidance", 
                                    desc: "From resume help to mock interviews — we'll help you get hired.",
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
                <section id="curriculum" className="py-16 bg-gradient-to-br from-green-50 to-teal-50">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
                            What You Will Learn
                        </h2>
                        <div className="max-w-5xl mx-auto">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                                {/* Left Column - Foundation & UI */}
                                <div className="space-y-6">
                                    <div className="bg-white rounded-2xl p-6 shadow-lg">
                                        <div className="flex items-center mb-4">
                                            <div className="bg-green-100 p-3 rounded-lg mr-4">
                                                <span className="text-2xl">📱</span>
                                            </div>
                                            <h3 className="font-bold text-xl text-green-800">Android Foundation</h3>
                                        </div>
                                        <ul className="space-y-3">
                                            <li className="flex items-start">
                                                <span className="text-green-500 mr-2 mt-1">✓</span>
                                                <span>Android ecosystem & architecture overview</span>
                                            </li>
                                            <li className="flex items-start">
                                                <span className="text-green-500 mr-2 mt-1">✓</span>
                                                <span>Configuring Android Studio development environment</span>
                                            </li>
                                            <li className="flex items-start">
                                                <span className="text-green-500 mr-2 mt-1">✓</span>
                                                <span>Launching your first Android application</span>
                                            </li>
                                            <li className="flex items-start">
                                                <span className="text-green-500 mr-2 mt-1">✓</span>
                                                <span>Understanding Android project structure</span>
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="bg-white rounded-2xl p-6 shadow-lg">
                                        <div className="flex items-center mb-4">
                                            <div className="bg-blue-100 p-3 rounded-lg mr-4">
                                                <span className="text-2xl">⚡</span>
                                            </div>
                                            <h3 className="font-bold text-xl text-blue-800">Programming Languages</h3>
                                        </div>
                                        <ul className="space-y-3">
                                            <li className="flex items-start">
                                                <span className="text-green-500 mr-2 mt-1">✓</span>
                                                <span>Java fundamentals for Android development</span>
                                            </li>
                                            <li className="flex items-start">
                                                <span className="text-green-500 mr-2 mt-1">✓</span>
                                                <span>Kotlin — the modern Android language</span>
                                            </li>
                                            <li className="flex items-start">
                                                <span className="text-green-500 mr-2 mt-1">✓</span>
                                                <span>Object-oriented programming concepts</span>
                                            </li>
                                            <li className="flex items-start">
                                                <span className="text-green-500 mr-2 mt-1">✓</span>
                                                <span>Data structures & algorithms for mobile</span>
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="bg-white rounded-2xl p-6 shadow-lg">
                                        <div className="flex items-center mb-4">
                                            <div className="bg-purple-100 p-3 rounded-lg mr-4">
                                                <span className="text-2xl">🎨</span>
                                            </div>
                                            <h3 className="font-bold text-xl text-purple-800">UI/UX Design</h3>
                                        </div>
                                        <ul className="space-y-3">
                                            <li className="flex items-start">
                                                <span className="text-green-500 mr-2 mt-1">✓</span>
                                                <span>Designing smooth, user-friendly interfaces</span>
                                            </li>
                                            <li className="flex items-start">
                                                <span className="text-green-500 mr-2 mt-1">✓</span>
                                                <span>XML layouts & Material Design guidelines</span>
                                            </li>
                                            <li className="flex items-start">
                                                <span className="text-green-500 mr-2 mt-1">✓</span>
                                                <span>Responsive design for multiple screen sizes</span>
                                            </li>
                                            <li className="flex items-start">
                                                <span className="text-green-500 mr-2 mt-1">✓</span>
                                                <span>Animations & transitions for better UX</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                {/* Right Column - Backend & Deployment */}
                                <div className="space-y-6">
                                    <div className="bg-white rounded-2xl p-6 shadow-lg">
                                        <div className="flex items-center mb-4">
                                            <div className="bg-orange-100 p-3 rounded-lg mr-4">
                                                <span className="text-2xl">🔥</span>
                                            </div>
                                            <h3 className="font-bold text-xl text-orange-800">Backend & Data</h3>
                                        </div>
                                        <ul className="space-y-3">
                                            <li className="flex items-start">
                                                <span className="text-green-500 mr-2 mt-1">✓</span>
                                                <span>Working with data storage (SQLite, Room)</span>
                                            </li>
                                            <li className="flex items-start">
                                                <span className="text-green-500 mr-2 mt-1">✓</span>
                                                <span>RESTful API integration with Retrofit</span>
                                            </li>
                                            <li className="flex items-start">
                                                <span className="text-green-500 mr-2 mt-1">✓</span>
                                                <span>Firebase integration (Authentication, Database)</span>
                                            </li>
                                            <li className="flex items-start">
                                                <span className="text-green-500 mr-2 mt-1">✓</span>
                                                <span>Cloud tools & backend-as-a-service platforms</span>
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="bg-white rounded-2xl p-6 shadow-lg">
                                        <div className="flex items-center mb-4">
                                            <div className="bg-red-100 p-3 rounded-lg mr-4">
                                                <span className="text-2xl">🚀</span>
                                            </div>
                                            <h3 className="font-bold text-xl text-red-800">Advanced Features</h3>
                                        </div>
                                        <ul className="space-y-3">
                                            <li className="flex items-start">
                                                <span className="text-green-500 mr-2 mt-1">✓</span>
                                                <span>Location services & Google Maps integration</span>
                                            </li>
                                            <li className="flex items-start">
                                                <span className="text-green-500 mr-2 mt-1">✓</span>
                                                <span>Push notifications with Firebase Cloud Messaging</span>
                                            </li>
                                            <li className="flex items-start">
                                                <span className="text-green-500 mr-2 mt-1">✓</span>
                                                <span>Camera & multimedia integration</span>
                                            </li>
                                            <li className="flex items-start">
                                                <span className="text-green-500 mr-2 mt-1">✓</span>
                                                <span>Payment gateway integration</span>
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="bg-white rounded-2xl p-6 shadow-lg">
                                        <div className="flex items-center mb-4">
                                            <div className="bg-indigo-100 p-3 rounded-lg mr-4">
                                                <span className="text-2xl">📤</span>
                                            </div>
                                            <h3 className="font-bold text-xl text-indigo-800">Deployment & Projects</h3>
                                        </div>
                                        <ul className="space-y-3">
                                            <li className="flex items-start">
                                                <span className="text-green-500 mr-2 mt-1">✓</span>
                                                <span>Publishing your app to Google Play Store</span>
                                            </li>
                                            <li className="flex items-start">
                                                <span className="text-green-500 mr-2 mt-1">✓</span>
                                                <span>App signing & release management</span>
                                            </li>
                                            <li className="flex items-start">
                                                <span className="text-green-500 mr-2 mt-1">✓</span>
                                                <span>Final capstone project for portfolio</span>
                                            </li>
                                            <li className="flex items-start">
                                                <span className="text-green-500 mr-2 mt-1">✓</span>
                                                <span>App monetization strategies & analytics</span>
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
                                <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl text-center shadow-lg">
                                    <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-6">
                                        <span className="text-3xl">⏱️</span>
                                    </div>
                                    <h3 className="font-bold text-2xl mb-3 text-green-800">Duration</h3>
                                    <p className="text-gray-700 font-semibold text-lg">6 Months</p>
                                    <p className="text-gray-600 mt-2">Hands-on app development training</p>
                                </div>

                                <div className="bg-gradient-to-br from-teal-50 to-cyan-50 p-8 rounded-2xl text-center shadow-lg">
                                    <div className="inline-flex items-center justify-center w-20 h-20 bg-teal-100 rounded-full mb-6">
                                        <span className="text-3xl">🎓</span>
                                    </div>
                                    <h3 className="font-bold text-2xl mb-3 text-teal-800">Learning Mode</h3>
                                    <p className="text-gray-700 font-semibold text-lg">Classroom & Online</p>
                                    <p className="text-gray-600 mt-2">Flexible learning options</p>
                                </div>

                                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl text-center shadow-lg">
                                    <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-100 rounded-full mb-6">
                                        <span className="text-3xl">🏆</span>
                                    </div>
                                    <h3 className="font-bold text-2xl mb-3 text-blue-800">Certification</h3>
                                    <p className="text-gray-700 font-semibold text-lg">Diploma in Android App Development + PGDCA Certificate</p>
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
                                    title: "Students",
                                    description: "Figuring out their next step in tech career.",
                                    color: "bg-green-100 text-green-800"
                                },
                                {
                                    icon: "💼",
                                    title: "Job Seekers",
                                    description: "Looking for tech skills that lead to high-paying jobs.",
                                    color: "bg-teal-100 text-teal-800"
                                },
                                {
                                    icon: "🚀",
                                    title: "Entrepreneurs",
                                    description: "With an app idea but no idea how to build it.",
                                    color: "bg-blue-100 text-blue-800"
                                },
                                {
                                    icon: "👨‍💻",
                                    title: "Freelancers & Developers",
                                    description: "Ready to move into mobile app development.",
                                    color: "bg-purple-100 text-purple-800"
                                },
                                {
                                    icon: "🏢",
                                    title: "IT Professionals",
                                    description: "Wanting to expand skills into mobile development.",
                                    color: "bg-orange-100 text-orange-800"
                                },
                                {
                                    icon: "📱",
                                    title: "Career Switchers",
                                    description: "Looking to transition into tech from other fields.",
                                    color: "bg-red-100 text-red-800"
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
                <section className="py-16 bg-gradient-to-br from-green-900 to-teal-900 text-white">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl font-bold text-center mb-12">
                            Career Opportunities After This Course
                        </h2>
                        <p className="text-xl text-center mb-12 max-w-3xl mx-auto opacity-90">
                            Once you've wrapped up the course, you'll be ready for roles like:
                        </p>
                        
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                            {[
                                {
                                    role: "Android App Developer",
                                    description: "Develop native Android applications using Kotlin and Java",
                                    icon: "📱",
                                    salary: "₹4-10 LPA",
                                    demand: "Very High"
                                },
                                {
                                    role: "Mobile UI/UX Designer",
                                    description: "Design intuitive interfaces for Android applications",
                                    icon: "🎨",
                                    salary: "₹3-8 LPA",
                                    demand: "High"
                                },
                                {
                                    role: "Freelance App Developer",
                                    description: "Work independently building apps for clients worldwide",
                                    icon: "👨‍💻",
                                    salary: "Varies (₹25k-1.5L+/month)",
                                    demand: "Growing"
                                },
                                {
                                    role: "Mobile App Entrepreneur",
                                    description: "Launch your own app-based startup or business",
                                    icon: "🚀",
                                    salary: "Unlimited Potential",
                                    demand: "High"
                                },
                                {
                                    role: "Mobile Solutions Architect",
                                    description: "Design mobile app architecture and technical solutions",
                                    icon: "🏗️",
                                    salary: "₹8-15 LPA",
                                    demand: "High"
                                },
                                {
                                    role: "App Testing Engineer",
                                    description: "Specialize in testing and quality assurance for mobile apps",
                                    icon: "🧪",
                                    salary: "₹3-7 LPA",
                                    demand: "Medium"
                                },
                                {
                                    role: "Play Store Manager",
                                    description: "Manage app publishing, optimization, and store listing",
                                    icon: "📊",
                                    salary: "₹4-9 LPA",
                                    demand: "Medium"
                                },
                                {
                                    role: "Technical Lead (Mobile)",
                                    description: "Lead mobile development teams and projects",
                                    icon: "👨‍💼",
                                    salary: "₹10-20 LPA",
                                    demand: "High"
                                },
                                {
                                    role: "Cross-Platform Developer",
                                    description: "Work with React Native/Flutter after mastering native",
                                    icon: "🔄",
                                    salary: "₹5-12 LPA",
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
                                            <p className="text-green-200 text-sm mt-1">{job.salary}</p>
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

                {/* Market Stats Section */}
                <section className="py-16 bg-gradient-to-r from-teal-50 to-blue-50">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto text-center">
                            <h2 className="text-3xl font-bold mb-6 text-gray-800">
                                Why Android Development?
                            </h2>
                            <div className="bg-white rounded-2xl p-8 shadow-lg">
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                                    <div className="text-center">
                                        <div className="text-3xl font-bold text-green-600">72.44%</div>
                                        <div className="text-sm text-gray-600">Global Market Share</div>
                                        <p className="text-xs text-gray-500 mt-1">Android vs iOS</p>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-3xl font-bold text-teal-600">3M+</div>
                                        <div className="text-sm text-gray-600">Apps on Play Store</div>
                                        <p className="text-xs text-gray-500 mt-1">Active applications</p>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-3xl font-bold text-blue-600">2.5B+</div>
                                        <div className="text-sm text-gray-600">Active Android Users</div>
                                        <p className="text-xs text-gray-500 mt-1">Worldwide</p>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-3xl font-bold text-purple-600">$142B</div>
                                        <div className="text-sm text-gray-600">App Economy 2024</div>
                                        <p className="text-xs text-gray-500 mt-1">Annual revenue</p>
                                    </div>
                                </div>
                                <p className="text-gray-700">
                                    With over 2.5 billion active Android devices worldwide, the demand for Android developers continues to grow exponentially. Every business needs a mobile presence, and Android's dominant market share makes it the most practical platform to learn.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Final CTA Section */}
                <section id="enroll" className="py-16 bg-gradient-to-r from-green-600 to-teal-600 text-white">
                    <div className="container mx-auto px-4 text-center">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">
                            Enroll Now
                        </h2>
                        <p className="text-xl max-w-3xl mx-auto mb-8">
                            If building apps is something you've always wanted to do — now's a good time to start. This course helps you go from beginner to job-ready, with support every step of the way.
                        </p>
                        <div className="flex justify-center space-x-4">
                            <a
                                href="#enroll-form"
                                className="bg-white text-green-600 hover:bg-gray-100 font-bold py-3 px-8 rounded-full text-lg transition transform hover:scale-105"
                            >
                                Apply Now
                            </a>
                            <a
                                href="#"
                                className="bg-transparent border-2 border-white hover:bg-white/10 font-bold py-3 px-8 rounded-full text-lg transition"
                            >
                                Download Syllabus
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
                                        Build Your First <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-teal-500">Android App</span>
                                    </h2>
                                    <p className="text-lg text-gray-600 mb-8">
                                        Design, develop, and deploy Android applications that work seamlessly across devices. Join our 6-month intensive program and become job-ready.
                                    </p>
                                    
                                    <div className="space-y-4 mb-8">
                                        <div className="flex items-center">
                                            <div className="bg-green-100 p-2 rounded-lg mr-4">
                                                <span className="text-green-600">📱</span>
                                            </div>
                                            <span className="text-gray-700">Learn Kotlin & Java — industry standard languages</span>
                                        </div>
                                        <div className="flex items-center">
                                            <div className="bg-green-100 p-2 rounded-lg mr-4">
                                                <span className="text-green-600">🔥</span>
                                            </div>
                                            <span className="text-gray-700">Firebase integration & backend development</span>
                                        </div>
                                        <div className="flex items-center">
                                            <div className="bg-green-100 p-2 rounded-lg mr-4">
                                                <span className="text-green-600">📤</span>
                                            </div>
                                            <span className="text-gray-700">Publish your app to Google Play Store</span>
                                        </div>
                                        <div className="flex items-center">
                                            <div className="bg-green-100 p-2 rounded-lg mr-4">
                                                <span className="text-green-600">💼</span>
                                            </div>
                                            <span className="text-gray-700">100% Job Guarantee with Paid Internship</span>
                                        </div>
                                    </div>
                                    
                                    <div className="bg-gradient-to-r from-green-50 to-teal-50 p-6 rounded-2xl border border-green-100">
                                        <div className="flex items-center">
                                            <div className="bg-white p-3 rounded-lg mr-4 shadow">
                                                <span className="text-2xl text-green-600">🏆</span>
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-lg text-gray-800">Portfolio Building</h4>
                                                <p className="text-gray-600">Complete 5+ real projects including a capstone app for your portfolio</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Right Side - Enrollment Form */}
                                <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 shadow-2xl border border-gray-100">
                                    <div className="text-center mb-8">
                                        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-600 to-teal-500 rounded-full mb-4">
                                            <span className="text-2xl text-white">📱</span>
                                        </div>
                                        <h3 className="text-2xl font-bold text-gray-800">Start Building Apps Today</h3>
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
                                                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-200 transition"
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
                                                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-200 transition"
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
                                                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-200 transition"
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
                                                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-200 transition"
                                            >
                                                <option value="">Select your background</option>
                                                <option value="beginner">Beginner (No coding experience)</option>
                                                <option value="some-coding">Some coding knowledge</option>
                                                <option value="web-developer">Web Developer (wanting mobile)</option>
                                                <option value="it-professional">IT Professional</option>
                                                <option value="student">Student (CS/IT background)</option>
                                                <option value="entrepreneur">Entrepreneur with app idea</option>
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
                                                            ? 'bg-gradient-to-r from-green-600 to-teal-500 text-white shadow-md' 
                                                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
                                                    >
                                                        {option.charAt(0).toUpperCase() + option.slice(1)}
                                                    </button>
                                                ))}
                                            </div>
                                        </div>

                                        <div>
                                            <label className="block text-gray-700 font-medium mb-2">Your App Ideas & Goals</label>
                                            <textarea
                                                name="message"
                                                value={formData.message}
                                                onChange={handleChange}
                                                rows="3"
                                                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-200 transition"
                                                placeholder="Tell us about your app ideas, career goals, or any specific questions..."
                                            ></textarea>
                                        </div>

                                        <button
                                            type="submit"
                                            className="w-full bg-gradient-to-r from-green-600 to-teal-500 hover:from-green-700 hover:to-teal-600 text-white font-bold py-4 px-4 rounded-xl transition-all duration-300 transform hover:scale-[1.02] shadow-lg hover:shadow-xl"
                                        >
                                            Start Your Android Development Journey
                                        </button>

                                        <p className="text-xs text-gray-500 text-center">
                                            Next batch starting soon. Limited seats available for personalized mentorship.
                                        </p>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            {/* Structured Data for SEO */}
            <Script id="android-development-structured-data" type="application/ld+json">
                {JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "Course",
                    "name": "Android App Development Course",
                    "description": "6-month Android development training with Kotlin, Java, Firebase. Build real apps and publish to Google Play Store. Free laptop, job guarantee, and portfolio projects.",
                    "provider": {
                        "@type": "Organization",
                        "name": "E Digital India",
                        "sameAs": "https://edigitalindia.com"
                    },
                    "educationalCredentialAwarded": "Diploma in Android App Development and UGC-approved PGDCA Certificate",
                    "timeToComplete": "P6M",
                    "coursePrerequisites": "Basic computer knowledge. No prior coding experience required.",
                    "hasCourseInstance": {
                        "@type": "CourseInstance",
                        "courseMode": ["online", "offline", "mixed"],
                        "duration": "P6M"
                    },
                    "audience": {
                        "@type": "EducationalAudience",
                        "educationalRole": "Students, Job Seekers, Entrepreneurs, Freelancers, IT Professionals, Career Switchers"
                    },
                    "offers": {
                        "@type": "Offer",
                        "priceCurrency": "INR",
                        "availability": "https://schema.org/InStock",
                        "itemOffered": {
                            "@type": "Service",
                            "includes": "Free laptop, 100% job guarantee, Paid internship, Dual certification, Google Play publishing guidance, Portfolio projects"
                        }
                    },
                    "teaches": [
                        "Kotlin Programming",
                        "Java for Android",
                        "Android Studio",
                        "UI/UX Design",
                        "Firebase Integration",
                        "RESTful APIs",
                        "Google Play Publishing",
                        "App Monetization",
                        "Mobile App Architecture"
                    ],
                    "occupationalCategory": [
                        "Android Developer",
                        "Mobile App Developer",
                        "Mobile UI/UX Designer",
                        "Freelance App Developer",
                        "Mobile Solutions Architect"
                    ],
                    "about": {
                        "@type": "Thing",
                        "name": "Mobile App Development and Android Programming"
                    }
                })}
            </Script>
        </>
    );
}