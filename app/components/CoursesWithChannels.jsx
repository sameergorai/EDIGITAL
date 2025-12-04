'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import Image from 'next/image';
// import { HiAcademicCap, HiSearch, HiWrenchScrewdriver, HiOutlinePlus } from 'react-icons/hi';

// Define the icon mapping
const iconMap = {
  // Digital Marketing
  'SEMrush': 'semrush',
  'Facebook Ads': 'facebook',
  'Google Ads': 'googleads',
  'Google Analytics': 'googleanalytics',
  'Google Tag Manager': 'googletagmanager',
  'YouTube': 'youtube',
  'LinkedIn Ads': 'linkedin',
  'Mailchimp': 'mailchimp',
  'Canva': 'canva',
  'WordPress': 'wordpress',
  'WooCommerce': 'woocommerce',
  'Git & GitHub': 'github',
  'Shopify': 'shopify',
  'Node.js': 'nodedotjs',
  'React': 'react',
  'Next.js': 'nextdotjs',
  'Vercel': 'vercel',
  'Docker': 'docker',
  'Python': 'python',
  'TensorFlow': 'tensorflow',
  'NumPy': 'numpy',
  'Pandas': 'pandas',
  'Jupyter': 'jupyter',
  'scikit-learn': 'scikitlearn',
  'PyTorch': 'pytorch',
  'Keras': 'keras',
  'SQL': 'mysql',
  'PowerPoint': 'microsoftpowerpoint',
  'Excel': 'microsoftexcel',
  'Slack': 'slack',
  'Trello': 'trello',
  'Notion': 'notion',
  'Zoom': 'zoom',
  'Microsoft Teams': 'microsoftteams',
  'Gmail': 'gmail',
  'Android Studio': 'androidstudio',
  'Firebase': 'firebase',
  'Kotlin': 'kotlin',
  'Java': 'java',
  'Android Jetpack': 'android',
  'SAP': 'sap',
  'SAP SuccessFactors': 'sap-successfactors',
};

const coursesList = [
  'Diploma in Digital Marketing',
  'Diploma in Web Development',
  'Diploma in Data Science & AI',
  'Diploma in Business & Soft Skills',
  'Diploma in Android App Development',
  'SAP Global Certification Course',
];

const channelsByCourse = {
  'Diploma in Digital Marketing': [
    { title: 'SEMrush', img: iconMap['SEMrush'] },
    { title: 'Facebook Ads', img: iconMap['Facebook Ads'] },
    { title: 'Google Ads', img: iconMap['Google Ads'] },
    { title: 'Google Analytics', img: iconMap['Google Analytics'] },
    { title: 'Google Tag Manager', img: iconMap['Google Tag Manager'] },
    { title: 'YouTube', img: iconMap['YouTube'] },
    { title: 'LinkedIn Ads', img: iconMap['LinkedIn Ads'] },
    { title: 'Mailchimp', img: iconMap['Mailchimp'] },
    { title: 'Canva', img: iconMap['Canva'] },
  ],

  'Diploma in Web Development': [
    { title: 'WordPress', img: iconMap['WordPress'] },
    { title: 'WooCommerce', img: iconMap['WooCommerce'] },
    { title: 'Git & GitHub', img: iconMap['Git & GitHub'] },
    { title: 'Shopify', img: iconMap['Shopify'] },
    { title: 'Node.js', img: iconMap['Node.js'] },
    { title: 'React', img: iconMap['React'] },
    { title: 'Next.js', img: iconMap['Next.js'] },
    { title: 'Vercel', img: iconMap['Vercel'] },
    { title: 'Docker', img: iconMap['Docker'] },
  ],

  'Diploma in Data Science & AI': [
    { title: 'Python', img: iconMap['Python'] },
    { title: 'TensorFlow', img: iconMap['TensorFlow'] },
    { title: 'NumPy', img: iconMap['NumPy'] },
    { title: 'Pandas', img: iconMap['Pandas'] },
    { title: 'Jupyter', img: iconMap['Jupyter'] },
    { title: 'scikit-learn', img: iconMap['scikit-learn'] },
    { title: 'PyTorch', img: iconMap['PyTorch'] },
    { title: 'Keras', img: iconMap['Keras'] },
    { title: 'SQL', img: iconMap['SQL'] },
  ],

  'Diploma in Business & Soft Skills': [
    { title: 'PowerPoint', img: iconMap['PowerPoint'] },
    { title: 'Excel', img: iconMap['Excel'] },
    { title: 'Slack', img: iconMap['Slack'] },
    { title: 'Trello', img: iconMap['Trello'] },
    { title: 'Notion', img: iconMap['Notion'] },
    { title: 'Zoom', img: iconMap['Zoom'] },
    { title: 'Microsoft Teams', img: iconMap['Microsoft Teams'] },
    { title: 'Gmail', img: iconMap['Gmail'] },
  ],

  'Diploma in Android App Development': [
    { title: 'Android Studio', img: iconMap['Android Studio'] },
    { title: 'Firebase', img: iconMap['Firebase'] },
    { title: 'Kotlin', img: iconMap['Kotlin'] },
    { title: 'Java', img: iconMap['Java'] },
    { title: 'Android Jetpack', img: iconMap['Android Jetpack'] },
    { title: 'Git & GitHub', img: iconMap['Git & GitHub'] },
    { title: 'Docker', img: iconMap['Docker'] },
  ],

  'SAP Global Certification Course': [
    { title: 'SAP', img: iconMap['SAP'] },
    { title: 'SAP S/4HANA' },
    { title: 'SAP Fiori' },
    { title: 'HANA' },
    { title: 'ERP' },
    { title: 'SAP SuccessFactors', img: iconMap['SAP SuccessFactors'] },
    { title: 'SAP Ariba' },
    { title: 'SAP MM (Materials Mgt)' },
  ],
};

