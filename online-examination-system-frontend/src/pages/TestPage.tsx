
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { useToast } from '@/hooks/use-toast';
import { useNavigate } from 'react-router-dom';
import { CheckCircle, ArrowRight, ArrowLeft, Clock, AlertTriangle } from 'lucide-react';

// Demo questions
const demoQuestions = [
  {
    id: '1',
    text: 'What is the capital of France?',
    type: 'multiple-choice',
    options: [
      { id: 'a', text: 'London' },
      { id: 'b', text: 'Berlin' },
      { id: 'c', text: 'Paris' },
      { id: 'd', text: 'Madrid' },
    ],
  },
  {
    id: '2',
    text: 'Which programming language is known for being used in React?',
    type: 'multiple-choice',
    options: [
      { id: 'a', text: 'Java' },
      { id: 'b', text: 'C++' },
      { id: 'c', text: 'JavaScript' },
      { id: 'd', text: 'Python' },
    ],
  },
  {
    id: '3',
    text: 'HTML stands for Hyper Text Markup Language.',
    type: 'true-false',
  },
  {
    id: '4',
    text: 'Explain the concept of component-based architecture in modern web development.',
    type: 'essay',
  },
  {
    id: '5',
    text: 'What does CSS stand for?',
    type: 'short-answer',
  },
];

const TestPage = () => {
  const { testId } = useParams();
  const [questions] = useState(demoQuestions);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, any>>({});
  const [timeLeft, setTimeLeft] = useState(60 * 60); // 60 minutes in seconds
  const [warningShown, setWarningShown] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();
  
  const currentQuestion = questions[currentQuestionIndex];
  const progress = ((currentQuestionIndex + 1) / questions.length) * 100;
  
  // Timer logic
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          clearInterval(timer);
          handleSubmitTest();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    
    return () => clearInterval(timer);
  }, []);
  
  // Format time
  const formatTime = (seconds: number) => {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    
    const parts = [];
    if (hrs > 0) parts.push(`${hrs}h`);
    parts.push(`${mins}m`);
    parts.push(`${secs}s`);
    
    return parts.join(' ');
  };
  
  // Anti-tab switching detection
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden && !warningShown) {
        setWarningShown(true);
        toast({
          title: "Warning!",
          description: "Tab switching detected. This will be reported.",
          variant: "destructive",
        });
      }
    };
    
    document.addEventListener('visibilitychange', handleVisibilityChange);
    
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [warningShown, toast]);
  
  const handleAnswer = (value: any) => {
    setAnswers(prev => ({
      ...prev,
      [currentQuestion.id]: value,
    }));
  };
  
  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };
  
  const handlePreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };
  
  const handleSubmitTest = () => {
    // Calculate how many questions were answered
    const answeredCount = Object.keys(answers).length;
    
    toast({
      title: "Test Submitted Successfully!",
      description: `You answered ${answeredCount} out of ${questions.length} questions.`,
    });
    
    // Navigate to results page (in a real app, would submit to backend first)
    navigate('/results/demo-result');
  };
  
  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8 flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold">Demo Test</h1>
            <p className="text-gray-600">Complete all questions to submit your test</p>
          </div>
          
          <div className={`flex items-center space-x-2 ${timeLeft < 300 ? 'text-red-500' : 'text-gray-700'}`}>
            <Clock className="h-5 w-5" />
            <span className="font-medium">{formatTime(timeLeft)} left</span>
          </div>
        </div>
        
        <div className="mb-6">
          <div className="flex justify-between items-center mb-2 text-sm">
            <span>Question {currentQuestionIndex + 1} of {questions.length}</span>
            <span>{Math.floor(progress)}% Complete</span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>
        
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Question {currentQuestionIndex + 1}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="mb-6">
              <p className="text-lg font-medium">{currentQuestion.text}</p>
            </div>
            
            <div className="space-y-4">
              {currentQuestion.type === 'multiple-choice' && (
                <div className="space-y-2">
                  {currentQuestion.options?.map((option) => (
                    <div 
                      key={option.id}
                      className={`border rounded-md p-3 cursor-pointer flex items-center hover:bg-gray-50 ${
                        answers[currentQuestion.id] === option.id ? 'border-primary bg-primary/5' : ''
                      }`}
                      onClick={() => handleAnswer(option.id)}
                    >
                      <div className={`w-5 h-5 rounded-full border mr-3 flex items-center justify-center ${
                        answers[currentQuestion.id] === option.id 
                          ? 'border-primary bg-primary' 
                          : 'border-gray-300'
                      }`}>
                        {answers[currentQuestion.id] === option.id && (
                          <CheckCircle className="w-3 h-3 text-white" />
                        )}
                      </div>
                      <span>{option.text}</span>
                    </div>
                  ))}
                </div>
              )}
              
              {currentQuestion.type === 'true-false' && (
                <div className="flex space-x-4">
                  <div 
                    className={`border rounded-md px-6 py-3 cursor-pointer flex-1 text-center ${
                      answers[currentQuestion.id] === 'true' ? 'border-primary bg-primary/5' : ''
                    }`}
                    onClick={() => handleAnswer('true')}
                  >
                    True
                  </div>
                  <div 
                    className={`border rounded-md px-6 py-3 cursor-pointer flex-1 text-center ${
                      answers[currentQuestion.id] === 'false' ? 'border-primary bg-primary/5' : ''
                    }`}
                    onClick={() => handleAnswer('false')}
                  >
                    False
                  </div>
                </div>
              )}
              
              {currentQuestion.type === 'short-answer' && (
                <input 
                  type="text" 
                  className="w-full border rounded-md p-3"
                  placeholder="Enter your answer"
                  value={answers[currentQuestion.id] || ''}
                  onChange={(e) => handleAnswer(e.target.value)}
                />
              )}
              
              {currentQuestion.type === 'essay' && (
                <textarea 
                  className="w-full border rounded-md p-3 h-32"
                  placeholder="Enter your answer"
                  value={answers[currentQuestion.id] || ''}
                  onChange={(e) => handleAnswer(e.target.value)}
                />
              )}
            </div>
          </CardContent>
        </Card>
        
        {warningShown && (
          <Card className="mb-6 bg-red-50 border-red-200">
            <CardContent className="pt-6">
              <div className="flex items-start">
                <AlertTriangle className="h-5 w-5 text-red-500 mr-2 mt-0.5" />
                <div>
                  <h3 className="font-medium text-red-800">Warning: Tab Switching Detected</h3>
                  <p className="text-red-700">
                    We've detected that you left the test tab. This activity has been recorded.
                    Excessive tab switching may be considered cheating and could invalidate your test.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        )}
        
        <div className="flex justify-between">
          <Button 
            variant="outline"
            onClick={handlePreviousQuestion}
            disabled={currentQuestionIndex === 0}
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Previous
          </Button>
          
          {currentQuestionIndex < questions.length - 1 ? (
            <Button onClick={handleNextQuestion}>
              Next
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          ) : (
            <Button onClick={handleSubmitTest}>
              Submit Test
            </Button>
          )}
        </div>
        
        <div className="mt-8">
          <p className="text-sm text-gray-500 text-center">
            The timer will automatically submit your test when time expires.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TestPage;
