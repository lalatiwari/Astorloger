import React from "react";
import { Users, Star, Award, Clock } from "lucide-react";

const TrustSection = () => {
  const stats = [
    {
      icon: <Users size={28} />,
      title: "1200+",
      subtitle: "Happy Clients"
    },
    {
      icon: <Star size={28} />,
      title: "4.9 Rating",
      subtitle: "Customer Satisfaction"
    },
    {
      icon: <Award size={28} />,
      title: "15+",
      subtitle: "Certificates & Awards"
    },
    {
      icon: <Clock size={28} />,
      title: "5+ Years",
      subtitle: "Experience"
    }
  ];

  return (
    <section className="bg-white py-16 px-6">

      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">

        {stats.map((item, index) => (
          <div
            key={index}
            className="bg-gray-50 p-6 rounded-2xl shadow-md hover:shadow-xl transition hover:-translate-y-2"
          >
            <div className="text-red-500 flex justify-center mb-3">
              {item.icon}
            </div>

            <h3 className="text-2xl font-bold text-gray-900">
              {item.title}
            </h3>

            <p className="text-gray-600 text-sm mt-1">
              {item.subtitle}
            </p>
          </div>
        ))}

      </div>

    </section>
  );
};

export default TrustSection;