
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useSearchParams, Link, useNavigate } from 'react-router-dom';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { useToast } from '@/hooks/use-toast';

const SignUp = () => {
  const [searchParams] = useSearchParams();
  const initialPlan = searchParams.get('plan') || 'free';
  const { toast } = useToast();
  const navigate = useNavigate();
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Account created successfully!",
      description: "You can now sign in with your credentials.",
    });
    // In a real app, you would register the user and then:
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-6">
        <div className="text-center">
          <Link to="/" className="flex items-center justify-center space-x-2 mb-6">
            <span className="bg-primary rounded-lg w-8 h-8 flex items-center justify-center">
              <span className="text-white font-bold">E</span>
            </span>
            <span className="font-bold text-xl text-primary">Examify</span>
          </Link>
          <h2 className="text-3xl font-bold text-gray-800">Create your account</h2>
          <p className="mt-2 text-gray-600">Begin your journey with Examify</p>
        </div>
        
        <Card>
          <CardHeader>
            <CardTitle>Sign Up</CardTitle>
            <CardDescription>Enter your information to create an account</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid gap-2">
                <Label htmlFor="name">Full Name</Label>
                <Input id="name" placeholder="John Doe" required />
              </div>
              
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="email@example.com" required />
              </div>
              
              <div className="grid gap-2">
                <Label htmlFor="password">Password</Label>
                <Input id="password" type="password" placeholder="••••••••" required />
              </div>
              
              <div className="grid gap-2">
                <Label>Select Plan</Label>
                <Tabs defaultValue={initialPlan} className="w-full">
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="free">Free</TabsTrigger>
                    <TabsTrigger value="pro">Pro</TabsTrigger>
                  </TabsList>
                  <TabsContent value="free" className="p-4 border rounded-md mt-2">
                    <p className="text-sm text-gray-600">Basic features with limited access</p>
                  </TabsContent>
                  <TabsContent value="pro" className="p-4 border rounded-md mt-2">
                    <p className="text-sm text-gray-600">Full access to all features</p>
                  </TabsContent>
                </Tabs>
              </div>
              
              <div className="grid gap-2">
                <Label htmlFor="orgName">Organization Name (Optional)</Label>
                <Input id="orgName" placeholder="Your Company" />
              </div>
              
              <div className="grid gap-2">
                <Label>Account Type</Label>
                <RadioGroup defaultValue="individual">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="individual" id="individual" />
                    <Label htmlFor="individual">Individual</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="organization" id="organization" />
                    <Label htmlFor="organization">Organization</Label>
                  </div>
                </RadioGroup>
              </div>
              
              <Button type="submit" className="w-full">Create Account</Button>
            </form>
          </CardContent>
          <CardFooter className="flex flex-col items-center">
            <p className="text-sm text-gray-600">
              Already have an account?{" "}
              <Link to="/signin" className="text-primary hover:underline">
                Sign In
              </Link>
            </p>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default SignUp;
