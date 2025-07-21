import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface FeedbackPopupProps {
  isVisible: boolean;
  isCorrect: boolean;
  message: string;
  onComplete?: () => void;
}

export default function FeedbackPopup({
  isVisible,
  isCorrect,
  message,
  onComplete,
}: FeedbackPopupProps) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (isVisible) {
      setShow(true);
      const timer = setTimeout(() => {
        setShow(false);
        setTimeout(() => onComplete?.(), 300); // Wait for exit animation
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [isVisible, onComplete]);

  if (!isVisible && !show) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center pointer-events-none">
      <div
        className={cn(
          "transform transition-all duration-300 pointer-events-auto",
          show ? "scale-100 opacity-100" : "scale-75 opacity-0",
        )}
      >
        <div
          className={cn(
            "rounded-3xl p-8 shadow-2xl border-4 min-w-[300px] text-center",
            "animate-bounce",
            isCorrect
              ? "bg-success text-success-foreground border-success/50"
              : "bg-warning text-warning-foreground border-warning/50",
          )}
        >
          {/* Icon */}
          <div className="text-6xl mb-4">{isCorrect ? "🎉" : "🤔"}</div>

          {/* Message */}
          <h3 className="text-2xl font-bold mb-2">
            {isCorrect ? "Awesome!" : "Oops!"}
          </h3>
          <p className="text-lg font-medium leading-relaxed">{message}</p>

          {/* Decorative elements for correct answers */}
          {isCorrect && (
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-2 left-2 text-2xl animate-ping">
                ⭐
              </div>
              <div className="absolute top-2 right-2 text-2xl animate-ping animation-delay-200">
                ✨
              </div>
              <div className="absolute bottom-2 left-2 text-2xl animate-ping animation-delay-400">
                🌟
              </div>
              <div className="absolute bottom-2 right-2 text-2xl animate-ping animation-delay-600">
                ⭐
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Background overlay */}
      <div
        className={cn(
          "absolute inset-0 bg-black/20 transition-opacity duration-300",
          show ? "opacity-100" : "opacity-0",
        )}
      />
    </div>
  );
}
