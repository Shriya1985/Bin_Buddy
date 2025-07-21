import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import BinBuddyMascot from "@/components/BinBuddyMascot";

export default function Index() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary/30 to-accent/30 relative overflow-hidden">
      {/* Mascot */}
      <BinBuddyMascot message="Welcome to Bin Buddy! Ready to become an eco-hero? 🌟" />

      {/* Background decorative elements */}
      <div className="absolute top-10 left-10 text-6xl opacity-20 animate-float">
        🌱
      </div>
      <div className="absolute top-32 right-20 text-4xl opacity-20 animate-float animation-delay-1000">
        ♻️
      </div>
      <div className="absolute bottom-20 left-20 text-5xl opacity-20 animate-float animation-delay-2000">
        🌍
      </div>
      <div className="absolute bottom-32 right-10 text-3xl opacity-20 animate-float animation-delay-3000">
        🌟
      </div>

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-8">
        {/* Title section */}
        <div className="text-center mb-8 max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent mb-4 animate-in slide-in-from-bottom-8 duration-1000">
            Welcome to
          </h1>
          <div className="relative">
            <h1 className="text-6xl md:text-8xl font-black text-primary mb-6 animate-in slide-in-from-bottom-8 duration-1000 delay-300">
              Bin Buddy!
            </h1>
            {/* Fun decorative elements around title */}
            <div className="absolute -top-4 -left-4 text-4xl animate-bounce">
              🎉
            </div>
            <div className="absolute -top-2 -right-6 text-3xl animate-bounce animation-delay-500">
              ⭐
            </div>
          </div>

          <p className="text-xl md:text-2xl text-foreground/80 font-medium leading-relaxed animate-in slide-in-from-bottom-8 duration-1000 delay-500">
            Learn to sort waste and save our planet! 🌍
          </p>
          <p className="text-lg md:text-xl text-foreground/60 mt-2 animate-in slide-in-from-bottom-8 duration-1000 delay-700">
            Drag items into the right bins and become an eco-hero!
          </p>
        </div>

        {/* Action buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8 animate-in slide-in-from-bottom-8 duration-1000 delay-900">
          <Button
            onClick={() => navigate("/sorting-game")}
            size="lg"
            className="text-2xl py-6 px-12 rounded-2xl font-bold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 bg-gradient-to-r from-primary to-primary/90"
          >
            🎮 Start Sorting!
          </Button>

          <Button
            onClick={() => navigate("/search")}
            variant="outline"
            size="lg"
            className="text-xl py-6 px-8 rounded-2xl font-bold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 border-2 border-primary"
          >
            🔍 Search Items
          </Button>
        </div>

        {/* Feature highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl w-full animate-in slide-in-from-bottom-8 duration-1000 delay-1100">
          <div className="bg-wetBin-light border-2 border-wetBin rounded-2xl p-6 text-center hover:scale-105 transition-transform duration-300">
            <div className="text-4xl mb-4">🥬</div>
            <h3 className="text-lg font-bold text-wetBin mb-2">Wet Waste</h3>
            <p className="text-sm text-gray-600">Food scraps & organic waste</p>
          </div>

          <div className="bg-dryBin-light border-2 border-dryBin rounded-2xl p-6 text-center hover:scale-105 transition-transform duration-300">
            <div className="text-4xl mb-4">🗑️</div>
            <h3 className="text-lg font-bold text-dryBin mb-2">Dry Waste</h3>
            <p className="text-sm text-gray-600">Non-recyclable items</p>
          </div>

          <div className="bg-recyclableBin-light border-2 border-recyclableBin rounded-2xl p-6 text-center hover:scale-105 transition-transform duration-300">
            <div className="text-4xl mb-4">♻️</div>
            <h3 className="text-lg font-bold text-recyclableBin mb-2">
              Recyclables
            </h3>
            <p className="text-sm text-gray-600">
              Paper, plastic, glass & metal
            </p>
          </div>
        </div>

        {/* Fun stats or encouragement */}
        <div className="mt-12 text-center animate-in slide-in-from-bottom-8 duration-1000 delay-1300">
          <p className="text-lg font-medium text-foreground/70">
            Join thousands of kids helping save the planet! 🌟
          </p>
          <div className="flex justify-center items-center gap-4 mt-4 text-sm text-foreground/60">
            <span>🎯 Learn by Playing</span>
            <span>•</span>
            <span>⭐ Earn Points</span>
            <span>•</span>
            <span>🌍 Save Earth</span>
          </div>
        </div>
      </div>
    </div>
  );
}
