
import React, { useEffect, useState } from 'react';

interface CounterProps {
  end: number;
  suffix: string;
  duration?: number;
}

const Counter = ({ end, suffix, duration = 2000 }: CounterProps) => {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    // Increment count until it reaches the end value
    if (count < end) {
      const step = Math.max(1, Math.floor(end / (duration / 50)));
      const timer = setTimeout(() => {
        setCount(prev => Math.min(prev + step, end));
      }, 50);
      
      return () => clearTimeout(timer);
    }
  }, [count, end, duration]);
  
  return (
    <span className="font-bold">
      {count.toLocaleString()}{suffix}
    </span>
  );
};

const StatsSection = () => {
  // Use IntersectionObserver for triggering animations when the section is visible
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = React.useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  
  return (
    <section ref={sectionRef} className="section-padding bg-stats-gradient">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="gradient-text mb-4">Numbers Speak Aloud</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our platform has helped thousands of organizations conduct millions of assessments worldwide.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl p-8 text-center shadow-md transform hover:-translate-y-1 transition-transform">
            <div className="text-4xl md:text-5xl text-primary mb-2">
              {isVisible && <Counter end={152972} suffix="+" />}
              {!isVisible && <span className="font-bold">0+</span>}
            </div>
            <p className="text-gray-600 font-medium">Tests Conducted</p>
          </div>
          
          <div className="bg-white rounded-xl p-8 text-center shadow-md transform hover:-translate-y-1 transition-transform">
            <div className="text-4xl md:text-5xl text-accent mb-2">
              {isVisible && <Counter end={92} suffix="+" />}
              {!isVisible && <span className="font-bold">0+</span>}
            </div>
            <p className="text-gray-600 font-medium">Countries</p>
          </div>
          
          <div className="bg-white rounded-xl p-8 text-center shadow-md transform hover:-translate-y-1 transition-transform">
            <div className="text-4xl md:text-5xl text-primary mb-2">
              {isVisible && <Counter end={2000000} suffix="+" />}
              {!isVisible && <span className="font-bold">0+</span>}
            </div>
            <p className="text-gray-600 font-medium">Questions Answered</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
