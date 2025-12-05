'use client';

import { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle,
  MessageSquare,
  User,
  Building,
  Facebook,
  Instagram,
  Youtube,
  Twitter,
  Smartphone,
  Globe
} from 'lucide-react';
import dynamic from 'next/dynamic';

// Dynamically import map to avoid SSR issues
const Map = dynamic(() => import('../components/Map'), {
  ssr: false,
  loading: () => (
    <div className="h-full w-full bg-gray-200 rounded-lg flex items-center justify-center">
      <div className="text-gray-500">Loading map...</div>
    </div>
  )
});

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    branch: '',
    course: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Contact information
  const contactInfo = {
    mainEmail: 'info@edigitalindian.com',
    supportEmail: 'support@edigitalindian.com',
    phone: '9934141233',
    whatsapp: '918448831264',
    address: '2nd floor, E-DIGITAL INDIA, Jayanta Tower, Sakchi Gol Chakkar, opposite Delhi Darbar, SNP Area, Sakchi, Jamshedpur, Jharkhand 831001',
    workingHours: 'Monday - Saturday: 9:00 AM - 7:00 PM',
  };

  // Branches
  const branches = [
    {
      city: 'Chennai',
      address: 'Head Office: T. Nagar, Chennai, Tamil Nadu',
      phone: '+91 84488 31264',
      email: 'chennai@edigitalindian.com',
      coordinates: { lat: 13.0827, lng: 80.2707 }
    },
    {
      city: 'Delhi',
      address: 'South West Delhi Branch',
      phone: '+91 84488 31264',
      email: 'delhi@edigitalindian.com',
      coordinates: { lat: 28.7041, lng: 77.1025 }
    },
    {
      city: 'Jamshedpur',
      address: '2nd floor, Jayanta Tower, Sakchi Gol Chakkar, Jamshedpur, Jharkhand 831001',
      phone: '+91 99341 41233',
      email: 'jamshedpur@edigitalindian.com',
      coordinates: { lat: 22.8052486, lng: 86.2030646 }
    }
  ];

  // Social links
  const socialLinks = [
    { platform: 'Facebook', url: 'https://www.facebook.com/people/E-Digital-INDIA/61574473705318/', icon: Facebook, color: 'bg-blue-600 hover:bg-blue-700' },
    { platform: 'Instagram', url: 'https://www.instagram.com/edigitalindia', icon: Instagram, color: 'bg-pink-600 hover:bg-pink-700' },
    { platform: 'YouTube', url: 'https://www.youtube.com/@EDIGITALINDIA', icon: Youtube, color: 'bg-red-600 hover:bg-red-700' },
    { platform: 'Twitter', url: 'https://x.com/edigitalindian', icon: Twitter, color: 'bg-black hover:bg-gray-800' },
    { platform: 'WhatsApp', url: `https://wa.me/${contactInfo.whatsapp}`, icon: Smartphone, color: 'bg-green-600 hover:bg-green-700' },
  ];

  // Courses for dropdown
  const courses = [
    'Digital Marketing',
    'Web Development',
    'Data Science & AI',
    'Android App Development',
    'Business Communication & Soft Skills',
    'SAP Global Certification',
    'Other'
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        branch: '',
        course: '',
        message: ''
      });
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 text-white py-12 md:py-20">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Get in <span className="text-yellow-400">Touch</span> With Us
            </h1>
            <p className="text-xl text-blue-100">
              We're here to help you start your digital career journey. Reach out for course inquiries, campus visits, or career guidance.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8">
                <div className="flex items-center gap-3 mb-8">
                  <MessageSquare className="w-8 h-8 text-blue-600" />
                  <h2 className="text-2xl font-bold text-gray-900">Send us a Message</h2>
                </div>

                {isSubmitted ? (
                  <div className="text-center py-12">
                    <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Message Sent Successfully!</h3>
                    <p className="text-gray-600 mb-6">
                      Thank you for contacting us. Our team will get back to you within 24 hours.
                    </p>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="text-blue-600 hover:text-blue-800 font-semibold"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          <User className="w-4 h-4 inline mr-1" />
                          Your Name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                          placeholder="Enter your full name"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          <Mail className="w-4 h-4 inline mr-1" />
                          Email Address *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          <Phone className="w-4 h-4 inline mr-1" />
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                          placeholder="+91 9876543210"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          <Building className="w-4 h-4 inline mr-1" />
                          Preferred Branch
                        </label>
                        <select
                          name="branch"
                          value={formData.branch}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition bg-white"
                        >
                          <option value="">Select a branch</option>
                          {branches.map(branch => (
                            <option key={branch.city} value={branch.city}>
                              {branch.city} {branch.city === 'Chennai' ? '(Head Office)' : ''}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Course Interested In
                      </label>
                      <select
                        name="course"
                        value={formData.course}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition bg-white"
                      >
                        <option value="">Select a course</option>
                        {courses.map(course => (
                          <option key={course} value={course}>{course}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Your Message *
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows="5"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                        placeholder="Tell us about your requirements, questions, or schedule a campus visit..."
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white font-bold py-3 px-6 rounded-lg transition-all flex items-center justify-center gap-2 disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5" />
                          Send Message
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              {/* Contact Cards */}
              <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-6 text-white">
                <h3 className="text-xl font-bold mb-6">Contact Information</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold">Phone Number</h4>
                      <a href={`tel:${contactInfo.phone}`} className="text-blue-100 hover:text-white block">
                        +91 {contactInfo.phone}
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold">Email Address</h4>
                      <a href={`mailto:${contactInfo.mainEmail}`} className="text-blue-100 hover:text-white block">
                        {contactInfo.mainEmail}
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold">Main Campus</h4>
                      <p className="text-blue-100">{contactInfo.address}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 mt=1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold">Working Hours</h4>
                      <p className="text-blue-100">{contactInfo.workingHours}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* WhatsApp Quick Action */}
              <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-2xl p-6 text-white">
                <div className="flex items-center gap-3 mb-4">
                  <Smartphone className="w-8 h-8" />
                  <div>
                    <h3 className="text-xl font-bold">Quick Connect on WhatsApp</h3>
                    <p className="text-green-100 text-sm">Get instant response</p>
                  </div>
                </div>
                <a
                  href={`https://wa.me/${contactInfo.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-white text-green-700 hover:bg-green-50 font-bold py-3 px-6 rounded-lg text-center transition-all flex items-center justify-center gap-2"
                >
                  <Smartphone className="w-5 h-5" />
                  Chat on WhatsApp
                </a>
              </div>

              {/* Social Links */}
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Connect With Us</h3>
                <div className="grid grid-cols-2 gap-3">
                  {socialLinks.map((social) => (
                    <a
                      key={social.platform}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${social.color} text-white p-3 rounded-lg text-center hover:scale-105 transition-transform`}
                    >
                      <social.icon className="w-5 h-5 mx-auto mb-1" />
                      <span className="text-xs font-medium">{social.platform}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Find Our Campuses</h2>
            <p className="text-gray-600">Visit our training centers across India</p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="h-[500px]">
              <Map branches={branches} />
            </div>
            
            <div className="p-6 border-t border-gray-200">
              <div className="grid md:grid-cols-3 gap-6">
                {branches.map((branch) => (
                  <div key={branch.city} className="text-center">
                    <h4 className="font-bold text-gray-900 mb-2">{branch.city}</h4>
                    <p className="text-sm text-gray-600">{branch.address}</p>
                    <a 
                      href={`tel:${branch.phone}`}
                      className="text-blue-600 hover:text-blue-800 text-sm block mt-1"
                    >
                      {branch.phone}
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ/Quick Links */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-blue-50 rounded-xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Quick Enquiry</h3>
              <p className="text-gray-700 mb-4">
                Have questions about courses, fees, or admission process?
              </p>
              <a 
                href="tel:+919934141233"
                className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-semibold"
              >
                <Phone className="w-4 h-4" />
                Call for Quick Info
              </a>
            </div>
            
            <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl p-6 text-white">
              <h3 className="text-xl font-bold mb-4">Campus Visit</h3>
              <p className="text-blue-100 mb-4">
                Schedule a visit to our campus to see our facilities and meet our trainers.
              </p>
              <button className="bg-white text-blue-900 hover:bg-blue-50 font-semibold py-2 px-6 rounded-lg transition-colors">
                Book Campus Tour
              </button>
            </div>
            
            <div className="bg-gray-900 rounded-xl p-6 text-white">
              <h3 className="text-xl font-bold mb-4">Online Consultation</h3>
              <p className="text-gray-300 mb-4">
                Can't visit in person? Schedule a virtual consultation with our counselors.
              </p>
              <button className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-semibold py-2 px-6 rounded-lg transition-colors">
                Book Online Session
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;