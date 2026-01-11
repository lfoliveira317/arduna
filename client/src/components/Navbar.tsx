import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Membership", href: "/membership" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out",
        scrolled
          ? "bg-background/90 backdrop-blur-md py-4 shadow-sm border-b border-border/50"
          : "bg-transparent py-6"
      )}
    >
      <div className="container flex items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <a className="font-serif text-2xl md:text-3xl font-bold tracking-widest uppercase text-foreground">
            Arduna
          </a>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href}>
              <a
                className={cn(
                  "text-sm uppercase tracking-widest hover:text-secondary transition-colors duration-300",
                  location === link.href
                    ? "text-secondary font-semibold"
                    : "text-foreground/80"
                )}
              >
                {link.name}
              </a>
            </Link>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden md:block">
          <Button
            variant="outline"
            className="rounded-none border-foreground/20 hover:bg-foreground hover:text-background transition-all duration-300 uppercase tracking-widest text-xs px-6"
            onClick={() => window.open("https://wa.me/1234567890", "_blank")}
          >
            Concierge
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={cn(
          "fixed inset-0 bg-background z-40 flex flex-col items-center justify-center space-y-8 transition-transform duration-500 ease-in-out md:hidden",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        {navLinks.map((link) => (
          <Link key={link.name} href={link.href}>
            <a
              className="font-serif text-3xl text-foreground hover:text-secondary transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          </Link>
        ))}
        <Button
          variant="outline"
          className="mt-8 rounded-none border-foreground/20 text-lg px-8 py-6 uppercase tracking-widest"
          onClick={() => {
            window.open("https://wa.me/1234567890", "_blank");
            setIsOpen(false);
          }}
        >
          WhatsApp Concierge
        </Button>
      </div>
    </nav>
  );
}
