import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { User, Mail, Lock } from "lucide-react";

const Register = () => {
  const [form, setForm] = useState({ username: "", firstName: "", lastName: "", email: "", password: "" });
  const [error, setError] = useState("");
  const { register } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (register(form)) {
      navigate("/");
    } else {
      setError("Username already exists");
    }
  };

  const handleClose = () => navigate("/");

  const fields: Array<{ key: keyof typeof form; placeholder: string; icon: React.ReactNode; type?: string }> = [
    { key: "username", placeholder: "Username", icon: <User className="w-5 h-5 text-primary-foreground/60" /> },
    { key: "firstName", placeholder: "First Name", icon: <User className="w-5 h-5 text-primary-foreground/60" /> },
    { key: "lastName", placeholder: "Last Name", icon: <User className="w-5 h-5 text-primary-foreground/60" /> },
    { key: "email", placeholder: "email", icon: <Mail className="w-5 h-5 text-primary-foreground/60" />, type: "email" },
    { key: "password", placeholder: "Password", icon: <Lock className="w-5 h-5 text-primary-foreground/60" />, type: "password" },
  ];

  return (
    <div className="min-h-screen bg-primary flex items-center justify-center">
      <div className="bg-primary rounded-lg p-8 w-full max-w-sm relative">
        <button onClick={handleClose} className="absolute top-2 right-2 text-primary-foreground text-2xl bg-transparent border-none cursor-pointer">
          ×
        </button>
        <h1 className="text-3xl font-light italic text-primary-foreground mb-8">SignUp</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          {fields.map(({ key, placeholder, icon, type }) => (
            <div key={key} className="flex items-center gap-3">
              {icon}
              <input
                type={type || "text"}
                placeholder={placeholder}
                value={form[key as keyof typeof form]}
                onChange={(e) => setForm({ ...form, [key]: e.target.value })}
                className="flex-1 border-b border-primary-foreground/30 bg-transparent text-primary-foreground placeholder:text-primary-foreground/60 px-2 py-2 text-sm outline-none"
                required
              />
            </div>
          ))}
          {error && <p className="text-red-200 text-sm text-center">{error}</p>}
          <div className="pt-4">
            <button
              type="submit"
              className="w-full bg-background text-foreground py-3 rounded text-sm font-medium hover:bg-muted cursor-pointer border-none"
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
