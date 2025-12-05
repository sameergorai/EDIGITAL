'use client';

import { useEffect, useRef, useState } from 'react';
import { Loader2, MapPin } from 'lucide-react';

const Map = ({ branches = [] }) => {
  const mapRef = useRef(null);
  const [mapLoaded, setMapLoaded] = useState(false);
  const [error, setError] = useState(null);
  const [mapInstance, setMapInstance] = useState(null);
  const markersRef = useRef([]);
  const infoWindowsRef = useRef([]);

  // Default coordinates (India center)
  const defaultCenter = { lat: 22.8052486, lng: 86.2030646 }; // Jamshedpur

  // Custom map style for professional look
  const mapStyles = [
    {
      "featureType": "all",
      "elementType": "labels.text.fill",
      "stylers": [{ "color": "#7c93a3" }]
    },
    {
      "featureType": "all",
      "elementType": "labels.text.stroke",
      "stylers": [{ "lightness": -80 }]
    },
    {
      "featureType": "administrative",
      "elementType": "geometry",
      "stylers": [{ "visibility": "off" }]
    },
    {
      "featureType": "landscape",
      "elementType": "geometry",
      "stylers": [{ "color": "#f5f5f5" }]
    },
    {
      "featureType": "poi",
      "stylers": [{ "visibility": "off" }]
    },
    {
      "featureType": "road",
      "stylers": [{ "visibility": "off" }]
    },
    {
      "featureType": "transit",
      "stylers": [{ "visibility": "off" }]
    },
    {
      "featureType": "water",
      "elementType": "geometry",
      "stylers": [{ "color": "#c9c9c9" }]
    }
  ];

  // Marker colors for different branches
  const getMarkerColor = (city) => {
    const colors = {
      'Chennai': '#FF5252', // Red for head office
      'Delhi': '#2196F3',   // Blue
      'Jamshedpur': '#4CAF50' // Green
    };
    return colors[city] || '#FF9800'; // Default orange
  };

  const loadGoogleMaps = () => {
    if (window.google) {
      setMapLoaded(true);
      initMap();
      return;
    }

    const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
    if (!apiKey) {
      setError('Google Maps API key is not configured');
      return;
    }

    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places&callback=initMapCallback`;
    script.async = true;
    script.defer = true;
    
    // Add error handling for script loading
    script.onerror = () => {
      setError('Failed to load Google Maps. Please check your internet connection.');
    };

    // Define callback function before adding script
    window.initMapCallback = () => {
      setMapLoaded(true);
      initMap();
    };

    document.head.appendChild(script);

    // Cleanup callback
    return () => {
      if (window.initMapCallback) {
        window.initMapCallback = null;
      }
    };
  };

  const initMap = () => {
    if (!mapRef.current || !window.google || branches.length === 0) {
      if (branches.length === 0) {
        setError('No branch locations available');
      }
      return;
    }

    try {
      const centerBranch = branches.find(b => b.city === 'Jamshedpur') || branches[0];
      const center = centerBranch?.coordinates || defaultCenter;

      const map = new window.google.maps.Map(mapRef.current, {
        center,
        zoom: branches.length > 1 ? 5 : 14, // Zoom out for multiple branches
        styles: mapStyles,
        disableDefaultUI: true,
        zoomControl: true,
        zoomControlOptions: {
          position: window.google.maps.ControlPosition.RIGHT_BOTTOM
        },
        streetViewControl: false,
        mapTypeControl: false,
        fullscreenControl: true,
        fullscreenControlOptions: {
          position: window.google.maps.ControlPosition.RIGHT_BOTTOM
        }
      });

      setMapInstance(map);
      markersRef.current = [];
      infoWindowsRef.current = [];

      // Create a LatLngBounds object to fit all markers
      const bounds = new window.google.maps.LatLngBounds();

      branches.forEach((branch, index) => {
        if (!branch.coordinates) return;

        // Extend bounds to include this branch
        bounds.extend(branch.coordinates);

        // Create marker
        const marker = new window.google.maps.Marker({
          position: branch.coordinates,
          map,
          title: `E-Digital India - ${branch.city}`,
          animation: window.google.maps.Animation.DROP,
          icon: {
            path: window.google.maps.SymbolPath.CIRCLE,
            fillColor: getMarkerColor(branch.city),
            fillOpacity: 0.9,
            strokeWeight: 2,
            strokeColor: '#FFFFFF',
            scale: 10
          },
          label: {
            text: '📍',
            color: '#FFFFFF',
            fontSize: '14px',
            fontWeight: 'bold'
          },
          optimized: true
        });

        // Create info window content
        const content = `
          <div class="p-4 min-w-[280px] max-w-[320px]">
            <div class="flex items-start gap-3 mb-4">
              <div class="flex-shrink-0">
                <div class="w-12 h-12 rounded-lg bg-gradient-to-r from-blue-600 to-blue-800 flex items-center justify-center">
                  <span class="text-white text-sm font-bold">${branch.city.charAt(0)}</span>
                </div>
              </div>
              <div class="flex-1">
                <h3 class="font-bold text-gray-900 text-lg mb-1">
                  ${branch.city}
                  ${branch.city === 'Chennai' ? 
                    '<span class="ml-2 text-xs bg-yellow-500 text-white px-2 py-1 rounded">Head Office</span>' : ''}
                </h3>
                <p class="text-gray-600 text-sm">${branch.address}</p>
              </div>
            </div>
            
            <div class="space-y-3 border-t pt-4">
              <a href="tel:${branch.phone}" 
                 class="flex items-center gap-2 text-blue-600 hover:text-blue-800 no-underline">
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                </svg>
                <span class="text-sm font-medium">${branch.phone}</span>
              </a>
              
              <a href="mailto:${branch.email}" 
                 class="flex items-center gap-2 text-blue-600 hover:text-blue-800 no-underline">
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                </svg>
                <span class="text-sm font-medium truncate">${branch.email}</span>
              </a>
            </div>
            
            <div class="mt-6 pt-4 border-t">
              <a href="${branch.mapUrl || '#'}" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 class="block w-full text-center bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold py-2 px-4 rounded-lg transition-colors no-underline">
                Get Directions
              </a>
            </div>
          </div>
        `;

        const infoWindow = new window.google.maps.InfoWindow({
          content,
          maxWidth: 320
        });

        markersRef.current.push(marker);
        infoWindowsRef.current.push(infoWindow);

        // Add click listener to marker
        marker.addListener('click', () => {
          // Close all other info windows
          infoWindowsRef.current.forEach(iw => iw.close());
          
          // Open this info window
          infoWindow.open(map, marker);
          
          // Center map on this marker with animation
          map.panTo(branch.coordinates);
          if (branches.length > 1) {
            map.setZoom(14);
          }
        });
      });

      // Fit bounds to show all markers
      if (branches.length > 1) {
        map.fitBounds(bounds, { 
          padding: { top: 50, right: 50, bottom: 50, left: 50 }
        });
        
        // Set minimum zoom level
        const listener = window.google.maps.event.addListener(map, 'idle', () => {
          if (map.getZoom() > 15) map.setZoom(15);
          if (map.getZoom() < 4) map.setZoom(4);
          window.google.maps.event.removeListener(listener);
        });
      }

      // Add click listener to map to close all info windows
      map.addListener('click', () => {
        infoWindowsRef.current.forEach(iw => iw.close());
      });

      // Add resize listener to handle window resize
      const resizeListener = window.google.maps.event.addDomListener(window, 'resize', () => {
        window.google.maps.event.trigger(map, 'resize');
        if (branches.length > 1) {
          map.fitBounds(bounds, { 
            padding: { top: 50, right: 50, bottom: 50, left: 50 }
          });
        }
      });

      // Store listener for cleanup
      markersRef.current.resizeListener = resizeListener;

    } catch (err) {
      console.error('Error initializing map:', err);
      setError('Failed to initialize map. Please try again.');
    }
  };

  // Cleanup function
  const cleanup = () => {
    // Clear markers
    markersRef.current.forEach(marker => {
      if (marker) marker.setMap(null);
    });
    markersRef.current = [];

    // Clear info windows
    infoWindowsRef.current.forEach(infoWindow => {
      if (infoWindow) infoWindow.close();
    });
    infoWindowsRef.current = [];

    // Remove resize listener
    if (markersRef.current.resizeListener) {
      window.google.maps.event.removeListener(markersRef.current.resizeListener);
    }

    // Remove map instance
    setMapInstance(null);
  };

  // Initialize map on mount
  useEffect(() => {
    loadGoogleMaps();

    // Cleanup on unmount
    return () => {
      cleanup();
      const script = document.querySelector('script[src*="maps.googleapis.com"]');
      if (script) {
        document.head.removeChild(script);
      }
    };
  }, []);

  // Re-initialize map when branches change
  useEffect(() => {
    if (mapLoaded && mapInstance && branches.length > 0) {
      cleanup();
      initMap();
    }
  }, [branches, mapLoaded]);

  // Loading state
  if (!mapLoaded && !error) {
    return (
      <div className="h-full w-full bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl flex flex-col items-center justify-center p-8">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600 mb-4"></div>
        <p className="text-gray-600 text-lg font-medium">Loading map...</p>
        <p className="text-gray-500 text-sm mt-2">This may take a moment</p>
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div className="h-full w-full bg-gradient-to-br from-red-50 to-pink-50 rounded-xl border border-red-200 flex flex-col items-center justify-center p-8 text-center">
        <MapPin className="h-16 w-16 text-red-400 mb-4" />
        <h3 className="text-xl font-semibold text-gray-900 mb-2">Unable to Load Map</h3>
        <p className="text-gray-600 mb-6 max-w-md">{error}</p>
        <div className="space-y-3">
          <div className="text-left">
            <h4 className="font-medium text-gray-900 mb-2">Our Branch Locations:</h4>
            <ul className="space-y-2">
              {branches.map((branch, index) => (
                <li key={index} className="flex items-start gap-2">
                  <MapPin className="h-4 w-4 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <span className="font-medium text-gray-900">{branch.city}</span>
                    {branch.city === 'Chennai' && (
                      <span className="ml-2 text-xs bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded">Head Office</span>
                    )}
                    <p className="text-sm text-gray-600">{branch.address}</p>
                    <p className="text-sm text-blue-600">{branch.phone}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  }

  // Map container
  return (
    <div className="relative h-full w-full rounded-xl overflow-hidden shadow-xl">
      <div 
        ref={mapRef}
        className="h-full w-full"
      />
      
      {/* Map controls overlay */}
      <div className="absolute top-4 left-4 bg-white rounded-lg shadow-lg p-3">
        <div className="flex items-center gap-2">
          <MapPin className="h-5 w-5 text-blue-600" />
          <span className="text-sm font-medium text-gray-900">Branch Locations</span>
        </div>
        <div className="mt-2 space-y-2">
          {branches.map((branch, index) => (
            <div key={index} className="flex items-center gap-2">
              <div 
                className="w-3 h-3 rounded-full" 
                style={{ backgroundColor: getMarkerColor(branch.city) }}
              />
              <span className="text-xs text-gray-700">{branch.city}</span>
            </div>
          ))}
        </div>
      </div>
      
      {/* Attribution */}
      <div className="absolute bottom-2 right-2 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-1 shadow-sm">
        <p className="text-xs text-gray-600">
          <a 
            href="https://maps.google.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800"
          >
            Google Maps
          </a>
        </p>
      </div>
    </div>
  );
};

export default Map;