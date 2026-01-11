import { motion } from "framer-motion";
import { Plane, Calendar, Clock, Key } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    title: "Travel Management",
    description: "From private jets to hidden villas, we curate seamless travel experiences tailored to your preferences.",
    icon: Plane,
    image: "/images/service-travel.jpg"
  },
  {
    title: "Event Planning",
    description: "Exclusive access to sold-out events, private parties, and bespoke celebrations designed to impress.",
    icon: Calendar,
    image: "/images/service-events.jpg"
  },
  {
    title: "Lifestyle Assistance",
    description: "Daily errands, personal shopping, and household management handled with discretion and care.",
    icon: Clock,
    image: "/images/service-lifestyle.jpg"
  },
  {
    title: "VIP Access",
    description: "Unlock doors to the world's most exclusive clubs, restaurants, and experiences.",
    icon: Key,
    image: "/images/hero-banner.jpg" // Reusing hero for now or generate another if needed
  }
];

export default function Services() {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Background Texture */}
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none">
        <svg width="100%" height="100%">
          <pattern id="pattern-circles" x="0" y="0" width="50" height="50" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1" fill="currentColor" />
          </pattern>
          <rect x="0" y="0" width="100%" height="100%" fill="url(#pattern-circles)" />
        </svg>
      </div>

      <div className="container relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h3 className="text-secondary uppercase tracking-widest text-sm font-medium mb-4">Our Expertise</h3>
          <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-6">Curated for the Exceptional</h2>
          <div className="w-24 h-[1px] bg-secondary mx-auto mb-6"></div>
          <p className="text-muted-foreground font-light text-lg leading-relaxed">
            We offer a comprehensive suite of services designed to reclaim your time and elevate your lifestyle.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="group relative h-[400px] overflow-hidden cursor-pointer">
                {/* Background Image */}
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105"
                  style={{ backgroundImage: `url(${service.image})` }}
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-500" />
                
                {/* Content */}
                <div className="absolute inset-0 p-10 flex flex-col justify-end text-white">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <service.icon className="w-10 h-10 text-secondary mb-6 opacity-80" />
                    <h3 className="font-serif text-3xl mb-4">{service.title}</h3>
                    <p className="text-white/80 font-light leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                      {service.description}
                    </p>
                    
                    <div className="mt-6 w-12 h-[1px] bg-secondary group-hover:w-24 transition-all duration-500" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
