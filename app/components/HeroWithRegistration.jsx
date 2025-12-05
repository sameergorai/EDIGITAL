'use client'
import { useState } from "react";
import { HiCheck, HiPaperAirplane, HiAcademicCap, HiLightningBolt, HiX } from "react-icons/hi";
import { toast } from "react-toastify";
import axios from "axios";

const courses = [
  "Diploma in Digital Marketing",
  "Diploma in Web Development",
  "Diploma in Data Science & AI",
  "Diploma in Business & Soft Skills",
  "Diploma in Android App Development",
  "SAP Global Certification Course",
];

export default function HeroWithRegistration() {
  const [activeTab, setActiveTab] = useState("new");
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    mode: "Online",
    course: "",
  });
  const [loading, setLoading] = useState(false);
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const resetForm = () => {
    setForm({
      fullName: "",
      email: "",
      phone: "",
      mode: "Online",
      course: "",
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    
    // Validation
    if (!form.fullName.trim() || !form.email.trim() || !form.phone.trim() || !form.course) {
      toast.error("Please fill all required fields.");
      return;
    }
    
    setShowConfirmationModal(true);
  };

  const submitRegistration = async () => {
    setLoading(true);
    
    try {
      const payload = {
        fullName: form.fullName,
        email: form.email,
        number: form.phone,
        mode: form.mode,
        course: form.course,
      };

      const API_URL = process.env.NEXT_PUBLIC_API_URL || "https://edigitalindian.com/api";
      
      const response = await axios.post(`https://edigitalindian.com/api/register.php`, payload, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.status === 201 || response.status === 200) {
        toast.success("Registration submitted successfully! We'll contact you soon.");
        resetForm();
        setShowSuccessModal(true);
      }
    } catch (error) {
      console.error("Registration error:", error);
      
      let errorMessage = "Failed to submit registration. Please try again.";
      
      if (error.response) {
        if (error.response.data?.detail) {
          errorMessage = error.response.data.detail;
        } else if (error.response.data?.message) {
          errorMessage = error.response.data.message;
        } else if (error.response.data) {
          errorMessage = typeof error.response.data === 'string' 
            ? error.response.data 
            : JSON.stringify(error.response.data);
        }
      } else if (error.request) {
        errorMessage = "No response from server. Please check your connection.";
      }
      
      toast.error(errorMessage);
    } finally {
      setLoading(false);
      setShowConfirmationModal(false);
    }
  };

  return (
    <section className="relative w-full z-20 min-h-[85vh] flex items-center bg-white border-b border-gray-100">
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 w-full">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Content Section */}
          <div className="lg:col-span-7">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-gray-900 leading-tight mb-6">
              Launch Your Career in <span className="text-sky-600">6 Months</span>{" "}
              with Our Professional Diploma
            </h1>

            <p className="text-lg text-gray-600 max-w-3xl mb-8">
              Gain <strong>job-guaranteed skills</strong> in the most in-demand digital and tech fields. 
              Our diploma programs are fast, practical, and focused on <strong>100% placement</strong> assurance.
            </p>

            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <HiAcademicCap className="h-6 w-6 text-sky-600" />
                Why Choose Our Program?
              </h3>
              <ul className="space-y-4 text-base text-gray-700">
                <li className="flex items-start gap-3">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-emerald-100 flex items-center justify-center mt-1">
                    <HiCheck className="h-4 w-4 text-emerald-600" />
                  </div>
                  <span>Exciting job opportunities starting at <strong>₹2.5 LPA</strong> with potential for higher earnings based on performance</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-emerald-100 flex items-center justify-center mt-1">
                    <HiCheck className="h-4 w-4 text-emerald-600" />
                  </div>
                  <span>Master <strong>freelancing</strong> to create additional high-income streams</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-emerald-100 flex items-center justify-center mt-1">
                    <HiCheck className="h-4 w-4 text-emerald-600" />
                  </div>
                  <span>Practical, <strong>hands-on learning</strong> guided by industry experts</span>
                </li>
              </ul>
            </div>

            <h3 className="text-xl font-semibold text-gray-900 mb-6">
              Explore Our Top Diploma Programs
            </h3>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3 text-base text-gray-700 max-w-2xl mb-8">
              {courses.map((course) => (
                <li key={course} className="flex items-center gap-3 font-medium">
                  <span className="inline-block w-2.5 h-2.5 bg-sky-500 rounded-full flex-shrink-0" />
                  <span>{course}</span>
                </li>
              ))}
            </ul>

            <blockquote className="mt-8 text-gray-800 text-lg max-w-2xl border-l-4 border-sky-400 pl-6 italic">
              "Your Future Starts Here. In just 6 months, you can turn your passion into a <strong>high-paying career</strong> in the digital world."
            </blockquote>
          </div>

          {/* Registration Form Section */}
          <div className="lg:col-span-5">
            <div className="w-full max-w-md mx-auto lg:mx-0">
              <div className="flex mb-6 bg-gray-100 rounded-lg p-1">
                <button
                  type="button"
                  onClick={() => setActiveTab("new")}
                  className={`flex-1 py-3 px-4 rounded-md text-sm font-medium transition-all duration-200 ${
                    activeTab === "new"
                      ? "bg-white text-sky-600 shadow-md"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  New Registration
                </button>
              </div>

              <form
                onSubmit={handleFormSubmit}
                className="bg-white p-6 sm:p-8 shadow-xl border border-gray-200 rounded-2xl"
              >
                <div className="flex items-center gap-3 mb-6">
                  <HiLightningBolt className="h-7 w-7 text-sky-600" />
                  <h4 className="text-xl text-gray-900 font-bold">
                    Request Course Consultation
                  </h4>
                </div>

                <div className="space-y-4">
                  <input
                    name="fullName"
                    value={form.fullName}
                    onChange={handleChange}
                    required
                    placeholder="Full Name *"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition"
                  />
                  <input
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    placeholder="Email Address *"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition"
                  />
                  <input
                    name="phone"
                    type="tel"
                    value={form.phone}
                    onChange={handleChange}
                    required
                    placeholder="Phone Number *"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition"
                  />

                  <div className="grid grid-cols-2 gap-4">
                    <select
                      name="mode"
                      value={form.mode}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition"
                    >
                      <option value="Offline">Offline/In-Person</option>
                      <option value="Hybrid">Hybrid Mode</option>
                    </select>

                    <select
                      name="course"
                      value={form.course}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition"
                    >
                      <option value="" disabled>Select Course *</option>
                      {courses.map((course) => (
                        <option key={course} value={course}>
                          {course}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className={`mt-8 w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl text-base font-semibold shadow-lg transition-all duration-200 ${
                    loading
                      ? "bg-sky-400 text-white cursor-not-allowed"
                      : "bg-gradient-to-r from-sky-600 to-blue-600 hover:from-sky-700 hover:to-blue-700 text-white hover:shadow-xl transform hover:-translate-y-0.5"
                  }`}
                >
                  <HiPaperAirplane className="h-5 w-5 -rotate-45" />
                  {loading ? "Submitting..." : "Secure Your Spot"}
                </button>

                <p className="mt-4 text-center text-sm text-gray-500">
                  Your information is secure. We'll contact you within 24 hours.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Confirmation Modal */}
      {showConfirmationModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">

          <div className="bg-white p-6 rounded-2xl shadow-2xl max-w-md w-full">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-bold text-gray-900">Confirm Registration Details</h3>
              <button
                onClick={() => setShowConfirmationModal(false)}
                className="text-gray-400 hover:text-gray-600 transition"
              >
                <HiX className="h-6 w-6" />
              </button>
            </div>
            
            <div className="space-y-3 p-4 bg-gray-50 rounded-lg mb-6">
              <div className="flex justify-between">
                <span className="text-gray-600">Name:</span>
                <span className="font-medium">{form.fullName}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Email:</span>
                <span className="font-medium">{form.email}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Phone:</span>
                <span className="font-medium">{form.phone}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Course:</span>
                <span className="font-medium">{form.course}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Mode:</span>
                <span className="font-medium">{form.mode}</span>
              </div>
            </div>

            <div className="flex gap-3">
              <button
                type="button"
                onClick={() => setShowConfirmationModal(false)}
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-50 transition"
              >
                Edit Details
              </button>
              <button
                type="button"
                onClick={submitRegistration}
                disabled={loading}
                className="flex-1 px-4 py-3 bg-sky-600 text-white font-medium rounded-lg hover:bg-sky-700 disabled:opacity-50 disabled:cursor-not-allowed transition"
              >
                {loading ? "Submitting..." : "Confirm & Submit"}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Success Modal */}
      {showSuccessModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4">
          <div className="bg-white p-8 rounded-2xl shadow-2xl max-w-md w-full text-center">
            <div className="flex justify-center mb-6">
              <div className="h-16 w-16 rounded-full bg-emerald-100 flex items-center justify-center">
                <HiCheck className="h-8 w-8 text-emerald-600" />
              </div>
            </div>
            
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Registration Successful!</h3>
            <p className="text-gray-600 mb-6">
              Thank you for registering. Our team will contact you within 24 hours to discuss the next steps for your course.
            </p>
            
            <button
              type="button"
              onClick={() => setShowSuccessModal(false)}
              className="w-full px-6 py-3 bg-sky-600 text-white font-medium rounded-lg hover:bg-sky-700 transition"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
}