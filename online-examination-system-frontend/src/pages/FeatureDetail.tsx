
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const features = {
  'test-takers': {
    title: 'Plenty of Test Takers',
    description: 'Support for thousands of simultaneous test takers with our scalable platform.',
    icon: '👥',
    longDescription: 'Examify can handle an unlimited number of test takers simultaneously. Our platform is built on a scalable cloud infrastructure that grows with your needs. Whether you need to test 10 or 10,000 candidates, our system maintains performance and reliability.',
    benefits: [
      'Supports thousands of concurrent test takers',
      'Automatically scales based on demand',
      'No performance degradation during peak times',
      'Real-time monitoring of active sessions',
      'Bandwidth optimization for reliable delivery'
    ],
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158'
  },
  'theme-builder': {
    title: 'Advanced Theme Builder',
    description: 'Customize your exams with our powerful theme builder to match your brand.',
    icon: '🎨',
    longDescription: 'Make your examinations represent your brand with our advanced theme customization. Change colors, fonts, logos and layouts to match your organization\'s identity. The intuitive drag-and-drop interface makes it easy for anyone to create beautiful, branded exam experiences.',
    benefits: [
      'Easy-to-use visual theme editor',
      'Custom logo and branding options',
      'Complete control over colors and typography',
      'Mobile-responsive theme templates',
      'Save and reuse themes across multiple exams'
    ],
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475'
  },
  'test-maker': {
    title: 'Test Maker Software',
    description: 'Flexible builder for creating perfect assessments for any purpose.',
    icon: '🧩',
    longDescription: 'Our test maker software is designed for flexibility and ease of use. Create any type of assessment with our intuitive interface. From simple quizzes to complex certification exams, our platform handles it all with powerful features that help you create effective tests quickly.',
    benefits: [
      'Drag-and-drop question builder',
      'Question bank and categorization',
      'Randomization and anti-cheating features',
      'Conditional logic for adaptive testing',
      'Import questions from Word, Excel, or PDF'
    ],
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6'
  },
  'email-sms': {
    title: 'Integrated Email and SMS',
    description: 'Automatic notifications for candidates about upcoming exams and results.',
    icon: '📩',
    longDescription: 'Communicate effectively with test takers using our integrated communication tools. Send automated emails and SMS notifications for exam invitations, reminders, and results. Custom templates make it easy to maintain consistent and professional communications.',
    benefits: [
      'Automated exam reminders and notifications',
      'Customizable email and SMS templates',
      'Scheduled communications at key milestones',
      'Personalized messages for each candidate',
      'Delivery and open rate tracking'
    ],
    image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b'
  },
  'exam-monitor': {
    title: 'Exam Monitor',
    description: 'Live monitoring of candidates with anti-cheating measures and proctoring.',
    icon: '👁️',
    longDescription: 'Maintain exam integrity with our comprehensive monitoring system. Monitor live sessions, detect suspicious behavior, and ensure test security with our advanced proctoring tools. From automated proctoring to live human supervision, we offer solutions for every security need.',
    benefits: [
      'AI-powered cheating detection',
      'Live webcam and screen monitoring',
      'Browser lockdown functionality',
      'Suspicious behavior flagging',
      'Complete session recordings for review'
    ],
    image: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7'
  },
  'question-types': {
    title: 'Advanced Question Types',
    description: 'Multiple formats including MCQs, coding questions, essays, and more.',
    icon: '❓',
    longDescription: 'Our platform supports a wide variety of question types to suit any assessment need. From standard multiple choice to complex coding challenges, you can create engaging and effective tests that accurately measure knowledge and skills.',
    benefits: [
      'Multiple choice, true/false, and matching questions',
      'Essay and free response with AI-assisted grading',
      'Code execution and evaluation in multiple languages',
      'File upload for project submissions',
      'Interactive questions with diagrams and media'
    ],
    image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1'
  }
};

const FeatureDetail = () => {
  const { featureId } = useParams();
  const feature = featureId && features[featureId as keyof typeof features];
  
  if (!feature) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-grow flex items-center justify-center">
          <div className="text-center p-6">
            <h1 className="text-3xl font-bold mb-4">Feature Not Found</h1>
            <p className="mb-6">The feature you're looking for doesn't exist.</p>
            <Link to="/">
              <Button>Back to Home</Button>
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-12">
          <div className="flex items-center mb-6">
            <Link to="/#solutions" className="text-primary hover:text-primary/80 flex items-center gap-1">
              <ArrowLeft size={16} />
              <span>Back to Features</span>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <div>
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h1 className="text-3xl md:text-4xl font-bold mb-4">{feature.title}</h1>
              <p className="text-lg text-gray-600 mb-8">{feature.description}</p>
              <div className="prose max-w-none">
                <p className="mb-6">{feature.longDescription}</p>
                
                <h3 className="text-xl font-semibold mb-4">Key Benefits</h3>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="mt-8">
                <Link to="/signup">
                  <Button size="lg">Try This Feature</Button>
                </Link>
              </div>
            </div>
            
            <div className="relative">
              <div className="rounded-lg overflow-hidden shadow-xl">
                <img 
                  src={feature.image} 
                  alt={feature.title} 
                  className="w-full h-full object-cover aspect-[4/3]"
                />
              </div>
              
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/10 rounded-full blur-xl -z-10"></div>
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-accent/10 rounded-full blur-xl -z-10"></div>
            </div>
          </div>
          
          <div className="bg-gray-50 rounded-xl p-8 mb-16">
            <h2 className="text-2xl font-semibold mb-6 text-center">Frequently Asked Questions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-semibold mb-2">How does this feature work?</h3>
                <p className="text-gray-600">Our {feature.title.toLowerCase()} system is designed to be intuitive and powerful, giving you complete control while maintaining ease of use.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-semibold mb-2">Is this included in all plans?</h3>
                <p className="text-gray-600">Basic functionality is available in all plans. Advanced features are included in Pro and Enterprise plans.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-semibold mb-2">Can I customize this feature?</h3>
                <p className="text-gray-600">Yes, extensive customization options are available to tailor this feature to your specific requirements.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-semibold mb-2">Is technical support available?</h3>
                <p className="text-gray-600">All plans include access to our knowledge base. Pro and Enterprise plans include direct technical support.</p>
              </div>
            </div>
          </div>
          
          <div className="text-center bg-gradient-to-r from-primary to-accent p-12 rounded-xl text-white">
            <h2 className="text-3xl font-bold mb-6">Ready to get started?</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Join thousands of organizations worldwide who trust Examify for their online examination needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/signup">
                <Button variant="secondary" size="lg">Start Free Trial</Button>
              </Link>
              <Link to="/#pricing">
                <Button variant="outline" className="bg-transparent border-white text-white hover:bg-white/10" size="lg">View Pricing</Button>
              </Link>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default FeatureDetail;
