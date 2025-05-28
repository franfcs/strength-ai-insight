
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import ExerciseTracker from "./pages/ExerciseTracker";
import NutritionTracker from "./pages/NutritionTracker";
import PerformanceAnalytics from "./pages/PerformanceAnalytics";
import CalendarView from "./pages/CalendarView";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/exercises" element={<ExerciseTracker />} />
          <Route path="/nutrition" element={<NutritionTracker />} />
          <Route path="/analytics" element={<PerformanceAnalytics />} />
          <Route path="/calendar" element={<CalendarView />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
