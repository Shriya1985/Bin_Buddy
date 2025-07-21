import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import BinBuddyMascot from "@/components/BinBuddyMascot";
import WasteItem from "@/components/WasteItem";
import WasteBin from "@/components/WasteBin";
import FeedbackPopup from "@/components/FeedbackPopup";
import {
  bins,
  getRandomItems,
  getRandomEncouragingMessage,
  getRandomCorrectiveMessage,
  WasteItem as WasteItemType,
} from "@/lib/gameData";

export default function SortingGame() {
  const navigate = useNavigate();
  const [currentItems, setCurrentItems] = useState<WasteItemType[]>([]);
  const [score, setScore] = useState(0);
  const [mascotMessage, setMascotMessage] = useState(
    "Let's sort some waste! Drag items to the correct bins! 🎯",
  );
  const [mascotHappy, setMascotHappy] = useState(true);
  const [mascotAnimating, setMascotAnimating] = useState(false);
  const [completedItems, setCompletedItems] = useState<Set<string>>(new Set());
  const [binScores, setBinScores] = useState({ wet: 0, dry: 0, recyclable: 0 });
  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState("");
  const [popupIsCorrect, setPopupIsCorrect] = useState(false);

  // Initialize game with random items
  useEffect(() => {
    generateNewItems();
  }, []);

  const generateNewItems = () => {
    const newItems = getRandomItems(4);
    setCurrentItems(newItems);
    setCompletedItems(new Set());
  };

  const handleItemDrop = (itemId: string, binType: string) => {
    const item = currentItems.find((i) => i.id === itemId);
    if (!item || completedItems.has(itemId)) return;

    const isCorrect = item.type === binType;

    if (isCorrect) {
      // Correct placement
      setScore((prev) => prev + 1);
      setBinScores((prev) => ({
        ...prev,
        [binType]: prev[binType as keyof typeof prev] + 1,
      }));
      setCompletedItems((prev) => new Set([...prev, itemId]));

      // Show success popup
      const encouragingMessage = getRandomEncouragingMessage();
      setPopupMessage(encouragingMessage + ` +1 point! 🎯`);
      setPopupIsCorrect(true);
      setShowPopup(true);

      setMascotMessage(encouragingMessage);
      setMascotHappy(true);
      setMascotAnimating(true);

      // Reset mascot animation
      setTimeout(() => setMascotAnimating(false), 1000);

      // Check if all items are completed
      if (completedItems.size + 1 >= currentItems.length) {
        setTimeout(() => {
          setMascotMessage("Amazing! Let's try some new items! 🎉");
          generateNewItems();
        }, 2500);
      }
    } else {
      // Incorrect placement
      const correctBin =
        bins.find((b) => b.type === item.type)?.name || "correct";
      const correctiveMessage = getRandomCorrectiveMessage(correctBin);

      // Show error popup
      setPopupMessage(`${correctiveMessage} ${item.explanation}`);
      setPopupIsCorrect(false);
      setShowPopup(true);

      setMascotMessage(correctiveMessage);
      setMascotHappy(false);
      setMascotAnimating(true);

      // Reset mascot state
      setTimeout(() => {
        setMascotAnimating(false);
        setMascotHappy(true);
        setMascotMessage("Try again! You've got this! 💪");
      }, 3000);
    }
  };

  const handleBinDrop = (itemId: string, binType: string) => {
    // This is called when an item is dropped on a bin
    handleItemDrop(itemId, binType);
  };

  const handlePopupComplete = () => {
    setShowPopup(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary/20 to-primary/10 p-4">
      {/* Mascot */}
      <BinBuddyMascot
        message={mascotMessage}
        isHappy={mascotHappy}
        isAnimating={mascotAnimating}
      />

      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-center mb-8 gap-4">
        <div className="flex items-center gap-4">
          <Button
            onClick={() => navigate("/")}
            variant="outline"
            size="lg"
            className="rounded-xl font-bold"
          >
            🏠 Home
          </Button>
          <Button
            onClick={() => navigate("/search")}
            variant="outline"
            size="lg"
            className="rounded-xl font-bold"
          >
            🔍 Search
          </Button>
        </div>

        <div className="flex items-center gap-4">
          <div className="bg-white rounded-2xl px-6 py-3 shadow-lg border-2 border-primary/20">
            <span className="text-xl font-bold text-primary">
              Score: {score} ⭐
            </span>
          </div>
          <Button
            onClick={generateNewItems}
            variant="secondary"
            size="lg"
            className="rounded-xl font-bold"
          >
            🔄 New Items
          </Button>
        </div>
      </div>

      {/* Game title */}
      <div className="text-center mb-8">
        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-2">
          Sorting Challenge! 🎯
        </h1>
        <p className="text-lg text-foreground/70">
          Drag each item to the correct bin to earn points!
        </p>
      </div>

      {/* Waste items to sort */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-center mb-6 text-foreground/80">
          Items to Sort 📋
        </h2>
        <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
          {currentItems.map((item) => (
            <WasteItem
              key={item.id}
              item={item}
              onDrop={handleItemDrop}
              isDisabled={completedItems.has(item.id)}
            />
          ))}
        </div>
      </div>

      {/* Waste bins */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-center mb-6 text-foreground/80">
          Drop Items Here 🗂️
        </h2>
        <div className="flex flex-wrap justify-center gap-6 max-w-5xl mx-auto">
          {bins.map((bin) => (
            <WasteBin
              key={bin.type}
              bin={bin}
              onDrop={handleBinDrop}
              score={binScores[bin.type as keyof typeof binScores]}
            />
          ))}
        </div>
      </div>

      {/* Instructions */}
      <div className="text-center max-w-2xl mx-auto">
        <div className="bg-white/80 rounded-2xl p-6 shadow-lg border-2 border-primary/20">
          <h3 className="text-xl font-bold mb-4 text-primary">
            How to Play 🎮
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div className="flex items-center gap-2">
              <span>🖱️</span>
              <span>
                <strong>Desktop:</strong> Drag items to bins
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span>👆</span>
              <span>
                <strong>Mobile:</strong> Tap and hold to drag
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span>✅</span>
              <span>Correct placement = +1 point</span>
            </div>
            <div className="flex items-center gap-2">
              <span>💡</span>
              <span>Wrong placement = helpful hint</span>
            </div>
          </div>
        </div>
      </div>

      {/* Feedback Popup */}
      <FeedbackPopup
        isVisible={showPopup}
        isCorrect={popupIsCorrect}
        message={popupMessage}
        onComplete={handlePopupComplete}
      />
    </div>
  );
}
