import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import Logo from "@/assets/final_logo.jpeg";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Destinations", href: "#destinations" },
    { label: "Services", href: "#services" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" }
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-card border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo + Branding */}
          <div className="flex items-center space-x-2">
            <div className="p-1.5 rounded-full bg-gradient-hero">
              <img
                src={Logo}
                alt="Soul-Sikkim Logo"
                className="w-8 h-8 rounded-full"
              />
            </div>
            <span
              className={`text-2xl font-bold transition-colors duration-300 ${
                isScrolled ? "text-foreground" : "text-white"
              }`}
            >
              Soul-Sikkim
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={`transition-colors duration-300 hover:text-primary font-medium ${
                  isScrolled ? "text-foreground" : "text-white/90"
                }`}
              >
                {item.label}
              </a>
            ))}
            <Button className="bg-gradient-hero text-white border-0 hover:scale-105 transition-all duration-300">
              Book Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-label="Toggle Menu"
            className={`md:hidden p-2 rounded-lg transition-colors duration-300 ${
              isScrolled
                ? "text-foreground hover:bg-muted"
                : "text-white hover:bg-white/10"
            }`}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-md transition-all duration-300 ease-in-out">
            <div className="px-4 py-4 space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="block text-foreground hover:text-primary transition-colors duration-300 font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <Button className="w-full bg-gradient-hero text-white border-0 hover:scale-105 transition-all duration-300">
                Book Now
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
