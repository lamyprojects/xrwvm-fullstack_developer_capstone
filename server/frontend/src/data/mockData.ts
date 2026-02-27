export interface Dealership {
  id: number;
  name: string;
  city: string;
  address: string;
  zip: string;
  state: string;
}

export interface Review {
  id: number;
  dealerId: number;
  name: string;
  review: string;
  purchase: boolean;
  purchase_date: string;
  car_make: string;
  car_model: string;
  car_year: number;
  sentiment: "positive" | "negative" | "neutral";
  time: string;
}

export const carMakesModels: Record<string, string[]> = {
  "NISSAN": ["Qashqai", "XTRAIL", "Juke", "Leaf", "Micra", "Navara"],
  "Toyota": ["Camry", "Corolla", "RAV4", "Highlander", "Tacoma", "Prius"],
  "Honda": ["Civic", "Accord", "CR-V", "Pilot", "Odyssey", "HR-V"],
  "Ford": ["F-150", "Mustang", "Explorer", "Escape", "Bronco", "Edge"],
  "BMW": ["3 Series", "5 Series", "X3", "X5", "7 Series", "X1"],
  "Saturn": ["S-Series", "Vue", "Ion", "Aura", "Outlook", "Sky"],
  "Chevrolet": ["Silverado", "Malibu", "Equinox", "Tahoe", "Camaro", "Traverse"],
  "Mercedes-Benz": ["C-Class", "E-Class", "GLC", "GLE", "S-Class", "A-Class"],
};

export const dealerships: Dealership[] = [
  { id: 1, name: "Holdlamis Car Dealership", city: "El Paso", address: "3 Nova Court", zip: "88563", state: "Texas" },
  { id: 2, name: "Temo Car Dealership", city: "Minneapolis", address: "6337 Butternut Crossing", zip: "55402", state: "Minnesota" },
  { id: 3, name: "Sub-Ex Car Dealership", city: "Birmingham", address: "9477 Twin Pines Center", zip: "35285", state: "Alabama" },
  { id: 4, name: "Solarbreeze Car Dealership", city: "Dallas", address: "85800 Hazelcrest Circle", zip: "75241", state: "Texas" },
  { id: 5, name: "Regrant Car Dealership", city: "Baltimore", address: "93 Golf Course Pass", zip: "21203", state: "Maryland" },
  { id: 6, name: "Stronghold Car Dealership", city: "Wilkes Barre", address: "2 Burrows Hill", zip: "18763", state: "Pennsylvania" },
  { id: 7, name: "Job Car Dealership", city: "Pueblo", address: "9 Cambridge Park", zip: "81010", state: "Colorado" },
  { id: 8, name: "Bytecard Car Dealership", city: "Topeka", address: "288 Larry Place", zip: "66642", state: "Kansas" },
  { id: 9, name: "Job Car Dealership", city: "Dallas", address: "253 Hanson Junction", zip: "75216", state: "Texas" },
  { id: 10, name: "Alphazap Car Dealership", city: "Washington", address: "108 Memorial Pass", zip: "20005", state: "District of Columbia" },
  { id: 11, name: "Rank Car Dealership", city: "Carol Stream", address: "8108 Dryden Court", zip: "60351", state: "Illinois" },
  { id: 12, name: "Tin Car Dealership", city: "Silver Spring", address: "168 Pawling Lane", zip: "20918", state: "Maryland" },
  { id: 13, name: "Y-Solowarm Car Dealership", city: "Baltimore", address: "452 Fair Oaks Drive", zip: "21275", state: "Maryland" },
  { id: 14, name: "Lotstring Car Dealership", city: "Houston", address: "44 Pleasure Drive", zip: "77299", state: "Texas" },
  { id: 15, name: "Flowdesk Car Dealership", city: "Atlanta", address: "991 Loftsgordon Trail", zip: "30316", state: "Georgia" },
  { id: 16, name: "Cardify Car Dealership", city: "New York", address: "50 Broadway", zip: "10001", state: "New York" },
  { id: 17, name: "Zontrax Car Dealership", city: "Los Angeles", address: "123 Sunset Blvd", zip: "90028", state: "California" },
  { id: 18, name: "Bigtax Car Dealership", city: "Chicago", address: "456 Michigan Ave", zip: "60601", state: "Illinois" },
  { id: 19, name: "Domainer Car Dealership", city: "Phoenix", address: "789 Camelback Rd", zip: "85001", state: "Arizona" },
  { id: 20, name: "Veribet Car Dealership", city: "Philadelphia", address: "321 Market St", zip: "19101", state: "Pennsylvania" },
  { id: 34, name: "Gembucket Car Dealership", city: "Silver Spring", address: "8 Green Hill", zip: "20904", state: "Maryland" },
  { id: 41, name: "Tres-Zap Car Dealership", city: "Baltimore", address: "9 Sherman Hill", zip: "21275", state: "Maryland" },
];

