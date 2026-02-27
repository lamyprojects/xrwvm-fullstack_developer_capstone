import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";

const Navbar = () => {
  const { user, isLoggedIn, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <nav className="bg-primary text-primary-foreground px-4 py-3 flex items-center justify-between">
      <div className="flex items-center gap-6">
        <Link to="/" className="text-xl font-bold text-primary-foreground no-underline">
          Dealerships
        </Link>
        <div className="flex items-center gap-4 text-sm">
          <Link to="/" className="text-primary-foreground no-underline hover:underline">Home</Link>
          <Link to="/about" className="text-primary-foreground no-underline hover:underline">About Us</Link>
          <Link to="/contact" className="text-primary-foreground no-underline hover:underline">Contact Us</Link>
        </div>
      </div>
      <div className="flex items-center gap-4 text-sm">
        {isLoggedIn ? (
          <>
            <span className="font-semibold">{user?.username}</span>
            <button onClick={handleLogout} className="text-primary-foreground underline hover:no-underline bg-transparent border-none cursor-pointer text-sm">
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/login" className="text-primary-foreground underline hover:no-underline">Login</Link>
            <Link to="/register" className="text-primary-foreground underline hover:no-underline">Register</Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
