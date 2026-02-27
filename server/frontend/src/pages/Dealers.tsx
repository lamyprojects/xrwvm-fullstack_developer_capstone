import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import { useAuth } from "@/contexts/AuthContext";
import { dealerships, getStates } from "@/data/mockData";
import { MessageSquarePlus } from "lucide-react";

const Dealers = () => {
  const [selectedState, setSelectedState] = useState("");
  const { isLoggedIn } = useAuth();
  const states = getStates();

  const filtered = selectedState
    ? dealerships.filter((d) => d.state === selectedState)
    : dealerships;

  return (
    <div className="min-h-screen border-2 border-primary">
      <Navbar />
      <div className="overflow-x-auto">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-primary text-primary-foreground">
              <th className="px-4 py-2 text-left font-semibold">ID</th>
              <th className="px-4 py-2 text-center font-semibold">Dealer Name</th>
              <th className="px-4 py-2 text-center font-semibold">City</th>
              <th className="px-4 py-2 text-center font-semibold">Address</th>
              <th className="px-4 py-2 text-center font-semibold">Zip</th>
              <th className="px-4 py-2 text-center font-semibold">
                <select
                  value={selectedState}
                  onChange={(e) => setSelectedState(e.target.value)}
                  className="border border-input bg-background text-foreground px-2 py-1 text-sm rounded"
                >
                  <option value="">State</option>
                  {states.map((s) => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
              </th>
              {isLoggedIn && <th className="px-4 py-2 text-center font-semibold">Review Dealer</th>}
            </tr>
          </thead>
          <tbody>
            {filtered.map((d) => (
              <tr key={d.id} className="border-b border-border hover:bg-muted/50">
                <td className="px-4 py-2">{d.id}</td>
                <td className="px-4 py-2 text-center">
                  <Link to={`/dealer/${d.id}`} className="text-primary underline">
                    {d.name}
                  </Link>
                </td>
                <td className="px-4 py-2 text-center">{d.city}</td>
                <td className="px-4 py-2 text-center">{d.address}</td>
                <td className="px-4 py-2 text-center">{d.zip}</td>
                <td className="px-4 py-2 text-center">{d.state}</td>
                {isLoggedIn && (
                  <td className="px-4 py-2 text-center">
                    <Link to={`/dealer/${d.id}/review`}>
                      <MessageSquarePlus className="w-6 h-6 text-primary mx-auto cursor-pointer" />
                    </Link>
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dealers;
