
import React, { useState } from 'react';
import DashboardLayout from '@/components/dashboard/DashboardLayout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Textarea } from '@/components/ui/textarea';
import { useNavigate } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';
import { ArrowLeft, ArrowRight, Plus, Trash } from 'lucide-react';

interface Question {
  id: string;
  type: string;
  text: string;
  options?: Array<{ id: string; text: string; isCorrect: boolean }>;
  answer?: string;
}

const CreateTest = () => {
  const [step, setStep] = useState(1);
  const [testName, setTestName] = useState('');
  const [testDescription, setTestDescription] = useState('');
  const [duration, setDuration] = useState('60');
  const [passingScore, setPassingScore] = useState('70');
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState<Question>({
    id: '1',
    type: 'multiple-choice',
    text: '',
    options: [
      { id: '1', text: '', isCorrect: false },
      { id: '2', text: '', isCorrect: false },
      { id: '3', text: '', isCorrect: false },
      { id: '4', text: '', isCorrect: false }
    ]
  });
  
  const { toast } = useToast();
  const navigate = useNavigate();
  
  const handleAddQuestion = () => {
    setQuestions([...questions, currentQuestion]);
    const newId = (questions.length + 2).toString();
    setCurrentQuestion({
      id: newId,
      type: 'multiple-choice',
      text: '',
      options: [
        { id: '1', text: '', isCorrect: false },
        { id: '2', text: '', isCorrect: false },
        { id: '3', text: '', isCorrect: false },
        { id: '4', text: '', isCorrect: false }
      ]
    });
  };
  
  const handleQuestionTypeChange = (type: string) => {
    if (type === 'multiple-choice') {
      setCurrentQuestion({
        ...currentQuestion,
        type,
        options: [
          { id: '1', text: '', isCorrect: false },
          { id: '2', text: '', isCorrect: false },
          { id: '3', text: '', isCorrect: false },
          { id: '4', text: '', isCorrect: false }
        ],
        answer: undefined
      });
    } else {
      setCurrentQuestion({
        ...currentQuestion,
        type,
        options: undefined,
        answer: ''
      });
    }
  };
  
  const handleOptionChange = (id: string, text: string) => {
    if (currentQuestion.options) {
      setCurrentQuestion({
        ...currentQuestion,
        options: currentQuestion.options.map(opt => 
          opt.id === id ? { ...opt, text } : opt
        )
      });
    }
  };
  
  const handleCorrectChange = (id: string) => {
    if (currentQuestion.options) {
      setCurrentQuestion({
        ...currentQuestion,
        options: currentQuestion.options.map(opt => 
          opt.id === id ? { ...opt, isCorrect: true } : { ...opt, isCorrect: false }
        )
      });
    }
  };
  
  const handleRemoveQuestion = (id: string) => {
    setQuestions(questions.filter(q => q.id !== id));
  };
  
  const handlePublish = () => {
    toast({
      title: "Test Published Successfully!",
      description: "Your test has been created and is ready for candidates."
    });
    navigate('/dashboard');
  };
  
  const nextStep = () => {
    if (step === 1 && (!testName || !testDescription || !duration || !passingScore)) {
      toast({
        title: "Missing information",
        description: "Please fill out all required fields.",
        variant: "destructive"
      });
      return;
    }
    
    if (step === 2 && questions.length === 0) {
      toast({
        title: "No questions added",
        description: "Please add at least one question to your test.",
        variant: "destructive"
      });
      return;
    }
    
    setStep(step + 1);
  };
  
  const prevStep = () => setStep(step - 1);
  
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">Create New Test</h2>
            <p className="text-gray-500">Follow the steps to create your new test.</p>
          </div>
        </div>
        
        <Card>
          <CardHeader>
            <div className="flex justify-between items-center">
              <div>
                <CardTitle>Test Creation Wizard</CardTitle>
                <CardDescription>Step {step} of 3</CardDescription>
              </div>
              <div className="w-48 bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-primary h-2 rounded-full" 
                  style={{ width: `${(step / 3) * 100}%` }}
                ></div>
              </div>
            </div>
          </CardHeader>
          
          <CardContent>
            {step === 1 && (
              <div className="space-y-4">
                <div className="grid gap-2">
                  <Label htmlFor="testName">Test Name</Label>
                  <Input 
                    id="testName" 
                    placeholder="e.g. Java Developer Assessment" 
                    value={testName}
                    onChange={(e) => setTestName(e.target.value)}
                  />
                </div>
                
                <div className="grid gap-2">
                  <Label htmlFor="testDescription">Description</Label>
                  <Textarea 
                    id="testDescription" 
                    placeholder="What is this test for?" 
                    value={testDescription}
                    onChange={(e) => setTestDescription(e.target.value)}
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="duration">Duration (minutes)</Label>
                    <Input 
                      id="duration" 
                      type="number" 
                      min="1"
                      value={duration}
                      onChange={(e) => setDuration(e.target.value)}
                    />
                  </div>
                  
                  <div className="grid gap-2">
                    <Label htmlFor="passingScore">Passing Score (%)</Label>
                    <Input 
                      id="passingScore" 
                      type="number" 
                      min="0" 
                      max="100"
                      value={passingScore}
                      onChange={(e) => setPassingScore(e.target.value)}
                    />
                  </div>
                </div>
                
                <div className="grid gap-2">
                  <Label>Test Settings</Label>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="randomize" />
                      <Label htmlFor="randomize">Randomize questions</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="preventTab" />
                      <Label htmlFor="preventTab">Prevent tab switching</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="showResults" />
                      <Label htmlFor="showResults">Show results immediately after completion</Label>
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            {step === 2 && (
              <div className="space-y-6">
                <Tabs defaultValue="add" className="w-full">
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="add">Add New Question</TabsTrigger>
                    <TabsTrigger value="list">Questions ({questions.length})</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="add" className="space-y-4 mt-4">
                    <div className="grid gap-2">
                      <Label htmlFor="questionType">Question Type</Label>
                      <Select 
                        onValueChange={handleQuestionTypeChange}
                        defaultValue="multiple-choice"
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select question type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="multiple-choice">Multiple Choice</SelectItem>
                          <SelectItem value="true-false">True/False</SelectItem>
                          <SelectItem value="short-answer">Short Answer</SelectItem>
                          <SelectItem value="essay">Essay</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="grid gap-2">
                      <Label htmlFor="questionText">Question</Label>
                      <Textarea 
                        id="questionText" 
                        placeholder="Enter your question here" 
                        value={currentQuestion.text}
                        onChange={(e) => setCurrentQuestion({...currentQuestion, text: e.target.value})}
                      />
                    </div>
                    
                    {currentQuestion.type === 'multiple-choice' && currentQuestion.options && (
                      <div className="space-y-4">
                        <Label>Answer Options</Label>
                        {currentQuestion.options.map((option) => (
                          <div key={option.id} className="flex items-center space-x-2">
                            <div className="flex items-center h-5">
                              <input 
                                type="radio" 
                                checked={option.isCorrect} 
                                onChange={() => handleCorrectChange(option.id)}
                                className="h-4 w-4 text-primary border-gray-300 focus:ring-primary"
                              />
                            </div>
                            <div className="flex-grow">
                              <Input 
                                placeholder={`Option ${option.id}`} 
                                value={option.text}
                                onChange={(e) => handleOptionChange(option.id, e.target.value)}
                              />
                            </div>
                          </div>
                        ))}
                        <p className="text-xs text-gray-500 mt-1">Select the radio button for the correct answer</p>
                      </div>
                    )}
                    
                    {currentQuestion.type === 'true-false' && (
                      <div className="space-y-2">
                        <Label>Correct Answer</Label>
                        <div className="flex space-x-4">
                          <div className="flex items-center space-x-2">
                            <input 
                              type="radio" 
                              id="answerTrue" 
                              name="trueFalse" 
                              className="h-4 w-4 text-primary border-gray-300 focus:ring-primary"
                              checked={currentQuestion.answer === 'true'}
                              onChange={() => setCurrentQuestion({...currentQuestion, answer: 'true'})}
                            />
                            <Label htmlFor="answerTrue">True</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <input 
                              type="radio" 
                              id="answerFalse" 
                              name="trueFalse" 
                              className="h-4 w-4 text-primary border-gray-300 focus:ring-primary"
                              checked={currentQuestion.answer === 'false'}
                              onChange={() => setCurrentQuestion({...currentQuestion, answer: 'false'})}
                            />
                            <Label htmlFor="answerFalse">False</Label>
                          </div>
                        </div>
                      </div>
                    )}
                    
                    {(currentQuestion.type === 'short-answer' || currentQuestion.type === 'essay') && (
                      <div className="grid gap-2">
                        <Label htmlFor="correctAnswer">Sample Answer (for grading reference)</Label>
                        <Textarea 
                          id="correctAnswer" 
                          placeholder="Enter a sample correct answer"
                          value={currentQuestion.answer || ''}
                          onChange={(e) => setCurrentQuestion({...currentQuestion, answer: e.target.value})}
                        />
                      </div>
                    )}
                    
                    <Button 
                      onClick={handleAddQuestion}
                      disabled={!currentQuestion.text || (currentQuestion.type === 'multiple-choice' && currentQuestion.options?.some(o => !o.text || !o.isCorrect))}
                      className="mt-2"
                    >
                      <Plus className="mr-2 h-4 w-4" />
                      Add Question
                    </Button>
                  </TabsContent>
                  
                  <TabsContent value="list" className="mt-4">
                    {questions.length > 0 ? (
                      <div className="space-y-4">
                        {questions.map((q, index) => (
                          <div key={q.id} className="border rounded-md p-4">
                            <div className="flex justify-between items-center mb-2">
                              <h3 className="font-medium">Question {index + 1}</h3>
                              <Button variant="ghost" size="sm" onClick={() => handleRemoveQuestion(q.id)}>
                                <Trash className="h-4 w-4" />
                              </Button>
                            </div>
                            <p className="mb-2">{q.text}</p>
                            <div className="text-sm text-gray-500">
                              Type: {q.type.replace('-', ' ')}
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="text-center py-8 text-gray-500">
                        No questions added yet. Add your first question from the "Add New Question" tab.
                      </div>
                    )}
                  </TabsContent>
                </Tabs>
              </div>
            )}
            
            {step === 3 && (
              <div className="space-y-4">
                <div className="bg-gray-50 p-6 rounded-md">
                  <h3 className="font-medium text-lg mb-2">Test Summary</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <div>
                      <div className="text-sm text-gray-500">Test Name</div>
                      <div className="font-medium">{testName}</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-500">Duration</div>
                      <div className="font-medium">{duration} minutes</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-500">Passing Score</div>
                      <div className="font-medium">{passingScore}%</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-500">Questions</div>
                      <div className="font-medium">{questions.length}</div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="text-sm text-gray-500">Description</div>
                    <div className="mt-1">{testDescription}</div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h3 className="font-medium">Share Test With Candidates</h3>
                  
                  <div className="grid gap-2">
                    <Label htmlFor="candidateEmails">Candidate Emails</Label>
                    <Textarea 
                      id="candidateEmails" 
                      placeholder="Enter email addresses separated by commas"
                    />
                    <p className="text-xs text-gray-500">
                      Each candidate will receive an email with a link to take the test
                    </p>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <Checkbox id="sendReminders" />
                    <Label htmlFor="sendReminders">Send reminders to candidates who haven't completed the test</Label>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <Checkbox id="notifyResults" />
                    <Label htmlFor="notifyResults">Notify me when candidates complete the test</Label>
                  </div>
                </div>
              </div>
            )}
          </CardContent>
          
          <CardFooter className="flex justify-between">
            {step > 1 ? (
              <Button variant="outline" onClick={prevStep}>
                <ArrowLeft className="mr-2 h-4 w-4" />
                Previous
              </Button>
            ) : (
              <div></div>
            )}
            
            {step < 3 ? (
              <Button onClick={nextStep}>
                Next
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            ) : (
              <Button onClick={handlePublish}>
                Publish Test
              </Button>
            )}
          </CardFooter>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default CreateTest;
