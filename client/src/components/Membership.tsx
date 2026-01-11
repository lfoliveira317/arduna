import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const tiers = [
  {
    name: "Essential",
    price: "From $2,500",
    period: "/ month",
    description: "Perfect for individuals seeking streamlined lifestyle support.",
    features: [
      "Dedicated Lifestyle Manager (9am-6pm)",
      "Travel & Dining Reservations",
      "Event Access (Standard)",
      "Home Management Support",
      "Priority Support"
    ],
    highlight: false
  },
  {
    name: "Elite",
    price: "From $5,000",
    period: "/ month",
    description: "Comprehensive management for those with demanding schedules.",
    features: [
      "24/7 Dedicated Lifestyle Team",
      "VIP Travel & Private Aviation",
      "Exclusive Event Access (VIP)",
      "Full Household Management",
      "Personal Shopping & Styling",
      "Global Partner Benefits"
    ],
    highlight: true
  },
  {
    name: "Bespoke",
    price: "Custom",
    period: "",
    description: "Limitless possibilities for the ultra-high-net-worth individual.",
    features: [
      "Dedicated Private Office",
      "Unlimited Requests",
      "Global On-Site Assistance",
      "Rare Asset Acquisition",
      "Philanthropy Management",
      "Next-Generation Legacy Planning"
    ],
    highlight: false
  }
];

export default function Membership() {
  return (
    <section className="py-24 bg-background">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h3 className="text-secondary uppercase tracking-widest text-sm font-medium mb-4">Membership</h3>
          <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-6">Choose Your Level of Access</h2>
          <p className="text-muted-foreground font-light text-lg leading-relaxed">
            Arduna offers tiered membership options designed to cater to varying levels of lifestyle complexity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tiers.map((tier, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative p-10 border transition-all duration-300 flex flex-col ${
                tier.highlight 
                  ? "border-secondary bg-secondary/5 shadow-lg scale-105 z-10" 
                  : "border-border bg-background hover:border-secondary/50"
              }`}
            >
              {tier.highlight && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-secondary text-primary px-4 py-1 text-xs uppercase tracking-widest font-bold">
                  Most Popular
                </div>
              )}

              <div className="mb-8">
                <h3 className="font-serif text-2xl mb-2">{tier.name}</h3>
                <div className="flex items-baseline mb-4">
                  <span className="text-3xl font-light">{tier.price}</span>
                  <span className="text-muted-foreground text-sm ml-1">{tier.period}</span>
                </div>
                <p className="text-muted-foreground font-light text-sm leading-relaxed">
                  {tier.description}
                </p>
              </div>

              <ul className="space-y-4 mb-10 flex-grow">
                {tier.features.map((feature, i) => (
                  <li key={i} className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-secondary shrink-0" />
                    <span className="text-sm font-light text-foreground/80">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button 
                className={`w-full rounded-none py-6 uppercase tracking-widest text-xs ${
                  tier.highlight 
                    ? "bg-secondary text-primary hover:bg-secondary/90" 
                    : "bg-primary text-primary-foreground hover:bg-primary/90"
                }`}
              >
                Inquire Now
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
