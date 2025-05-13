
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Play, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Dialog, DialogContent } from '@/components/ui/dialog';

const HeroSection = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <section className="relative bg-hero-gradient text-white overflow-hidden">
      <div className="container mx-auto px-6 pt-16 pb-32 md:py-28 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 max-w-lg">
            <div className="space-y-4">
              <h1 className="font-bold leading-tight">
                Your Online Testing Partner
              </h1>
              <p className="text-lg md:text-xl text-gray-100">
                Online exams system for all your testing needs. Create, deliver, and analyze tests efficiently.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/signup">
                <Button className="bg-white text-primary hover:bg-gray-100 transition-colors px-6 py-6 rounded-full font-medium text-base">
                  Create free account
                </Button>
              </Link>
              <Button 
                variant="outline" 
                className="bg-transparent border-white text-white hover:bg-white/10 transition-colors px-6 py-6 rounded-full font-medium text-base flex items-center gap-2"
                onClick={() => setIsVideoOpen(true)}
              >
                <Play size={16} className="text-white" />
                Watch video
              </Button>
            </div>
            
            <div>
              <p className="text-sm text-gray-200 mb-3">Trusted by leading organizations</p>
              <div className="flex flex-wrap gap-6">
                <div className="bg-white/20 h-8 w-20 rounded flex items-center justify-center backdrop-blur-sm">
                  <span className="text-white text-sm font-semibold">Client 1</span>
                </div>
                <div className="bg-white/20 h-8 w-20 rounded flex items-center justify-center backdrop-blur-sm">
                  <span className="text-white text-sm font-semibold">Client 2</span>
                </div>
                <div className="bg-white/20 h-8 w-20 rounded flex items-center justify-center backdrop-blur-sm">
                  <span className="text-white text-sm font-semibold">Client 3</span>
                </div>
                <div className="bg-white/20 h-8 w-20 rounded flex items-center justify-center backdrop-blur-sm">
                  <span className="text-white text-sm font-semibold">Client 4</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="hidden md:flex justify-center relative animate-float">
            <div className="relative w-full max-w-md">
              <div className="absolute -top-6 -left-6 w-16 h-16 bg-accent/30 rounded-full backdrop-blur-sm"></div>
              <div className="absolute -bottom-8 -right-8 w-20 h-20 bg-primary/30 rounded-full backdrop-blur-sm"></div>
              
              <div className="relative bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20 shadow-xl">
                <div className="aspect-[4/3] rounded-lg bg-primary/20 flex items-center justify-center overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7" 
                    alt="Person using laptop"
                    className="w-full h-full object-cover"
                  />
                  
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div 
                      className="bg-white/20 backdrop-blur-sm rounded-full p-4 cursor-pointer hover:bg-white/30 transition-colors"
                      onClick={() => setIsVideoOpen(true)}
                    >
                      <div className="bg-white rounded-full p-3">
                        <Play size={24} className="text-primary" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="wave-shape">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-background"></path>
        </svg>
      </div>
      
      {/* Video Dialog */}
      <Dialog open={isVideoOpen} onOpenChange={setIsVideoOpen}>
        <DialogContent className="sm:max-w-[800px] p-0 overflow-hidden bg-black">
          <div className="relative aspect-video">
            <button 
              onClick={() => setIsVideoOpen(false)} 
              className="absolute top-2 right-2 z-50 bg-white/20 p-1 rounded-full"
            >
              <X className="h-5 w-5 text-white" />
            </button>
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
              title="Examify Demo"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default HeroSection;
