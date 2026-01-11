import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section className="py-24 bg-muted/20">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h3 className="text-secondary uppercase tracking-widest text-sm font-medium mb-4">Get in Touch</h3>
          <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-8">Begin Your Journey</h2>
          <p className="text-muted-foreground font-light text-lg leading-relaxed mb-16 max-w-2xl mx-auto">
            Whether you are interested in membership or have a specific request, our team is ready to assist you. Contact us directly through any of the channels below.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div className="space-y-4">
              <h4 className="font-serif text-xl text-foreground">Headquarters</h4>
              <p className="text-muted-foreground font-light leading-relaxed">
                123 Luxury Lane, Suite 100<br />
                Beverly Hills, CA 90210<br />
                United States
              </p>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-serif text-xl text-foreground">Direct Contact</h4>
              <p className="text-muted-foreground font-light leading-relaxed">
                <a href="tel:+15551234567" className="block hover:text-secondary transition-colors mb-1">+1 (555) 123-4567</a>
                <a href="mailto:concierge@arduna.com" className="block hover:text-secondary transition-colors">concierge@arduna.com</a>
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="font-serif text-xl text-foreground">Hours of Operation</h4>
              <p className="text-muted-foreground font-light leading-relaxed">
                Monday - Friday: 8am - 8pm PST<br />
                Saturday - Sunday: 10am - 6pm PST<br />
                <span className="text-secondary text-sm mt-2 block font-medium">*24/7 for Elite & Bespoke Members</span>
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
