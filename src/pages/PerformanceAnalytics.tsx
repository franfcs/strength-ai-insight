
import { Link } from "react-router-dom";
import { ArrowLeft, TrendingUp, Target, Users, Award, BarChart3, Calendar } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";

const PerformanceAnalytics = () => {
  const performanceData = {
    overallScore: 87,
    ageGroupRanking: 18, // Top 18% of age group
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
        <Card className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-lg border-purple-300/30 mb-8">
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
                <p className="text-purple-200">Overall Fitness Score</p>
                <Progress value={performanceData.overallScore} className="mt-2" />
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-green-400 mb-2">Top {performanceData.ageGroupRanking}%</div>
                <p className="text-purple-200">In Your Age Group</p>
                <Badge className="bg-green-500/20 text-green-300 mt-2">Above Average</Badge>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-400 mb-2">+11.5%</div>
                <p className="text-purple-200">Monthly Improvement</p>
                <Badge className="bg-blue-500/20 text-blue-300 mt-2">Excellent Progress</Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Strength Benchmarks */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <Card className="bg-white/10 backdrop-blur-lg border-white/20">
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
                  <p className="text-xs text-blue-200 mt-1">{data.percentile}th percentile</p>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-lg border-white/20">
            <CardHeader>
              <CardTitle className="text-white flex items-center">
                <TrendingUp className="w-5 h-5 mr-2" />
                Recent Improvements
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {performanceData.improvements.map((improvement, idx) => (
                <div key={idx} className="bg-white/5 rounded-lg p-4">
                  <div className="flex justify-between items-center">
                    <div>
                      <h4 className="text-white font-medium">{improvement.exercise}</h4>
                      <p className="text-blue-200 text-sm">{improvement.timeFrame}</p>
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
        <Card className="bg-white/10 backdrop-blur-lg border-white/20 mb-8">
          <CardHeader>
            <CardTitle className="text-white flex items-center">
              <Calendar className="w-5 h-5 mr-2" />
              Weekly Progress Trend
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {weeklyProgress.map((week, idx) => (
                <div key={idx} className="bg-white/5 rounded-lg p-4 text-center">
                  <h4 className="text-white font-medium mb-3">{week.week}</h4>
                  <div className="space-y-2">
                    <div>
                      <div className="text-lg font-bold text-blue-400">{week.workouts}</div>
                      <p className="text-xs text-blue-200">Workouts</p>
                    </div>
                    <div>
                      <div className="text-lg font-bold text-orange-400">{week.calories}</div>
                      <p className="text-xs text-orange-200">Calories Burned</p>
                    </div>
                    <div>
                      <div className="text-lg font-bold text-green-400">{week.avgDuration}min</div>
                      <p className="text-xs text-green-200">Avg Duration</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Areas for Improvement */}
        <Card className="bg-white/10 backdrop-blur-lg border-white/20">
          <CardHeader>
            <CardTitle className="text-white flex items-center">
              <Award className="w-5 h-5 mr-2" />
              AI Recommendations for Improvement
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {performanceData.weakPoints.map((point, idx) => (
                <div key={idx} className="bg-white/5 rounded-lg p-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="text-white font-medium mb-2">{point.area}</h4>
                      <p className="text-blue-200 text-sm">{point.recommendation}</p>
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
