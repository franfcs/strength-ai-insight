
import { Link } from "react-router-dom";
import { ArrowLeft, TrendingUp, Target, Users, Award, BarChart3, Calendar, Scale, ChevronDown } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";

const PerformanceAnalytics = () => {
  const [showWorkoutProgress, setShowWorkoutProgress] = useState(false);
  
  const performanceData = {
    overallScore: 87,
    ageGroupRanking: 18,
    currentWeight: 72.5,
    weightGoal: 75,
    weightHistory: [
      { date: "Jan", weight: 68.2 },
      { date: "Feb", weight: 69.1 },
      { date: "Mar", weight: 70.8 },
      { date: "Apr", weight: 72.5 }
    ],
    improvements: [
      { exercise: "Bench Press", improvement: "+12%", timeFrame: "Last month" },
      { exercise: "Squats", improvement: "+8%", timeFrame: "Last month" },
      { exercise: "Pull-ups", improvement: "+15%", timeFrame: "Last month" }
    ],
    weakPoints: [
      { area: "Cardio Endurance", recommendation: "Add 2 cardio sessions per week" },
      { area: "Core Strength", recommendation: "Include planks and ab exercises" },
      { area: "Flexibility", recommendation: "10 min daily stretching routine" }
    ],
    benchmarks: {
      benchPress: { your: 85, average: 70, percentile: 75 },
      squat: { your: 105, average: 95, percentile: 68 },
      deadlift: { your: 130, average: 120, percentile: 72 }
    },
    workoutProgress: {
      benchPress: [
        { date: "Week 1", weight: 70, reps: 8 },
        { date: "Week 2", weight: 75, reps: 8 },
        { date: "Week 3", weight: 80, reps: 6 },
        { date: "Week 4", weight: 85, reps: 8 }
      ],
      squats: [
        { date: "Week 1", weight: 90, reps: 10 },
        { date: "Week 2", weight: 95, reps: 10 },
        { date: "Week 3", weight: 100, reps: 8 },
        { date: "Week 4", weight: 105, reps: 10 }
      ]
    }
  };

  const weeklyProgress = [
    { week: "Week 1", workouts: 3, calories: 1200, avgDuration: 45 },
    { week: "Week 2", workouts: 4, calories: 1600, avgDuration: 52 },
    { week: "Week 3", workouts: 4, calories: 1580, avgDuration: 48 },
    { week: "Week 4", workouts: 5, calories: 2100, avgDuration: 55 }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <nav className="bg-black/20 backdrop-blur-lg border-b border-white/10 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center">
            <Link to="/">
              <Button variant="ghost" size="sm" className="text-white hover:bg-white/10 mr-4">
                <ArrowLeft className="w-4 h-4" />
              </Button>
            </Link>
            <h1 className="text-2xl font-bold text-white">Performance Analytics</h1>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* AI Performance Overview */}
        <Card className="bg-gradient-to-r from-purple-600/30 to-pink-600/30 backdrop-blur-lg border-purple-300/50 mb-8">
          <CardHeader>
            <CardTitle className="text-white flex items-center">
              <Target className="w-5 h-5 mr-2" />
              AI Performance Analysis
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-white mb-2">{performanceData.overallScore}</div>
                <p className="text-white">Overall Fitness Score</p>
                <Progress value={performanceData.overallScore} className="mt-2" />
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-green-400 mb-2">Top {performanceData.ageGroupRanking}%</div>
                <p className="text-white">In Your Age Group</p>
                <Badge className="bg-green-500/20 text-green-300 mt-2">Above Average</Badge>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-400 mb-2">+11.5%</div>
                <p className="text-white">Monthly Improvement</p>
                <Badge className="bg-blue-500/20 text-blue-300 mt-2">Excellent Progress</Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Weight Tracking */}
        <Card className="bg-slate-800/90 backdrop-blur-lg border-slate-300/30 mb-8">
          <CardHeader>
            <CardTitle className="text-white flex items-center">
              <Scale className="w-5 h-5 mr-2" />
              Weight Progress
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <div className="text-center mb-4">
                  <div className="text-3xl font-bold text-white">{performanceData.currentWeight}kg</div>
                  <p className="text-slate-300">Current Weight</p>
                  <p className="text-sm text-slate-400">Goal: {performanceData.weightGoal}kg</p>
                </div>
                <Progress 
                  value={(performanceData.currentWeight / performanceData.weightGoal) * 100} 
                  className="mb-2"
                />
                <p className="text-xs text-slate-300 text-center">
                  {(performanceData.weightGoal - performanceData.currentWeight).toFixed(1)}kg to goal
                </p>
              </div>
              <div>
                <h4 className="text-white font-semibold mb-3">Weight History</h4>
                <div className="space-y-2">
                  {performanceData.weightHistory.map((entry, idx) => (
                    <div key={idx} className="flex justify-between items-center bg-slate-700/50 rounded p-2">
                      <span className="text-slate-300 text-sm">{entry.date}</span>
                      <span className="text-white font-semibold">{entry.weight}kg</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Individual Workout Progress - Collapsible */}
        <Card className="bg-slate-800/90 backdrop-blur-lg border-slate-300/30 mb-8">
          <CardHeader>
            <CardTitle 
              className="text-white flex items-center justify-between cursor-pointer"
              onClick={() => setShowWorkoutProgress(!showWorkoutProgress)}
            >
              <div className="flex items-center">
                <BarChart3 className="w-5 h-5 mr-2" />
                Individual Workout Progress
              </div>
              <ChevronDown className={`w-4 h-4 transition-transform ${showWorkoutProgress ? 'rotate-180' : ''}`} />
            </CardTitle>
          </CardHeader>
          {showWorkoutProgress && (
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-white font-semibold mb-3">Bench Press Progress</h4>
                  <div className="space-y-2">
                    {performanceData.workoutProgress.benchPress.map((entry, idx) => (
                      <div key={idx} className="flex justify-between items-center bg-slate-700/50 rounded p-3">
                        <span className="text-slate-300 text-sm">{entry.date}</span>
                        <div className="text-right">
                          <div className="text-white font-semibold">{entry.weight}kg</div>
                          <div className="text-slate-400 text-xs">{entry.reps} reps</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-3">Squats Progress</h4>
                  <div className="space-y-2">
                    {performanceData.workoutProgress.squats.map((entry, idx) => (
                      <div key={idx} className="flex justify-between items-center bg-slate-700/50 rounded p-3">
                        <span className="text-slate-300 text-sm">{entry.date}</span>
                        <div className="text-right">
                          <div className="text-white font-semibold">{entry.weight}kg</div>
                          <div className="text-slate-400 text-xs">{entry.reps} reps</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          )}
        </Card>

        {/* Strength Benchmarks */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <Card className="bg-slate-800/90 backdrop-blur-lg border-slate-300/30">
            <CardHeader>
              <CardTitle className="text-white flex items-center">
                <BarChart3 className="w-5 h-5 mr-2" />
                Strength vs Average (25-30 age group)
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {Object.entries(performanceData.benchmarks).map(([exercise, data]) => (
                <div key={exercise}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-white font-medium capitalize">{exercise.replace(/([A-Z])/g, ' $1')}</span>
                    <span className="text-green-400 font-semibold">{data.your}kg vs {data.average}kg avg</span>
                  </div>
                  <Progress value={data.percentile} className="h-3" />
                  <p className="text-xs text-slate-300 mt-1">{data.percentile}th percentile</p>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card className="bg-slate-800/90 backdrop-blur-lg border-slate-300/30">
            <CardHeader>
              <CardTitle className="text-white flex items-center">
                <TrendingUp className="w-5 h-5 mr-2" />
                Recent Improvements
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {performanceData.improvements.map((improvement, idx) => (
                <div key={idx} className="bg-slate-700/50 rounded-lg p-4">
                  <div className="flex justify-between items-center">
                    <div>
                      <h4 className="text-white font-medium">{improvement.exercise}</h4>
                      <p className="text-slate-300 text-sm">{improvement.timeFrame}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-green-400 font-bold text-lg">{improvement.improvement}</div>
                      <Badge className="bg-green-500/20 text-green-300">Improved</Badge>
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Weekly Progress */}
        <Card className="bg-slate-800/90 backdrop-blur-lg border-slate-300/30 mb-8">
          <CardHeader>
            <CardTitle className="text-white flex items-center">
              <Calendar className="w-5 h-5 mr-2" />
              Weekly Progress Trend
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {weeklyProgress.map((week, idx) => (
                <div key={idx} className="bg-slate-700/50 rounded-lg p-4 text-center">
                  <h4 className="text-white font-medium mb-3">{week.week}</h4>
                  <div className="space-y-2">
                    <div>
                      <div className="text-lg font-bold text-blue-400">{week.workouts}</div>
                      <p className="text-xs text-slate-300">Workouts</p>
                    </div>
                    <div>
                      <div className="text-lg font-bold text-orange-400">{week.calories}</div>
                      <p className="text-xs text-slate-300">Calories Burned</p>
                    </div>
                    <div>
                      <div className="text-lg font-bold text-green-400">{week.avgDuration}min</div>
                      <p className="text-xs text-slate-300">Avg Duration</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Areas for Improvement */}
        <Card className="bg-slate-800/90 backdrop-blur-lg border-slate-300/30">
          <CardHeader>
            <CardTitle className="text-white flex items-center">
              <Award className="w-5 h-5 mr-2" />
              AI Recommendations for Improvement
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {performanceData.weakPoints.map((point, idx) => (
                <div key={idx} className="bg-slate-700/50 rounded-lg p-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="text-white font-medium mb-2">{point.area}</h4>
                      <p className="text-slate-300 text-sm">{point.recommendation}</p>
                    </div>
                    <Badge variant="outline" className="border-yellow-400 text-yellow-300">
                      Focus Area
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default PerformanceAnalytics;
