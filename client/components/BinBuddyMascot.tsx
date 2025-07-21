import { useState, useEffect } from "react";

interface BinBuddyMascotProps {
  message?: string;
  isHappy?: boolean;
  isAnimating?: boolean;
}

export default function BinBuddyMascot({
  message = "Hi there! I'm Bin Buddy! Let's sort some waste together! 🌟",
  isHappy = true,
  isAnimating = false,
}: BinBuddyMascotProps) {
  const [currentMessage, setCurrentMessage] = useState(message);
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    setCurrentMessage(message);
    setShowMessage(true);

    // Auto-hide message after 3 seconds if not empty
    if (message && message.trim()) {
      const timer = setTimeout(() => {
        setShowMessage(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [message]);

  const mascotFace = isHappy ? "😊" : "🤔";
  const mascotColor = isHappy ? "bg-primary" : "bg-warning";

  return (
    <div className="fixed top-4 right-4 z-50 flex flex-col items-end max-w-xs">
      {/* Speech bubble */}
      {showMessage && currentMessage && (
        <div className="mb-2 bg-white rounded-2xl px-4 py-3 shadow-lg border-2 border-primary/20 relative animate-in slide-in-from-right-5 duration-300">
          <p className="text-sm font-medium text-foreground leading-relaxed">
            {currentMessage}
          </p>
          {/* Speech bubble tail */}
          <div className="absolute -bottom-2 right-8 w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-white"></div>
          <div className="absolute -bottom-3 right-8 w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-primary/20"></div>
        </div>
      )}

      {/* Mascot character */}
      <div
        className={`
        w-16 h-16 rounded-full ${mascotColor} flex items-center justify-center
        shadow-lg border-4 border-white transform transition-all duration-300
        ${isAnimating ? "animate-bounce" : "hover:scale-110"}
        ${isHappy ? "hover:bg-primary/90" : "hover:bg-warning/90"}
      `}
      >
        <span className="text-2xl">{mascotFace}</span>
      </div>

      {/* Sparkles for celebration */}
      {isAnimating && isHappy && (
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-2 -left-2 text-yellow-400 animate-ping">
            ✨
          </div>
          <div className="absolute -top-2 -right-2 text-yellow-400 animate-ping animation-delay-100">
            ⭐
          </div>
          <div className="absolute -bottom-2 -left-2 text-yellow-400 animate-ping animation-delay-200">
            🌟
          </div>
          <div className="absolute -bottom-2 -right-2 text-yellow-400 animate-ping animation-delay-300">
            ✨
          </div>
        </div>
      )}
    </div>
  );
}
