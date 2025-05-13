
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { CheckCircle, XCircle, Download, FileText, Home } from 'lucide-react';
import { Progress } from '@/components/ui/progress';

const ResultsPage = () => {
  const { resultId } = useParams();
  
  // Demo result data
  const result = {
    score: 80,
    totalQuestions: 5,
    correctAnswers: 4,
    timeTaken: '45 minutes',
    passingScore: 70,
    status: 'passed',
    date: new Date().toLocaleDateString(),
    testName: 'Demo Test',
    candidateName: 'John Doe',
  };
  
  // Demo questions and answers
  const questionsWithAnswers = [
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
      correctAnswer: 'c',
      userAnswer: 'c',
      isCorrect: true,
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
      correctAnswer: 'c',
      userAnswer: 'c',
      isCorrect: true,
    },
    {
      id: '3',
      text: 'HTML stands for Hyper Text Markup Language.',
      type: 'true-false',
      correctAnswer: 'true',
      userAnswer: 'true',
      isCorrect: true,
    },
    {
      id: '4',
      text: 'Explain the concept of component-based architecture in modern web development.',
      type: 'essay',
      userAnswer: 'Component-based architecture is an approach where the application is built from reusable, self-contained components. Each component has its own interface, functionality, and state.',
      feedback: 'Good explanation but could provide more examples.',
      isCorrect: true,
    },
    {
      id: '5',
      text: 'What does CSS stand for?',
      type: 'short-answer',
      correctAnswer: 'Cascading Style Sheets',
      userAnswer: 'Cascading Style Sheet',
      isCorrect: false,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8 flex flex-col md:flex-row justify-between items-start md:items-center">
          <div>
            <h1 className="text-2xl font-bold">Test Results</h1>
            <p className="text-gray-600">{result.testName} • {result.date}</p>
          </div>
          
          <div className="mt-4 md:mt-0 flex space-x-3">
            <Button variant="outline" className="flex items-center gap-2">
              <Download className="h-4 w-4" />
              Download PDF
            </Button>
            <Link to="/">
              <Button variant="outline" className="flex items-center gap-2">
                <Home className="h-4 w-4" />
                Home
              </Button>
            </Link>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle>Score Summary</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center h-24 w-24 rounded-full bg-primary/10 mb-4">
                  <span className="text-3xl font-bold text-primary">{result.score}%</span>
                </div>
                <div className={`text-lg font-medium ${result.status === 'passed' ? 'text-green-600' : 'text-red-600'}`}>
                  {result.status === 'passed' ? (
                    <span className="flex items-center justify-center gap-1">
                      <CheckCircle className="h-5 w-5" /> Passed
                    </span>
                  ) : (
                    <span className="flex items-center justify-center gap-1">
                      <XCircle className="h-5 w-5" /> Failed
                    </span>
                  )}
                </div>
              </div>
              
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Your score</span>
                    <span>{result.score}%</span>
                  </div>
                  <Progress value={result.score} className="h-2" />
                </div>
                
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Passing score</span>
                    <span>{result.passingScore}%</span>
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full">
                    <div 
                      className="h-2 bg-gray-400 rounded-full" 
                      style={{ width: `${result.passingScore}%` }}
                    ></div>
                  </div>
                </div>
              </div>
              
              <div className="border-t mt-6 pt-4 grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-gray-500">Questions</span>
                  <p className="font-medium">{result.totalQuestions}</p>
                </div>
                <div>
                  <span className="text-gray-500">Correct answers</span>
                  <p className="font-medium">{result.correctAnswers}</p>
                </div>
                <div>
                  <span className="text-gray-500">Time taken</span>
                  <p className="font-medium">{result.timeTaken}</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Candidate Information</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <span className="text-gray-500 text-sm">Name</span>
                  <p className="font-medium">{result.candidateName}</p>
                </div>
                <div>
                  <span className="text-gray-500 text-sm">Test</span>
                  <p className="font-medium">{result.testName}</p>
                </div>
                <div>
                  <span className="text-gray-500 text-sm">Date Completed</span>
                  <p className="font-medium">{result.date}</p>
                </div>
                <div>
                  <span className="text-gray-500 text-sm">Time Taken</span>
                  <p className="font-medium">{result.timeTaken}</p>
                </div>
                <div>
                  <span className="text-gray-500 text-sm">Reference ID</span>
                  <p className="font-medium">#{resultId}</p>
                </div>
              </div>
              
              <div className="mt-6 pt-4 border-t">
                <div className="flex items-center gap-2 text-primary">
                  <FileText className="h-4 w-4" />
                  <span className="font-medium">View detailed certificate</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Answers Review</CardTitle>
            <CardDescription>See what you got right and wrong</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-8">
              {questionsWithAnswers.map((question, index) => (
                <div key={question.id} className="border-b pb-6 last:border-0">
                  <div className="flex justify-between mb-2">
                    <h3 className="font-medium">Question {index + 1}</h3>
                    {question.isCorrect ? (
                      <span className="text-green-600 flex items-center">
                        <CheckCircle className="h-4 w-4 mr-1" />
                        Correct
                      </span>
                    ) : (
                      <span className="text-red-600 flex items-center">
                        <XCircle className="h-4 w-4 mr-1" />
                        Incorrect
                      </span>
                    )}
                  </div>
                  
                  <p className="mb-4">{question.text}</p>
                  
                  {question.type === 'multiple-choice' && (
                    <div className="space-y-2">
                      {question.options?.map((option) => (
                        <div 
                          key={option.id}
                          className={`border rounded-md p-3 flex items-center ${
                            option.id === question.correctAnswer 
                              ? 'border-green-200 bg-green-50' 
                              : option.id === question.userAnswer && option.id !== question.correctAnswer
                                ? 'border-red-200 bg-red-50'
                                : ''
                          }`}
                        >
                          <div className="mr-3">
                            {option.id === question.correctAnswer ? (
                              <CheckCircle className="w-5 h-5 text-green-600" />
                            ) : option.id === question.userAnswer && option.id !== question.correctAnswer ? (
                              <XCircle className="w-5 h-5 text-red-600" />
                            ) : (
                              <div className="w-5 h-5 rounded-full border border-gray-300"></div>
                            )}
                          </div>
                          <span>{option.text}</span>
                        </div>
                      ))}
                    </div>
                  )}
                  
                  {question.type === 'true-false' && (
                    <div className="flex space-x-4 mb-4">
                      <div 
                        className={`border rounded-md px-6 py-3 flex-1 text-center ${
                          question.correctAnswer === 'true'
                            ? 'border-green-200 bg-green-50' 
                            : question.userAnswer === 'true' && question.correctAnswer !== 'true'
                              ? 'border-red-200 bg-red-50'
                              : ''
                        }`}
                      >
                        True
                      </div>
                      <div 
                        className={`border rounded-md px-6 py-3 flex-1 text-center ${
                          question.correctAnswer === 'false'
                            ? 'border-green-200 bg-green-50' 
                            : question.userAnswer === 'false' && question.correctAnswer !== 'false'
                              ? 'border-red-200 bg-red-50'
                              : ''
                        }`}
                      >
                        False
                      </div>
                    </div>
                  )}
                  
                  {(question.type === 'short-answer' || question.type === 'essay') && (
                    <div className="space-y-3">
                      <div>
                        <div className="text-sm text-gray-500 mb-1">Your answer:</div>
                        <div className="border rounded-md p-3 bg-gray-50">{question.userAnswer}</div>
                      </div>
                      
                      {question.type === 'short-answer' && (
                        <div>
                          <div className="text-sm text-gray-500 mb-1">Correct answer:</div>
                          <div className="border rounded-md p-3 bg-green-50 border-green-200">{question.correctAnswer}</div>
                        </div>
                      )}
                      
                      {question.feedback && (
                        <div>
                          <div className="text-sm text-gray-500 mb-1">Feedback:</div>
                          <div className="border rounded-md p-3 bg-blue-50 border-blue-200">{question.feedback}</div>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ResultsPage;
