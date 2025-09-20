import { Compass, Facebook, Instagram, Twitter, Youtube, Download } from "lucide-react";
import Logo from "@/assets/final_logo.jpeg";

const Footer = () => {
  const footerLinks = {
    destinations: [
      "Tropical Islands",
      "Mountain Adventures",
      "Cultural Sites",
      "City Breaks",
      "Safari Tours",
    ],
    services: [
      "Flight Booking",
      "Hotel Reservations",
      "Tour Packages",
      "Travel Insurance",
      "Visa Assistance",
    ],
    company: ["About Us", "Our Team", "Careers", "Press", "Contact"],
    support: [
      "Help Center",
      "Terms of Service",
      "Privacy Policy",
      "Booking Terms",
      "Cancellation",
    ],
  };

  const socialLinks = [
    { icon: Facebook, href: "#" },
    { icon: Instagram, href: "#" },
    { icon: Twitter, href: "#" },
    { icon: Youtube, href: "#" },
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2">
              <div className="p-1.5 rounded-full bg-gradient-hero">
                <img
                  src={Logo}
                  alt="Soul-Sikkim Logo"
                  className="w-8 h-8 rounded-full"
                />
              </div>
              <span className="text-2xl font-bold">Soul-Sikkim</span>
            </div>

            <p className="text-primary-foreground/80 mb-6 leading-relaxed">
              Your trusted travel companion for discovering the world's most Monastries.
              We create unforgettable experiences that last a lifetime.
            </p>

            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="p-2 rounded-full bg-primary-foreground/10 hover:bg-gradient-hero transition-all duration-300 hover:scale-110"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Links Sections */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Destinations</h3>
            <ul className="space-y-2">
              {footerLinks.destinations.map((link, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-primary-foreground/80 hover:text-sunset transition-colors duration-300"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-primary-foreground/80 hover:text-sunset transition-colors duration-300"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              {footerLinks.support.map((link, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-primary-foreground/80 hover:text-sunset transition-colors duration-300"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="border-t border-primary-foreground/20 pt-8 mb-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-4 md:mb-0">
              <h3 className="text-lg font-semibold mb-2">Stay Updated</h3>
              <p className="text-primary-foreground/80">
                Get the latest travel deals and destination guides
              </p>
            </div>
            <div className="flex w-full md:w-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 md:w-64 px-4 py-2 rounded-l-lg bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder-primary-foreground/60 focus:outline-none focus:ring-2 focus:ring-sunset"
              />
              <button className="px-6 py-2 bg-gradient-hero rounded-r-lg hover:scale-105 transition-all duration-300 font-semibold">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 pt-8 flex flex-col md:flex-row items-center justify-between text-sm text-primary-foreground/70">
          <p>&copy; 2025 Soul-Sikkim. All rights reserved.</p>

          {/* PDF Links */}
          <div className="flex space-x-6 mt-4 md:mt-0 items-center">
            <a
              href="/travel-guide.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-sunset transition-colors duration-300"
            >
              View Travel Guide
            </a>

            <a
              href="/travel-guide.pdf"
              download="Soul-Sikkim-Guide.pdf"
              className="flex items-center space-x-1 px-3 py-1 bg-gradient-hero rounded-lg text-white hover:scale-105 transition-all duration-300"
            >
              <Download className="w-4 h-4" />
              <span>Download</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
