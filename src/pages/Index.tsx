
import { useState } from "react";
import { Link } from "react-router-dom";
import { Activity, Camera, BarChart3, Calendar, Target, Flame, Clock, ChevronRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

const Index = () => {
  const [todayStats] = useState({
    caloriesBurned: 423,
    caloriesGoal: 600,
    workoutsCompleted: 1,
    workoutsPlanned: 2,
    waterIntake: 6,
    waterGoal: 8,
    steps: 8547,
    stepsGoal: 10000
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Navigation Header */}
      <nav className="bg-black/20 backdrop-blur-lg border-b border-white/10 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-xl md:text-2xl font-bold text-white">FitTracker AI</h1>
            <div className="hidden md:flex space-x-4">
              <Link to="/exercises">
                <Button variant="ghost" size="sm" className="text-white hover:bg-white/10">
                  <Activity className="w-4 h-4 mr-2" />
                  Exercises
                </Button>
              </Link>
              <Link to="/nutrition">
                <Button variant="ghost" size="sm" className="text-white hover:bg-white/10">
                  <Camera className="w-4 h-4 mr-2" />
                  Nutrition
                </Button>
              </Link>
              <Link to="/analytics">
                <Button variant="ghost" size="sm" className="text-white hover:bg-white/10">
                  <BarChart3 className="w-4 h-4 mr-2" />
                  Analytics
                </Button>
              </Link>
              <Link to="/calendar">
                <Button variant="ghost" size="sm" className="text-white hover:bg-white/10">
                  <Calendar className="w-4 h-4 mr-2" />
                  Calendar
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 py-6">
        {/* Welcome Section */}
        <div className="mb-6">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">Good morning, Athlete! 💪</h2>
          <p className="text-blue-200">Let's crush your fitness goals today</p>
        </div>

        {/* Compact Quick Actions */}
        <div className="grid grid-cols-4 gap-2 md:gap-4 mb-6">
          <Link to="/exercises">
            <Card className="bg-gradient-to-r from-green-500 to-emerald-600 border-0 hover:scale-105 transition-all duration-200 cursor-pointer">
              <CardContent className="p-3 md:p-4 text-center">
                <Activity className="w-5 h-5 md:w-6 md:h-6 text-white mx-auto mb-1" />
                <p className="text-white font-medium text-xs md:text-sm">Workout</p>
              </CardContent>
            </Card>
          </Link>
          
          <Link to="/nutrition">
            <Card className="bg-gradient-to-r from-orange-500 to-red-500 border-0 hover:scale-105 transition-all duration-200 cursor-pointer">
              <CardContent className="p-3 md:p-4 text-center">
                <Camera className="w-5 h-5 md:w-6 md:h-6 text-white mx-auto mb-1" />
                <p className="text-white font-medium text-xs md:text-sm">Scan Food</p>
              </CardContent>
            </Card>
          </Link>
          
          <Link to="/analytics">
            <Card className="bg-gradient-to-r from-purple-500 to-pink-500 border-0 hover:scale-105 transition-all duration-200 cursor-pointer">
              <CardContent className="p-3 md:p-4 text-center">
                <BarChart3 className="w-5 h-5 md:w-6 md:h-6 text-white mx-auto mb-1" />
                <p className="text-white font-medium text-xs md:text-sm">Progress</p>
              </CardContent>
            </Card>
          </Link>
          
          <Link to="/calendar">
            <Card className="bg-gradient-to-r from-blue-500 to-cyan-500 border-0 hover:scale-105 transition-all duration-200 cursor-pointer">
              <CardContent className="p-3 md:p-4 text-center">
                <Calendar className="w-5 h-5 md:w-6 md:h-6 text-white mx-auto mb-1" />
                <p className="text-white font-medium text-xs md:text-sm">Calendar</p>
              </CardContent>
            </Card>
          </Link>
        </div>

        {/* AI Recommendations - More Prominent */}
        <Card className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-lg border-purple-300/30 mb-6">
          <CardHeader className="pb-3">
            <CardTitle className="text-white flex items-center justify-between">
              <div className="flex items-center">
                <Target className="w-5 h-5 mr-2" />
                AI Recommendations
              </div>
              <ChevronRight className="w-4 h-4 text-purple-300" />
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="bg-white/10 rounded-lg p-3">
                <h4 className="text-white font-semibold mb-1 text-sm">🎯 Today's Focus</h4>
                <p className="text-blue-200 text-xs">
                  Focus on upper body strength today. Your bench press improved 12% this month!
                </p>
              </div>
              <div className="bg-white/10 rounded-lg p-3">
                <h4 className="text-white font-semibold mb-1 text-sm">📊 Performance Insight</h4>
                <p className="text-blue-200 text-xs">
                  You're performing 18% above average for your age group (25-30). Excellent work!
                </p>
              </div>
              <div className="bg-white/10 rounded-lg p-3">
                <h4 className="text-white font-semibold mb-1 text-sm">🥗 Nutrition Tip</h4>
                <p className="text-blue-200 text-xs">
                  Add more complex carbs pre-workout for better performance.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Today's Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 mb-6">
          <Card className="bg-white/10 backdrop-blur-lg border-white/20">
            <CardHeader className="pb-2">
              <CardTitle className="text-white text-xs font-medium flex items-center">
                <Flame className="w-3 h-3 mr-1 text-orange-400" />
                Calories
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="text-lg font-bold text-white mb-1">
                {todayStats.caloriesBurned}
              </div>
              <Progress 
                value={(todayStats.caloriesBurned / todayStats.caloriesGoal) * 100} 
                className="h-1.5"
              />
              <p className="text-xs text-blue-200 mt-1">
                {Math.round(((todayStats.caloriesBurned / todayStats.caloriesGoal) * 100))}% of {todayStats.caloriesGoal}
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-lg border-white/20">
            <CardHeader className="pb-2">
              <CardTitle className="text-white text-xs font-medium flex items-center">
                <Target className="w-3 h-3 mr-1 text-green-400" />
                Workouts
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="text-lg font-bold text-white mb-1">
                {todayStats.workoutsCompleted}/{todayStats.workoutsPlanned}
              </div>
              <Progress 
                value={(todayStats.workoutsCompleted / todayStats.workoutsPlanned) * 100} 
                className="h-1.5"
              />
              <p className="text-xs text-blue-200 mt-1">
                {todayStats.workoutsPlanned - todayStats.workoutsCompleted} remaining
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-lg border-white/20">
            <CardHeader className="pb-2">
              <CardTitle className="text-white text-xs font-medium flex items-center">
                <Activity className="w-3 h-3 mr-1 text-blue-400" />
                Steps
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="text-lg font-bold text-white mb-1">
                {(todayStats.steps / 1000).toFixed(1)}k
              </div>
              <Progress 
                value={(todayStats.steps / todayStats.stepsGoal) * 100} 
                className="h-1.5"
              />
              <p className="text-xs text-blue-200 mt-1">
                {((todayStats.stepsGoal - todayStats.steps) / 1000).toFixed(1)}k to go
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-lg border-white/20">
            <CardHeader className="pb-2">
              <CardTitle className="text-white text-xs font-medium flex items-center">
                <Clock className="w-3 h-3 mr-1 text-cyan-400" />
                Water
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="text-lg font-bold text-white mb-1">
                {todayStats.waterIntake}/{todayStats.waterGoal}
              </div>
              <Progress 
                value={(todayStats.waterIntake / todayStats.waterGoal) * 100} 
                className="h-1.5"
              />
              <p className="text-xs text-blue-200 mt-1">
                {todayStats.waterGoal - todayStats.waterIntake} cups left
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Recent Activity */}
        <Card className="bg-white/10 backdrop-blur-lg border-white/20">
          <CardHeader className="pb-3">
            <CardTitle className="text-white text-sm">Recent Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-2 bg-white/5 rounded-lg">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
                  <div>
                    <p className="text-white font-medium text-sm">Push Day Workout</p>
                    <p className="text-blue-200 text-xs">45 min • 423 cal</p>
                  </div>
                </div>
                <span className="text-blue-200 text-xs">2h ago</span>
              </div>
              
              <div className="flex items-center justify-between p-2 bg-white/5 rounded-lg">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-orange-400 rounded-full mr-2"></div>
                  <div>
                    <p className="text-white font-medium text-sm">Protein Shake</p>
                    <p className="text-blue-200 text-xs">320 cal • 25g protein</p>
                  </div>
                </div>
                <span className="text-blue-200 text-xs">4h ago</span>
              </div>
              
              <div className="flex items-center justify-between p-2 bg-white/5 rounded-lg">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mr-2"></div>
                  <div>
                    <p className="text-white font-medium text-sm">Morning Run</p>
                    <p className="text-blue-200 text-xs">30 min • 5.2km</p>
                  </div>
                </div>
                <span className="text-blue-200 text-xs">Yesterday</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Index;
