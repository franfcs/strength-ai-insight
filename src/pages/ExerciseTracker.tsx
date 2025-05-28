
import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Plus, Trash2, Timer, Weight, RotateCcw, Target } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";

const ExerciseTracker = () => {
  const { toast } = useToast();
  const [selectedWorkout, setSelectedWorkout] = useState<string | null>(null);
  const [exercises, setExercises] = useState([
    { id: 1, name: "Bench Press", sets: [{ weight: 80, reps: 8 }, { weight: 85, reps: 6 }], category: "Chest" },
    { id: 2, name: "Squats", sets: [{ weight: 100, reps: 10 }, { weight: 105, reps: 8 }], category: "Legs" }
  ]);

  const workoutTemplates = [
    { id: "push", name: "Push Day", exercises: ["Bench Press", "Overhead Press", "Tricep Dips"], color: "bg-red-500" },
    { id: "pull", name: "Pull Day", exercises: ["Pull-ups", "Rows", "Bicep Curls"], color: "bg-blue-500" },
    { id: "legs", name: "Leg Day", exercises: ["Squats", "Deadlifts", "Leg Press"], color: "bg-green-500" },
    { id: "cardio", name: "Cardio", exercises: ["Running", "Cycling", "HIIT"], color: "bg-orange-500" }
  ];

  const aiRecommendations = [
    { exercise: "Incline Dumbbell Press", reason: "Great for upper chest development", difficulty: "Intermediate" },
    { exercise: "Bulgarian Split Squats", reason: "Unilateral leg strength", difficulty: "Advanced" },
    { exercise: "Face Pulls", reason: "Improve shoulder health", difficulty: "Beginner" }
  ];

  const addSet = (exerciseId: number) => {
    setExercises(exercises.map(ex => 
      ex.id === exerciseId 
        ? { ...ex, sets: [...ex.sets, { weight: 0, reps: 0 }] }
        : ex
    ));
  };

  const updateSet = (exerciseId: number, setIndex: number, field: 'weight' | 'reps', value: number) => {
    setExercises(exercises.map(ex => 
      ex.id === exerciseId 
        ? { 
            ...ex, 
            sets: ex.sets.map((set, idx) => 
              idx === setIndex ? { ...set, [field]: value } : set
            )
          }
        : ex
    ));
  };

  const removeSet = (exerciseId: number, setIndex: number) => {
    setExercises(exercises.map(ex => 
      ex.id === exerciseId 
        ? { ...ex, sets: ex.sets.filter((_, idx) => idx !== setIndex) }
        : ex
    ));
  };

  const finishWorkout = () => {
    toast({
      title: "Workout Complete! 🎉",
      description: "Great job! Your progress has been saved and analyzed.",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <nav className="bg-black/20 backdrop-blur-lg border-b border-white/10 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Link to="/">
                <Button variant="ghost" size="sm" className="text-white hover:bg-white/10 mr-4">
                  <ArrowLeft className="w-4 h-4" />
                </Button>
              </Link>
              <h1 className="text-2xl font-bold text-white">Exercise Tracker</h1>
            </div>
            <Button onClick={finishWorkout} className="bg-green-500 hover:bg-green-600">
              Finish Workout
            </Button>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {!selectedWorkout ? (
          <>
            {/* Workout Templates */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">Choose Workout Template</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {workoutTemplates.map(template => (
                  <Card 
                    key={template.id}
                    className={`${template.color} border-0 hover:scale-105 transition-all duration-200 cursor-pointer`}
                    onClick={() => setSelectedWorkout(template.id)}
                  >
                    <CardContent className="p-6">
                      <h3 className="text-white font-bold text-lg mb-2">{template.name}</h3>
                      <div className="space-y-1">
                        {template.exercises.map((ex, idx) => (
                          <p key={idx} className="text-white/80 text-sm">• {ex}</p>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* AI Recommendations */}
            <Card className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-lg border-purple-300/30">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <Target className="w-5 h-5 mr-2" />
                  AI Exercise Recommendations
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {aiRecommendations.map((rec, idx) => (
                    <div key={idx} className="bg-white/10 rounded-lg p-4 flex justify-between items-center">
                      <div>
                        <h4 className="text-white font-semibold">{rec.exercise}</h4>
                        <p className="text-blue-200 text-sm">{rec.reason}</p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Badge variant="secondary" className="bg-white/20 text-white">
                          {rec.difficulty}
                        </Badge>
                        <Button size="sm" variant="outline" className="text-white border-white/30">
                          Add
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </>
        ) : (
          <>
            {/* Active Workout */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-bold text-white">Current Workout</h2>
                <Button 
                  variant="outline" 
                  onClick={() => setSelectedWorkout(null)}
                  className="text-white border-white/30"
                >
                  Change Template
                </Button>
              </div>
              
              {/* Workout Timer */}
              <Card className="bg-white/10 backdrop-blur-lg border-white/20 mb-6">
                <CardContent className="p-6 text-center">
                  <Timer className="w-8 h-8 text-blue-400 mx-auto mb-2" />
                  <div className="text-3xl font-bold text-white">23:45</div>
                  <p className="text-blue-200">Workout Duration</p>
                </CardContent>
              </Card>
            </div>

            {/* Exercise List */}
            <div className="space-y-6">
              {exercises.map(exercise => (
                <Card key={exercise.id} className="bg-white/10 backdrop-blur-lg border-white/20">
                  <CardHeader>
                    <CardTitle className="text-white flex items-center justify-between">
                      <div className="flex items-center">
                        <Weight className="w-5 h-5 mr-2" />
                        {exercise.name}
                      </div>
                      <Badge variant="secondary" className="bg-blue-500/20 text-blue-200">
                        {exercise.category}
                      </Badge>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {exercise.sets.map((set, setIdx) => (
                        <div key={setIdx} className="flex items-center space-x-4 bg-white/5 p-3 rounded-lg">
                          <span className="text-white font-medium w-12">Set {setIdx + 1}</span>
                          <div className="flex items-center space-x-2">
                            <Input
                              type="number"
                              placeholder="Weight"
                              value={set.weight || ''}
                              onChange={(e) => updateSet(exercise.id, setIdx, 'weight', Number(e.target.value))}
                              className="w-20 bg-white/10 border-white/20 text-white"
                            />
                            <span className="text-blue-200 text-sm">kg</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Input
                              type="number"
                              placeholder="Reps"
                              value={set.reps || ''}
                              onChange={(e) => updateSet(exercise.id, setIdx, 'reps', Number(e.target.value))}
                              className="w-20 bg-white/10 border-white/20 text-white"
                            />
                            <span className="text-blue-200 text-sm">reps</span>
                          </div>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => removeSet(exercise.id, setIdx)}
                            className="text-red-400 hover:bg-red-500/20"
                          >
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>
                      ))}
                      <Button
                        variant="outline"
                        onClick={() => addSet(exercise.id)}
                        className="w-full text-white border-white/30 hover:bg-white/10"
                      >
                        <Plus className="w-4 h-4 mr-2" />
                        Add Set
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
              
              <Card className="bg-white/10 backdrop-blur-lg border-white/20">
                <CardContent className="p-6 text-center">
                  <Button variant="outline" className="text-white border-white/30 hover:bg-white/10">
                    <Plus className="w-4 h-4 mr-2" />
                    Add Exercise
                  </Button>
                </CardContent>
              </Card>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ExerciseTracker;
