import Image from "next/image";
import Navbar from "./components/Header";
import Carousel from "./components/Carousel";
import DigitalMarketing from "./components/DigitalMarketing";  
import Footer from "./components/footer";  
import JobGuaranteeCourses from "./components/JobGuaranteeCourses";  
import CourseCards from "./components/CourseCards";  
import Script from "next/script";
import Head from "next/head";

export default function Home() {
    const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://edigitalindian.com#organization",
        "name": "E-Digital Indian",
        "url": "https://edigitalindian.com",
        "logo": "https://edigitalindian.com/logo.png",
        "email": "info@edigitalindian.com",
        "telephone": "+91-9934141233",
        "sameAs": [
          "https://www.facebook.com/people/E-Digital-INDIA/61574473705318/",
          "https://www.instagram.com/edigitalindia",
          "https://youtube.com/@edigitalindia",
          "https://in.pinterest.com/edigitaljsr",
          "https://x.com/edigitalindian"
        ]
      },
      {
        "@type": "LocalBusiness",
        "@id": "https://edigitalindian.com/#localbusiness",
        "name": "E-Digital Indian",
        "image": "https://edigitalindian.com/logo.png",
        "url": "https://edigitalindian.com/",
        "telephone": "+91-9934141233",
        "email": "info@edigitalindian.com",
        "priceRange": "₹70000",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "2nd floor, Jayanta Tower, Sakchi Gol Chakkar, opposite Delhi Darbar, SNP Area, Sakchi",
          "addressLocality": "Jamshedpur",
          "addressRegion": "Jharkhand",
          "postalCode": "831001",
          "addressCountry": "IN"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "22.8052",
          "longitude": "86.2023"
        },
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            "opens": "08:00",
            "closes": "19:00"
          }
        ],
        "parentOrganization": { "@id": "https://edigitalindian.com#organization" }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Course",
          "name": "Diploma in Digital Marketing",
          "url": "https://edigitalindian.com/diploma-in-digital-marketing",
          "description": "Learn SEO, SMM, Meta Ads, Google Ads, Wordpress and more."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Course",
          "name": "Diploma in PHP Web Development",
          "url": "https://edigitalindian.com/diploma-in-php-web-development",
          "description": "Learn PHP with HTML, CSS, MYSQL, JavaScript for Full-Stack Development Fundamentals."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Course",
          "name": "Diploma in Data Science & Artificial Intelligence",
          "url": "https://edigitalindian.com/diploma-in-data-science-and-artificial-intelligence",
          "description": "Learn how to collect, clean, and prepare data and AI fundamentals."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Course",
          "name": "Diploma in Android App Development",
          "url": "https://edigitalindian.com/diploma-in-android-app-development",
          "description": "Learn how to build mobile apps using core Android programming languages."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Course",
          "name": "Diploma in Business Communication & Soft Skills",
          "url": "https://edigitalindian.com/diploma-in-business-communication-and-soft-skills",
          "description": "Learn email writing, English communication, teamwork, and leadership skills."
        }
      }
    ]
  };
  return (
    <div>
      <Head>
      <Script
        type="application/ld+json"
        id="edigitalindian-jsonld"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      </Head>
     <Carousel />
     <DigitalMarketing />
     <CourseCards />
     <JobGuaranteeCourses/>

     {/* <Footer/> */}
    </div>
  );
}
