
import Head from "next/head";
import HeroWithRegistration from "../components/HeroWithRegistration";
import CoursesWithChannels from '../components/CoursesWithChannels';

// Then use it in your page

const channels = [
  { title: "Semrush", img: "/images/logos/semrush.png", alt: "SEMRush" },
  { title: "WordPress", img: "/images/logos/wordpress.png", alt: "WordPress" },
  { title: "WooCommerce", img: "/images/logos/woocommerce.png", alt: "WooCommerce" },
  { title: "Facebook Ads", img: "/images/logos/facebook-ads.png", alt: "Facebook Ads" },
  { title: "Google Ads", img: "/images/logos/google-ads.png", alt: "Google Ads" },
  { title: "Google Search Console", img: "/images/logos/google-search-console.png", alt: "Google Search Console" },
];

export default function Apply() {
//   useEffect(() => {
//     window.scrollTo(0, 0);
//     document.documentElement.scrollTop = 0;
//   }, []);

  return (
    <main className="relative">
      <Head>
        <title>Apply & Become a Digital Marketer in 6 Months | Join NOW!</title>
        <meta name="description" content="Become a digital marketer in 6 months. Get job opportunities with 3.5 LPA+, earn as a freelancer, and boost your business. Apply now at E-Digital India!" />
        <link rel="canonical" href={`${process.env.NEXT_PUBLIC_SITE_URL}/apply`} />
      </Head>

      <HeroWithRegistration id="hero" backgroundImage="/images/hero-bg.jpg" />
      
      {/* <div className="relative z-0">
        <LearnChannels items={channels} />
      </div> */}
     

<CoursesWithChannels initialCourse="Diploma in Digital Marketing" />
    </main>
  );
}