// components/Header.tsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Phone, ChevronDown } from 'lucide-react';

const Header: React.FC = () => {
  const navigate = useNavigate();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const treatmentPages = [
  { name: 'Orthopaedic Treatments', path: '/orthopaedic' },
  { name: 'Oncology Treatments', path: '/oncology-service' },
  { name: 'Cardiac Surgery', path: '/cardiac' },
  { name: 'BMT Treatments', path: '/bmt' },
  { name: 'Neuro Spine Surgery', path: '/neuro-spine' },
  { name: 'GI Surgery', path: '/gi-surgery' }
  ];


  const handleTreatmentClick = (path: string) => {
    navigate(path);
    setIsDropdownOpen(false);
  };

  const handleLogoClick = () => {
    navigate('/');
  };
  // Close dropdown when clicking outside
  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest('.relative')) {
        setIsDropdownOpen(false);
      }
    };

    if (isDropdownOpen) {
      document.addEventListener('click', handleClickOutside);
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isDropdownOpen]);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <div className="flex items-center cursor-pointer" onClick={handleLogoClick}>
              <img
                src="https://newoaks.s3.us-west-1.amazonaws.com/AutoDev/17785/4723b918-b02d-4e75-a063-76bcbddb0698.png"
                alt="Medcasts Logo"
                className="h-14" />
            </div>
            <nav className="hidden md:flex space-x-6 items-center">
              <a href="#" className="text-gray-700 hover:text-black transition-colors font-medium">Best Doctors</a>
              <a href="#" className="text-gray-700 hover:text-black transition-colors font-medium">Best Hospitals</a>

              {/* Treatments Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="flex items-center space-x-1 text-gray-700 hover:text-black transition-colors font-medium">

                  <span>Treatments</span>
                  <ChevronDown size={16} className={`transform transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
                </button>

                {isDropdownOpen &&
                <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                    {treatmentPages.map((treatment) =>
                  <button
                    key={treatment.path}
                    onClick={() => handleTreatmentClick(treatment.path)}
                    className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-black transition-colors">

                        {treatment.name}
                      </button>
                  )}
                  </div>
                }
              </div>

              <a href="#" className="text-gray-700 hover:text-black transition-colors font-medium">How it works?</a>
            </nav>
          </div>
          <div className="flex items-center space-x-4">
            <div className="hidden md:flex items-center space-x-2 text-gray-700">
              <Phone size={18} />
              <span className="font-medium">1-201-467-83-10</span>
            </div>
            <button className="bg-green-600 text-white px-6 py-2.5 rounded-lg hover:bg-green-700 transition-colors font-semibold shadow-sm">
              Request a call
            </button>
          </div>
        </div>
      </div>
    </header>);

};

export default Header;