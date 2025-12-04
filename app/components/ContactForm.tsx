'use client'

import { useState } from 'react'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNO: '',
    mode: 'online',
    message: '',
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)



  return (
    <div className="max-w-2xl mx-auto bg-white p-8 rounded-xl shadow-lg">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Enroll Now</h2>
      
      {isSubmitted && (
        <div className="mb-6 p-4 bg-green-100 text-green-700 rounded-lg">
          Thank you for your interest! Our team will contact you shortly.
        </div>
      )}
      
      <form 
    //   onSubmit={handleSubmit} 
      className="space-y-6">
        <div>
          <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-2">
            Full Name *
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            // onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
            placeholder="Enter your full name"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
            //   onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
              placeholder="your@email.com"
            />
          </div>

          <div>
            <label htmlFor="phoneNO" className="block text-sm font-medium text-gray-700 mb-2">
              Phone Number *
            </label>
            <input
              type="tel"
              id="phoneNO"
              name="phoneNO"
              value={formData.phoneNO}
            //   onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
              placeholder="+91 XXXXXXXXXX"
            />
          </div>
        </div>

        <div>
          <label htmlFor="mode" className="block text-sm font-medium text-gray-700 mb-2">
            Preferred Learning Mode *
          </label>
          <select
            id="mode"
            name="mode"
            value={formData.mode}
            // onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
          >
            <option value="online">Online</option>
            <option value="classroom">Classroom</option>
            <option value="hybrid">Hybrid (Online + Classroom)</option>
          </select>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
            Additional Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            // onChange={handleChange}
            rows={4}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
            placeholder="Any questions or specific requirements?"
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? 'Submitting...' : 'Submit Enrollment Request'}
        </button>

        <p className="text-sm text-gray-500 text-center">
          We respect your privacy. Your information will not be shared with third parties.
        </p>
      </form>
    </div>
  )
}