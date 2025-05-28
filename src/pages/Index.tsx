
import { useState } from "react";
import { Link } from "react-router-dom";
import { Activity, Camera, BarChart3, Calendar, Plus, Target, Flame, Clock } from "lucide-react";
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
            <h1 className="text-2xl font-bold text-white">FitTracker AI</h1>
            <div className="flex space-x-4">
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

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-white mb-2">Good morning, Athlete! 💪</h2>
          <p className="text-blue-200">Let's crush your fitness goals today</p>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <Link to="/exercises">
            <Card className="bg-gradient-to-r from-green-500 to-emerald-600 border-0 hover:scale-105 transition-all duration-200 cursor-pointer">
              <CardContent className="p-6 text-center">
                <Plus className="w-8 h-8 text-white mx-auto mb-2" />
                <p className="text-white font-semibold">Log Workout</p>
              </CardContent>
            </Card>
          </Link>
          
          <Link to="/nutrition">
            <Card className="bg-gradient-to-r from-orange-500 to-red-500 border-0 hover:scale-105 transition-all duration-200 cursor-pointer">
              <CardContent className="p-6 text-center">
                <Camera className="w-8 h-8 text-white mx-auto mb-2" />
                <p className="text-white font-semibold">Scan Food</p>
              </CardContent>
            </Card>
          </Link>
          
          <Link to="/analytics">
            <Card className="bg-gradient-to-r from-purple-500 to-pink-500 border-0 hover:scale-105 transition-all duration-200 cursor-pointer">
              <CardContent className="p-6 text-center">
                <BarChart3 className="w-8 h-8 text-white mx-auto mb-2" />
                <p className="text-white font-semibold">View Progress</p>
              </CardContent>
            </Card>
          </Link>
          
          <Link to="/calendar">
            <Card className="bg-gradient-to-r from-blue-500 to-cyan-500 border-0 hover:scale-105 transition-all duration-200 cursor-pointer">
              <CardContent className="p-6 text-center">
                <Calendar className="w-8 h-8 text-white mx-auto mb-2" />
                <p className="text-white font-semibold">Calendar</p>
              </CardContent>
            </Card>
          </Link>
        </div>

        {/* Today's Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="bg-white/10 backdrop-blur-lg border-white/20">
            <CardHeader className="pb-3">
              <CardTitle className="text-white text-sm font-medium flex items-center">
                <Flame className="w-4 h-4 mr-2 text-orange-400" />
                Calories Burned
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white mb-2">
                {todayStats.caloriesBurned} / {todayStats.caloriesGoal}
              </div>
              <Progress 
                value={(todayStats.caloriesBurned / todayStats.caloriesGoal) * 100} 
                className="h-2"
              />
              <p className="text-xs text-blue-200 mt-2">
                {Math.round(((todayStats.caloriesBurned / todayStats.caloriesGoal) * 100))}% of goal
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-lg border-white/20">
            <CardHeader className="pb-3">
              <CardTitle className="text-white text-sm font-medium flex items-center">
                <Target className="w-4 h-4 mr-2 text-green-400" />
                Workouts
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white mb-2">
                {todayStats.workoutsCompleted} / {todayStats.workoutsPlanned}
              </div>
              <Progress 
                value={(todayStats.workoutsCompleted / todayStats.workoutsPlanned) * 100} 
                className="h-2"
              />
              <p className="text-xs text-blue-200 mt-2">
                {todayStats.workoutsPlanned - todayStats.workoutsCompleted} remaining
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-lg border-white/20">
            <CardHeader className="pb-3">
              <CardTitle className="text-white text-sm font-medium flex items-center">
                <Activity className="w-4 h-4 mr-2 text-blue-400" />
                Steps
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white mb-2">
                {todayStats.steps.toLocaleString()}
              </div>
              <Progress 
                value={(todayStats.steps / todayStats.stepsGoal) * 100} 
                className="h-2"
              />
              <p className="text-xs text-blue-200 mt-2">
                {(todayStats.stepsGoal - todayStats.steps).toLocaleString()} to go
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-lg border-white/20">
            <CardHeader className="pb-3">
              <CardTitle className="text-white text-sm font-medium flex items-center">
                <Clock className="w-4 h-4 mr-2 text-cyan-400" />
                Water Intake
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white mb-2">
                {todayStats.waterIntake} / {todayStats.waterGoal} cups
              </div>
              <Progress 
                value={(todayStats.waterIntake / todayStats.waterGoal) * 100} 
                className="h-2"
              />
              <p className="text-xs text-blue-200 mt-2">
                {todayStats.waterGoal - todayStats.waterIntake} cups remaining
              </p>
            </CardContent>
          </Card>
        </div>

        {/* AI Recommendations */}
        <Card className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-lg border-purple-300/30 mb-8">
          <CardHeader>
            <CardTitle className="text-white flex items-center">
              <Target className="w-5 h-5 mr-2" />
              AI Recommendations
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="bg-white/10 rounded-lg p-4">
                <h4 className="text-white font-semibold mb-2">🎯 Today's Focus</h4>
                <p className="text-blue-200 text-sm">
                  Based on your progress, focus on upper body strength today. Your bench press has improved 12% this month!
                </p>
              </div>
              <div className="bg-white/10 rounded-lg p-4">
                <h4 className="text-white font-semibold mb-2">📊 Performance Insight</h4>
                <p className="text-blue-200 text-sm">
                  You're performing 18% above average for your age group (25-30). Keep up the excellent work!
                </p>
              </div>
              <div className="bg-white/10 rounded-lg p-4">
                <h4 className="text-white font-semibold mb-2">🥗 Nutrition Tip</h4>
                <p className="text-blue-200 text-sm">
                  Your protein intake is optimal, but consider adding more complex carbs pre-workout for better performance.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Recent Activity */}
        <Card className="bg-white/10 backdrop-blur-lg border-white/20">
          <CardHeader>
            <CardTitle className="text-white">Recent Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                  <div>
                    <p className="text-white font-medium">Push Day Workout</p>
                    <p className="text-blue-200 text-sm">45 minutes • 423 calories</p>
                  </div>
                </div>
                <span className="text-blue-200 text-sm">2 hours ago</span>
              </div>
              
              <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-orange-400 rounded-full mr-3"></div>
                  <div>
                    <p className="text-white font-medium">Protein Shake Logged</p>
                    <p className="text-blue-200 text-sm">320 calories • 25g protein</p>
                  </div>
                </div>
                <span className="text-blue-200 text-sm">4 hours ago</span>
              </div>
              
              <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                  <div>
                    <p className="text-white font-medium">Morning Run</p>
                    <p className="text-blue-200 text-sm">30 minutes • 5.2km</p>
                  </div>
                </div>
                <span className="text-blue-200 text-sm">Yesterday</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Index;
