import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import { useAuth } from "@/contexts/AuthContext";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (login(username, password)) {
      navigate("/");
    } else {
      setError("Invalid username or password");
    }
  };

  return (
    <div className="min-h-screen border-2 border-primary">
      <Navbar />
      <div className="flex justify-center py-16">
        <form onSubmit={handleLogin} className="border rounded-lg p-8 w-full max-w-md space-y-6">
          <div className="flex items-center gap-4 justify-center">
            <label className="w-24 text-right text-sm">Username</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="border border-input px-3 py-2 text-sm w-48"
              required
            />
          </div>
          <div className="flex items-center gap-4 justify-center">
            <label className="w-24 text-right text-sm">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="border border-input px-3 py-2 text-sm w-48"
              required
            />
          </div>
          {error && <p className="text-destructive text-center text-sm">{error}</p>}
          <div className="flex items-center justify-center gap-4">
            <button type="submit" className="border border-input px-6 py-1 text-sm bg-background hover:bg-muted cursor-pointer">
              Login
            </button>
            <button type="button" onClick={() => navigate("/")} className="border border-input px-6 py-1 text-sm bg-background hover:bg-muted cursor-pointer">
              Cancel
            </button>
          </div>
          <div className="text-center">
            <Link to="/register" className="text-primary text-sm underline">Register Now</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
