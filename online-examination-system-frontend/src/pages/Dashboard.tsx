
import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import DashboardLayout from '@/components/dashboard/DashboardLayout';
import { 
  BarChart, 
  FileText, 
  Users, 
  Clock, 
  CheckCircle, 
  AlertTriangle, 
  Plus 
} from 'lucide-react';

const Dashboard = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
            <p className="text-gray-500">Welcome to your Examify dashboard.</p>
          </div>
          <Link to="/create-test">
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              Create New Test
            </Button>
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Tests</CardTitle>
              <FileText className="h-4 w-4 text-gray-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">25</div>
              <p className="text-xs text-gray-500">+2 from last month</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Candidates</CardTitle>
              <Users className="h-4 w-4 text-gray-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">573</div>
              <p className="text-xs text-gray-500">+120 from last month</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Avg. Completion Time</CardTitle>
              <Clock className="h-4 w-4 text-gray-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">42m</div>
              <p className="text-xs text-gray-500">-3m from last month</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Pass Rate</CardTitle>
              <BarChart className="h-4 w-4 text-gray-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">78%</div>
              <p className="text-xs text-gray-500">+4% from last month</p>
            </CardContent>
          </Card>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-7 gap-6">
          <Card className="md:col-span-4">
            <CardHeader>
              <CardTitle>Overview</CardTitle>
              <CardDescription>Test activity for the last 30 days.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-80 flex justify-center items-center bg-gray-50 border rounded-md">
                <p className="text-gray-500">Activity chart goes here</p>
              </div>
            </CardContent>
          </Card>
          
          <Card className="md:col-span-3">
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
              <CardDescription>Latest events on your account.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                  <div>
                    <p className="font-medium">Java Programming Test completed</p>
                    <p className="text-sm text-gray-500">15 candidates submitted • 2 hours ago</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <AlertTriangle className="h-5 w-5 text-amber-500 mt-0.5" />
                  <div>
                    <p className="font-medium">Marketing Assessment pending review</p>
                    <p className="text-sm text-gray-500">5 submissions need review • 1 day ago</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                  <div>
                    <p className="font-medium">React Developer Test published</p>
                    <p className="text-sm text-gray-500">42 candidates invited • 2 days ago</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Users className="h-5 w-5 text-blue-500 mt-0.5" />
                  <div>
                    <p className="font-medium">New candidates added</p>
                    <p className="text-sm text-gray-500">68 candidates added to pool • 3 days ago</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <Card>
          <CardHeader>
            <CardTitle>Recent Tests</CardTitle>
            <CardDescription>Manage and monitor your recent tests</CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="active">
              <TabsList>
                <TabsTrigger value="active">Active</TabsTrigger>
                <TabsTrigger value="completed">Completed</TabsTrigger>
                <TabsTrigger value="draft">Drafts</TabsTrigger>
              </TabsList>
              
              <TabsContent value="active" className="space-y-4 py-4">
                <div className="rounded-md border">
                  <div className="bg-gray-50 p-4 font-medium grid grid-cols-6 text-sm">
                    <div className="col-span-2">Name</div>
                    <div>Status</div>
                    <div>Candidates</div>
                    <div>Due Date</div>
                    <div className="text-right">Actions</div>
                  </div>
                  <div className="divide-y">
                    {['Java Developer Test', 'Python Challenge', 'Marketing Assessment'].map((test, i) => (
                      <div key={i} className="grid grid-cols-6 p-4 items-center text-sm">
                        <div className="col-span-2 font-medium">{test}</div>
                        <div>
                          <span className="inline-flex items-center rounded-full bg-green-50 px-2 py-1 text-xs font-medium text-green-700">Active</span>
                        </div>
                        <div>{Math.floor(Math.random() * 50) + 10}/{Math.floor(Math.random() * 50) + 20}</div>
                        <div>{new Date(Date.now() + 86400000 * (i + 1)).toLocaleDateString()}</div>
                        <div className="text-right">
                          <Button variant="ghost" size="sm">View</Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="completed" className="py-4">
                <div className="flex items-center justify-center h-40">
                  <p className="text-gray-500">Completed tests will appear here</p>
                </div>
              </TabsContent>
              
              <TabsContent value="draft" className="py-4">
                <div className="flex items-center justify-center h-40">
                  <p className="text-gray-500">Draft tests will appear here</p>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
      
      <Outlet />
    </DashboardLayout>
  );
};

export default Dashboard;
