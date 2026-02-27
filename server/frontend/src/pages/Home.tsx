import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";

const Home = () => {
  return (
    <div className="min-h-screen border-2 border-primary">
      <Navbar />
      <div className="flex flex-col items-center py-12">
        <img
          src="https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=800&q=80"
          alt="Car dealership parking lot"
          className="w-full max-w-2xl h-auto object-cover mb-6"
        />
        <p className="text-lg mb-4">Welcome to our Dealerships!</p>
        <Link
          to="/dealers"
          className="bg-[hsl(180,100%,50%)] text-foreground px-4 py-2 text-sm font-medium no-underline hover:opacity-90"
        >
          View Dealerships
        </Link>
      </div>
    </div>
  );
};

export default Home;
