import { CheckCircle, Star, Clock, Users, TrendingUp, Target, Award, Shield } from 'lucide-react';

export default function DigitalMarketingCoursePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Header/Navigation */}
      {/* <header className="sticky top-0 z-50 bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">DM</span>
            </div>
            <span className="text-2xl font-bold text-gray-800">DigitalMastery</span>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#" className="font-medium text-gray-700 hover:text-blue-600 transition">Home</a>
            <a href="#" className="font-medium text-gray-700 hover:text-blue-600 transition">Programs</a>
            <a href="#" className="font-medium text-gray-700 hover:text-blue-600 transition">Success Stories</a>
            <a href="#" className="font-medium text-gray-700 hover:text-blue-600 transition">Partners</a>
            <a href="#" className="font-medium text-gray-700 hover:text-blue-600 transition">Contact</a>
          </nav>
          <button className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition shadow-md">
            Book Free Demo
          </button>
        </div>
      </header> */}

      {/* Hero Section */}
      {/* <section className="relative overflow-hidden bg-gradient-to-r from-blue-900 to-blue-700 text-white">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="max-w-3xl">
            <div className="inline-flex items-center px-4 py-2 bg-blue-800 rounded-full mb-6">
              <span className="text-sm font-semibold">🚀 PROFESSIONAL CERTIFICATION COURSE</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Digital Marketing Mastery
            </h1>
            <p className="text-xl mb-8 text-blue-100 max-w-2xl">
              Transform your career with industry-leading training in modern digital marketing strategies
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-white text-blue-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition shadow-lg">
                Book Free Demo
              </button>
              <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/10 transition">
                View Curriculum
              </button>
            </div>
          </div>
        </div>
        <div className="absolute right-0 top-0 h-full w-1/3 bg-gradient-to-l from-blue-600/30 to-transparent"></div>
      </section> */}

      {/* Program Performance Stats */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-gray-50 rounded-2xl shadow-sm">
              <div className="flex justify-center items-center mb-4">
                <Users className="text-blue-600 mr-2" size={28} />
                <span className="text-4xl font-bold text-gray-800">2500+</span>
              </div>
              <p className="text-gray-600 font-medium">Students Placed</p>
              <div className="inline-flex items-center mt-2 px-3 py-1 bg-green-50 text-green-700 rounded-full text-sm font-medium">
                <TrendingUp size={16} className="mr-1" /> ↗ +24%
              </div>
            </div>

            <div className="text-center p-6 bg-gray-50 rounded-2xl shadow-sm">
              <div className="flex justify-center items-center mb-4">
                <Star className="text-yellow-500 mr-2" size={28} />
                <span className="text-4xl font-bold text-gray-800">4.8/5</span>
              </div>
              <p className="text-gray-600 font-medium">Course Rating</p>
              <div className="inline-flex items-center mt-2 px-3 py-1 bg-green-50 text-green-700 rounded-full text-sm font-medium">
                <TrendingUp size={16} className="mr-1" /> ↗ 96%
              </div>
            </div>

            <div className="text-center p-6 bg-gray-50 rounded-2xl shadow-sm">
              <div className="flex justify-center items-center mb-4">
                <CheckCircle className="text-green-600 mr-2" size={28} />
                <span className="text-4xl font-bold text-gray-800">94%</span>
              </div>
              <p className="text-gray-600 font-medium">Completion Rate</p>
              <div className="inline-flex items-center mt-2 px-3 py-1 bg-green-50 text-green-700 rounded-full text-sm font-medium">
                <TrendingUp size={16} className="mr-1" /> ↗ +12%
              </div>
            </div>

            <div className="text-center p-6 bg-gray-50 rounded-2xl shadow-sm">
              <div className="flex justify-center items-center mb-4">
                <Target className="text-red-600 mr-2" size={28} />
                <span className="text-4xl font-bold text-gray-800">120+</span>
              </div>
              <p className="text-gray-600 font-medium">Hiring Partners</p>
              <div className="inline-flex items-center mt-2 px-3 py-1 bg-green-50 text-green-700 rounded-full text-sm font-medium">
                <TrendingUp size={16} className="mr-1" /> ↗ +18
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Exclusive Benefits */}
      <section className="py-16 bg-gradient-to-b from-white to-blue-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Exclusive Benefits</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: <Award className="text-blue-600" size={24} />, title: "Industry Certifications" },
              { icon: <Target className="text-blue-600" size={24} />, title: "Live Project Experience" },
              { icon: <Users className="text-blue-600" size={24} />, title: "Placement Assistance" },
              { icon: <Star className="text-blue-600" size={24} />, title: "1-on-1 Mentorship" },
              { icon: <Clock className="text-blue-600" size={24} />, title: "Lifetime Course Access" },
              { icon: <Shield className="text-blue-600" size={24} />, title: "Job Guarantee Program" },
            ].map((benefit, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
                <div className="flex items-center">
                  <div className="p-3 bg-blue-50 rounded-lg mr-4">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800">{benefit.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Course Highlights */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="lg:w-2/3">
              <div className="inline-flex items-center px-4 py-2 bg-red-50 text-red-700 rounded-full mb-6 font-semibold">
                🔥 Hot
              </div>
              <div className="mb-6">
                <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full font-medium">Beginner to Advanced</span>
              </div>
              <h2 className="text-4xl font-bold mb-6 text-gray-800">Social Media Marketing</h2>
              <h3 className="text-2xl font-semibold mb-6 text-gray-700">Master Viral Content Strategy</h3>
              <p className="text-lg text-gray-600 mb-8">
                Learn content strategy, audience targeting, influencer marketing, and performance analytics. Create campaigns that convert followers into customers.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                <div className="bg-gray-50 p-6 rounded-xl">
                  <div className="flex items-center mb-3">
                    <Clock className="text-blue-600 mr-2" />
                    <span className="font-bold text-lg">6 Weeks</span>
                  </div>
                  <p className="text-gray-600">Duration</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-xl">
                  <div className="flex items-center mb-3">
                    <CheckCircle className="text-blue-600 mr-2" />
                    <span className="font-bold text-lg">12 Modules</span>
                  </div>
                  <p className="text-gray-600">Modules</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-xl">
                  <div className="flex items-center mb-3">
                    <TrendingUp className="text-blue-600 mr-2" />
                    <span className="font-bold text-lg">95%</span>
                  </div>
                  <p className="text-gray-600">Success Rate</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-lg font-bold text-lg hover:from-blue-700 hover:to-blue-800 transition shadow-lg">
                  Enroll Now - Limited Seats
                </button>
                <button className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-50 transition">
                  Schedule Demo
                </button>
              </div>
            </div>

            <div className="lg:w-1/3">
              <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl shadow-xl border border-blue-100">
                <h3 className="text-2xl font-bold mb-6 text-gray-800">Explore Modules</h3>
                <div className="space-y-6">
                  {[
                    { title: "Social Media Marketing", desc: "Build brand presence on Instagram, Facebook, LinkedIn with data-driven campaigns." },
                    { title: "Search Engine Optimization", desc: "Comprehensive SEO training including technical audits and optimization strategies." },
                    { title: "Online Advertising", desc: "Master PPC campaigns across Google Ads, Meta, and programmatic channels." },
                    { title: "Website Development", desc: "Build conversion-focused websites with modern tools and frameworks." },
                  ].map((module, index) => (
                    <div key={index} className="border-l-4 border-blue-500 pl-4 py-2">
                      <h4 className="font-bold text-lg text-gray-800 mb-1">{module.title}</h4>
                      <p className="text-gray-600 text-sm">{module.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      {/* <section className="py-20 bg-gradient-to-r from-blue-900 to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Master Digital Marketing?</h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Join 2,500+ successful graduates. Next cohort starts in <span className="font-bold text-yellow-300">3 days</span>.
          </p>
          
          <div className="mb-10 p-6 bg-yellow-50 text-gray-800 rounded-2xl max-w-2xl mx-auto">
            <div className="flex items-center justify-center mb-2">
              <span className="px-4 py-1 bg-red-600 text-white rounded-full font-bold mr-3">⏰</span>
              <span className="text-lg font-bold">Limited time offer: Get 30% off + 1-year mentorship free</span>
            </div>
            <p className="text-gray-600">Offer ends when timer hits zero</p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="bg-white text-blue-900 px-10 py-4 rounded-lg font-bold text-xl hover:bg-gray-100 transition shadow-2xl">
              Start Your Journey Today
            </button>
            <button className="bg-transparent border-2 border-white text-white px-10 py-4 rounded-lg font-bold text-xl hover:bg-white/10 transition">
              Speak with an Advisor
            </button>
          </div>
        </div>
      </section> */}

      {/* Footer */}
      {/* <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">DM</span>
                </div>
                <span className="text-2xl font-bold text-white">DigitalMastery</span>
              </div>
              <p className="max-w-md">Professional certification courses designed to transform careers through industry-leading digital marketing training.</p>
            </div>
            <div className="text-center md:text-right">
              <p className="text-lg mb-2">📞 +1 (555) 123-4567</p>
              <p className="mb-2">✉️ admissions@digitalmastery.com</p>
              <p className="text-sm">© 2023 DigitalMastery. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer> */}
    </div>
  );
}