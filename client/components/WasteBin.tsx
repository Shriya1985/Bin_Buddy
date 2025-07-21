import { useState } from "react";
import { Bin } from "@/lib/gameData";
import { cn } from "@/lib/utils";

interface WasteBinProps {
  bin: Bin;
  onDrop: (itemId: string, binType: string) => void;
  isHighlighted?: boolean;
  score?: number;
}

export default function WasteBin({
  bin,
  onDrop,
  isHighlighted = false,
  score,
}: WasteBinProps) {
  const [isDragOver, setIsDragOver] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = "move";
    setIsDragOver(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    if (!e.currentTarget.contains(e.relatedTarget as Node)) {
      setIsDragOver(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
    setIsAnimating(true);

    // Get the item ID from the drag data
    const itemId = e.dataTransfer.getData("text/plain");
    if (itemId) {
      onDrop(itemId, bin.type);
    }

    // Reset animation after 1 second
    setTimeout(() => setIsAnimating(false), 1000);
  };

  const binColorClasses = {
    wetBin: "bg-wetBin border-wetBin text-white",
    dryBin: "bg-dryBin border-dryBin text-white",
    recyclableBin: "bg-recyclableBin border-recyclableBin text-white",
  };

  const binLightColorClasses = {
    wetBin: "bg-wetBin-light border-wetBin",
    dryBin: "bg-dryBin-light border-dryBin",
    recyclableBin: "bg-recyclableBin-light border-recyclableBin",
  };

  return (
    <div
      data-bin-type={bin.type}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      className={cn(
        "relative flex flex-col items-center p-6 rounded-3xl border-4 transition-all duration-300",
        "min-h-[200px] w-full max-w-[250px] cursor-pointer",
        "hover:shadow-2xl hover:scale-105",
        isDragOver || isHighlighted
          ? binColorClasses[bin.color as keyof typeof binColorClasses]
          : binLightColorClasses[
              bin.color as keyof typeof binLightColorClasses
            ],
        isDragOver && "scale-110 shadow-2xl animate-pulse",
        isAnimating && "animate-bounce",
        isHighlighted && "ring-4 ring-white ring-opacity-50",
      )}
    >
      {/* Bin emoji/icon */}
      <div
        className={cn(
          "text-6xl mb-4 transform transition-transform duration-300",
          isAnimating && "animate-spin",
        )}
      >
        {bin.emoji}
      </div>

      {/* Bin name */}
      <h3
        className={cn(
          "text-xl font-bold mb-2 text-center",
          isDragOver || isHighlighted ? "text-white" : "text-gray-700",
        )}
      >
        {bin.name}
      </h3>

      {/* Bin description */}
      <p
        className={cn(
          "text-sm text-center leading-relaxed",
          isDragOver || isHighlighted ? "text-white/90" : "text-gray-600",
        )}
      >
        {bin.description}
      </p>

      {/* Score display */}
      {score !== undefined && score > 0 && (
        <div
          className={cn(
            "absolute -top-2 -right-2 bg-white rounded-full w-8 h-8 flex items-center justify-center",
            "border-2 text-sm font-bold shadow-lg",
            binColorClasses[bin.color as keyof typeof binColorClasses].includes(
              "wetBin",
            ) && "border-wetBin text-wetBin",
            binColorClasses[bin.color as keyof typeof binColorClasses].includes(
              "dryBin",
            ) && "border-dryBin text-dryBin",
            binColorClasses[bin.color as keyof typeof binColorClasses].includes(
              "recyclableBin",
            ) && "border-recyclableBin text-recyclableBin",
          )}
        >
          {score}
        </div>
      )}

      {/* Drop zone indicator */}
      <div
        className={cn(
          "absolute inset-2 border-2 border-dashed rounded-2xl transition-opacity duration-200",
          isDragOver ? "opacity-100 border-white" : "opacity-0",
        )}
      />

      {/* Sparkle effects when animating */}
      {isAnimating && (
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-2 right-2 text-yellow-400 animate-ping">
            ✨
          </div>
          <div className="absolute top-2 left-2 text-yellow-400 animate-ping animation-delay-100">
            ⭐
          </div>
          <div className="absolute bottom-2 right-2 text-yellow-400 animate-ping animation-delay-200">
            🌟
          </div>
          <div className="absolute bottom-2 left-2 text-yellow-400 animate-ping animation-delay-300">
            ✨
          </div>
        </div>
      )}
    </div>
  );
}
