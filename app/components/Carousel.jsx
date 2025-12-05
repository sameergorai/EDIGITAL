'use client';

import { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react';
import Image from 'next/image';

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isHovered, setIsHovered] = useState(false);

  // Carousel data with images and text content
  const slides = [
    {
      id: 1,
      image: '/Untitled design (1).png', // Replace with your image path
      title: 'Welcome to Rambha Institute',
      subtitle: 'Excellence in Education Since 1995',
      description: 'A premier educational institution dedicated to nurturing future leaders through innovative teaching and state-of-the-art facilities.',
      ctaText: 'Explore Programs',
      ctaLink: '/programs',
      bgColor: 'from-blue-900/70 to-blue-700/60',
    },
    {
      id: 2,
      image: '/Untitled design (4).jpg', // Replace with your image path
      title: 'Modern Laboratories',
      subtitle: 'Hands-on Learning Experience',
      description: 'Equipped with cutting-edge technology and industry-standard equipment for practical learning.',
      ctaText: 'View Facilities',
      ctaLink: '/facilities',
      bgColor: 'from-green-900/70 to-green-700/60',
    },
    {
      id: 3,
      image: '/Untitled design (6).jpg', // Replace with your image path
      title: 'Digital Library Access',
      subtitle: 'Over 50,000+ Resources',
      description: 'Access to vast collection of e-books, journals, research papers, and digital resources 24/7.',
      ctaText: 'Visit Library',
      ctaLink: '/library',
      bgColor: 'from-purple-900/70 to-purple-700/60',
    },
    {
      id: 4,
      image: '/Untitled design (5).jpg', // Replace with your image path
      title: 'Workshops & Seminars',
      subtitle: 'Faculty Development Programs',
      description: 'Regular workshops, seminars, and FDPs to enhance teaching methodologies and research skills.',
      ctaText: 'View Events',
      ctaLink: '/events',
      bgColor: 'from-orange-900/70 to-orange-700/60',
    },
    {
      id: 5,
      image: '/Untitled design (7).jpg', // Replace with your image path
      title: 'Vibrant Campus Life',
      subtitle: 'Beyond Academics',
      description: 'Sports, cultural events, clubs, and societies for holistic development of students.',
      ctaText: 'Campus Life',
      ctaLink: '/campus-life',
      bgColor: 'from-red-900/70 to-red-700/60',
    },
  ];

  // Auto play functionality
  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  }, [slides.length]);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const toggleAutoPlay = () => {
    setIsPlaying(!isPlaying);
  };

  // Auto play effect
  useEffect(() => {
    if (!isPlaying || isHovered) return;

    const interval = setInterval(() => {
      nextSlide();
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [isPlaying, isHovered, nextSlide]);

  // Add keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') prevSlide();
      if (e.key === 'ArrowRight') nextSlide();
      if (e.key === ' ') {
        e.preventDefault();
        toggleAutoPlay();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide]);

  // Preload next image
  useEffect(() => {
    const preloadImage = (src) => {
      const img = new window.Image();
      img.src = src;
    };

    const nextIndex = (currentSlide + 1) % slides.length;
    preloadImage(slides[nextIndex].image);
  }, [currentSlide, slides]);

  return (
    <div
      className="relative w-full h-[85vh] overflow-hidden shadow-2xl"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Slides Container */}
      <div className="relative w-full h-full">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out ${index === currentSlide
              ? "translate-x-0 opacity-100"
              : index < currentSlide
                ? "-translate-x-full opacity-100"
                : "translate-x-full opacity-100"

              }`}
          >
            {/* Background Image */}
            <div className="absolute inset-0">
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                className="w-full"
                priority={index === 0}
              />

              {/* <div className={`absolute inset-0 bg-gradient-to-r ${slide.bgColor}`}></div> */}
            </div>


            {/* Content */}
            <div className="relative h-full flex items-center">
              <div className="container mx-auto px-8 lg:px-16">
                <div className="max-w-2xl">
                  {/* Badge/Subtitle */}
                  {/* <div className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full mb-6">
                    <span className="text-white text-sm font-semibold tracking-wider">
                      {slide.subtitle}
                    </span>
                  </div> */}

                  {/* Title */}
                  {/* <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-blue-900 mb-6 leading-tight">
                    {slide.title}
                  </h1> */}

                  {/* Description */}
                  {/* <p className="text-lg md:text-xl text-blue-900 mb-8 max-w-xl leading-relaxed">
                    {slide.description}
                  </p> */}

                  {/* CTA Button */}
                  <div className="flex flex-wrap gap-4">
                    {/* <a
                      href={slide.ctaLink}
                      className="inline-flex items-center px-8 py-3 bg-white text-blue-900 font-semibold rounded-lg hover:bg-blue-50 transform hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-xl"
                    >
                      {slide.ctaText}
                      <ChevronRight className="ml-2" size={20} />
                    </a> */}
                    {/* <button
                      onClick={toggleAutoPlay}
                      className="inline-flex items-center px-6 py-3 bg-white/20 backdrop-blur-sm text-white font-semibold rounded-lg hover:bg-white/30 transition-all duration-300"
                    >
                      {isPlaying ? (
                        <>
                          <Pause className="mr-2" size={18} />
                          Pause
                        </>
                      ) : (
                        <>
                          <Play className="mr-2" size={18} />
                          Play
                        </>
                      )}
                    </button> */}
                  </div>

                  {/* Stats/Additional Info */}
                  {/* <div className="mt-12 flex flex-wrap gap-6">
                    <div className="text-white">
                      <div className="text-2xl font-bold">{slide.id}</div>
                      <div className="text-sm opacity-80">Current Slide</div>
                    </div>
                    <div className="text-white">
                      <div className="text-2xl font-bold">{slides.length}</div>
                      <div className="text-sm opacity-80">Total Slides</div>
                    </div>
                  </div> */}
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute right-0 top-0 bottom-0 w-1/3">
                <div className="absolute inset-0 bg-gradient-to-l from-white/5 to-transparent" />
                <div className="absolute top-1/2 right-8 transform -translate-y-1/2 w-64 h-64 rounded-full border-2 border-white/10" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 p-3 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300 group"
        aria-label="Previous slide"
      >
        <ChevronLeft className="text-white group-hover:scale-110 transition-transform" size={24} />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 p-3 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300 group"
        aria-label="Next slide"
      >
        <ChevronRight className="text-white group-hover:scale-110 transition-transform" size={24} />
      </button>

      {/* Dots Navigation */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex items-center space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentSlide
              ? 'bg-white scale-125'
              : 'bg-white/50 hover:bg-white/80'
              }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Slide Indicator */}
      <div className="absolute bottom-8 right-8 bg-black/40 backdrop-blur-sm rounded-full px-4 py-2">
        <span className="text-white text-sm font-medium">
          {currentSlide + 1} / {slides.length}
        </span>
      </div>

      {/* Progress Bar */}
      {/* <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20">
        <div
          className="h-full bg-white transition-all duration-1000 ease-linear"
          style={{
            width: isPlaying && !isHovered ? '100%' : '0%',
            animation: isPlaying && !isHovered ? 'progress 5s linear infinite' : 'none',
          }}
        />
      </div> */}
    </div>
  );
};

export default Carousel;