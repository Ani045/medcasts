import React, { useState, useEffect } from 'react';
import { Star, MapPin, Phone, Mail, Calendar, Users, Award, CheckCircle, ChevronDown, ChevronUp, ChevronLeft, ChevronRight, Quote, Clock, Plane, Car, Shield } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const MaxOncoService = () => {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  const treatments = [
    {
      name: "Breast Cancer Surgery",
      cost: "$5,200 - $8,800",
      description: "Comprehensive breast cancer treatment including lumpectomy and mastectomy",
      duration: "2-4 hours",
      stay: "2-3 days"
    },
    {
      name: "Lung Cancer Surgery", 
      cost: "$11,000 - $17,500",
      description: "Advanced thoracic surgery including lobectomy and pneumonectomy",
      duration: "3-5 hours",
      stay: "5-7 days"
    },
    {
      name: "Colorectal Cancer Surgery",
      cost: "$9,200 - $13,500", 
      description: "Minimally invasive colorectal cancer resection with robotic assistance",
      duration: "2-4 hours",
      stay: "3-5 days"
    },
    {
      name: "Liver Cancer Surgery",
      cost: "$17,500 - $27,000",
      description: "Complex hepatectomy and liver transplant procedures",
      duration: "4-8 hours",
      stay: "7-10 days"
    },
    {
      name: "Prostate Cancer Surgery",
      cost: "$8,200 - $12,500",
      description: "Robotic-assisted radical prostatectomy with nerve preservation",
      duration: "2-3 hours",
      stay: "2-3 days"
    },
    {
      name: "Brain Tumor Surgery",
      cost: "$22,000 - $38,000",
      description: "Advanced neurosurgical tumor removal with intraoperative monitoring",
      duration: "4-8 hours",
      stay: "5-10 days"
    },
    {
      name: "Chemotherapy Treatment",
      cost: "$3,500 - $6,500",
      description: "Complete chemotherapy cycles with supportive care",
      duration: "4-6 hours",
      stay: "Day care"
    },
    {
      name: "Radiation Therapy",
      cost: "$5,200 - $9,000",
      description: "Precision radiation therapy with IMRT and IGRT technology",
      duration: "15-30 minutes",
      stay: "Outpatient"
    }
  ];

  const doctors = [
    {
      name: "Dr. Harit Chaturvedi",
      specialization: "Surgical Oncologist",
      experience: "30+ years",
      patientsTreated: "7,500+",
      rating: "4.9",
      reviews: "523",
      image: "/dr-dr-rajiv-yadav.jpg",
      qualifications: "MBBS, MS Surgery, MCh Surgical Oncology",
      expertise: ["GI Oncology", "Hepatobiliary Surgery", "Robotic Surgery"]
    },
    {
      name: "Dr. Meenu Walia",
      specialization: "Medical Oncologist",
      experience: "26+ years",
      patientsTreated: "6,200+",
      rating: "4.8",
      reviews: "445",
      image: "/dr-vandana.jpeg",
      qualifications: "MBBS, MD Medicine, DM Medical Oncology",
      expertise: ["Breast Cancer", "Targeted Therapy", "Immunotherapy"]
    },
    {
      name: "Dr. Tejinder Kataria",
      specialization: "Radiation Oncologist",
      experience: "24+ years",
      patientsTreated: "5,000+",
      rating: "4.9",
      reviews: "356",
      image: "/dr-dr-aditya-gupta.jpg",
      qualifications: "MBBS, MD Radiotherapy, Fellowship Radiation Oncology",
      expertise: ["IMRT", "IGRT", "Stereotactic Radiosurgery"]
    },
    {
      name: "Dr. Sandeep Batra",
      specialization: "Hemato-Oncologist",
      experience: "22+ years",
      patientsTreated: "4,200+",
      rating: "4.8",
      reviews: "298",
      image: "/dr-dr-i-p-s-oberoi.jpg",
      qualifications: "MBBS, MD Medicine, DM Hematology",
      expertise: ["Blood Cancers", "Bone Marrow Transplant", "Leukemia"]
    },
    {
      name: "Dr. Vineet Talwar",
      specialization: "Pediatric Oncologist",
      experience: "20+ years",
      patientsTreated: "3,600+",
      rating: "4.9",
      reviews: "267",
      image: "/dr-dheeraj.jpeg",
      qualifications: "MBBS, MD Pediatrics, DM Pediatric Oncology",
      expertise: ["Pediatric Blood Cancers", "Childhood Solid Tumors", "Stem Cell Transplant"]
    }
  ];

  const testimonials = [
    {
      name: "Robert Johnson",
      age: 62,
      country: "Australia",
      treatment: "Liver Cancer Surgery",
      rating: 5,
      story: "Max Hospital's oncology team provided exceptional care during my liver cancer treatment. Dr. Chaturvedi's expertise and the advanced facilities made my recovery smooth. The comprehensive care approach was outstanding.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      date: "Dec 2024",
      doctor: "Dr. Harit Chaturvedi"
    },
    {
      name: "Sarah Mitchell",
      age: 48,
      country: "USA",
      treatment: "Breast Cancer Surgery",
      rating: 5,
      story: "The comprehensive breast cancer treatment at Max was outstanding. Dr. Walia's personalized approach and the nursing team's care exceeded my expectations. The support throughout the treatment journey was exceptional.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
      date: "Nov 2024",
      doctor: "Dr. Meenu Walia"
    },
    {
      name: "Michael Chen",
      age: 55,
      country: "Singapore",
      treatment: "Radiation Therapy",
      rating: 5,
      story: "The precision radiation therapy at Max was exceptional. Dr. Kataria's expertise in IGRT technology ensured targeted treatment with minimal side effects. The advanced equipment and caring staff made all the difference.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      date: "Oct 2024",
      doctor: "Dr. Tejinder Kataria"
    },
    {
      name: "Emma Wilson",
      age: 8,
      country: "UK",
      treatment: "Pediatric Cancer Treatment",
      rating: 5,
      story: "Dr. Vineet Talwar and his team provided incredible care for our daughter's cancer treatment. The pediatric oncology department at Max Hospital made a difficult journey manageable with their expertise and compassion.",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=100&h=100&fit=crop&crop=face",
      date: "Sep 2024",
      doctor: "Dr. Vineet Talwar"
    },
    {
      name: "David Martinez",
      age: 45,
      country: "Mexico",
      treatment: "Blood Cancer Treatment",
      rating: 5,
      story: "Dr. Sandeep Batra's expertise in hemato-oncology saved my life. The blood cancer treatment and bone marrow transplant procedure at Max Hospital were performed with utmost precision and care.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      date: "Aug 2024",
      doctor: "Dr. Sandeep Batra"
    }
  ];

  // Slider state management
  const [currentDoctorSlide, setCurrentDoctorSlide] = useState(0);
  const [currentTestimonialSlide, setCurrentTestimonialSlide] = useState(0);
  const [doctorsPerSlide, setDoctorsPerSlide] = useState(3);
  const [testimonialsPerSlide, setTestimonialsPerSlide] = useState(2);

  // Responsive slider configuration
  useEffect(() => {
    const updateSlidesPerView = () => {
      if (window.innerWidth < 768) {
        setDoctorsPerSlide(1);
        setTestimonialsPerSlide(1);
      } else if (window.innerWidth < 1024) {
        setDoctorsPerSlide(2);
        setTestimonialsPerSlide(1);
      } else {
        setDoctorsPerSlide(3);
        setTestimonialsPerSlide(2);
      }
      setCurrentDoctorSlide(0);
      setCurrentTestimonialSlide(0);
    };

    updateSlidesPerView();
    window.addEventListener('resize', updateSlidesPerView);
    return () => window.removeEventListener('resize', updateSlidesPerView);
  }, []);

  const totalDoctorSlides = Math.ceil(doctors.length / doctorsPerSlide);
  const totalTestimonialSlides = Math.ceil(testimonials.length / testimonialsPerSlide);

  const nextDoctorSlide = () => {
    setCurrentDoctorSlide((prev) => (prev + 1) % totalDoctorSlides);
  };

  const prevDoctorSlide = () => {
    setCurrentDoctorSlide((prev) => (prev - 1 + totalDoctorSlides) % totalDoctorSlides);
  };

  const nextTestimonialSlide = () => {
    setCurrentTestimonialSlide((prev) => (prev + 1) % totalTestimonialSlides);
  };

  const prevTestimonialSlide = () => {
    setCurrentTestimonialSlide((prev) => (prev - 1 + totalTestimonialSlides) % totalTestimonialSlides);
  };

  const getDoctorGridCols = () => {
    if (doctorsPerSlide === 1) return 'grid-cols-1';
    if (doctorsPerSlide === 2) return 'grid-cols-1 md:grid-cols-2';
    return 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3';
  };

  const getTestimonialGridCols = () => {
    if (testimonialsPerSlide === 1) return 'grid-cols-1';
    return 'grid-cols-1 lg:grid-cols-2';
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          
          {/* Main Content */}
          <div className="lg:col-span-3 space-y-8">
            
            {/* Hero Section with Images */}
            <div className="bg-gradient-to-br from-teal-50 via-white to-blue-50 rounded-2xl p-6 lg:p-8 shadow-lg">
              <div className="flex items-center space-x-2 text-sm text-gray-600 mb-6">
                <span className="hover:text-teal-600 cursor-pointer">Home</span> 
                <ChevronRight className="w-4 h-4" />
                <span className="hover:text-teal-600 cursor-pointer">Specialties</span> 
                <ChevronRight className="w-4 h-4" />
                <span className="text-teal-600 font-medium">Oncology</span>
              </div>
              
              <div className="mb-6">
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 leading-tight">
                  Premier <span className="text-teal-600">Cancer Care Excellence</span>
                </h1>
                <p className="text-base sm:text-lg text-gray-600 mb-4 leading-relaxed max-w-3xl">
                  Premier cancer care with cutting-edge technology, personalized treatment protocols, and world-class medical expertise.
                </p>
              </div>
              
              {/* Image Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="relative group overflow-hidden rounded-xl shadow-lg">
                  <img 
                    src="/max.png" 
                    alt="Max Hospital - Premier Cancer Care Excellence" 
                    className="w-full h-48 sm:h-56 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute top-4 left-4 bg-teal-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                    🏆 Cancer Excellence
                  </div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="font-bold text-lg">Max Hospital</h3>
                    <p className="text-sm opacity-90">Premier Cancer Center</p>
                  </div>
                </div>
                
                <div className="grid grid-rows-2 gap-4">
                  <div className="relative group overflow-hidden rounded-xl shadow-lg">
                    <img 
                      src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=150&fit=crop" 
                      alt="Advanced Oncology Equipment" 
                      className="w-full h-24 sm:h-28 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-teal-600/80 to-transparent flex items-center">
                      <div className="text-white p-4">
                        <h4 className="font-bold text-sm">🔬 Advanced Technology</h4>
                        <p className="text-xs opacity-90">Cutting-edge Treatment</p>
                      </div>
                    </div>
                  </div>
                  <div className="relative group overflow-hidden rounded-xl shadow-lg">
                    <img 
                      src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=150&fit=crop" 
                      alt="Premier Cancer Care" 
                      className="w-full h-28 sm:h-32 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600/80 to-transparent flex items-center">
                      <div className="text-white p-4">
                        <h4 className="font-bold text-sm">🏥 Premier Care</h4>
                        <p className="text-xs opacity-90">Expert Team</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Features Grid */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition-shadow border border-teal-100">
                  <div className="text-2xl mb-2">🤖</div>
                  <div className="text-sm font-bold text-gray-900 mb-1">Robotic Surgery</div>
                  <div className="text-xs text-gray-600">Advanced Technology</div>
                </div>
                <div className="bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition-shadow border border-teal-100">
                  <div className="text-2xl mb-2">👨‍⚕️</div>
                  <div className="text-sm font-bold text-gray-900 mb-1">Expert Team</div>
                  <div className="text-xs text-gray-600">Specialist Oncologists</div>
                </div>
                <div className="bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition-shadow border border-teal-100">
                  <div className="text-2xl mb-2">📊</div>
                  <div className="text-sm font-bold text-gray-900 mb-1">99.1% Success</div>
                  <div className="text-xs text-gray-600">Proven Results</div>
                </div>
                <div className="bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition-shadow border border-teal-100">
                  <div className="text-2xl mb-2">🏆</div>
                  <div className="text-sm font-bold text-gray-900 mb-1">NABH Certified</div>
                  <div className="text-xs text-gray-600">National Standards</div>
                </div>  
              </div>
            </div>

            {/* Location & Accessibility with Google Maps */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Hospital Location & Accessibility</h2>
              
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="space-y-4">
                  <div className="flex items-center p-4 bg-teal-50 rounded-lg border border-teal-100">
                    <Plane className="w-6 h-6 text-teal-600 mr-3" />
                    <div>
                      <div className="font-semibold text-gray-900">25 minutes from Delhi Airport</div>
                      <div className="text-sm text-gray-600">IGI Airport (DEL) - Direct connectivity</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center p-4 bg-teal-50 rounded-lg border border-teal-100">
                    <Car className="w-6 h-6 text-teal-600 mr-3" />
                    <div>
                      <div className="font-semibold text-gray-900">Metro Access</div>
                      <div className="text-sm text-gray-600">Shalimar Bagh Metro</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center p-4 bg-teal-50 rounded-lg border border-teal-100">
                    <MapPin className="w-6 h-6 text-teal-600 mr-3" />
                    <div>
                      <div className="font-semibold text-gray-900">Prime Location</div>
                      <div className="text-sm text-gray-600">Shalimar Bagh, Delhi</div>
                    </div>
                  </div>
                </div>
                
                {/* Google Maps Integration */}
                <div className="bg-gray-100 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 mb-3">Hospital Location</h3>
                  <div className="bg-white rounded-lg overflow-hidden shadow-sm">
                    <iframe 
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3500.123456789!2d77.1123456!3d28.7123456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d03aaaaaaab%3A0x404085140375fa29!2sMax%20Hospital%20Shalimar%20Bagh!5e0!3m2!1sen!2sin!4v1755680098965!5m2!1sen!2sin"
                      width="100%" 
                      height="300" 
                      style={{ border: 0 }}
                      allowFullScreen="" 
                      loading="lazy" 
                      referrerPolicy="no-referrer-when-downgrade"
                      className="rounded-lg"
                    ></iframe>
                  </div>
                  <div className="mt-3 text-center">
                    <a 
                      href="https://maps.google.com/?cid=462583748879313449" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-teal-600 text-sm font-medium hover:underline"
                    >
                      View Larger Map & Get Directions
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* About Department */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">About the Department</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Max Cancer Centre is a premier comprehensive cancer care facility offering advanced surgical, medical, and radiation oncology services with world-class standards and personalized treatment approaches.
                </p>
                <p>
                  Our expert team of oncologists and cutting-edge technology provide personalized treatment plans with exceptional patient outcomes and comprehensive support throughout the treatment journey.
                </p>
              </div>
            </div>

            {/* Treatment Plans - Collapsible */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Treatment Plans</h2>
              
              <div className="space-y-4">
                <div className="border border-gray-200 rounded-xl overflow-hidden">
                  <button 
                    onClick={() => toggleSection('consultation')}
                    className="w-full p-5 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-teal-500 rounded-full mr-4"></div>
                      <span className="font-semibold text-lg">Consultation & Diagnosis</span>
                    </div>
                    {expandedSection === 'consultation' ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                  </button>
                  {expandedSection === 'consultation' && (
                    <div className="px-5 pb-5 text-gray-600 leading-relaxed">
                      Comprehensive cancer staging, advanced imaging studies, and multidisciplinary treatment planning with world-class expertise.
                    </div>
                  )}
                </div>

                <div className="border border-gray-200 rounded-xl overflow-hidden">
                  <button 
                    onClick={() => toggleSection('treatment')}
                    className="w-full p-5 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-teal-500 rounded-full mr-4"></div>
                      <span className="font-semibold text-lg">Cancer Treatment</span>
                    </div>
                    {expandedSection === 'treatment' ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                  </button>
                  {expandedSection === 'treatment' && (
                    <div className="px-5 pb-5 text-gray-600 leading-relaxed">
                      Advanced surgical procedures, chemotherapy, radiation therapy, and targeted treatments with cutting-edge technology.
                    </div>
                  )}
                </div>

                <div className="border border-gray-200 rounded-xl overflow-hidden">
                  <button 
                    onClick={() => toggleSection('recovery')}
                    className="w-full p-5 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-teal-500 rounded-full mr-4"></div>
                      <span className="font-semibold text-lg">Recovery & Support</span>
                    </div>
                    {expandedSection === 'recovery' ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                  </button>
                  {expandedSection === 'recovery' && (
                    <div className="px-5 pb-5 text-gray-600 leading-relaxed">
                      Comprehensive post-treatment care, supportive services, and rehabilitation programs with advanced monitoring systems.
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Treatment Plans - Updated Section with Teal Colors */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Treatments & Pricing</h2>
              
              <div className="space-y-4">
                {treatments.map((treatment, index) => (
                  <div key={index} className="bg-gradient-to-r from-white to-teal-50 border border-teal-200 rounded-xl p-4 hover:shadow-md transition-all duration-300">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-bold text-base text-gray-900 leading-tight">{treatment.name}</h3>
                      <div className="text-right">
                        <div className="text-lg font-bold text-teal-600">{treatment.cost}</div>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 mb-3 leading-relaxed text-sm">{treatment.description}</p>
                    
                    <div className="grid grid-cols-2 gap-2 mb-3">
                      <div className="bg-teal-50 rounded-lg p-2 text-center border border-teal-100">
                        <div className="text-teal-600 font-semibold text-xs">{treatment.duration}</div>
                        <div className="text-gray-500 text-xs">Treatment Duration</div>
                      </div>
                      <div className="bg-teal-50 rounded-lg p-2 text-center border border-teal-100">
                        <div className="text-teal-600 font-semibold text-xs">{treatment.stay}</div>
                        <div className="text-gray-500 text-xs">Hospital Stay</div>
                      </div>
                    </div>
                    
                    <button 
                      className="w-full bg-teal-600 text-white py-2 rounded-lg hover:bg-teal-700 transition-all duration-300 font-semibold shadow-md hover:shadow-lg text-sm"
                      onClick={() => window.open(`https://wa.me/911129814444?text=Hi, I'd like to know more about ${treatment.name} at Max Hospital.`, '_blank')}
                    >
                      Get Quote
                    </button>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 bg-amber-50 rounded-xl p-4 border border-amber-200">
                <div className="flex items-center mb-2">
                  <span className="text-lg mr-2">💡</span>
                  <span className="font-semibold text-amber-800">Pricing Information</span>
                </div>
                <ul className="space-y-1 text-amber-700 text-sm">
                  <li>• Costs may vary based on individual case complexity and treatment protocol</li>
                  <li>• Prices include specialist fees, hospital charges, and basic medications</li>
                  <li>• Insurance coverage and EMI options available</li>
                  <li>• Free consultation for treatment planning</li>
                </ul>
              </div>
            </div>

            {/* What's Included */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">What's Included in Our Care</h2>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-teal-50 rounded-xl p-5 border border-teal-100">
                  <div className="flex items-center mb-3">
                    <CheckCircle className="w-5 h-5 text-teal-500 mr-2" />
                    <span className="font-bold text-teal-800">Pre-treatment Care</span>
                  </div>
                  <ul className="text-teal-700 space-y-2 text-sm">
                    <li>• Comprehensive cancer staging</li>
                    <li>• Advanced imaging studies</li>
                    <li>• Multidisciplinary consultation</li>
                    <li>• Treatment planning</li>
                  </ul>
                </div>

                <div className="bg-teal-50 rounded-xl p-5 border border-teal-100">
                  <div className="flex items-center mb-3">
                    <CheckCircle className="w-5 h-5 text-teal-500 mr-2" />
                    <span className="font-bold text-teal-800">Treatment & Hospital Stay</span>
                  </div>
                  <ul className="text-teal-700 space-y-2 text-sm">
                    <li>• Surgery/chemotherapy/radiation</li>
                    <li>• Specialist oncologist fees</li>
                    <li>• Hospital bed (private room)</li>
                    <li>• Nursing care 24/7</li>
                  </ul>
                </div>

                <div className="bg-teal-50 rounded-xl p-5 border border-teal-100">
                  <div className="flex items-center mb-3">
                    <CheckCircle className="w-5 h-5 text-teal-500 mr-2" />
                    <span className="font-bold text-teal-800">Post-treatment Care</span>
                  </div>
                  <ul className="text-teal-700 space-y-2 text-sm">
                    <li>• Follow-up consultations</li>
                    <li>• Supportive care services</li>
                    <li>• Medications & supplements</li>
                    <li>• Recovery monitoring</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Enhanced Our Expert Doctors */}
            <div className="bg-gradient-to-br from-white to-teal-50 rounded-2xl shadow-lg p-6">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">Meet Our Expert Doctors</h2>
                  <p className="text-gray-600">World-class oncology specialists with proven expertise</p>
                </div>
              
                {totalDoctorSlides > 1 && (
                  <div className="flex space-x-2 mt-4 sm:mt-0">
                    <button
                      onClick={prevDoctorSlide}
                      className="bg-teal-100 hover:bg-teal-200 rounded-full p-2 transition-colors border border-teal-200"
                      disabled={currentDoctorSlide === 0}
                    >
                      <ChevronLeft size={20} className="text-teal-600" />
                    </button>
                    <button
                      onClick={nextDoctorSlide}
                      className="bg-teal-100 hover:bg-teal-200 rounded-full p-2 transition-colors border border-teal-200"
                      disabled={currentDoctorSlide === totalDoctorSlides - 1}
                    >
                      <ChevronRight size={20} className="text-teal-600" />
                    </button>
                  </div>
                )}
              </div>
              
              <div className="relative overflow-hidden">
                <div
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{ transform: `translateX(-${currentDoctorSlide * 100}%)` }}
                >
                  {Array.from({ length: totalDoctorSlides }).map((_, slideIndex) => (
                    <div key={slideIndex} className="w-full flex-shrink-0">
                      <div className={`grid gap-6 ${getDoctorGridCols()}`}>
                        {doctors
                          .slice(slideIndex * doctorsPerSlide, (slideIndex + 1) * doctorsPerSlide)
                          .map((doctor, index) => (
                            <div key={index} className="bg-white rounded-lg p-5 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer border border-gray-100 group">
                              
                              <div className="text-center mb-4">
                                <div className="relative mb-3">
                                  <img 
                                    src={doctor.image} 
                                    alt={doctor.name}
                                    className="w-20 h-20 rounded-full mx-auto object-cover border-3 border-teal-100 group-hover:border-teal-300 transition-colors duration-300"
                                  />
                                  <div className="absolute -bottom-1 -right-1 bg-teal-500 text-white rounded-full p-1">
                                    <Award className="w-3 h-3" />
                                  </div>
                                </div>
                                
                                <h3 className="font-bold text-lg text-gray-900 mb-1">{doctor.name}</h3>
                                <p className="text-teal-600 font-semibold mb-1">{doctor.specialization}</p>
                                <p className="text-gray-500 text-sm mb-2">{doctor.qualifications}</p>
                              </div>

                              <div className="grid grid-cols-2 gap-3 mb-4">
                                <div className="bg-teal-50 rounded-lg p-3 text-center">
                                  <div className="text-teal-600 font-bold text-sm">{doctor.experience}</div>
                                  <div className="text-gray-500 text-xs">Experience</div>
                                </div>
                                <div className="bg-blue-50 rounded-lg p-3 text-center">
                                  <div className="text-blue-600 font-bold text-sm">{doctor.patientsTreated}</div>
                                  <div className="text-gray-500 text-xs">Patients</div>
                                </div>
                              </div>
                              
                              <div className="flex items-center justify-center mb-4">
                                <div className="flex">
                                  {[...Array(Math.floor(parseFloat(doctor.rating)))].map((_, i) => (
                                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                                  ))}
                                </div>
                                <span className="font-bold text-gray-900 ml-1 text-sm">{doctor.rating}</span>
                                <span className="text-gray-500 text-sm ml-1">({doctor.reviews})</span>
                              </div>
                              
                              <button 
                                className="w-full bg-gradient-to-r from-teal-600 to-blue-600 text-white py-3 rounded-lg hover:from-teal-700 hover:to-blue-700 transition-all duration-300 font-semibold shadow-md hover:shadow-lg"
                                onClick={() => window.open(`https://wa.me/911129814444?text=Hi, I'd like to book an appointment with ${doctor.name} for oncology consultation.`, '_blank')}
                              >
                                Book Appointment
                              </button>
                            </div>
                          ))
                        }
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Slide Indicators */}
              {totalDoctorSlides > 1 && (
                <div className="flex justify-center mt-6 space-x-2">
                  {Array.from({ length: totalDoctorSlides }).map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentDoctorSlide(index)}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        index === currentDoctorSlide
                          ? 'bg-teal-600 scale-110'
                          : 'bg-gray-300 hover:bg-gray-400'
                      }`}
                    />
                  ))}
                </div>
              )}
            </div>

            {/* Patient Testimonials */}
            <div className="bg-gradient-to-br from-teal-50 to-blue-50 rounded-2xl shadow-lg p-6">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">Patient Success Stories</h2>
                  <p className="text-gray-600">Real experiences from our satisfied patients</p>
                </div>
              
                {totalTestimonialSlides > 1 && (
                  <div className="flex space-x-2 mt-4 sm:mt-0">
                    <button
                      onClick={prevTestimonialSlide}
                      className="bg-white hover:bg-gray-50 rounded-full p-2 transition-colors border border-gray-200 shadow-md"
                      disabled={currentTestimonialSlide === 0}
                    >
                      <ChevronLeft size={16} className="text-teal-600" />
                    </button>
                    <button
                      onClick={nextTestimonialSlide}
                      className="bg-white hover:bg-gray-50 rounded-full p-2 transition-colors border border-gray-200 shadow-md"
                      disabled={currentTestimonialSlide === totalTestimonialSlides - 1}
                    >
                      <ChevronRight size={16} className="text-teal-600" />
                    </button>
                  </div>
                )}
              </div>
              
              <div className="relative overflow-hidden">
                <div
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{ transform: `translateX(-${currentTestimonialSlide * 100}%)` }}
                >
                  {Array.from({ length: totalTestimonialSlides }).map((_, slideIndex) => (
                    <div key={slideIndex} className="w-full flex-shrink-0">
                      <div className={`grid gap-6 ${getTestimonialGridCols()}`}>
                        {testimonials
                          .slice(slideIndex * testimonialsPerSlide, (slideIndex + 1) * testimonialsPerSlide)
                          .map((testimonial, index) => (
                            <div key={index} className="bg-white rounded-xl p-5 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer border border-gray-100 group relative">
                              <div className="absolute top-4 right-4 text-teal-200 group-hover:text-teal-300 transition-colors duration-300">
                                <Quote className="w-6 h-6" />
                              </div>
                              
                              <div className="flex items-start space-x-3 mb-4">
                                <div className="relative">
                                  <img 
                                    src={testimonial.image} 
                                    alt={testimonial.name}
                                    className="w-14 h-14 rounded-full object-cover border-2 border-teal-100 group-hover:border-teal-300 transition-colors duration-300"
                                  />
                                </div>
                                
                                <div className="flex-1">
                                  <h4 className="font-bold text-lg text-gray-900 mb-1">{testimonial.name}</h4>
                                  <p className="text-gray-600 mb-2 text-sm">{testimonial.age} years, {testimonial.country}</p>
                                  <p className="text-teal-600 font-semibold bg-teal-50 px-3 py-1 rounded-full inline-block text-sm">{testimonial.treatment}</p>
                                </div>
                                
                                <div className="flex flex-col items-end">
                                  <div className="flex mb-1">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                                    ))}
                                  </div>
                                  <span className="font-bold text-gray-700 text-sm">{testimonial.rating}/5</span>
                                </div>
                              </div>
                              
                              <blockquote className="text-gray-700 leading-relaxed mb-4 italic text-sm">
                                "{testimonial.story}"
                              </blockquote>
                              
                              <div className="border-t border-gray-100 pt-3">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                  <div className="bg-gray-50 rounded-lg p-3">
                                    <span className="text-gray-500 font-medium text-xs">Treatment:</span>
                                    <p className="font-bold text-gray-700 text-sm">{testimonial.treatment}</p>
                                  </div>
                                  <div className="bg-gray-50 rounded-lg p-3">
                                    <span className="text-gray-500 font-medium text-xs">Doctor:</span>
                                    <p className="font-bold text-gray-700 text-sm">{testimonial.doctor}</p>
                                  </div>
                                </div>
                                <div className="mt-3 text-center">
                                  <span className="bg-gray-100 px-3 py-1 rounded-full text-xs font-medium text-gray-600">{testimonial.date}</span>
                                </div>
                              </div>
                            </div>
                          ))
                        }
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Slide Indicators */}
              {totalTestimonialSlides > 1 && (
                <div className="flex justify-center mt-6 space-x-2">
                  {Array.from({ length: totalTestimonialSlides }).map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentTestimonialSlide(index)}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        index === currentTestimonialSlide
                          ? 'bg-teal-600 scale-110'
                          : 'bg-gray-300 hover:bg-gray-400'
                      }`}
                    />
                  ))}
                </div>
              )}
            </div>

            {/* Know Before You Go */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Know Before You Go</h2>
              
              <div className="space-y-6">
                <div className="bg-teal-50 rounded-xl p-5 border border-teal-100">
                  <h3 className="font-bold text-teal-800 mb-3 flex items-center">
                    <Shield className="w-5 h-5 mr-2" />
                    Medical Travel Insurance
                  </h3>
                  <p className="text-teal-700 text-sm mb-3">
                    Advanced cancer treatments require comprehensive travel insurance covering surgical procedures, chemotherapy, radiation therapy, and emergency medical evacuation.
                  </p>
                  <button className="text-teal-600 text-sm font-semibold hover:underline">Get Travel Insurance</button>
                </div>

                <div className="bg-gray-50 rounded-xl p-5 border border-gray-200">
                  <h3 className="font-bold text-gray-800 mb-3">Important Guidelines</h3>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• Patients must arrive at least 2 days before treatment for pre-assessment</li>
                    <li>• Bring all medical records, pathology reports, and imaging studies</li>
                    <li>• International patients require valid passport and medical visa</li>
                    <li>• Companion/caregiver accommodation can be arranged at discounted rates</li>
                    <li>• Post-treatment follow-up and supportive care is mandatory</li>
                  </ul>
                </div>

                <div className="bg-amber-50 rounded-xl p-5 border border-amber-200">
                  <h3 className="font-bold text-amber-800 mb-3">Payment & Cancellation Policy</h3>
                  <div className="text-amber-700 text-sm space-y-2">
                    <p>• For treatments scheduled within 30 days, full payment is required</p>
                    <p>• For treatments beyond 30 days, 30% advance payment to confirm booking</p>
                    <p>• Cancellations 15+ days before treatment: 75% refund (excluding booking fee)</p>
                    <p>• Cancellations within 14 days: Non-refundable</p>
                    <p>• Emergency situations and medical complications considered case-by-case</p>
                  </div>
                </div>

                <div className="bg-blue-50 rounded-xl p-5 border border-blue-200">
                  <h3 className="font-bold text-blue-800 mb-3">Why Choose MedCasts with Max</h3>
                  <div className="grid md:grid-cols-2 gap-4 text-blue-700 text-sm">
                    <div>
                      <p>✓ Best price guaranteed</p>
                      <p>✓ No hidden booking fees</p>
                      <p>✓ 100% financial protection</p>
                    </div>
                    <div>
                      <p>✓ 24/7 patient support</p>
                      <p>✓ 4.8/5 rating from 5,000+ patients</p>
                      <p>✓ Certified medical tourism partner</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Fixed Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-8 space-y-6">
              
              {/* Main Booking Card */}
              <div className="bg-white rounded-2xl shadow-lg p-5 border border-gray-100">
                <div className="text-center mb-5">
                  <div className="text-sm text-gray-500 mb-1">Starting from</div>
                  <div className="text-3xl font-bold text-gray-900 mb-1">$4,800</div>
                  <div className="text-sm text-gray-500">Consultation from $65</div>
                </div>

                <div className="space-y-3 mb-5">
                  <button 
                    className="w-full bg-teal-600 text-white py-3 rounded-xl font-bold hover:bg-teal-700 transition duration-200 shadow-lg hover:shadow-xl"
                    onClick={() => window.open('https://wa.me/911129814444?text=Hi, I want to book an appointment for oncology consultation at Max Hospital.', '_blank')}
                  >
                    Book Consultation
                  </button>
                  <button 
                    className="w-full border-2 border-gray-300 text-gray-700 py-3 rounded-xl font-bold hover:bg-gray-50 transition duration-200"
                    onClick={() => window.open('https://wa.me/911129814444?text=Hi, I need a cost estimate for cancer treatment at Max Hospital.', '_blank')}
                  >
                    Get Cost Estimate
                  </button>
                </div>

                <div className="text-center text-sm text-gray-600 mb-4 bg-orange-50 p-3 rounded-lg border border-orange-200">
                  🔥 <strong>12+ other people</strong> are considering this treatment right now
                </div>

                <div className="space-y-3 mb-5">
                  <div className="bg-teal-50 p-3 rounded-lg border border-teal-200">
                    <div className="flex items-center text-sm text-teal-800">
                      <CheckCircle className="w-4 h-4 text-teal-600 mr-2 flex-shrink-0" />
                      <span className="font-medium">Insurance coverage available</span>
                    </div>
                  </div>
                  <div className="bg-teal-50 p-3 rounded-lg border border-teal-200">
                    <div className="flex items-center text-sm text-teal-800">
                      <CheckCircle className="w-4 h-4 text-teal-600 mr-2 flex-shrink-0" />
                      <span className="font-medium">EMI options starting $260/month</span>
                    </div>
                  </div>
                  <div className="bg-teal-50 p-3 rounded-lg border border-teal-200">
                    <div className="flex items-center text-sm text-teal-800">
                      <CheckCircle className="w-4 h-4 text-teal-600 mr-2 flex-shrink-0" />
                      <span className="font-medium">Free consultation available</span>
                    </div>
                  </div>
                </div>

                <hr className="my-5 border-gray-200" />

                <div className="space-y-3">
                  <h3 className="font-bold text-gray-900 mb-3">Quick Contact</h3>
                  <div className="flex items-center text-sm text-gray-600 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer">
                    <Phone className="w-4 h-4 mr-3 text-teal-600" />
                    <span className="font-medium">+91-11-29814444</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer">
                    <Mail className="w-4 h-4 mr-3 text-teal-600" />
                    <span className="font-medium">oncology@maxhealthcare.com</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer">
                    <MapPin className="w-4 h-4 mr-3 text-teal-600" />
                    <span className="font-medium">Shalimar Bagh, Delhi</span>
                  </div>
                </div>
              </div>

              {/* Emergency Contact Card */}
              <div className="bg-gradient-to-br from-red-50 to-red-100 border-2 border-red-200 rounded-2xl p-5">
                <h3 className="font-bold text-red-800 mb-3 flex items-center">
                  <span className="text-lg mr-2">🚨</span>
                  Emergency Care
                </h3>
                <p className="text-sm text-red-700 mb-4 leading-relaxed">
                  24/7 emergency oncology services with immediate response team and comprehensive cancer care
                </p>
                <button 
                  className="w-full bg-red-600 text-white py-3 px-4 rounded-xl font-bold hover:bg-red-700 transition duration-200 shadow-lg hover:shadow-xl"
                  onClick={() => window.open('tel:+911129814444', '_blank')}
                >
                  Emergency: +91-11-29814444
                </button>
              </div>

              {/* Additional Info Card */}
              <div className="bg-gradient-to-br from-teal-50 to-blue-50 border border-teal-200 rounded-2xl p-5">
                <h3 className="font-bold text-gray-900 mb-3 flex items-center">
                  <span className="text-lg mr-2">ℹ️</span>
                  Why Choose Us
                </h3>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-teal-500 rounded-full mr-3"></div>
                    <span>Premier Cancer Care</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-teal-500 rounded-full mr-3"></div>
                    <span>Advanced Oncology Technology</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-teal-500 rounded-full mr-3"></div>
                    <span>World-class Oncology Team</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-teal-500 rounded-full mr-3"></div>
                    <span>NABH Accredited Hospital</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default MaxOncoService;
