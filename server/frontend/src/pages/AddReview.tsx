import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { getDealerById, addReview, carMakesModels } from "@/data/mockData";

const AddReview = () => {
  const { id } = useParams();
  const dealerId = Number(id);
  const dealer = getDealerById(dealerId);
  const { user, isLoggedIn } = useAuth();
  const navigate = useNavigate();

  const [reviewText, setReviewText] = useState("");
  const [purchaseDate, setPurchaseDate] = useState("");
  const [carMake, setCarMake] = useState("");
  const [carModel, setCarModel] = useState("");
  const [carYear, setCarYear] = useState("");
  const [purchase, setPurchase] = useState(false);

  const makes = Object.keys(carMakesModels);
  const models = carMake ? carMakesModels[carMake] || [] : [];

  if (!isLoggedIn || !dealer) {
    navigate("/dealers");
    return null;
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addReview({
      dealerId,
      name: user!.username,
      review: reviewText,
      purchase,
      purchase_date: purchaseDate,
      car_make: carMake,
      car_model: carModel,
      car_year: Number(carYear) || new Date().getFullYear(),
    });
    navigate(`/dealer/${dealerId}`);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background border-2 border-primary">
      <form onSubmit={handleSubmit} className="border-2 border-primary rounded-lg p-8 w-full max-w-md space-y-4">
        <h2 className="text-xl font-bold text-[hsl(230,80%,25%)] italic">{dealer.name}</h2>

        <textarea
          value={reviewText}
          onChange={(e) => setReviewText(e.target.value)}
          placeholder="Write your review..."
          className="w-full border border-input p-3 text-sm min-h-[120px] resize-vertical"
          required
        />

        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={purchase}
            onChange={(e) => setPurchase(e.target.checked)}
            id="purchase"
          />
          <label htmlFor="purchase" className="text-sm">Purchase</label>
        </div>

        <div>
          <label className="text-sm font-medium block mb-1">Purchase Date</label>
          <input
            type="date"
            value={purchaseDate}
            onChange={(e) => setPurchaseDate(e.target.value)}
            className="border border-input px-3 py-2 text-sm w-full"
          />
        </div>

        <div>
          <label className="text-sm font-medium block mb-1">Car Make</label>
          <select
            value={carMake}
            onChange={(e) => { setCarMake(e.target.value); setCarModel(""); }}
            className="border border-input px-3 py-2 text-sm w-full"
          >
            <option value="">Choose Car Make and Model</option>
            {makes.map((m) => (
              <option key={m} value={m}>{m}</option>
            ))}
          </select>
        </div>

        {carMake && models.length > 0 && (
          <div>
            <label className="text-sm font-medium block mb-1">Car Model</label>
            <select
              value={carModel}
              onChange={(e) => setCarModel(e.target.value)}
              className="border border-input px-3 py-2 text-sm w-full"
            >
              <option value="">Choose Model</option>
              {models.map((m) => (
                <option key={m} value={m}>{m}</option>
              ))}
            </select>
          </div>
        )}

        <div>
          <label className="text-sm font-medium block mb-1">Car Year</label>
          <input
            type="number"
            value={carYear}
            onChange={(e) => setCarYear(e.target.value)}
            placeholder="e.g. 2023"
            className="border border-input px-3 py-2 text-sm w-full"
            min="1990"
            max="2026"
          />
        </div>

        <button
          type="submit"
          className="border border-input px-8 py-2 text-sm bg-background hover:bg-muted cursor-pointer font-medium"
        >
          Post Review
        </button>
      </form>
    </div>
  );
};

export default AddReview;
