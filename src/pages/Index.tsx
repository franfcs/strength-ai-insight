import { useState } from "react";
import { Link } from "react-router-dom";
import { Activity, Camera, BarChart3, Calendar, Target, Flame, Clock, ChevronRight, TrendingUp, Users, AlertTriangle, CheckCircle, Upload, Plus } from "lucide-react";
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

  const [averageStats] = useState({
    caloriesBurned: 350,
    workoutsCompleted: 0.7,
    steps: 6200,
    waterIntake: 4.2
  });

  const workoutInsights = [
    {
      exercise: "Bench Press",
      lastSession: "3 sets x 8 reps @ 75kg",
      insight: "You did 2 fewer reps than last week. Try starting with 70kg to maintain form.",
      type: "warning"
    },
    {
      exercise: "Squats", 
      lastSession: "4 sets x 10 reps @ 100kg",
      insight: "Great improvement! You increased weight by 5kg and maintained reps.",
      type: "success"
    }
  ];

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

        {/* Quick Food Tracker */}
        <Card className="bg-white/10 backdrop-blur-lg border-white/20 mb-6">
          <CardHeader className="pb-3">
            <CardTitle className="text-white text-sm flex items-center justify-between">
              <div className="flex items-center">
                <Camera className="w-4 h-4 mr-2" />
                Quick Food Log
              </div>
              <Link to="/nutrition">
                <ChevronRight className="w-4 h-4 text-white hover:text-blue-300" />
              </Link>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div className="text-white">
                <p className="text-lg font-bold">2,150 / 2,400 kcal</p>
                <p className="text-sm text-blue-200">250 kcal remaining</p>
              </div>
              <Link to="/nutrition">
                <Button size="sm" className="bg-blue-500 hover:bg-blue-600 text-white">
                  <Plus className="w-4 h-4 mr-2" />
                  Add Food
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>

        {/* Today's Stats - Moved to Top */}
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

        {/* Compact Quick Actions with Glass Morphism */}
        <div className="grid grid-cols-4 gap-2 md:gap-4 mb-6">
          <Link to="/exercises">
            <Card className="bg-white/10 backdrop-blur-lg border border-white/20 hover:bg-white/20 hover:scale-105 transition-all duration-200 cursor-pointer h-16">
              <CardContent className="p-2 text-center flex flex-col items-center justify-center h-full">
                <Activity className="w-4 h-4 text-white mb-1" />
                <p className="text-white font-medium text-xs">Workout</p>
              </CardContent>
            </Card>
          </Link>
          
          <Link to="/nutrition">
            <Card className="bg-white/10 backdrop-blur-lg border border-white/20 hover:bg-white/20 hover:scale-105 transition-all duration-200 cursor-pointer h-16">
              <CardContent className="p-2 text-center flex flex-col items-center justify-center h-full">
                <Camera className="w-4 h-4 text-white mb-1" />
                <p className="text-white font-medium text-xs">Scan Food</p>
              </CardContent>
            </Card>
          </Link>
          
          <Link to="/analytics">
            <Card className="bg-white/10 backdrop-blur-lg border border-white/20 hover:bg-white/20 hover:scale-105 transition-all duration-200 cursor-pointer h-16">
              <CardContent className="p-2 text-center flex flex-col items-center justify-center h-full">
                <BarChart3 className="w-4 h-4 text-white mb-1" />
                <p className="text-white font-medium text-xs">Progress</p>
              </CardContent>
            </Card>
          </Link>
          
          <Link to="/calendar">
            <Card className="bg-white/10 backdrop-blur-lg border border-white/20 hover:bg-white/20 hover:scale-105 transition-all duration-200 cursor-pointer h-16">
              <CardContent className="p-2 text-center flex flex-col items-center justify-center h-full">
                <Calendar className="w-4 h-4 text-white mb-1" />
                <p className="text-white font-medium text-xs">Calendar</p>
              </CardContent>
            </Card>
          </Link>
        </div>

        {/* AI Workout Insights */}
        <Card className="bg-slate-800/90 backdrop-blur-lg border-slate-300/30 mb-6">
          <CardHeader className="pb-3">
            <CardTitle className="text-white flex items-center justify-between">
              <div className="flex items-center">
                <Target className="w-5 h-5 mr-2" />
                AI Workout Insights
              </div>
              <ChevronRight className="w-4 h-4 text-slate-300" />
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {workoutInsights.map((insight, idx) => (
                <div key={idx} className="bg-slate-700/80 rounded-lg p-3 border border-slate-500/50">
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="text-white font-semibold text-sm flex items-center">
                      {insight.type === 'warning' ? (
                        <AlertTriangle className="w-4 h-4 mr-2 text-yellow-400" />
                      ) : (
                        <CheckCircle className="w-4 h-4 mr-2 text-green-400" />
                      )}
                      {insight.exercise}
                    </h4>
                  </div>
                  <p className="text-slate-300 text-xs mb-1">{insight.lastSession}</p>
                  <p className="text-white text-xs">{insight.insight}</p>
                </div>
              ))}
              
              <div className="bg-slate-700/80 rounded-lg p-3 border border-slate-500/50">
                <h4 className="text-white font-semibold mb-2 text-sm flex items-center">
                  <Upload className="w-4 h-4 mr-2 text-blue-400" />
                  Video Form Analysis
                </h4>
                <p className="text-white text-xs mb-2">
                  Upload workout videos for AI-powered form correction and technique tips
                </p>
                <Button size="sm" className="bg-blue-500 hover:bg-blue-600 text-white">
                  Upload Video
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Average Comparison Section - Fixed Background */}
        <Card className="bg-white/10 backdrop-blur-lg border-white/20 mb-6">
          <CardHeader className="pb-3">
            <CardTitle className="text-white text-sm flex items-center">
              <Users className="w-4 h-4 mr-2" />
              vs Average Person (Age 25-30, 70kg)
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
              <div className="bg-slate-800/60 rounded-lg p-3">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-white text-xs font-medium">Calories</span>
                  <TrendingUp className="w-3 h-3 text-green-400" />
                </div>
                <div className="text-white text-sm font-bold">
                  You: {todayStats.caloriesBurned} | Avg: {averageStats.caloriesBurned}
                </div>
                <div className="text-green-300 text-xs">
                  +{Math.round(((todayStats.caloriesBurned - averageStats.caloriesBurned) / averageStats.caloriesBurned) * 100)}% above avg
                </div>
              </div>

              <div className="bg-slate-800/60 rounded-lg p-3">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-white text-xs font-medium">Workouts</span>
                  <TrendingUp className="w-3 h-3 text-green-400" />
                </div>
                <div className="text-white text-sm font-bold">
                  You: {todayStats.workoutsCompleted} | Avg: {averageStats.workoutsCompleted}
                </div>
                <div className="text-green-300 text-xs">
                  +{Math.round(((todayStats.workoutsCompleted - averageStats.workoutsCompleted) / averageStats.workoutsCompleted) * 100)}% above avg
                </div>
              </div>

              <div className="bg-slate-800/60 rounded-lg p-3">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-white text-xs font-medium">Steps</span>
                  <TrendingUp className="w-3 h-3 text-green-400" />
                </div>
                <div className="text-white text-sm font-bold">
                  You: {(todayStats.steps / 1000).toFixed(1)}k | Avg: {(averageStats.steps / 1000).toFixed(1)}k
                </div>
                <div className="text-green-300 text-xs">
                  +{Math.round(((todayStats.steps - averageStats.steps) / averageStats.steps) * 100)}% above avg
                </div>
              </div>

              <div className="bg-slate-800/60 rounded-lg p-3">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-white text-xs font-medium">Water</span>
                  <TrendingUp className="w-3 h-3 text-green-400" />
                </div>
                <div className="text-white text-sm font-bold">
                  You: {todayStats.waterIntake} | Avg: {averageStats.waterIntake}
                </div>
                <div className="text-green-300 text-xs">
                  +{Math.round(((todayStats.waterIntake - averageStats.waterIntake) / averageStats.waterIntake) * 100)}% above avg
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

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
