// components/TopSpecialties.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { specialties } from '../data/constants';

const TopSpecialties: React.FC = () => {
  const navigate = useNavigate();

  const handleSpecialtyClick = (specialtyName: string) => {
    switch (specialtyName) {
      case 'Orthopedics':
        navigate('/treatments/orthopaedic');
        break;
      case 'Oncology':
        navigate('/treatments/oncology');
        break;
      case 'Cardiac Surgery':
        navigate('/treatments/cardiac-surgery');
        break;
      case 'Plastic Surgery':
        navigate('/treatments/plastic-surgery');
        break;
      default:
        // For other specialties, stay on current page or show coming soon
        console.log(`${specialtyName} page coming soon`);
    }
  };
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Top-searched specialties</h2>
          <p className="text-lg text-gray-600">More than 2,000 clinics across 116 specialties</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {specialties.map((specialty, index) =>
          <div
            key={specialty.name}
            onClick={() => handleSpecialtyClick(specialty.name)}
            className={`${specialty.bgColor} rounded-3xl p-4 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer border border-gray-100 relative overflow-hidden h-40`}>

              {/* Header with name and clinic count */}
              <div className="mb-4 relative z-20">
                <h3 className="font-bold text-base text-gray-900 leading-tight mb-1">
                  {specialty.name}
                </h3>
                <span className="text-xs text-gray-500 font-medium">{specialty.clinics}</span>
              </div>
              
              {/* Large Background Icon - Using IMG tag */}
              <img
              src={specialty.largeBackgroundIconUrl}
              alt={`${specialty.name} icon`}
              className="absolute bottom-4 left-24 w-24 h-24 opacity-50 select-none pointer-events-none object-contain" />

              
              {/* Arrow Button */}
              <div className="absolute bottom-6 right-6">
                <ArrowRight size={16} className="text-gray-400" />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>);

};

export default TopSpecialties;