
import React from 'react';
import { Award, GraduationCap, Building, School, BookOpen, Smile } from 'lucide-react';
import { Link } from 'react-router-dom';

const FeatureCard = ({ icon, title, link }: { icon: React.ReactNode, title: string, link: string }) => {
  return (
    <Link to={`/features/${link}`} className="block">
      <div className="feature-card flex flex-col items-center text-center group hover:-translate-y-1 transition-all">
        <div className="bg-primary-light p-4 rounded-full mb-4 group-hover:bg-primary/10 transition-colors">
          {icon}
        </div>
        <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">{title}</h3>
      </div>
    </Link>
  );
};

const FeaturesSection = () => {
  return (
    <section id="features" className="section-padding container mx-auto px-6">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="mb-6">Create & Deliver Exams Easily</h2>
        <p className="text-gray-600 text-lg">
          The Best Online Exam Software for all your assessment needs. Create powerful tests for any purpose.
        </p>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
        <FeatureCard 
          icon={<Award size={32} className="text-primary" />} 
          title="Promotions/Appraisals" 
          link="test-takers"
        />
        <FeatureCard 
          icon={<GraduationCap size={32} className="text-primary" />} 
          title="Training/Certifications" 
          link="theme-builder"
        />
        <FeatureCard 
          icon={<Building size={32} className="text-primary" />} 
          title="Campus Drives" 
          link="test-maker"
        />
        <FeatureCard 
          icon={<School size={32} className="text-primary" />} 
          title="Test Prep Centers" 
          link="email-sms"
        />
        <FeatureCard 
          icon={<BookOpen size={32} className="text-primary" />} 
          title="Educational Assessments" 
          link="exam-monitor"
        />
        <FeatureCard 
          icon={<Smile size={32} className="text-primary" />} 
          title="Personality Tests" 
          link="question-types"
        />
      </div>
    </section>
  );
};

export default FeaturesSection;
