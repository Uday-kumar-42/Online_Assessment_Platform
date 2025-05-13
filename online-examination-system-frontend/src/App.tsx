
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Dashboard from "./pages/Dashboard";
import CreateTest from "./pages/CreateTest";
import TestPage from "./pages/TestPage";
import ResultsPage from "./pages/ResultsPage";
import FeatureDetail from "./pages/FeatureDetail";
import ForgotPassword from "./pages/ForgotPassword";

// Feature paths for easy maintenance
const featurePaths = {
  testTakers: "test-takers",
  themeBuilder: "theme-builder",
  testMakerSoftware: "test-maker",
  emailSms: "email-sms",
  examMonitor: "exam-monitor",
  questionTypes: "question-types",
};

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          
          {/* Feature detail pages */}
          <Route path="/features/:featureId" element={<FeatureDetail />} />
          
          {/* Protected routes */}
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/create-test" element={<CreateTest />} />
          <Route path="/test/:testId" element={<TestPage />} />
          <Route path="/results/:resultId" element={<ResultsPage />} />
          
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
