import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import { useAuth } from "@/contexts/AuthContext";
import { getDealerById, getReviewsByDealer } from "@/data/mockData";
import { MessageSquarePlus } from "lucide-react";

const sentimentEmoji = (s: string) => {
  if (s === "positive") return "😊";
  if (s === "negative") return "😞";
  return "😐";
};

const DealerDetail = () => {
  const { id } = useParams();
  const dealerId = Number(id);
  const dealer = getDealerById(dealerId);
  const reviews = getReviewsByDealer(dealerId);
  const { isLoggedIn } = useAuth();

  if (!dealer) {
    return (
      <div className="min-h-screen border-2 border-primary">
        <Navbar />
        <p className="p-8 text-center">Dealer not found.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen border-2 border-primary">
      <Navbar />
      <div className="bg-primary/10 px-6 py-4">
        <div className="flex items-center gap-4">
          <h1 className="text-2xl font-bold">{dealer.name}</h1>
          {isLoggedIn && (
            <Link
              to={`/dealer/${dealer.id}/review`}
              className="bg-primary text-primary-foreground px-4 py-2 rounded text-sm font-medium no-underline flex items-center gap-2 hover:opacity-90"
            >
              <MessageSquarePlus className="w-4 h-4" />
              Write a review
            </Link>
          )}
        </div>
        <p className="text-sm text-muted-foreground mt-1">
          {dealer.city}, {dealer.address}, Zip - {dealer.zip}, {dealer.state}
        </p>
      </div>
      <div className="p-6 flex flex-wrap gap-4">
        {reviews.length === 0 ? (
          <p className="text-muted-foreground text-sm">No reviews yet.</p>
        ) : (
          reviews.map((r) => (
            <div key={r.id} className="bg-card border rounded-lg shadow-sm p-4 w-40">
              <div className="text-2xl mb-2">{sentimentEmoji(r.sentiment)}</div>
              <p className="text-sm font-medium mb-3 leading-snug">{r.review}</p>
              <p className="text-xs text-primary italic">
                {r.name} {r.car_make} {r.car_model}
              </p>
              <p className="text-xs text-primary italic">{r.car_year}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default DealerDetail;
