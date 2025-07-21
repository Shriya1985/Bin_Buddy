import { useState } from "react";
import { WasteItem as WasteItemType } from "@/lib/gameData";

interface WasteItemProps {
  item: WasteItemType;
  onDrop: (itemId: string, binType: string) => void;
  isDragging?: boolean;
  isDisabled?: boolean;
}

export default function WasteItem({
  item,
  onDrop,
  isDragging = false,
  isDisabled = false,
}: WasteItemProps) {
  const [dragPosition, setDragPosition] = useState({ x: 0, y: 0 });

  const handleDragStart = (e: React.DragEvent) => {
    if (isDisabled) return;
    e.dataTransfer.setData("text/plain", item.id);
    e.dataTransfer.effectAllowed = "move";
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    if (isDisabled) return;
    const touch = e.touches[0];
    setDragPosition({ x: touch.clientX, y: touch.clientY });
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (isDisabled) return;
    e.preventDefault();
    const touch = e.touches[0];
    setDragPosition({ x: touch.clientX, y: touch.clientY });
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (isDisabled) return;
    const touch = e.changedTouches[0];
    const elementBelow = document.elementFromPoint(
      touch.clientX,
      touch.clientY,
    );
    const binElement = elementBelow?.closest("[data-bin-type]") as HTMLElement;

    if (binElement) {
      const binType = binElement.dataset.binType;
      if (binType) {
        onDrop(item.id, binType);
      }
    }

    setDragPosition({ x: 0, y: 0 });
  };

  return (
    <div
      draggable={!isDisabled}
      onDragStart={handleDragStart}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      className={`
        group relative cursor-grab active:cursor-grabbing
        bg-white rounded-2xl shadow-lg border-2 border-gray-200
        p-4 min-w-[120px] flex flex-col items-center gap-2
        transform transition-all duration-200
        ${
          isDisabled
            ? "opacity-50 cursor-not-allowed"
            : "hover:scale-105 hover:shadow-xl hover:border-primary/30"
        }
        ${isDragging ? "scale-110 rotate-3 shadow-2xl z-50" : ""}
      `}
      style={
        dragPosition.x !== 0
          ? {
              position: "fixed",
              left: dragPosition.x - 60,
              top: dragPosition.y - 60,
              zIndex: 1000,
              pointerEvents: "none",
            }
          : {}
      }
    >
      {/* Item emoji */}
      <div className="text-4xl mb-1 group-hover:animate-bounce">
        {item.emoji}
      </div>

      {/* Item name */}
      <p className="text-sm font-semibold text-center text-gray-700 leading-tight">
        {item.name}
      </p>

      {/* Drag instruction for mobile */}
      <div className="absolute -top-2 -right-2 bg-primary text-white text-xs px-2 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200 md:hidden">
        Tap & Hold
      </div>

      {/* Drag instruction for desktop */}
      <div className="absolute -top-2 -right-2 bg-primary text-white text-xs px-2 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200 hidden md:block">
        Drag Me!
      </div>

      {/* Glow effect when hovering */}
      <div
        className={`
        absolute inset-0 rounded-2xl transition-opacity duration-200
        ${
          isDisabled
            ? "opacity-0"
            : "opacity-0 group-hover:opacity-20 bg-gradient-to-br from-primary via-accent to-secondary"
        }
      `}
      />
    </div>
  );
}
