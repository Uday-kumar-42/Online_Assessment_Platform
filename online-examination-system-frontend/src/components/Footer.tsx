
import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <span className="bg-primary rounded-lg w-8 h-8 flex items-center justify-center">
                <span className="text-white font-bold">E</span>
              </span>
              <span className="font-bold text-xl">Examify</span>
            </div>
            <p className="text-gray-400 mb-6">
              The complete online examination platform for educational institutions, corporations, and certification bodies.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="#features" className="text-gray-400 hover:text-white transition-colors">Features</a></li>
              <li><a href="#solutions" className="text-gray-400 hover:text-white transition-colors">Solutions</a></li>
              <li><a href="#pricing" className="text-gray-400 hover:text-white transition-colors">Pricing</a></li>
              <li><a href="#support" className="text-gray-400 hover:text-white transition-colors">Support</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-6">Resources</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Documentation</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Tutorials</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">API Reference</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-6">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3">
                <Mail size={16} className="text-primary" />
                <span className="text-gray-400">support@examify.com</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={16} className="text-primary" />
                <span className="text-gray-400">+1 (555) 123-4567</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} Examify. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
