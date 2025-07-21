export type WasteType = "wet" | "dry" | "recyclable";

export interface WasteItem {
  id: string;
  name: string;
  type: WasteType;
  emoji: string;
  explanation: string;
}

export interface Bin {
  type: WasteType;
  name: string;
  color: string;
  emoji: string;
  description: string;
}

export const bins: Bin[] = [
  {
    type: "wet",
    name: "Wet Waste",
    color: "wetBin",
    emoji: "🥬",
    description: "Food scraps, organic waste",
  },
  {
    type: "dry",
    name: "Dry Waste",
    color: "dryBin",
    emoji: "🗑️",
    description: "Non-recyclable dry waste",
  },
  {
    type: "recyclable",
    name: "Recyclables",
    color: "recyclableBin",
    emoji: "♻️",
    description: "Paper, plastic, metal, glass",
  },
];

export const wasteItems: WasteItem[] = [
  // Wet Waste
  {
    id: "1",
    name: "Apple Core",
    type: "wet",
    emoji: "🍎",
    explanation: "Food scraps and fruit peels go in wet waste!",
  },
  {
    id: "2",
    name: "Banana Peel",
    type: "wet",
    emoji: "🍌",
    explanation: "Organic waste like banana peels decompose naturally.",
  },
  {
    id: "3",
    name: "Leftover Rice",
    type: "wet",
    emoji: "🍚",
    explanation: "Cooked food belongs in the wet waste bin.",
  },
  {
    id: "4",
    name: "Orange Peel",
    type: "wet",
    emoji: "🍊",
    explanation: "Citrus peels are organic and go in wet waste.",
  },
  {
    id: "5",
    name: "Vegetable Scraps",
    type: "wet",
    emoji: "🥕",
    explanation: "Vegetable parts and scraps are wet waste.",
  },
  {
    id: "6",
    name: "Tea Leaves",
    type: "wet",
    emoji: "🍃",
    explanation: "Used tea leaves are organic matter.",
  },
  {
    id: "7",
    name: "Bread Crumbs",
    type: "wet",
    emoji: "🍞",
    explanation: "Stale bread and crumbs are food waste.",
  },
  {
    id: "8",
    name: "Eggshells",
    type: "wet",
    emoji: "🥚",
    explanation: "Eggshells are organic and compostable.",
  },

  // Dry Waste
  {
    id: "9",
    name: "Tissue Paper",
    type: "dry",
    emoji: "🧻",
    explanation: "Used tissues are dry waste, not recyclable.",
  },
  {
    id: "10",
    name: "Candy Wrapper",
    type: "dry",
    emoji: "🍬",
    explanation: "Plastic wrappers that can't be recycled go in dry waste.",
  },
  {
    id: "11",
    name: "Broken Toy",
    type: "dry",
    emoji: "🧸",
    explanation: "Broken plastic items go in dry waste.",
  },
  {
    id: "12",
    name: "Old Shoes",
    type: "dry",
    emoji: "👟",
    explanation: "Worn-out shoes and clothing are dry waste.",
  },
  {
    id: "13",
    name: "Cigarette Butt",
    type: "dry",
    emoji: "🚬",
    explanation: "Cigarette waste is non-recyclable dry waste.",
  },
  {
    id: "14",
    name: "Diaper",
    type: "dry",
    emoji: "👶",
    explanation: "Used diapers are dry waste for hygiene reasons.",
  },
  {
    id: "15",
    name: "Rubber Band",
    type: "dry",
    emoji: "⭕",
    explanation: "Small rubber items are typically dry waste.",
  },
  {
    id: "16",
    name: "Broken Glass",
    type: "dry",
    emoji: "🔨",
    explanation: "Broken or contaminated glass goes in dry waste.",
  },

  // Recyclables
  {
    id: "17",
    name: "Plastic Bottle",
    type: "recyclable",
    emoji: "🍼",
    explanation: "Clean plastic bottles can be recycled!",
  },
  {
    id: "18",
    name: "Newspaper",
    type: "recyclable",
    emoji: "📰",
    explanation: "Paper products like newspapers are recyclable.",
  },
  {
    id: "19",
    name: "Aluminum Can",
    type: "recyclable",
    emoji: "🥤",
    explanation: "Metal cans can be recycled many times!",
  },
  {
    id: "20",
    name: "Cardboard Box",
    type: "recyclable",
    emoji: "📦",
    explanation: "Clean cardboard can be made into new boxes.",
  },
  {
    id: "21",
    name: "Glass Jar",
    type: "recyclable",
    emoji: "🫙",
    explanation: "Clean glass containers are perfectly recyclable.",
  },
  {
    id: "22",
    name: "Office Paper",
    type: "recyclable",
    emoji: "📄",
    explanation: "Clean paper can be recycled into new paper.",
  },
  {
    id: "23",
    name: "Plastic Container",
    type: "recyclable",
    emoji: "🥡",
    explanation: "Clean plastic containers with recycling symbols.",
  },
  {
    id: "24",
    name: "Magazines",
    type: "recyclable",
    emoji: "📖",
    explanation: "Glossy magazines are recyclable paper products.",
  },

  // More Wet Waste - Food items kids know
  {
    id: "25",
    name: "Pizza Crust",
    type: "wet",
    emoji: "🍕",
    explanation: "Leftover pizza crusts are food waste!",
  },
  {
    id: "26",
    name: "Cookie Crumbs",
    type: "wet",
    emoji: "🍪",
    explanation: "Cookie pieces and crumbs go in wet waste.",
  },
  {
    id: "27",
    name: "Ice Cream Stick",
    type: "wet",
    emoji: "🍦",
    explanation: "Wooden ice cream sticks are compostable!",
  },
  {
    id: "28",
    name: "Watermelon Rind",
    type: "wet",
    emoji: "🍉",
    explanation: "Fruit rinds and peels are organic waste.",
  },
  {
    id: "29",
    name: "Potato Chips",
    type: "wet",
    emoji: "🥔",
    explanation: "Leftover food scraps belong in wet waste.",
  },
  {
    id: "30",
    name: "Sandwich Crusts",
    type: "wet",
    emoji: "🥪",
    explanation: "Bread crusts and food leftovers are wet waste.",
  },
  {
    id: "31",
    name: "Chicken Bones",
    type: "wet",
    emoji: "🍖",
    explanation: "Bones from meat are organic waste.",
  },
  {
    id: "32",
    name: "Fish Bones",
    type: "wet",
    emoji: "🐟",
    explanation: "Fish bones and scales go in wet waste.",
  },
  {
    id: "33",
    name: "Corn Cob",
    type: "wet",
    emoji: "🌽",
    explanation: "Corn cobs are organic and compostable.",
  },
  {
    id: "34",
    name: "Grape Stems",
    type: "wet",
    emoji: "🍇",
    explanation: "Fruit stems and leaves are wet waste.",
  },
  {
    id: "35",
    name: "Cereal",
    type: "wet",
    emoji: "🥣",
    explanation: "Leftover cereal and milk go in wet waste.",
  },
  {
    id: "36",
    name: "Pasta",
    type: "wet",
    emoji: "🍝",
    explanation: "Cooked pasta and noodles are food waste.",
  },

  // More Dry Waste - Items kids use
  {
    id: "37",
    name: "Crayon",
    type: "dry",
    emoji: "🖍️",
    explanation: "Old or broken crayons are dry waste.",
  },
  {
    id: "38",
    name: "Eraser",
    type: "dry",
    emoji: "🧽",
    explanation: "Used erasers and rubber items are dry waste.",
  },
  {
    id: "39",
    name: "Balloon",
    type: "dry",
    emoji: "🎈",
    explanation: "Used balloons go in dry waste, not recyclable.",
  },
  {
    id: "40",
    name: "Sticker",
    type: "dry",
    emoji: "⭐",
    explanation: "Used stickers and their backing are dry waste.",
  },
  {
    id: "41",
    name: "Band-Aid",
    type: "dry",
    emoji: "🩹",
    explanation: "Used bandages are dry waste for hygiene.",
  },
  {
    id: "42",
    name: "Chewing Gum",
    type: "dry",
    emoji: "🍬",
    explanation: "Gum doesn't decompose, so it's dry waste.",
  },
  {
    id: "43",
    name: "Pen",
    type: "dry",
    emoji: "🖊️",
    explanation: "Old pens and markers are dry waste.",
  },
  {
    id: "44",
    name: "Toothbrush",
    type: "dry",
    emoji: "🪥",
    explanation: "Old toothbrushes are plastic dry waste.",
  },
  {
    id: "45",
    name: "Hair",
    type: "dry",
    emoji: "💇",
    explanation: "Hair clippings go in dry waste bin.",
  },
  {
    id: "46",
    name: "Cotton Swab",
    type: "dry",
    emoji: "🦻",
    explanation: "Q-tips and cotton swabs are dry waste.",
  },
  {
    id: "47",
    name: "Nail Clippings",
    type: "dry",
    emoji: "💅",
    explanation: "Nail clippings are small dry waste.",
  },
  {
    id: "48",
    name: "Candy Bar Wrapper",
    type: "dry",
    emoji: "🍫",
    explanation: "Foil and plastic candy wrappers are dry waste.",
  },

  // More Recyclables - Items kids encounter
  {
    id: "49",
    name: "Juice Box",
    type: "recyclable",
    emoji: "🧃",
    explanation: "Clean juice boxes can be recycled!",
  },
  {
    id: "50",
    name: "Cereal Box",
    type: "recyclable",
    emoji: "📦",
    explanation: "Empty cereal boxes are recyclable cardboard.",
  },
  {
    id: "51",
    name: "Notebook Paper",
    type: "recyclable",
    emoji: "📝",
    explanation: "Clean school paper can be recycled.",
  },
  {
    id: "52",
    name: "Water Bottle",
    type: "recyclable",
    emoji: "💧",
    explanation: "Empty plastic water bottles are recyclable.",
  },
  {
    id: "53",
    name: "Soup Can",
    type: "recyclable",
    emoji: "🥫",
    explanation: "Clean metal cans can be recycled many times.",
  },
  {
    id: "54",
    name: "Yogurt Cup",
    type: "recyclable",
    emoji: "🥛",
    explanation: "Clean plastic yogurt containers are recyclable.",
  },
  {
    id: "55",
    name: "Book",
    type: "recyclable",
    emoji: "📚",
    explanation: "Old books and textbooks are recyclable paper.",
  },
  {
    id: "56",
    name: "Comic Book",
    type: "recyclable",
    emoji: "📙",
    explanation: "Comic books are recyclable paper products.",
  },
  {
    id: "57",
    name: "Homework Paper",
    type: "recyclable",
    emoji: "📄",
    explanation: "Clean school papers can be recycled.",
  },
  {
    id: "58",
    name: "Milk Carton",
    type: "recyclable",
    emoji: "🥛",
    explanation: "Clean milk cartons are recyclable packaging.",
  },
  {
    id: "59",
    name: "Soda Can",
    type: "recyclable",
    emoji: "🥤",
    explanation: "Aluminum soda cans are highly recyclable!",
  },
  {
    id: "60",
    name: "Pizza Box",
    type: "recyclable",
    emoji: "📦",
    explanation: "Clean pizza boxes (without grease) are recyclable.",
  },
  {
    id: "61",
    name: "Toy Packaging",
    type: "recyclable",
    emoji: "🎁",
    explanation: "Clean cardboard toy boxes can be recycled.",
  },
  {
    id: "62",
    name: "Gift Wrap",
    type: "recyclable",
    emoji: "🎀",
    explanation: "Paper gift wrap (not plastic) is recyclable.",
  },

  // More fun items kids might ask about
  {
    id: "63",
    name: "Popcorn Kernels",
    type: "wet",
    emoji: "🍿",
    explanation: "Unpopped popcorn kernels are organic waste.",
  },
  {
    id: "64",
    name: "Cotton Ball",
    type: "dry",
    emoji: "🏐",
    explanation: "Used cotton balls are dry waste.",
  },
  {
    id: "65",
    name: "Toilet Paper Roll",
    type: "recyclable",
    emoji: "🧻",
    explanation: "Empty cardboard rolls are recyclable!",
  },
  {
    id: "66",
    name: "Lego Brick",
    type: "dry",
    emoji: "🧱",
    explanation: "Broken plastic toys go in dry waste.",
  },
  {
    id: "67",
    name: "Pencil Shavings",
    type: "wet",
    emoji: "✏️",
    explanation: "Wood pencil shavings are organic waste.",
  },
  {
    id: "68",
    name: "Tissue Box",
    type: "recyclable",
    emoji: "📦",
    explanation: "Empty tissue boxes are recyclable cardboard.",
  },
  {
    id: "69",
    name: "Bottle Cap",
    type: "recyclable",
    emoji: "🎯",
    explanation: "Plastic bottle caps can be recycled with bottles.",
  },
  {
    id: "70",
    name: "Fruit Sticker",
    type: "dry",
    emoji: "🍎",
    explanation: "Those little fruit stickers are dry waste.",
  },
  {
    id: "71",
    name: "Ice Cubes",
    type: "wet",
    emoji: "🧊",
    explanation: "Melted ice is just water - wet waste!",
  },
  {
    id: "72",
    name: "Bubble Wrap",
    type: "dry",
    emoji: "📦",
    explanation: "Bubble wrap is usually not recyclable - dry waste.",
  },
];

export const encouragingMessages = [
  "Great job! 🌟",
  "You're an Eco Hero! 🦸‍♀️",
  "Fantastic sorting! 🎉",
  "Keep it up! 💪",
  "Awesome work! ✨",
  "You're helping the planet! 🌍",
  "Perfect! 🎯",
  "Amazing! 🌈",
  "Super sorting! ⭐",
  "You rock! 🪨",
];

export const correctiveMessages = [
  "Oops! Try the {correctBin} bin instead! 🤔",
  "Almost! That goes in {correctBin}! 💡",
  "Close! The {correctBin} bin is the right choice! 🎯",
  "Not quite! {correctBin} is where this belongs! 📍",
  "Good try! This item loves the {correctBin} bin! 💝",
];

export function getRandomItems(count: number = 1): WasteItem[] {
  const shuffled = [...wasteItems].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}

export function getRandomEncouragingMessage(): string {
  return encouragingMessages[
    Math.floor(Math.random() * encouragingMessages.length)
  ];
}

export function getRandomCorrectiveMessage(correctBin: string): string {
  const message =
    correctiveMessages[Math.floor(Math.random() * correctiveMessages.length)];
  return message.replace("{correctBin}", correctBin);
}