// Helper functions
const colorFromString = (s) => {
  let hash = 0;
  for (let i = 0; i < s.length; i++) hash = s.charCodeAt(i) + ((hash << 5) - hash);
  const hue = Math.abs(hash) % 360;
  return `hsl(${hue} 65% 55%)`;
};

const initialsFromLabel = (label) => {
  if (!label) return '??';
  const parts = label.split(/\s+/).filter(Boolean);
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return (parts[0][0] + (parts[1]?.[0] || '')).toUpperCase();
};

const generatePlaceholderSVG = (label, size = 96) => {
  const initials = initialsFromLabel(label);
  const color = colorFromString(label);
  
  return `data:image/svg+xml;utf8,${encodeURIComponent(`
    <svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 ${size} ${size}">
      <rect width="100%" height="100%" rx="14" fill="${color}"/>
      <text x="50%" y="52%" font-family="system-ui, -apple-system, sans-serif" font-size="${Math.floor(size * 0.35)}" font-weight="600" fill="#fff" text-anchor="middle" dominant-baseline="middle">${initials}</text>
    </svg>
  `)}`;
};

// Logo Component
const Logo = ({ slug, label, size = 80 }) => {
  if (!slug) {
    const placeholder = generatePlaceholderSVG(label, size);
    return (
      <div className="relative rounded-xl overflow-hidden border-2 border-gray-100 shadow-lg bg-gray-50" style={{ width: size, height: size }}>
        <img
          src={placeholder}
          alt={label}
          width={size}
          height={size}
          className="object-contain"
        />
      </div>
    );
  }

  const iconUrl = `https://cdn.simpleicons.org/${slug}`;
  
  return (
    <div className="relative rounded-xl overflow-hidden border-2 border-gray-100 shadow-lg bg-white" style={{ width: size, height: size }}>
      <img
        src={iconUrl}
        alt={label}
        width={size}
        height={size}
        className="object-contain p-2"
        onError={(e) => {
          e.currentTarget.src = generatePlaceholderSVG(label, size);
        }}
      />
    </div>
  );
};

// Custom hook for keyboard navigation
const useListKeyboardNavigation = (list, selected, setSelected) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.target.type === 'search' || e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
      
      const index = list.indexOf(selected);
      
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        const next = list[(index + 1) % list.length];
        setSelected(next);
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        const prev = list[(index - 1 + list.length) % list.length];
        setSelected(prev);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [list, selected, setSelected]);
};

// Main Component
const VISIBLE_TOOLS_COUNT = 7; // Show 7 tools including "More" card

