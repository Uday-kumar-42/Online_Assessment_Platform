
import React from 'react';
import { Users, Palette, Code, Mail, Monitor, FileQuestion, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

interface HighlightCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  link: string;
}

const HighlightCard = ({ title, description, icon, color, link }: HighlightCardProps) => {
  return (
    <div className="highlight-card group">
      <div className={`absolute top-0 left-0 w-1 h-full bg-${color}`}></div>
      <div className="mb-4">
        <div className={`inline-flex p-3 rounded-lg bg-${color}/10`}>
          {icon}
        </div>
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <Link to={`/features/${link}`}>
        <Button variant="ghost" className="p-0 h-auto text-primary group-hover:text-accent flex items-center gap-1 transition-colors">
          Read More <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
        </Button>
      </Link>
    </div>
  );
};

const HighlightCards = () => {
  return (
    <section id="solutions" className="section-padding bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <HighlightCard
            title="Plenty of test takers"
            description="Support for thousands of simultaneous test takers with our scalable platform."
            icon={<Users size={24} className="text-primary" />}
            color="primary"
            link="test-takers"
          />
          
          <HighlightCard
            title="Advanced theme builder"
            description="Customize your exams with our powerful theme builder to match your brand."
            icon={<Palette size={24} className="text-accent" />}
            color="accent"
            link="theme-builder"
          />
          
          <HighlightCard
            title="Test maker software"
            description="Flexible builder for creating perfect assessments for any purpose."
            icon={<Code size={24} className="text-primary" />}
            color="primary"
            link="test-maker"
          />
          
          <HighlightCard
            title="Integrated email and SMS"
            description="Automatic notifications for candidates about upcoming exams and results."
            icon={<Mail size={24} className="text-accent" />}
            color="accent"
            link="email-sms"
          />
          
          <HighlightCard
            title="Exam monitor"
            description="Live monitoring of candidates with anti-cheating measures and proctoring."
            icon={<Monitor size={24} className="text-primary" />}
            color="primary"
            link="exam-monitor"
          />
          
          <HighlightCard
            title="Advance question types"
            description="Multiple formats including MCQs, coding questions, essays, and more."
            icon={<FileQuestion size={24} className="text-accent" />}
            color="accent"
            link="question-types"
          />
        </div>
      </div>
    </section>
  );
};

export default HighlightCards;
