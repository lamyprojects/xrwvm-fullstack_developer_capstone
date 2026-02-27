import Navbar from "@/components/Navbar";
import { Headset } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen border-2 border-primary">
      <Navbar />
      <div className="max-w-4xl mx-auto py-8 px-4">
        <div className="flex flex-col items-center mb-8">
          <img
            src="https://images.unsplash.com/photo-1486006920555-c77dcf18193c?w=800&q=80"
            alt="Car showroom"
            className="w-full max-w-2xl h-auto object-cover mb-6"
          />
        </div>
        <div className="flex flex-col md:flex-row items-start justify-center gap-12 border rounded-lg p-8 max-w-3xl mx-auto">
          <div className="flex items-center justify-center w-32 h-32">
            <Headset className="w-24 h-24 text-primary" />
          </div>
          <div className="text-center text-sm space-y-2">
            <p className="font-bold text-primary">Contact Customer Service</p>
            <p className="text-primary">support@bestcars.com</p>
            <p className="font-bold text-primary">Contact our National Advertising team</p>
            <p className="text-primary">NationalSales@bestcars.com</p>
            <p className="font-bold text-primary">Contact our Public Relations team</p>
            <p className="text-primary">PR@bestcars.com</p>
            <p className="font-bold text-primary">Contact the bestcars.com offices</p>
            <p className="text-primary">312-811-1111</p>
            <p className="text-primary underline cursor-pointer">Become a bestcars.com car dealer</p>
            <p className="text-primary underline cursor-pointer">Visit growwithbestcars.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
