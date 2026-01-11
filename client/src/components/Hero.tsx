import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background Image with Parallax-like fixed positioning */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: 'url("/images/hero-banner.jpg")',
          filter: 'brightness(0.6)'
        }}
      />
      
      {/* Overlay Gradient */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/30 via-transparent to-black/60" />

      {/* Content */}
      <div className="container relative z-20 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
        >
          <h2 className="text-sm md:text-base uppercase tracking-[0.3em] mb-6 text-secondary font-light">
            Lifestyle Management & Concierge
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
        >
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-medium mb-8 leading-tight">
            Elevate Your <br />
            <span className="italic text-secondary">Existence</span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
          className="max-w-2xl mx-auto mb-12"
        >
          <p className="text-lg md:text-xl font-light text-white/80 leading-relaxed">
            Arduna provides bespoke lifestyle assistance for those who value time as their ultimate luxury.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
          className="flex flex-col md:flex-row items-center justify-center gap-6"
        >
          <Button 
            className="bg-secondary text-primary hover:bg-white hover:text-black rounded-none px-10 py-7 text-sm uppercase tracking-widest transition-all duration-500"
          >
            Explore Membership
          </Button>
          <Button 
            variant="outline"
            className="border-white text-white hover:bg-white hover:text-black rounded-none px-10 py-7 text-sm uppercase tracking-widest transition-all duration-500 bg-transparent"
          >
            Our Services
          </Button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 text-white/50"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="w-[1px] h-16 bg-gradient-to-b from-transparent via-white/50 to-transparent mx-auto mb-2" />
        <span className="text-[10px] uppercase tracking-widest">Scroll</span>
      </motion.div>
    </section>
  );
}
