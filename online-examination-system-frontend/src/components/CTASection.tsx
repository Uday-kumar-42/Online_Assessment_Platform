
import React from 'react';
import { Button } from '@/components/ui/button';
import { CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const CTASection = () => {
  return (
    <section id="pricing" className="section-padding bg-hero-gradient relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="mb-6">Ready to Get Started with Examify?</h2>
          <p className="text-gray-100 text-lg mb-8 max-w-2xl mx-auto">
            Join thousands of organizations worldwide who trust Examify for their online examination needs.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
              <h3 className="text-xl font-semibold mb-4">Free Plan</h3>
              <div className="text-3xl font-bold mb-6">$0<span className="text-lg font-normal">/month</span></div>
              <ul className="space-y-3 text-left mb-8">
                <li className="flex items-center">
                  <CheckCircle size={18} className="text-green-300 mr-2" />
                  <span>Up to 50 candidates</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle size={18} className="text-green-300 mr-2" />
                  <span>Basic question types</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle size={18} className="text-green-300 mr-2" />
                  <span>Email support</span>
                </li>
              </ul>
              <Link to="/signup?plan=free">
                <Button className="w-full bg-white text-primary hover:bg-gray-100">Get Started</Button>
              </Link>
            </div>
            
            <div className="bg-white/20 backdrop-blur-sm p-6 rounded-xl border border-white/30 relative">
              <div className="absolute top-0 right-0 bg-accent text-white px-3 py-1 text-sm font-semibold rounded-bl-lg rounded-tr-lg">
                Popular
              </div>
              <h3 className="text-xl font-semibold mb-4">Pro Plan</h3>
              <div className="text-3xl font-bold mb-6">$49<span className="text-lg font-normal">/month</span></div>
              <ul className="space-y-3 text-left mb-8">
                <li className="flex items-center">
                  <CheckCircle size={18} className="text-green-300 mr-2" />
                  <span>Unlimited candidates</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle size={18} className="text-green-300 mr-2" />
                  <span>All question types</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle size={18} className="text-green-300 mr-2" />
                  <span>Advanced reporting</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle size={18} className="text-green-300 mr-2" />
                  <span>Priority support</span>
                </li>
              </ul>
              <Link to="/signup?plan=pro">
                <Button className="w-full bg-accent hover:bg-accent/90">Start Free Trial</Button>
              </Link>
            </div>
          </div>
          
          <p className="text-sm text-gray-300">
            Need a custom plan? <a href="#" className="underline">Contact us</a> for enterprise pricing.
          </p>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-accent/20 rounded-full blur-3xl"></div>
    </section>
  );
};

export default CTASection;
