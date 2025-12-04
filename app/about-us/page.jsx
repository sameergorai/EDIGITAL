// app/about/page.jsx
import Image from 'next/image';
import Link from 'next/link';
import { FaCheckCircle, FaGraduationCap, FaUsers, FaBriefcase, FaCertificate, FaBullseye, FaLightbulb, FaShieldAlt } from 'react-icons/fa';

export const metadata = {
  title: 'About E-Digital India | Building Digital Careers',
  description: 'Learn about E-Digital India - a trusted platform for job-oriented digital education with 100% job guarantee, ISO-certified courses, and industry-recognized certifications.',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      {/* <section className="relative bg-gradient-to-r from-blue-600 to-purple-700 text-white py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              About E-Digital India
            </h1>
            <p className="text-xl opacity-90 mb-8">
              Empowering careers through job-oriented digital education with guaranteed placements
            </p>
          </div>
        </div>
      </section> */}

      {/* Welcome Section */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Welcome to <span className="text-blue-600">eDigital India</span>
              </h2>
              <div className="space-y-4 text-gray-600 text-lg">
                <p>
                  A trusted platform for job-oriented digital and skill-based education. Our mission is to empower 
                  students and professionals with practical, in-demand skills that lead directly to employment.
                </p>
                <p>
                  We offer a <span className="font-semibold text-blue-600">job commitment on stamp paper</span> to 
                  ensure every learner gains both skills and job assurance. We focus on quality education, 
                  real-world applications, and industry-certified certifications to help learners build a successful career.
                </p>
                <p className="text-xl font-semibold text-gray-900">
                  Join us and become a future-ready professional!
                </p>
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://e-digitalindia.org/front/img/images/iso_certify.webp" 
                alt="E-Digital India Students Learning"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 mb-4">
              <FaBriefcase className="text-blue-600 text-2xl" />
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Our Story</h2>
            </div>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-2xl shadow-lg">
              <div className="space-y-4 text-gray-700">
                <p className="text-lg">
                  E Digital India was founded with a vision to bridge the gap between academic education 
                  and real-world job requirements.
                </p>
                <p>
                  Recognizing the demand for skilled professionals in the digital and IT sectors, we launched 
                  our first institute in Chennai, focusing on hands-on training and guaranteed job placements.
                </p>
                <p>
                  As our reputation grew, we expanded to Delhi and Jamshedpur, continuing our mission to make 
                  career-oriented education accessible to all.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Mission */}
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-blue-100 rounded-full">
                  <FaBullseye className="text-blue-600 text-2xl" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Our Mission</h3>
              </div>
              <div className="space-y-4 text-gray-600">
                <p>
                  Our mission is to empower students with in-demand skills and provide them with a 
                  <span className="font-semibold text-green-600"> 100% job guarantee</span>.
                </p>
                <p>
                  We focus on practical learning, industry-relevant training, and mentorship from experts 
                  to ensure that every student is job-ready.
                </p>
                <p>
                  Through live projects, case studies, and placement support, we strive to create a 
                  workforce that meets industry standards and drives innovation.
                </p>
              </div>
            </div>

            {/* Vision */}
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-purple-100 rounded-full">
                  <FaLightbulb className="text-purple-600 text-2xl" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Our Vision</h3>
              </div>
              <div className="space-y-4 text-gray-600">
                <p>
                  We envision a future where skill-based education replaces traditional learning barriers.
                </p>
                <p>
                  By offering high-quality training, real-world experience, and career guidance, we aim 
                  to transform students into highly skilled professionals.
                </p>
                <p className="font-semibold text-purple-600">
                  Our goal is to be India's most trusted skill development institute, enabling individuals 
                  to build successful careers in the digital economy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 mb-4">
              <FaCheckCircle className="text-green-600 text-2xl" />
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Why Choose Us?</h2>
            </div>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Discover what makes E-Digital India the preferred choice for career-oriented education
            </p>
            <div className="w-24 h-1 bg-green-600 mx-auto mt-4"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Feature 1 */}
            <div className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-xl border border-blue-100 text-center hover:shadow-lg transition-shadow">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                <FaCertificate className="text-blue-600 text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                ISO-Certified & Industry-Recognized Courses**
              </h3>
              <p className="text-gray-600">
                Globally recognized certifications that add value to your resume and career
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-gradient-to-br from-green-50 to-white p-6 rounded-xl border border-green-100 text-center hover:shadow-lg transition-shadow">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                <FaShieldAlt className="text-green-600 text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                100% Job Guarantee with Paid Internships**
              </h3>
              <p className="text-gray-600">
                Legal job commitment on stamp paper with internship opportunities
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-gradient-to-br from-purple-50 to-white p-6 rounded-xl border border-purple-100 text-center hover:shadow-lg transition-shadow">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mb-4">
                <FaGraduationCap className="text-purple-600 text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Live Projects & Hands-on Learning Approach**
              </h3>
              <p className="text-gray-600">
                Real-world projects that prepare you for industry challenges
              </p>
            </div>

            {/* Feature 4 */}
            <div className="bg-gradient-to-br from-orange-50 to-white p-6 rounded-xl border border-orange-100 text-center hover:shadow-lg transition-shadow">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 rounded-full mb-4">
                <FaUsers className="text-orange-600 text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Expert Trainers & Personalized Career Guidance*
              </h3>
              <p className="text-gray-600">
                Industry experts and personalized mentorship for career growth
              </p>
            </div>
          </div>

          {/* Additional Feature */}
          <div className="mt-12 max-w-2xl mx-auto bg-gradient-to-r from-gray-50 to-white p-8 rounded-2xl border border-gray-200">
            <div className="flex items-center gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <FaBriefcase className="text-blue-600 text-xl" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Mock Interviews, Resume Building & Placement Assistance*
                </h3>
                <p className="text-gray-600">
                  Comprehensive placement support including interview preparation, resume crafting, 
                  and direct company connections
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Certifications & Registrations
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Officially recognized certifications that validate our quality standards
            </p>
            <div className="w-24 h-1 bg-blue-600 mx-auto mt-4"></div>
          </div>

          {/* <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
         
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="h-64 relative rounded-lg overflow-hidden mb-4">
                <Image 
                  src="/images/iso-certificate.jpg"
                  alt="ISO Certification"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">ISO 9001:2015 Certified</h3>
              <p className="text-gray-600">Quality Management System Certification</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="h-64 relative rounded-lg overflow-hidden mb-4">
                <Image 
                  src="/images/msme-registration.jpg"
                  alt="MSME Registration"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">MSME Registered</h3>
              <p className="text-gray-600">Government Recognized Skill Development Institute</p>
            </div>

       
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="h-64 relative rounded-lg overflow-hidden mb-4">
                <Image 
                  src="/images/startup-india.jpg"
                  alt="Startup India Recognition"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Startup India Recognized</h3>
              <p className="text-gray-600">Recognized by Government of India Startup Initiative</p>
            </div>
          </div> */}

          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-6">
              *All certifications are verified and available for inspection at our institutes
            </p>
            <Link 
              href="/contact" 
              className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              View All Certifications
              <span>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-700 text-white">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Your Career Journey?
          </h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Join thousands of successful professionals who transformed their careers with E-Digital India
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/courses"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Explore Courses
            </Link>
            <Link 
              href="/contact"
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}