export default function CoursesWithChannels({ initialCourse = coursesList[0] }) {
  const [selected, setSelected] = useState(initialCourse);
  const [query, setQuery] = useState('');
  const listRef = useRef(null);

  useEffect(() => {
    if (!coursesList.includes(initialCourse)) {
      setSelected(coursesList[0]);
    }
  }, [initialCourse]);

  useListKeyboardNavigation(coursesList, selected, setSelected);

  const filteredCourses = useMemo(() => {
    if (!query.trim()) return coursesList;
    const q = query.trim().toLowerCase();
    return coursesList.filter(course => course.toLowerCase().includes(q));
  }, [query]);

  const currentChannels = channelsByCourse[selected] || [];
  const totalToolsCount = currentChannels.length;

  const displayChannels = useMemo(() => {
    const channels = [...currentChannels];
    
    if (channels.length > VISIBLE_TOOLS_COUNT - 1) {
      const visibleChannels = channels.slice(0, VISIBLE_TOOLS_COUNT - 1);
      const moreCount = channels.length - (VISIBLE_TOOLS_COUNT - 1);
      
      visibleChannels.push({
        isMoreCard: true,
        title: `+${moreCount} More Tool${moreCount > 1 ? 's' : ''}`,
      });
      
      return visibleChannels;
    }
    
    return channels;
  }, [currentChannels]);

  // Focus selected course in list
  useEffect(() => {
    const element = listRef.current?.querySelector(`[data-course="${CSS.escape(selected)}"]`);
    if (element) {
      element.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
    }
  }, [selected]);

  return (
    <section className="py-16 md:py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sky-100 text-sky-700 text-sm font-semibold uppercase tracking-wider mb-4">
            {/* <HiWrenchScrewdriver className="h-4 w-4" /> */}
            Industry-Ready Skills
          </div>
          <h2 className="mt-2 text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">
            Master In-Demand Tools & Platforms
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Hands-on training with the exact tools used by industry professionals. Select a program to explore the curriculum.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Course Selection Sidebar */}
          <div className="lg:col-span-4 xl:col-span-3">
            <div className="sticky top-8 bg-white rounded-2xl shadow-xl border border-gray-200 p-6">
              <div className="relative mb-6">
                {/* <HiSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400 pointer-events-none" /> */}
                <input
                  type="search"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search courses..."
                  className="w-full pl-12 pr-4 py-3 text-base border border-gray-300 rounded-xl focus:ring-2 focus:ring-sky-500 focus:border-sky-500 outline-none transition"
                />
              </div>

              <div className="flex items-center gap-2 text-sm font-semibold text-gray-700 uppercase tracking-wide mb-4 pb-3 border-b">
                {/* <HiAcademicCap className="h-5 w-5 text-sky-600" /> */}
                <span>Diploma Programs ({filteredCourses.length})</span>
              </div>

              <div 
                ref={listRef}
                className="space-y-2 max-h-[400px] overflow-y-auto pr-2"
              >
                {filteredCourses.length === 0 ? (
                  <div className="text-center py-8 text-gray-500">
                    No courses found for "{query}"
                  </div>
                ) : (
                  filteredCourses.map((course) => {
                    const isSelected = course === selected;
                    return (
                      <button
                        key={course}
                        data-course={course}
                        onClick={() => setSelected(course)}
                        className={`w-full text-left px-4 py-3 rounded-xl text-base font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-sky-500 ${
                          isSelected
                            ? 'bg-gradient-to-r from-sky-600 to-blue-600 text-white shadow-lg shadow-sky-300/50'
                            : 'text-gray-800 hover:bg-sky-50 hover:border-sky-100 border border-transparent'
                        }`}
                        aria-selected={isSelected}
                      >
                        <span className="line-clamp-2">{course}</span>
                      </button>
                    );
                  })
                )}
              </div>
            </div>
          </div>

          {/* Tools Display */}
          <div className="lg:col-span-8 xl:col-span-9">
            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6 md:p-8">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 pb-6 border-b border-gray-200">
                <div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">{selected}</h3>
                  <p className="text-gray-600">
                    Gain expert proficiency in industry-standard tools
                  </p>
                </div>
                <div className="mt-4 sm:mt-0 px-5 py-2.5 bg-sky-100 text-sky-800 font-bold rounded-full border-2 border-sky-200 shadow-sm">
                  {totalToolsCount} Core Tools
                </div>
              </div>

              {totalToolsCount === 0 ? (
                <div className="rounded-xl border-2 border-dashed border-gray-300 bg-gray-50 p-12 text-center">
                  {/* <HiWrenchScrewdriver className="h-12 w-12 mx-auto text-gray-400 mb-4" /> */}
                  <p className="text-xl font-semibold text-gray-700 mb-2">Curriculum in Development</p>
                  <p className="text-gray-500">Tools and platforms list will be updated soon.</p>
                </div>
              ) : (
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
                  {displayChannels.map((item, index) => {
                    if (item.isMoreCard) {
                      return (
                        <div
                          key="more-tools"
                          className="group bg-gradient-to-br from-sky-50 to-blue-50 rounded-xl border-2 border-dashed border-sky-300 p-6 text-center flex flex-col items-center justify-center cursor-pointer hover:shadow-lg hover:border-sky-400 transition-all duration-300"
                        >
                          <div className="w-16 h-16 rounded-full bg-sky-100 flex items-center justify-center mb-4 group-hover:bg-sky-200 transition">
                            {/* <HiOutlinePlus className="h-8 w-8 text-sky-600" /> */}
                          </div>
                          <div className="text-lg font-bold text-sky-800 mb-1">{item.title}</div>
                          <p className="text-sm text-gray-600">Click to view all tools</p>
                        </div>
                      );
                    }

                    return (
                      <div
                        key={`${item.title}-${index}`}
                        className="group bg-white rounded-xl border border-gray-200 p-5 text-center hover:shadow-xl hover:border-sky-200 hover:-translate-y-1 transition-all duration-300"
                      >
                        <div className="flex justify-center mb-4">
                          <Logo slug={item.img} label={item.title} size={72} />
                        </div>
                        <div className="text-base font-semibold text-gray-900 group-hover:text-sky-700 transition">
                          {item.title}
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}