'use client'
import Head from 'next/head';
import Script from 'next/script';
import { useState } from 'react';

export default function BusinessCommunicationCoursePage() {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        mode: 'offline',
        courseName: 'Business Communication & Soft Skills Course',
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
            
            // Reset form
           setFormData({
            fullName: '',
            email: '',
            phone: '',
            mode: 'offline',
            courseName: '',
            background: '',
            message: ''
        });
        } catch (error) {
            console.error('Error submitting form:', error);
 
            // alert(`Error: ${error.message}`);
        } finally {
            // setLoading(false);
        }
        
    };

    return (
        <>
            <Head>
                <title>Business Communication & Soft Skills Course | Confidence Building</title>
                <meta name="description" content="6-month Business Communication & Soft Skills Diploma in Jamshedpur. Build confidence, improve English communication, ace interviews, and advance your career." />
                <meta name="keywords" content="soft skills course, business communication training, English speaking course, interview preparation, personality development, communication skills Jamshedpur" />
                <link rel="canonical" href="https://edigitalindia.com/business-communication-course" />
                <meta name="robots" content="index, follow" />
                <meta name="author" content="E Digital India" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />

                {/* Open Graph Meta Tags */}
                <meta property="og:title" content="Business Communication & Soft Skills Course - Speak with Confidence" />
                <meta property="og:description" content="6-month diploma to build confidence in speaking, presentations, interviews, and professional communication. Available in Jamshedpur and online." />
                <meta property="og:url" content="https://edigitalindia.com/business-communication-course" />
                <meta property="og:site_name" content="E Digital India" />
                <meta property="og:type" content="website" />
                <meta property="og:locale" content="en_US" />
                <meta property="og:image" content="/images/communication-skills-course.jpg" />
                <meta property="og:image:width" content="1200" />
                <meta property="og:image:height" content="630" />
                <meta property="og:image:alt" content="Business Communication & Soft Skills Course" />

                {/* Twitter Meta Tags */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Soft Skills Course – Speak Confidently in Interviews & Meetings" />
                <meta name="twitter:description" content="Overcome communication barriers and build confidence for career success in Jamshedpur." />
                <meta name="twitter:image" content="/images/communication-skills-course.jpg" />
            </Head>

            <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
                {/* Hero Section */}
                <section className="relative py-16 md:py-24 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-amber-600 via-orange-500 to-red-500 opacity-90"></div>
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-32 translate-x-32"></div>
                    <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full translate-y-48 -translate-x-48"></div>

                    <div className="container mx-auto px-4 relative z-10">
                        <div className="max-w-4xl mx-auto text-center text-white">
                            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                                Business Communication & Soft Skills Course
                            </h1>
                            <div className="text-xl md:text-2xl mb-8 leading-relaxed bg-white/10 p-6 rounded-2xl backdrop-blur-sm">
                                <p className="mb-4 italic">"I know my subject, but when it comes to interviews, I just go blank."</p>
                                <p className="italic">"I can do the job well, but I can't explain it in meetings."</p>
                            </div>
                            <p className="text-lg md:text-xl mb-10 opacity-90">
                                Communication is not just about speaking English—it's about expressing yourself with confidence, whether facing an interviewer, a client, or your team.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <a
                                    href="#enroll"
                                    className="bg-white text-orange-600 hover:bg-gray-100 font-bold py-4 px-8 rounded-full text-lg transition transform hover:scale-105 shadow-lg"
                                >
                                    Enroll Now - Build Your Confidence
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

                {/* What Makes Different Section */}
                <section className="py-16 bg-white">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl font-bold text-center mb-4 text-gray-800">
                            What Makes This Course Different
                        </h2>
                        <p className="text-lg text-center text-gray-600 mb-12 max-w-3xl mx-auto">
                            We don't believe in spoon-feeding theory. You'll be speaking, presenting, and practicing from day one.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {[
                                {
                                    icon: "🗣️",
                                    title: "Practical From Day One",
                                    desc: "Start speaking and presenting immediately—no theory-heavy beginnings.",
                                    color: "from-amber-500 to-orange-500"
                                },
                                {
                                    icon: "🎭",
                                    title: "Mock Interviews",
                                    desc: "Regular practice sessions that simulate real interview environments.",
                                    color: "from-orange-500 to-red-500"
                                },
                                {
                                    icon: "👥",
                                    title: "Group Discussions",
                                    desc: "Learn to articulate ideas in collaborative settings just like real workplaces.",
                                    color: "from-red-500 to-rose-500"
                                },
                                {
                                    icon: "🎬",
                                    title: "Role Plays",
                                    desc: "Practice real workplace scenarios with feedback from trainers.",
                                    color: "from-yellow-500 to-amber-500"
                                },
                                {
                                    icon: "🏆",
                                    title: "Overcome Overthinking",
                                    desc: "Break the habit of 'thinking too much' before you speak.",
                                    color: "from-pink-500 to-red-500"
                                },
                                {
                                    icon: "📱",
                                    title: "Digital Communication",
                                    desc: "Master emails, virtual meetings, and online professional etiquette.",
                                    color: "from-rose-500 to-orange-500"
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

                {/* Skills You'll Improve */}
                <section id="curriculum" className="py-16 bg-gradient-to-br from-amber-50 to-orange-50">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
                            What You'll Improve in This Soft Skills Course
                        </h2>
                        <div className="max-w-5xl mx-auto">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                                {/* Left Column - Communication Skills */}
                                <div className="space-y-6">
                                    <div className="bg-white rounded-2xl p-6 shadow-lg">
                                        <div className="flex items-center mb-4">
                                            <div className="bg-amber-100 p-3 rounded-lg mr-4">
                                                <span className="text-2xl">💬</span>
                                            </div>
                                            <h3 className="font-bold text-xl text-amber-800">English Communication</h3>
                                        </div>
                                        <ul className="space-y-3">
                                            <li className="flex items-start">
                                                <span className="text-green-500 mr-2 mt-1">✓</span>
                                                <span>Get comfortable with English, both speaking and writing</span>
                                            </li>
                                            <li className="flex items-start">
                                                <span className="text-green-500 mr-2 mt-1">✓</span>
                                                <span>Accent neutralization & pronunciation improvement</span>
                                            </li>
                                            <li className="flex items-start">
                                                <span className="text-green-500 mr-2 mt-1">✓</span>
                                                <span>Building vocabulary for professional contexts</span>
                                            </li>
                                            <li className="flex items-start">
                                                <span className="text-green-500 mr-2 mt-1">✓</span>
                                                <span>Overcoming fear of speaking in English</span>
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="bg-white rounded-2xl p-6 shadow-lg">
                                        <div className="flex items-center mb-4">
                                            <div className="bg-orange-100 p-3 rounded-lg mr-4">
                                                <span className="text-2xl">📧</span>
                                            </div>
                                            <h3 className="font-bold text-xl text-orange-800">Professional Writing</h3>
                                        </div>
                                        <ul className="space-y-3">
                                            <li className="flex items-start">
                                                <span className="text-green-500 mr-2 mt-1">✓</span>
                                                <span>Write emails that sound professional (not stiff)</span>
                                            </li>
                                            <li className="flex items-start">
                                                <span className="text-green-500 mr-2 mt-1">✓</span>
                                                <span>Report writing & business documentation</span>
                                            </li>
                                            <li className="flex items-start">
                                                <span className="text-green-500 mr-2 mt-1">✓</span>
                                                <span>Professional social media communication</span>
                                            </li>
                                            <li className="flex items-start">
                                                <span className="text-green-500 mr-2 mt-1">✓</span>
                                                <span>Resume & cover letter writing techniques</span>
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="bg-white rounded-2xl p-6 shadow-lg">
                                        <div className="flex items-center mb-4">
                                            <div className="bg-red-100 p-3 rounded-lg mr-4">
                                                <span className="text-2xl">👨‍💼</span>
                                            </div>
                                            <h3 className="font-bold text-xl text-red-800">Presentation Skills</h3>
                                        </div>
                                        <ul className="space-y-3">
                                            <li className="flex items-start">
                                                <span className="text-green-500 mr-2 mt-1">✓</span>
                                                <span>Present ideas without rushing or fumbling</span>
                                            </li>
                                            <li className="flex items-start">
                                                <span className="text-green-500 mr-2 mt-1">✓</span>
                                                <span>Public speaking & stage confidence</span>
                                            </li>
                                            <li className="flex items-start">
                                                <span className="text-green-500 mr-2 mt-1">✓</span>
                                                <span>Using visual aids effectively</span>
                                            </li>
                                            <li className="flex items-start">
                                                <span className="text-green-500 mr-2 mt-1">✓</span>
                                                <span>Handling Q&A sessions confidently</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                {/* Right Column - Professional Skills */}
                                <div className="space-y-6">
                                    <div className="bg-white rounded-2xl p-6 shadow-lg">
                                        <div className="flex items-center mb-4">
                                            <div className="bg-yellow-100 p-3 rounded-lg mr-4">
                                                <span className="text-2xl">🤝</span>
                                            </div>
                                            <h3 className="font-bold text-xl text-yellow-800">Teamwork & Leadership</h3>
                                        </div>
                                        <ul className="space-y-3">
                                            <li className="flex items-start">
                                                <span className="text-green-500 mr-2 mt-1">✓</span>
                                                <span>Practice teamwork and leadership skills</span>
                                            </li>
                                            <li className="flex items-start">
                                                <span className="text-green-500 mr-2 mt-1">✓</span>
                                                <span>Conflict resolution strategies</span>
                                            </li>
                                            <li className="flex items-start">
                                                <span className="text-green-500 mr-2 mt-1">✓</span>
                                                <span>Effective collaboration techniques</span>
                                            </li>
                                            <li className="flex items-start">
                                                <span className="text-green-500 mr-2 mt-1">✓</span>
                                                <span>Giving and receiving constructive feedback</span>
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="bg-white rounded-2xl p-6 shadow-lg">
                                        <div className="flex items-center mb-4">
                                            <div className="bg-green-100 p-3 rounded-lg mr-4">
                                                <span className="text-2xl">⏰</span>
                                            </div>
                                            <h3 className="font-bold text-xl text-green-800">Time Management</h3>
                                        </div>
                                        <ul className="space-y-3">
                                            <li className="flex items-start">
                                                <span className="text-green-500 mr-2 mt-1">✓</span>
                                                <span>Get used to deadlines with smart time management</span>
                                            </li>
                                            <li className="flex items-start">
                                                <span className="text-green-500 mr-2 mt-1">✓</span>
                                                <span>Prioritization techniques for productivity</span>
                                            </li>
                                            <li className="flex items-start">
                                                <span className="text-green-500 mr-2 mt-1">✓</span>
                                                <span>Work-life balance strategies</span>
                                            </li>
                                            <li className="flex items-start">
                                                <span className="text-green-500 mr-2 mt-1">✓</span>
                                                <span>Meeting management & agenda setting</span>
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="bg-white rounded-2xl p-6 shadow-lg">
                                        <div className="flex items-center mb-4">
                                            <div className="bg-blue-100 p-3 rounded-lg mr-4">
                                                <span className="text-2xl">🎯</span>
                                            </div>
                                            <h3 className="font-bold text-xl text-blue-800">Interview Mastery</h3>
                                        </div>
                                        <ul className="space-y-3">
                                            <li className="flex items-start">
                                                <span className="text-green-500 mr-2 mt-1">✓</span>
                                                <span>Walk into interviews knowing exactly how to handle them</span>
                                            </li>
                                            <li className="flex items-start">
                                                <span className="text-green-500 mr-2 mt-1">✓</span>
                                                <span>Common interview questions & best answers</span>
                                            </li>
                                            <li className="flex items-start">
                                                <span className="text-green-500 mr-2 mt-1">✓</span>
                                                <span>Body language & professional appearance</span>
                                            </li>
                                            <li className="flex items-start">
                                                <span className="text-green-500 mr-2 mt-1">✓</span>
                                                <span>Salary negotiation techniques</span>
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
                                <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-8 rounded-2xl text-center shadow-lg">
                                    <div className="inline-flex items-center justify-center w-20 h-20 bg-amber-100 rounded-full mb-6">
                                        <span className="text-3xl">⏱️</span>
                                    </div>
                                    <h3 className="font-bold text-2xl mb-3 text-amber-800">Duration</h3>
                                    <p className="text-gray-700 font-semibold text-lg">6 Months</p>
                                    <p className="text-gray-600 mt-2">Transformative skill building</p>
                                </div>

                                <div className="bg-gradient-to-br from-orange-50 to-red-50 p-8 rounded-2xl text-center shadow-lg">
                                    <div className="inline-flex items-center justify-center w-20 h-20 bg-orange-100 rounded-full mb-6">
                                        <span className="text-3xl">🎓</span>
                                    </div>
                                    <h3 className="font-bold text-2xl mb-3 text-orange-800">Learning Mode</h3>
                                    <p className="text-gray-700 font-semibold text-lg">Offline in Jamshedpur or Online</p>
                                    <p className="text-gray-600 mt-2">Flexible options available</p>
                                </div>

                                <div className="bg-gradient-to-br from-red-50 to-rose-50 p-8 rounded-2xl text-center shadow-lg">
                                    <div className="inline-flex items-center justify-center w-20 h-20 bg-red-100 rounded-full mb-6">
                                        <span className="text-3xl">🏆</span>
                                    </div>
                                    <h3 className="font-bold text-2xl mb-3 text-red-800">Certification</h3>
                                    <p className="text-gray-700 font-semibold text-lg">Diploma in Business Communication & Soft Skills</p>
                                    <p className="text-gray-600 mt-2">Industry-recognized certificate</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Who Usually Joins */}
                <section className="py-16 bg-gradient-to-r from-gray-50 to-white">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
                            Who Usually Joins This Soft Skills Training
                        </h2>
                        <p className="text-lg text-center text-gray-600 mb-12 max-w-3xl mx-auto">
                            I see a mix in every batch. Some are students worried about placements. Some are fresh graduates tired of rejection emails. A few are professionals aiming for promotions.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                            {[
                                {
                                    icon: "🎓",
                                    title: "Students",
                                    description: "Worried about campus placements and interviews.",
                                    color: "bg-amber-100 text-amber-800"
                                },
                                {
                                    icon: "📄",
                                    title: "Fresh Graduates",
                                    description: "Tired of rejection emails and want interview success.",
                                    color: "bg-orange-100 text-orange-800"
                                },
                                {
                                    icon: "📈",
                                    title: "Working Professionals",
                                    description: "Aiming for promotions and leadership positions.",
                                    color: "bg-red-100 text-red-800"
                                },
                                {
                                    icon: "🚀",
                                    title: "Entrepreneurs",
                                    description: "Want to sound more confident with clients and investors.",
                                    color: "bg-yellow-100 text-yellow-800"
                                },
                                {
                                    icon: "💼",
                                    title: "Job Switchers",
                                    description: "Preparing for interviews in new industries.",
                                    color: "bg-green-100 text-green-800"
                                },
                                {
                                    icon: "🌍",
                                    title: "Global Aspirants",
                                    description: "Preparing for international work environments.",
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

                {/* Career Opportunities & Success Story */}
                <section className="py-16 bg-gradient-to-br from-amber-900 to-orange-900 text-white">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl font-bold text-center mb-12">
                            Where It Can Take You
                        </h2>
                        <p className="text-xl text-center mb-12 max-w-3xl mx-auto opacity-90">
                            Many of our past students are now working as:
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12">
                            {[
                                {
                                    role: "HR Executive & Trainer",
                                    description: "Recruit, train, and develop talent in organizations",
                                    icon: "👥",
                                    salary: "₹3-7 LPA"
                                },
                                {
                                    role: "Business Development Professional",
                                    description: "Drive growth through client relationships and sales",
                                    icon: "📈",
                                    salary: "₹4-9 LPA + Commission"
                                },
                                {
                                    role: "Client Relationship Manager",
                                    description: "Manage and grow key client accounts",
                                    icon: "🤝",
                                    salary: "₹5-10 LPA"
                                },
                                {
                                    role: "Communication Executive",
                                    description: "Handle corporate communications and PR",
                                    icon: "📢",
                                    salary: "₹3-6 LPA"
                                },
                                {
                                    role: "Customer Support Lead",
                                    description: "Lead customer service teams and ensure satisfaction",
                                    icon: "💬",
                                    salary: "₹4-8 LPA"
                                },
                                {
                                    role: "Team Leader/Supervisor",
                                    description: "Lead teams and ensure productivity targets",
                                    icon: "👨‍💼",
                                    salary: "₹5-12 LPA"
                                }
                            ].map((job, i) => (
                                <div key={i} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:-translate-y-1">
                                    <div className="flex items-center mb-4">
                                        <div className="bg-white/20 p-3 rounded-lg mr-4">
                                            <span className="text-2xl">{job.icon}</span>
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-xl">{job.role}</h3>
                                            <p className="text-amber-200 text-sm mt-1">{job.salary}</p>
                                        </div>
                                    </div>
                                    <p className="text-gray-200 mb-4">{job.description}</p>
                                    <div className="pt-4 border-t border-white/10">
                                        <span className="inline-block bg-white/20 px-3 py-1 rounded-full text-sm">Communication Critical</span>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Success Story */}
                        <div className="max-w-4xl mx-auto bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                            <div className="flex items-start">
                                <div className="bg-white/20 p-4 rounded-full mr-6">
                                    <span className="text-3xl">🌟</span>
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold mb-4">Success Story: Sneha's Transformation</h3>
                                    <blockquote className="text-lg italic mb-4">
                                        "One of our students, Sneha, once told me she couldn't even introduce herself properly in English. After this diploma, she cleared her campus interview on her very first attempt."
                                    </blockquote>
                                    <p className="text-gray-200">
                                        Stories like Sneha's are the reason we keep this program going. We've helped hundreds of students transform from nervous speakers to confident professionals.
                                    </p>
                                    <div className="mt-6 flex flex-wrap gap-2">
                                        <span className="bg-green-500/30 text-green-200 px-3 py-1 rounded-full text-sm">95% Placement Rate</span>
                                        <span className="bg-blue-500/30 text-blue-200 px-3 py-1 rounded-full text-sm">300+ Students Trained</span>
                                        <span className="bg-purple-500/30 text-purple-200 px-3 py-1 rounded-full text-sm">92% Confidence Improvement</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Your Next Step Section */}
                <section className="py-16 bg-gradient-to-r from-amber-50 to-red-50">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto text-center">
                            <h2 className="text-3xl font-bold mb-6 text-gray-800">
                                Your Next Step
                            </h2>
                            <div className="bg-white rounded-2xl p-8 shadow-lg">
                                <div className="text-6xl mb-6">🚀</div>
                                <p className="text-2xl font-semibold text-gray-800 mb-6">
                                    Six months from now, you can either be where you are—or you can be the person who speaks confidently, presents without fear, and moves ahead in your career.
                                </p>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                                    <div className="text-center">
                                        <div className="text-3xl font-bold text-amber-600">Week 1-2</div>
                                        <div className="text-sm text-gray-600">Overcome Speaking Anxiety</div>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-3xl font-bold text-orange-600">Month 2-3</div>
                                        <div className="text-sm text-gray-600">Master Professional Communication</div>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-3xl font-bold text-red-600">Month 4-6</div>
                                        <div className="text-sm text-gray-600">Excel in Interviews & Leadership</div>
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
                                        Transform Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-500">Communication Skills</span>
                                    </h2>
                                    <p className="text-lg text-gray-600 mb-8">
                                        Join our 6-month diploma program in Jamshedpur and start speaking with confidence in interviews, meetings, and professional settings.
                                    </p>

                                    <div className="space-y-4 mb-8">
                                        <div className="flex items-center">
                                            <div className="bg-amber-100 p-2 rounded-lg mr-4">
                                                <span className="text-amber-600">🗣️</span>
                                            </div>
                                            <span className="text-gray-700">Daily speaking practice with expert feedback</span>
                                        </div>
                                        <div className="flex items-center">
                                            <div className="bg-amber-100 p-2 rounded-lg mr-4">
                                                <span className="text-amber-600">🎭</span>
                                            </div>
                                            <span className="text-gray-700">Mock interviews & role plays every week</span>
                                        </div>
                                        <div className="flex items-center">
                                            <div className="bg-amber-100 p-2 rounded-lg mr-4">
                                                <span className="text-amber-600">📊</span>
                                            </div>
                                            <span className="text-gray-700">Personalized improvement tracking & feedback</span>
                                        </div>
                                        <div className="flex items-center">
                                            <div className="bg-amber-100 p-2 rounded-lg mr-4">
                                                <span className="text-amber-600">🏆</span>
                                            </div>
                                            <span className="text-gray-700">Industry-recognized certification upon completion</span>
                                        </div>
                                    </div>

                                    <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-2xl border border-amber-100">
                                        <div className="flex items-center">
                                            <div className="bg-white p-3 rounded-lg mr-4 shadow">
                                                <span className="text-2xl text-amber-600">📍</span>
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-lg text-gray-800">E Digital India, Jamshedpur</h4>
                                                <p className="text-gray-600">Visit our campus for a free counseling session and communication assessment</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Right Side - Enrollment Form */}
                                <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 shadow-2xl border border-gray-100">
                                    <div className="text-center mb-8">
                                        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-amber-600 to-orange-500 rounded-full mb-4">
                                            <span className="text-2xl text-white">💬</span>
                                        </div>
                                        <h3 className="text-2xl font-bold text-gray-800">Speak with Confidence</h3>
                                        <p className="text-gray-600 mt-2">Fill form to get complete course details & schedule</p>
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
                                                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-200 transition"
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
                                                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-200 transition"
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
                                                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-200 transition"
                                                    placeholder="+91 98765 43210"
                                                />
                                            </div>
                                        </div>

                                        <div>
                                            <label className="block text-gray-700 font-medium mb-2">Current Profile *</label>
                                            <select
                                                name="background"
                                                value={formData.background}
                                                onChange={handleChange}
                                                required
                                                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-200 transition"
                                            >
                                                <option value="">Select your current profile</option>
                                                <option value="student">Student</option>
                                                <option value="fresh-graduate">Fresh Graduate</option>
                                                <option value="working-professional">Working Professional</option>
                                                <option value="entrepreneur">Entrepreneur/Business Owner</option>
                                                <option value="job-seeker">Job Seeker</option>
                                                <option value="career-switcher">Career Switcher</option>
                                                <option value="homemaker">Homemaker returning to work</option>
                                            </select>
                                        </div>

                                        <div>
                                            <label className="block text-gray-700 font-medium mb-2">Preferred Learning Mode *</label>
                                            <div className="grid grid-cols-2 gap-3">
                                                {['offline', 'online'].map((option) => (
                                                    <button
                                                        key={option}
                                                        type="button"
                                                        onClick={() => setFormData({ ...formData, mode: option })}
                                                        className={`py-3 rounded-lg font-medium transition ${formData.mode === option
                                                            ? 'bg-gradient-to-r from-amber-600 to-orange-500 text-white shadow-md'
                                                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
                                                    >
                                                        {option.charAt(0).toUpperCase() + option.slice(1)}
                                                    </button>
                                                ))}
                                            </div>
                                            {formData.mode === 'offline' && (
                                                <p className="text-sm text-amber-600 mt-2">📍 Classes conducted at E Digital India, Jamshedpur</p>
                                            )}
                                        </div>

                                        <div>
                                            <label className="block text-gray-700 font-medium mb-2">Your Communication Challenges</label>
                                            <textarea
                                                name="message"
                                                value={formData.message}
                                                onChange={handleChange}
                                                rows="3"
                                                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-200 transition"
                                                placeholder="Tell us about your specific communication challenges, goals, or any questions..."
                                            ></textarea>
                                        </div>

                                        <button
                                            type="submit"
                                            className="w-full bg-gradient-to-r from-amber-600 to-orange-500 hover:from-amber-700 hover:to-orange-600 text-white font-bold py-4 px-4 rounded-xl transition-all duration-300 transform hover:scale-[1.02] shadow-lg hover:shadow-xl"
                                        >
                                            Start Your Communication Transformation
                                        </button>

                                        <p className="text-xs text-gray-500 text-center">
                                            Join our next batch in Jamshedpur. Free communication assessment available for all applicants.
                                        </p>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            {/* Structured Data for SEO */}
            <Script id="communication-skills-structured-data" type="application/ld+json">
                {JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "Course",
                    "name": "Diploma in Business Communication & Soft Skills",
                    "description": "6-month comprehensive soft skills and communication training program in Jamshedpur. Build confidence, improve English communication, ace interviews, and advance your career.",
                    "provider": {
                        "@type": "Organization",
                        "name": "E Digital India",
                        "sameAs": "https://edigitalindia.com",
                        "location": {
                            "@type": "Place",
                            "address": {
                                "@type": "PostalAddress",
                                "addressLocality": "Jamshedpur",
                                "addressRegion": "Jharkhand",
                                "addressCountry": "IN"
                            }
                        }
                    },
                    "educationalCredentialAwarded": "Diploma in Business Communication & Soft Skills",
                    "timeToComplete": "P6M",
                    "coursePrerequisites": "No prior experience required. Open to all backgrounds.",
                    "hasCourseInstance": {
                        "@type": "CourseInstance",
                        "courseMode": ["online", "offline"],
                        "duration": "P6M",
                        "location": {
                            "@type": "Place",
                            "name": "E Digital India, Jamshedpur"
                        }
                    },
                    "audience": {
                        "@type": "EducationalAudience",
                        "educationalRole": "Students, Fresh Graduates, Working Professionals, Entrepreneurs, Job Seekers"
                    },
                    "offers": {
                        "@type": "Offer",
                        "priceCurrency": "INR",
                        "availability": "https://schema.org/InStock"
                    },
                    "teaches": [
                        "English Communication Skills",
                        "Professional Writing",
                        "Public Speaking",
                        "Interview Preparation",
                        "Teamwork & Leadership",
                        "Time Management",
                        "Business Etiquette",
                        "Presentation Skills",
                        "Confidence Building"
                    ],
                    "occupationalCategory": [
                        "HR Executive",
                        "Business Development Professional",
                        "Client Relationship Manager",
                        "Communication Executive",
                        "Customer Support Lead",
                        "Team Leader"
                    ],
                    "about": {
                        "@type": "Thing",
                        "name": "Business Communication and Soft Skills Development"
                    }
                })}
            </Script>
        </>
    );
}