
import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Camera, Plus, Scan, Utensils, Zap } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";

const NutritionTracker = () => {
  const { toast } = useToast();
  const [isScanning, setIsScanning] = useState(false);
  const [todayMeals, setTodayMeals] = useState([
    { id: 1, name: "Greek Yogurt with Berries", calories: 180, protein: 15, carbs: 20, fat: 5, time: "8:30 AM" },
    { id: 2, name: "Chicken Breast with Rice", calories: 420, protein: 35, carbs: 45, fat: 8, time: "1:15 PM" },
    { id: 3, name: "Protein Shake", calories: 160, protein: 25, carbs: 8, fat: 3, time: "3:45 PM" }
  ]);

  const dailyGoals = {
    calories: 2200,
    protein: 140,
    carbs: 220,
    fat: 70
  };

  const currentTotals = todayMeals.reduce((totals, meal) => ({
    calories: totals.calories + meal.calories,
    protein: totals.protein + meal.protein,
    carbs: totals.carbs + meal.carbs,
    fat: totals.fat + meal.fat
  }), { calories: 0, protein: 0, carbs: 0, fat: 0 });

  const simulatePhotoScan = () => {
    setIsScanning(true);
    setTimeout(() => {
      setIsScanning(false);
      const newMeal = {
        id: Date.now(),
        name: "Grilled Salmon with Vegetables",
        calories: 380,
        protein: 32,
        carbs: 15,
        fat: 22,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setTodayMeals([...todayMeals, newMeal]);
      toast({
        title: "Food Recognized! 📸",
        description: "AI identified: Grilled Salmon with Vegetables - 380 calories",
      });
    }, 3000);
  };

  const quickAddFoods = [
    { name: "Banana", calories: 105, protein: 1, carbs: 27, fat: 0 },
    { name: "Almonds (28g)", calories: 164, protein: 6, carbs: 6, fat: 14 },
    { name: "Chicken Breast (100g)", calories: 165, protein: 31, carbs: 0, fat: 4 },
    { name: "Brown Rice (100g)", calories: 123, protein: 3, carbs: 25, fat: 1 }
  ];

  const addQuickFood = (food: typeof quickAddFoods[0]) => {
    const newMeal = {
      id: Date.now(),
      ...food,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };
    setTodayMeals([...todayMeals, newMeal]);
    toast({
      title: "Food Added! ✅",
      description: `${food.name} - ${food.calories} calories`,
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-orange-900 to-slate-900">
      <nav className="bg-black/20 backdrop-blur-lg border-b border-white/10 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Link to="/">
                <Button variant="ghost" size="sm" className="text-white hover:bg-white/10 mr-4">
                  <ArrowLeft className="w-4 h-4" />
                </Button>
              </Link>
              <h1 className="text-2xl font-bold text-white">Nutrition Tracker</h1>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* AI Photo Scanner */}
        <Card className="bg-gradient-to-r from-orange-500/20 to-red-500/20 backdrop-blur-lg border-orange-300/30 mb-8">
          <CardHeader>
            <CardTitle className="text-white flex items-center">
              <Camera className="w-5 h-5 mr-2" />
              AI Food Scanner
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-center">
              {isScanning ? (
                <div className="py-8">
                  <Scan className="w-16 h-16 text-orange-400 mx-auto mb-4 animate-pulse" />
                  <p className="text-white text-lg font-semibold mb-2">Analyzing your food...</p>
                  <p className="text-orange-200">AI is identifying ingredients and calculating nutrition</p>
                  <div className="mt-4">
                    <Progress value={75} className="h-2" />
                  </div>
                </div>
              ) : (
                <div className="py-8">
                  <Camera className="w-16 h-16 text-orange-400 mx-auto mb-4" />
                  <p className="text-white text-lg font-semibold mb-2">Take a photo of your meal</p>
                  <p className="text-orange-200 mb-4">AI will instantly recognize food and log nutrition</p>
                  <Button 
                    onClick={simulatePhotoScan}
                    className="bg-orange-500 hover:bg-orange-600 text-white"
                  >
                    <Camera className="w-4 h-4 mr-2" />
                    Scan Food
                  </Button>
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Daily Nutrition Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="bg-white/10 backdrop-blur-lg border-white/20">
            <CardHeader className="pb-3">
              <CardTitle className="text-white text-sm font-medium flex items-center">
                <Zap className="w-4 h-4 mr-2 text-yellow-400" />
                Calories
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white mb-2">
                {currentTotals.calories} / {dailyGoals.calories}
              </div>
              <Progress 
                value={(currentTotals.calories / dailyGoals.calories) * 100} 
                className="h-2 mb-2"
              />
              <p className="text-xs text-blue-200">
                {dailyGoals.calories - currentTotals.calories} remaining
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-lg border-white/20">
            <CardHeader className="pb-3">
              <CardTitle className="text-white text-sm font-medium">Protein</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white mb-2">
                {currentTotals.protein}g / {dailyGoals.protein}g
              </div>
              <Progress 
                value={(currentTotals.protein / dailyGoals.protein) * 100} 
                className="h-2 mb-2"
              />
              <p className="text-xs text-blue-200">
                {Math.round(((currentTotals.protein / dailyGoals.protein) * 100))}% of goal
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-lg border-white/20">
            <CardHeader className="pb-3">
              <CardTitle className="text-white text-sm font-medium">Carbs</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white mb-2">
                {currentTotals.carbs}g / {dailyGoals.carbs}g
              </div>
              <Progress 
                value={(currentTotals.carbs / dailyGoals.carbs) * 100} 
                className="h-2 mb-2"
              />
              <p className="text-xs text-blue-200">
                {Math.round(((currentTotals.carbs / dailyGoals.carbs) * 100))}% of goal
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-lg border-white/20">
            <CardHeader className="pb-3">
              <CardTitle className="text-white text-sm font-medium">Fat</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white mb-2">
                {currentTotals.fat}g / {dailyGoals.fat}g
              </div>
              <Progress 
                value={(currentTotals.fat / dailyGoals.fat) * 100} 
                className="h-2 mb-2"
              />
              <p className="text-xs text-blue-200">
                {Math.round(((currentTotals.fat / dailyGoals.fat) * 100))}% of goal
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Quick Add Foods */}
        <Card className="bg-white/10 backdrop-blur-lg border-white/20 mb-8">
          <CardHeader>
            <CardTitle className="text-white">Quick Add</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {quickAddFoods.map((food, idx) => (
                <div key={idx} className="bg-white/5 rounded-lg p-4 text-center">
                  <h4 className="text-white font-medium mb-2">{food.name}</h4>
                  <p className="text-orange-200 text-sm mb-3">{food.calories} cal</p>
                  <Button 
                    size="sm" 
                    onClick={() => addQuickFood(food)}
                    className="bg-orange-500 hover:bg-orange-600 text-white w-full"
                  >
                    <Plus className="w-3 h-3 mr-1" />
                    Add
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Today's Meals */}
        <Card className="bg-white/10 backdrop-blur-lg border-white/20">
          <CardHeader>
            <CardTitle className="text-white flex items-center">
              <Utensils className="w-5 h-5 mr-2" />
              Today's Meals
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {todayMeals.map(meal => (
                <div key={meal.id} className="bg-white/5 rounded-lg p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="text-white font-medium">{meal.name}</h4>
                    <span className="text-orange-200 text-sm">{meal.time}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex space-x-4 text-sm">
                      <span className="text-blue-200">{meal.calories} cal</span>
                      <span className="text-green-200">{meal.protein}g protein</span>
                      <span className="text-yellow-200">{meal.carbs}g carbs</span>
                      <span className="text-red-200">{meal.fat}g fat</span>
                    </div>
                    <Badge variant="secondary" className="bg-orange-500/20 text-orange-200">
                      Logged
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

export default NutritionTracker;
