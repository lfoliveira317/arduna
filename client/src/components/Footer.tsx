import { Link } from "wouter";
import { Instagram, Twitter, Linkedin, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-foreground text-background pt-20 pb-10">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="space-y-6">
            <Link href="/">
              <a className="font-serif text-3xl font-bold tracking-widest uppercase text-background">
                Arduna
              </a>
            </Link>
            <p className="text-background/60 font-light leading-relaxed max-w-xs">
              Curating exceptional lifestyles for the discerning few. Your time is our priority, your satisfaction our masterpiece.
            </p>
            <div className="flex space-x-4 pt-4">
              <a href="#" className="text-background/60 hover:text-secondary transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-background/60 hover:text-secondary transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-background/60 hover:text-secondary transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Navigation Column */}
          <div>
            <h4 className="font-serif text-lg mb-6 text-secondary">Explore</h4>
            <ul className="space-y-4">
              <li>
                <Link href="/services">
                  <a className="text-background/60 hover:text-white transition-colors font-light">Services</a>
                </Link>
              </li>
              <li>
                <Link href="/membership">
                  <a className="text-background/60 hover:text-white transition-colors font-light">Membership</a>
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <a className="text-background/60 hover:text-white transition-colors font-light">About Us</a>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <a className="text-background/60 hover:text-white transition-colors font-light">Contact</a>
                </Link>
              </li>
            </ul>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="font-serif text-lg mb-6 text-secondary">Expertise</h4>
            <ul className="space-y-4">
              <li className="text-background/60 font-light">Travel Management</li>
              <li className="text-background/60 font-light">Event Planning</li>
              <li className="text-background/60 font-light">Lifestyle Assistance</li>
              <li className="text-background/60 font-light">Property Management</li>
              <li className="text-background/60 font-light">VIP Access</li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="font-serif text-lg mb-6 text-secondary">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3 text-background/60 font-light">
                <MapPin size={18} className="mt-1 shrink-0" />
                <span>123 Luxury Lane, Suite 100<br />Beverly Hills, CA 90210</span>
              </li>
              <li className="flex items-center space-x-3 text-background/60 font-light">
                <Phone size={18} />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-3 text-background/60 font-light">
                <Mail size={18} />
                <span>concierge@arduna.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-background/40 font-light uppercase tracking-wider">
          <p>&copy; {new Date().getFullYear()} Arduna. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
