// components/CourseCards.jsx
import React from 'react';
import Link from 'next/link';
import { 
  Laptop, 
  GraduationCap, 
  Code, 
  Database, 
  Smartphone, 
  Users 
} from 'lucide-react';

const CourseCards = () => {
  const courses = [
    {
      id: 1,
      title: "SAP Global Certification Course",
      icon: <Database className="w-6 h-6" />,
      duration: "6 Months",
      mode: "Classroom & Online",
      benefits: ["Free Laptop", "Job Guarantee", "Dual Certification"],
      description: "Master SAP modules for enterprise systems management",
      color: "bg-blue-50 border-blue-200",
      iconColor: "text-blue-600",
      link: "/courses/sap-global-certification"
    },
    {
      id: 2,
      title: "Digital Marketing Course",
      icon: <Users className="w-6 h-6" />,
      duration: "6 Months",
      mode: "Classroom & Online",
      benefits: ["Free Laptop", "100% Job Guarantee", "Live Projects"],
      description: "SEO, Google Ads, Social Media & Content Marketing",
      color: "bg-green-50 border-green-200",
      iconColor: "text-green-600",
      link: "/courses/Digital-Marketing"
    },
    {
      id: 3,
      title: "Web Development Course",
      icon: <Code className="w-6 h-6" />,
      duration: "6 Months",
      mode: "Classroom & Online",
      benefits: ["Free Laptop", "Real Projects", "PHP & MySQL"],
      description: "Full-stack web development with PHP and databases",
      color: "bg-purple-50 border-purple-200",
      iconColor: "text-purple-600",
      link: "/courses/web-development"
    },
    {
      id: 4,
      title: "Data Science & AI Course",
      icon: <GraduationCap className="w-6 h-6" />,
      duration: "6 Months",
      mode: "Classroom & Online",
      benefits: ["Free Laptop", "Python & ML", "Real Datasets"],
      description: "Data Science, Machine Learning & AI applications",
      color: "bg-orange-50 border-orange-200",
      iconColor: "text-orange-600",
      link: "/courses/data-science-&-artificial-intelligence"
    },
    {
      id: 5,
      title: "Android App Development",
      icon: <Smartphone className="w-6 h-6" />,
      duration: "6 Months",
      mode: "Classroom & Online",
      benefits: ["Free Laptop", "Kotlin/Java", "Play Store Publishing"],
      description: "Build and publish Android apps from scratch",
      color: "bg-emerald-50 border-emerald-200",
      iconColor: "text-emerald-600",
      link: "/courses/androidapp-development-course-overview"
    },
    {
      id: 6,
      title: "Business Communication & Soft Skills",
      icon: <Laptop className="w-6 h-6" />,
      duration: "6 Months",
      mode: "Offline & Online",
      benefits: ["Interview Prep", "Confidence Building", "Professional Growth"],
      description: "Master communication for career success",
      color: "bg-indigo-50 border-indigo-200",
      iconColor: "text-indigo-600",
      link: "/courses/business-communication-&-soft-skills"
    }
  ];

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
          Our Courses
        </h2>
        <p className="mt-4 text-lg text-gray-600">
          6-Month Professional Courses with Job Guarantee
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {courses.map((course) => (
          <div 
            key={course.id} 
            className={`${course.color} border rounded-2xl p-6 hover:shadow-xl transition-shadow duration-300`}
          >
        <Link href={course.link}>


            <div className="flex items-start justify-between mb-4">
              <div className={`p-3 rounded-lg ${course.color}`}>
                <div className={course.iconColor}>
                  {course.icon}
                </div>
              </div>
              <span className="text-sm font-semibold px-3 py-1 bg-white rounded-full border">
                {course.duration}
              </span>
            </div>

            <h3 className="text-xl font-bold text-gray-900 mb-3">
              {course.title}
            </h3>
            
            <p className="text-gray-600 mb-4">
              {course.description}
            </p>

            <div className="mb-6">
              <div className="flex items-center text-sm text-gray-500 mb-2">
                <span className="font-medium mr-2">Mode:</span>
                {course.mode}
              </div>
              <div className="flex flex-wrap gap-2">
                {course.benefits.map((benefit, index) => (
                  <span 
                    key={index}
                    className="text-xs font-medium px-3 py-1 bg-white rounded-full border"
                  >
                    {benefit}
                  </span>
                ))}
              </div>
            </div>

            <div
              // href={course.link}
              // className="block w-full text-center py-3 px-4 rounded-lg font-medium transition-colors"
              style={{
                backgroundColor: course.iconColor.replace('text-', 'bg-').replace('600', '500'),
                color: 'white'
              }}
            >
              View Details
            </div>
</Link>

          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <div className="inline-flex flex-col sm:flex-row gap-4 p-6 bg-gray-50 rounded-2xl border">
          <div className="text-left">
            <h3 className="font-bold text-lg mb-2">🎁 Special Offer on All Courses</h3>
            <ul className="text-gray-600 space-y-1">
              <li>✓ Free Laptop on Enrollment</li>
              <li>✓ UGC-Approved PGDCA Certificate</li>
              <li>✓ 100% Job Guarantee with Paid Internship</li>
              <li>✓ Live Projects & Expert Mentorship</li>
            </ul>
          </div>
          <div className="flex items-center">
            {/* <Link 
              href="/contact"
              className="px-6 py-3 bg-black text-white font-semibold rounded-lg hover:bg-gray-800 transition-colors"
            >
              Enroll Now
            </Link> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCards;