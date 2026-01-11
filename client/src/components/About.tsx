import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Image Side */}
          <motion.div 
            className="w-full lg:w-1/2 relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative aspect-[4/5] overflow-hidden">
              <img 
                src="/images/service-lifestyle.jpg" 
                alt="Luxury Lifestyle" 
                className="object-cover w-full h-full"
              />
              {/* Decorative Frame */}
              <div className="absolute top-6 left-6 right-6 bottom-6 border border-white/30 pointer-events-none" />
            </div>
            
            {/* Floating Card */}
            <div className="absolute -bottom-10 -right-10 bg-background p-8 shadow-xl max-w-xs hidden md:block border border-border/50">
              <p className="font-serif text-2xl italic text-foreground mb-2">"Time is the only true luxury."</p>
              <p className="text-xs uppercase tracking-widest text-muted-foreground">— Arduna Philosophy</p>
            </div>
          </motion.div>

          {/* Text Side */}
          <motion.div 
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-secondary uppercase tracking-widest text-sm font-medium mb-4">About Arduna</h3>
            <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-8 leading-tight">
              Redefining the Art of <br />
              <span className="italic text-muted-foreground">Personal Assistance</span>
            </h2>
            
            <div className="space-y-6 text-muted-foreground font-light text-lg leading-relaxed">
              <p>
                Founded on the principles of discretion, excellence, and anticipation, Arduna is more than a concierge service—we are the architects of your lifestyle.
              </p>
              <p>
                Our team of dedicated specialists works tirelessly behind the scenes to ensure that every aspect of your life runs seamlessly. From the mundane to the magnificent, we handle it all with the same level of precision and care.
              </p>
              <p>
                Whether you require last-minute travel arrangements, access to an exclusive gala, or simply someone to manage your household affairs, Arduna is your trusted partner in navigating the complexities of modern luxury living.
              </p>
            </div>

            <div className="mt-10">
              <Button 
                variant="outline"
                className="rounded-none border-foreground text-foreground hover:bg-foreground hover:text-background px-8 py-6 uppercase tracking-widest text-xs transition-all duration-300"
              >
                Read Our Story
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
