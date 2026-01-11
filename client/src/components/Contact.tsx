import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section className="py-24 bg-muted/20">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-secondary uppercase tracking-widest text-sm font-medium mb-4">Get in Touch</h3>
            <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-8">Begin Your Journey</h2>
            <p className="text-muted-foreground font-light text-lg leading-relaxed mb-12">
              Whether you are interested in membership or have a specific request, our team is ready to assist you. Please fill out the form or contact us directly.
            </p>

            <div className="space-y-8">
              <div>
                <h4 className="font-serif text-xl mb-2">Headquarters</h4>
                <p className="text-muted-foreground font-light">
                  123 Luxury Lane, Suite 100<br />
                  Beverly Hills, CA 90210<br />
                  United States
                </p>
              </div>
              
              <div>
                <h4 className="font-serif text-xl mb-2">Direct Contact</h4>
                <p className="text-muted-foreground font-light">
                  <a href="tel:+15551234567" className="hover:text-secondary transition-colors">+1 (555) 123-4567</a><br />
                  <a href="mailto:concierge@arduna.com" className="hover:text-secondary transition-colors">concierge@arduna.com</a>
                </p>
              </div>

              <div>
                <h4 className="font-serif text-xl mb-2">Hours of Operation</h4>
                <p className="text-muted-foreground font-light">
                  Monday - Friday: 8am - 8pm PST<br />
                  Saturday - Sunday: 10am - 6pm PST<br />
                  <span className="text-secondary text-sm mt-1 block">*24/7 for Elite & Bespoke Members</span>
                </p>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-background p-10 border border-border shadow-sm"
          >
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="firstName" className="text-xs uppercase tracking-widest text-muted-foreground">First Name</label>
                  <Input id="firstName" className="rounded-none border-t-0 border-x-0 border-b border-border bg-transparent px-0 focus-visible:ring-0 focus-visible:border-secondary" placeholder="John" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="lastName" className="text-xs uppercase tracking-widest text-muted-foreground">Last Name</label>
                  <Input id="lastName" className="rounded-none border-t-0 border-x-0 border-b border-border bg-transparent px-0 focus-visible:ring-0 focus-visible:border-secondary" placeholder="Doe" />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-xs uppercase tracking-widest text-muted-foreground">Email Address</label>
                <Input id="email" type="email" className="rounded-none border-t-0 border-x-0 border-b border-border bg-transparent px-0 focus-visible:ring-0 focus-visible:border-secondary" placeholder="john@example.com" />
              </div>

              <div className="space-y-2">
                <label htmlFor="phone" className="text-xs uppercase tracking-widest text-muted-foreground">Phone Number</label>
                <Input id="phone" type="tel" className="rounded-none border-t-0 border-x-0 border-b border-border bg-transparent px-0 focus-visible:ring-0 focus-visible:border-secondary" placeholder="+1 (555) 000-0000" />
              </div>

              <div className="space-y-2">
                <label htmlFor="interest" className="text-xs uppercase tracking-widest text-muted-foreground">Area of Interest</label>
                <select id="interest" className="w-full py-2 border-b border-border bg-transparent text-sm focus:outline-none focus:border-secondary">
                  <option>Membership Inquiry</option>
                  <option>Travel Services</option>
                  <option>Event Planning</option>
                  <option>General Inquiry</option>
                </select>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-xs uppercase tracking-widest text-muted-foreground">Message</label>
                <Textarea id="message" className="rounded-none border-t-0 border-x-0 border-b border-border bg-transparent px-0 min-h-[100px] focus-visible:ring-0 focus-visible:border-secondary resize-none" placeholder="How can we assist you?" />
              </div>

              <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 rounded-none py-6 uppercase tracking-widest text-xs mt-4">
                Send Message
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
