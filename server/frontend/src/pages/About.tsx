import Navbar from "@/components/Navbar";

const leaders = [
  {
    name: "John Wilton",
    role: "CEO",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=300&q=80",
    desc: "John steers the business towards success with strategic leadership, cultivating a customer-centric environment for automotive excellence.",
    email: "jwilton@bestcars.com",
  },
  {
    name: "Emma Cast",
    role: "CMO",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&q=80",
    desc: "Emma orchestrates innovative marketing campaigns, driving brand visibility and consumer engagement, shaping the company's narrative in the competitive landscape.",
    email: "ecast@bestcars.com",
  },
  {
    name: "Ernst Uchida",
    role: "CFO",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&q=80",
    desc: "Ernst oversees the financial health of the company, leveraging astute financial strategies to optimize resources and ensure fiscal responsibility for sustained growth.",
    email: "euchida@bestcars.com",
  },
];

const About = () => {
  return (
    <div className="min-h-screen border-2 border-primary">
      <Navbar />
      <div className="max-w-4xl mx-auto py-8 px-4">
        <h1 className="text-3xl font-bold text-center mb-6">About Us</h1>
        <p className="text-sm text-muted-foreground mb-8 leading-relaxed">
          Welcome to Best Cars dealership, a premier automotive destination with branches spanning across the United States.
          Committed to excellence, we pride ourselves on providing top tier customer service, a vast selection of quality vehicles,
          and an unwavering dedication to meeting the diverse automotive needs of our valued customers nationwide. At each of our
          locations, our team is driven by a passion for delivering exceptional experiences, making us your trusted partner on the
          road to automotive satisfaction.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {leaders.map((leader) => (
            <div key={leader.name} className="flex flex-col items-center text-center">
              <img
                src={leader.image}
                alt={leader.name}
                className="w-48 h-48 object-cover rounded mb-4"
              />
              <span className="bg-[hsl(270,30%,40%)] text-white px-4 py-1 rounded text-sm font-bold mb-2">
                {leader.role}
              </span>
              <p className="font-semibold text-sm">{leader.name}</p>
              <p className="text-xs text-muted-foreground mt-2 leading-relaxed">{leader.desc}</p>
              <p className="text-xs italic text-muted-foreground mt-2">{leader.email}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
