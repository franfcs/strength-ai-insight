
import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ChevronLeft, ChevronRight, Activity, Utensils, Target } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const CalendarView = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  
  // Sample data for the calendar
  const workoutData = {
    "2024-01-15": { type: "Push Day", completed: true, calories: 423 },
    "2024-01-16": { type: "Pull Day", completed: true, calories: 380 },
    "2024-01-17": { type: "Rest", completed: true, calories: 0 },
    "2024-01-18": { type: "Leg Day", completed: true, calories: 456 },
    "2024-01-19": { type: "Cardio", completed: false, calories: 0 },
    "2024-01-20": { type: "Push Day", completed: false, calories: 0 },
    "2024-01-21": { type: "Rest", completed: false, calories: 0 }
  };

  const nutritionData = {
    "2024-01-15": { calories: 2180, goal: 2200, status: "good" },
    "2024-01-16": { calories: 2050, goal: 2200, status: "under" },
    "2024-01-17": { calories: 2340, goal: 2200, status: "over" },
    "2024-01-18": { calories: 2190, goal: 2200, status: "good" },
    "2024-01-19": { calories: 1980, goal: 2200, status: "under" }
  };

  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const startDate = new Date(firstDay);
    startDate.setDate(startDate.getDate() - firstDay.getDay());
    
    const days = [];
    const current = new Date(startDate);
    
    while (current <= lastDay || current.getDay() !== 0) {
      days.push(new Date(current));
      current.setDate(current.getDate() + 1);
    }
    
    return days;
  };

  const formatDateKey = (date: Date) => {
    return date.toISOString().split('T')[0];
  };

  const nextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
  };

  const prevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
  };

  const days = getDaysInMonth(currentDate);
  const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"];

  const weeklyStats = {
    workoutsCompleted: 4,
    workoutsPlanned: 6,
    avgCaloriesBurned: 314,
    consistencyScore: 67
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-cyan-900 to-slate-900">
      <nav className="bg-black/20 backdrop-blur-lg border-b border-white/10 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center">
            <Link to="/">
              <Button variant="ghost" size="sm" className="text-white hover:bg-white/10 mr-4">
                <ArrowLeft className="w-4 h-4" />
              </Button>
            </Link>
            <h1 className="text-2xl font-bold text-white">Fitness Calendar</h1>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Monthly Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="bg-white/10 backdrop-blur-lg border-white/20">
            <CardContent className="p-6 text-center">
              <Activity className="w-8 h-8 text-blue-400 mx-auto mb-2" />
              <div className="text-2xl font-bold text-white">{weeklyStats.workoutsCompleted}/{weeklyStats.workoutsPlanned}</div>
              <p className="text-blue-200 text-sm">Workouts This Week</p>
            </CardContent>
          </Card>
          
          <Card className="bg-white/10 backdrop-blur-lg border-white/20">
            <CardContent className="p-6 text-center">
              <Target className="w-8 h-8 text-orange-400 mx-auto mb-2" />
              <div className="text-2xl font-bold text-white">{weeklyStats.avgCaloriesBurned}</div>
              <p className="text-orange-200 text-sm">Avg Calories/Day</p>
            </CardContent>
          </Card>
          
          <Card className="bg-white/10 backdrop-blur-lg border-white/20">
            <CardContent className="p-6 text-center">
              <Utensils className="w-8 h-8 text-green-400 mx-auto mb-2" />
              <div className="text-2xl font-bold text-white">85%</div>
              <p className="text-green-200 text-sm">Nutrition Goals Met</p>
            </CardContent>
          </Card>
          
          <Card className="bg-white/10 backdrop-blur-lg border-white/20">
            <CardContent className="p-6 text-center">
              <div className="text-3xl mb-2">🔥</div>
              <div className="text-2xl font-bold text-white">{weeklyStats.consistencyScore}%</div>
              <p className="text-cyan-200 text-sm">Consistency Score</p>
            </CardContent>
          </Card>
        </div>

        {/* Calendar */}
        <Card className="bg-white/10 backdrop-blur-lg border-white/20">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-white text-xl">
                {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
              </CardTitle>
              <div className="flex space-x-2">
                <Button variant="outline" size="sm" onClick={prevMonth} className="text-white border-white/30">
                  <ChevronLeft className="w-4 h-4" />
                </Button>
                <Button variant="outline" size="sm" onClick={nextMonth} className="text-white border-white/30">
                  <ChevronRight className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            {/* Day Headers */}
            <div className="grid grid-cols-7 gap-2 mb-4">
              {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
                <div key={day} className="text-center text-blue-200 font-semibold py-2">
                  {day}
                </div>
              ))}
            </div>
            
            {/* Calendar Days */}
            <div className="grid grid-cols-7 gap-2">
              {days.map((day, index) => {
                const dateKey = formatDateKey(day);
                const workout = workoutData[dateKey];
                const nutrition = nutritionData[dateKey];
                const isCurrentMonth = day.getMonth() === currentDate.getMonth();
                const isToday = day.toDateString() === new Date().toDateString();
                
                return (
                  <div
                    key={index}
                    className={`
                      min-h-[100px] p-2 rounded-lg border transition-all hover:bg-white/5
                      ${isCurrentMonth ? 'bg-white/5 border-white/20' : 'bg-white/2 border-white/10'}
                      ${isToday ? 'ring-2 ring-cyan-400' : ''}
                    `}
                  >
                    <div className={`text-sm font-semibold mb-2 ${isCurrentMonth ? 'text-white' : 'text-white/40'}`}>
                      {day.getDate()}
                    </div>
                    
                    {workout && isCurrentMonth && (
                      <div className="space-y-1">
                        <Badge 
                          variant="secondary" 
                          className={`text-xs ${
                            workout.completed 
                              ? 'bg-green-500/20 text-green-300' 
                              : 'bg-yellow-500/20 text-yellow-300'
                          }`}
                        >
                          {workout.type}
                        </Badge>
                        {workout.completed && workout.calories > 0 && (
                          <div className="text-xs text-orange-300">
                            {workout.calories} cal
                          </div>
                        )}
                      </div>
                    )}
                    
                    {nutrition && isCurrentMonth && (
                      <div className="mt-1">
                        <div className={`w-full h-1 rounded ${
                          nutrition.status === 'good' ? 'bg-green-400' :
                          nutrition.status === 'under' ? 'bg-yellow-400' : 'bg-red-400'
                        }`}></div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>

        {/* Legend */}
        <Card className="bg-white/10 backdrop-blur-lg border-white/20 mt-6">
          <CardHeader>
            <CardTitle className="text-white text-lg">Legend</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <h4 className="text-white font-medium">Workout Status</h4>
                <div className="flex items-center space-x-2">
                  <Badge className="bg-green-500/20 text-green-300">Completed</Badge>
                  <span className="text-blue-200 text-sm">Workout finished</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Badge className="bg-yellow-500/20 text-yellow-300">Planned</Badge>
                  <span className="text-blue-200 text-sm">Workout scheduled</span>
                </div>
              </div>
              
              <div className="space-y-2">
                <h4 className="text-white font-medium">Nutrition Status</h4>
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-2 bg-green-400 rounded"></div>
                  <span className="text-blue-200 text-sm">Met calorie goal</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-2 bg-yellow-400 rounded"></div>
                  <span className="text-blue-200 text-sm">Under goal</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-2 bg-red-400 rounded"></div>
                  <span className="text-blue-200 text-sm">Over goal</span>
                </div>
              </div>
              
              <div className="space-y-2">
                <h4 className="text-white font-medium">Special Days</h4>
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 border-2 border-cyan-400 rounded"></div>
                  <span className="text-blue-200 text-sm">Today</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default CalendarView;