// Simple keyword-based sentiment analysis
export function analyzeSentiment(text: string): "positive" | "negative" | "neutral" {
  const lower = text.toLowerCase();
  const positiveWords = ["great", "excellent", "fantastic", "amazing", "good", "best", "love", "wonderful", "highly", "recommended", "happy", "perfect", "awesome", "superb", "outstanding"];
  const negativeWords = ["bad", "terrible", "horrible", "worst", "hate", "awful", "poor", "disappointing", "rude", "scam", "waste", "never"];
  
  let posCount = 0, negCount = 0;
  positiveWords.forEach(w => { if (lower.includes(w)) posCount++; });
  negativeWords.forEach(w => { if (lower.includes(w)) negCount++; });
  
  if (posCount > negCount) return "positive";
  if (negCount > posCount) return "negative";
  return "neutral";
}

const initialReviews: Review[] = [
  {
    id: 1, dealerId: 1, name: "lauvshree", review: "Fantastic Dealership.",
    purchase: true, purchase_date: "2023-06-15", car_make: "NISSAN", car_model: "Qashqai",
    car_year: 2023, sentiment: "positive", time: new Date("2024-01-15").toISOString(),
  },
  {
    id: 2, dealerId: 6, name: "Rupert Silberschatz", review: "Intuitive coherent monitoring",
    purchase: true, purchase_date: "2001-03-10", car_make: "Saturn", car_model: "S-Series",
    car_year: 2001, sentiment: "neutral", time: new Date("2024-02-10").toISOString(),
  },
  {
    id: 3, dealerId: 2, name: "john_doe", review: "Great service and friendly staff!",
    purchase: true, purchase_date: "2023-09-20", car_make: "Toyota", car_model: "Camry",
    car_year: 2023, sentiment: "positive", time: new Date("2024-03-01").toISOString(),
  },
  {
    id: 4, dealerId: 5, name: "jane_smith", review: "The experience was okay, nothing special.",
    purchase: false, purchase_date: "", car_make: "", car_model: "",
    car_year: 2022, sentiment: "neutral", time: new Date("2024-01-20").toISOString(),
  },
];

// Persist reviews in localStorage
export function getReviews(): Review[] {
  const stored = localStorage.getItem("reviews");
  if (stored) return JSON.parse(stored);
  localStorage.setItem("reviews", JSON.stringify(initialReviews));
  return initialReviews;
}

export function addReview(review: Omit<Review, "id" | "time" | "sentiment">): Review {
  const reviews = getReviews();
  const newReview: Review = {
    ...review,
    id: reviews.length > 0 ? Math.max(...reviews.map(r => r.id)) + 1 : 1,
    sentiment: analyzeSentiment(review.review),
    time: new Date().toISOString(),
  };
  reviews.unshift(newReview);
  localStorage.setItem("reviews", JSON.stringify(reviews));
  return newReview;
}

export function getReviewsByDealer(dealerId: number): Review[] {
  return getReviews().filter(r => r.dealerId === dealerId).sort((a, b) => new Date(b.time).getTime() - new Date(a.time).getTime());
}

export function getDealerById(id: number): Dealership | undefined {
  return dealerships.find(d => d.id === id);
}

export function getStates(): string[] {
  return [...new Set(dealerships.map(d => d.state))].sort();
}
