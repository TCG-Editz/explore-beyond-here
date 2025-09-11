import { Card, CardContent } from "@/components/ui/card";
import { Plane, MapPin, Camera, Shield, Clock, Star } from "lucide-react";

const services = [
  {
    icon: Plane,
    title: "Flight Booking",
    description: "Find the best deals on flights worldwide with our exclusive partnerships.",
    features: ["24/7 Support", "Best Price Guarantee", "Flexible Booking"]
  },
  {
    icon: MapPin,
    title: "Custom Itineraries",
    description: "Personalized travel plans crafted by our expert travel consultants.",
    features: ["Expert Planning", "Local Insights", "Flexible Scheduling"]
  },
  {
    icon: Camera,
    title: "Photography Tours",
    description: "Capture stunning memories with our professional photography guides.",
    features: ["Pro Equipment", "Expert Guidance", "Edited Photos"]
  },
  {
    icon: Shield,
    title: "Travel Insurance",
    description: "Comprehensive coverage to protect your journey and peace of mind.",
    features: ["Medical Coverage", "Trip Cancellation", "24/7 Assistance"]
  },
  {
    icon: Clock,
    title: "Concierge Service",
    description: "Personal assistance for reservations, tickets, and special requests.",
    features: ["Personal Assistant", "Priority Booking", "Local Connections"]
  },
  {
    icon: Star,
    title: "Luxury Experiences",
    description: "Exclusive access to premium accommodations and unique experiences.",
    features: ["VIP Access", "Luxury Hotels", "Unique Experiences"]
  }
];

const Services = () => {
  return (
    <section className="py-20 px-4 bg-gradient-sunset">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            From planning to execution, we handle every detail of your perfect journey
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group bg-card/80 backdrop-blur-sm border-0 shadow-card hover:shadow-luxury transition-all duration-500 hover:-translate-y-2 animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-hero mb-6 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-card-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center justify-center text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;