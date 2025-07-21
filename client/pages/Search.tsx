import { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import BinBuddyMascot from "@/components/BinBuddyMascot";
import { wasteItems, bins, WasteItem } from "@/lib/gameData";
import { Search as SearchIcon } from "lucide-react";

export default function Search() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedItem, setSelectedItem] = useState<WasteItem | null>(null);
  const [mascotMessage, setMascotMessage] = useState(
    "Search for any item to learn where it belongs! 🔍",
  );

  // Filter items based on search query
  const filteredItems = useMemo(() => {
    if (!searchQuery.trim()) return wasteItems.slice(0, 12); // Show first 12 items when no search

    const query = searchQuery.toLowerCase().trim();
    return wasteItems.filter(
      (item) =>
        item.name.toLowerCase().includes(query) ||
        item.type.toLowerCase().includes(query),
    );
  }, [searchQuery]);

  const handleItemSelect = (item: WasteItem) => {
    setSelectedItem(item);
    const bin = bins.find((b) => b.type === item.type);
    setMascotMessage(
      `${item.name} goes in the ${bin?.name}! ${item.explanation} 🎯`,
    );
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    if (selectedItem) {
      setSelectedItem(null);
      setMascotMessage("Keep searching! I'm here to help! 🔍");
    }
  };

  const getBinForItem = (item: WasteItem) => {
    return bins.find((b) => b.type === item.type);
  };

  const getBinColorClasses = (binType: string) => {
    switch (binType) {
      case "wet":
        return "bg-wetBin-light border-wetBin text-wetBin";
      case "dry":
        return "bg-dryBin-light border-dryBin text-dryBin";
      case "recyclable":
        return "bg-recyclableBin-light border-recyclableBin text-recyclableBin";
      default:
        return "bg-gray-100 border-gray-400 text-gray-600";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-accent/10 to-secondary/20 p-4">
      {/* Mascot */}
      <BinBuddyMascot message={mascotMessage} />

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
            onClick={() => navigate("/sorting-game")}
            variant="outline"
            size="lg"
            className="rounded-xl font-bold"
          >
            🎮 Play Game
          </Button>
        </div>
      </div>

      {/* Page title */}
      <div className="text-center mb-8">
        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-2">
          Waste Item Search 🔍
        </h1>
        <p className="text-lg text-foreground/70">
          Find out which bin any item belongs in!
        </p>
      </div>

      {/* Search bar */}
      <div className="max-w-2xl mx-auto mb-8">
        <div className="relative">
          <SearchIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-6 h-6" />
          <Input
            type="text"
            placeholder="Type an item name (e.g., 'banana peel', 'plastic bottle')..."
            value={searchQuery}
            onChange={handleSearchChange}
            className="pl-12 pr-4 py-4 text-lg rounded-2xl border-2 border-primary/20 focus:border-primary shadow-lg"
          />
        </div>
      </div>

      {/* Selected item details */}
      {selectedItem && (
        <div className="max-w-2xl mx-auto mb-8">
          <div className="bg-white rounded-2xl p-6 shadow-xl border-2 border-primary/20">
            <div className="flex items-center gap-4 mb-4">
              <div className="text-5xl">{selectedItem.emoji}</div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-foreground">
                  {selectedItem.name}
                </h3>
                <div
                  className={`inline-flex items-center gap-2 px-3 py-1 rounded-full border-2 font-semibold ${getBinColorClasses(selectedItem.type)}`}
                >
                  <span>{getBinForItem(selectedItem)?.emoji}</span>
                  <span>{getBinForItem(selectedItem)?.name}</span>
                </div>
              </div>
            </div>
            <p className="text-lg text-foreground/80 leading-relaxed">
              {selectedItem.explanation}
            </p>
          </div>
        </div>
      )}

      {/* Search results */}
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold text-center mb-6 text-foreground/80">
          {searchQuery.trim()
            ? `Search Results (${filteredItems.length})`
            : "Popular Items"}{" "}
          📋
        </h2>

        {filteredItems.length === 0 ? (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🤔</div>
            <h3 className="text-xl font-bold text-foreground/60 mb-2">
              No items found
            </h3>
            <p className="text-foreground/50">
              Try searching for common items like "apple", "bottle", or "paper"
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredItems.map((item) => {
              const bin = getBinForItem(item);
              const isSelected = selectedItem?.id === item.id;

              return (
                <div
                  key={item.id}
                  onClick={() => handleItemSelect(item)}
                  className={`
                    cursor-pointer bg-white rounded-2xl p-4 shadow-lg border-2 
                    hover:shadow-xl hover:scale-105 transition-all duration-200
                    ${
                      isSelected
                        ? "border-primary shadow-xl scale-105"
                        : "border-gray-200 hover:border-primary/30"
                    }
                  `}
                >
                  <div className="text-center">
                    <div className="text-4xl mb-2">{item.emoji}</div>
                    <h4 className="font-semibold text-sm text-foreground mb-2 leading-tight">
                      {item.name}
                    </h4>
                    <div
                      className={`
                      inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium border
                      ${getBinColorClasses(item.type)}
                    `}
                    >
                      <span>{bin?.emoji}</span>
                      <span>{bin?.name}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* Quick tips */}
      <div className="max-w-4xl mx-auto mt-12">
        <div className="bg-white/80 rounded-2xl p-6 shadow-lg border-2 border-primary/20">
          <h3 className="text-xl font-bold mb-4 text-center text-primary">
            Quick Tips 💡
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
            <div className="text-center p-3 bg-wetBin-light rounded-xl border border-wetBin">
              <div className="text-2xl mb-2">🥬</div>
              <div className="font-semibold text-wetBin">Wet Waste</div>
              <div className="text-gray-600 text-xs">
                Food scraps, peels, organic matter
              </div>
            </div>
            <div className="text-center p-3 bg-dryBin-light rounded-xl border border-dryBin">
              <div className="text-2xl mb-2">🗑️</div>
              <div className="font-semibold text-dryBin">Dry Waste</div>
              <div className="text-gray-600 text-xs">
                Non-recyclable items, tissues, diapers
              </div>
            </div>
            <div className="text-center p-3 bg-recyclableBin-light rounded-xl border border-recyclableBin">
              <div className="text-2xl mb-2">♻️</div>
              <div className="font-semibold text-recyclableBin">
                Recyclables
              </div>
              <div className="text-gray-600 text-xs">
                Paper, plastic, metal, glass
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
