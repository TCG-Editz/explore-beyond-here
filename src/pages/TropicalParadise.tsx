import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, MapPin, Star, Calendar, Users } from "lucide-react";
import { useNavigate } from "react-router-dom";
import maldivesImage from "@/assets/maldives-resort.jpg";

const TropicalParadise = () => {
  const navigate = useNavigate();

  const highlights = [
    "Private beach access with crystal clear waters",
    "Overwater bungalows with glass floor panels",
    "World-class spa and wellness facilities", 
    "Snorkeling and diving with tropical marine life",
    "Fine dining with ocean views",
    "Water sports and sunset cruises"
  ];

  const packages = [
    {
      name: "Monastry 1",
      duration: "7 days",
      price: "****",
      includes: ["1.", "2.", "3.", "4."]
    },
    {
      name: "Monastry 2", 
      duration: "10 days",
      price: "****",
      includes: ["1.", "2.", "3.", "4."]
    },
    {
      name: "Monastry 3",
      duration: "14 days", 
      price: "****",
      includes: ["1.", "2.", "3.", "4."]
    },
    {
      name: "Monastry 4",
      duration: "7 days",
      price: "****",
      includes: ["1.", "2.", "3.", "4."]
    },
    {
      name: "Monastry 5",
      duration: "6 days",
      price: "****",
      includes: ["1.", "2.", "3.", "4."]
    },
    {
      name: "Monastry 6",
      duration: "5 days",
      price: "****",
      includes: ["1.", "2.", "3.", "4."]
    },
    {
      name: "Monastry 7",
      duration: "4 days",
      price: "****",
      includes: ["1.", "2.", "3.", "4."]
    },
    {
      name: "Monastry 8",
      duration: "3 days",
      price: "****",
      includes: ["1.", "2.", "3.", "4."]
    },
    {
      name: "Monastry 9",
      duration: "2 days",
      price: "****",
      includes: ["1.", "2.", "3.", "4."]
    },
    {
      name: "Monastry 10",
      duration: "1 day",
      price: "****",
      includes: ["1.", "2.", "3.", "4."]
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation Header */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
        <div className="container flex h-16 items-center px-4">
          <Button 
            variant="ghost" 
            onClick={() => navigate('/')}
            className="flex items-center gap-2"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Services
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-[60vh] overflow-hidden">
        <img 
          src={maldivesImage} 
          alt="Tropical Paradise"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        <div className="absolute inset-0 flex items-center justify-center text-center text-white">
          <div className="max-w-4xl px-4">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Monastries
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90">
              Explore Those Greatest Pilgrims, Crystal Waters, And Massive Monuments That Awaits For You
            </p>
            <div className="flex items-center justify-center gap-6 text-white/80">
              <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5" />
                <span>Sikkim</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="h-5 w-5 fill-current" />
                <span>4.9/5 Rating</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                <span>7-14 Days</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        {/* Description */}
        <section className="mb-16">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Experience Different Monastries
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Escape to a world where turquoise waters meet powder-soft beaches, and luxury knows no bounds. 
              Our tropical paradise destinations offer the perfect blend of natural beauty, world-class amenities, 
              and unforgettable experiences that will create memories to last a lifetime.
            </p>
          </div>
        </section>

        {/* Highlights */}
        <section className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-12">What Makes This Special</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {highlights.map((highlight, index) => (
              <Card key={index} className="border-0 shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Star className="h-6 w-6 text-primary" />
                  </div>
                  <p className="text-sm text-muted-foreground">{highlight}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Packages */}
        <section className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-12">Choose Your Monastry</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {packages.map((pkg, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-8">
                  <div className="text-center mb-6">
                    <h4 className="text-xl font-bold mb-2">{pkg.name}</h4>
                    <div className="flex items-center justify-center gap-2 text-muted-foreground mb-4">
                      <Calendar className="h-4 w-4" />
                      <span>{pkg.duration}</span>
                    </div>
                    <div className="text-3xl font-bold text-primary">{pkg.price}</div>
                    <div className="text-sm text-muted-foreground">per person</div>
                  </div>
                  
                  <div className="space-y-3 mb-8">
                    {pkg.includes.map((item, itemIndex) => (
                      <div key={itemIndex} className="flex items-center gap-2 text-sm">
                        <Star className="h-4 w-4 text-primary fill-current" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Button className="w-full bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70"
                          onClick={() => {
                      if (pkg.name === "Monastry 1") {
                        navigate('/Monastry1');
                      } else if (pkg.name === "Monastry 2") {
                        navigate('/Monastry2');
                      } else if (pkg.name === "Monastry 3") {
                        navigate('/Monastry3');
                      } else if (pkg.name === "Monastry 4") {
                        navigate('/Monastry4');
                      } else if (pkg.name === "Monastry 5") {
                        navigate('/Monastry5');
                      } else if (pkg.name === "Monastry 6") {
                        navigate('/Monastry6');
                      } else if (pkg.name === "Monastry 7") {
                        navigate('/Monastry7');
                      } else if (pkg.name === "Monastry 8") {
                        navigate('/Monastry8');
                      } else if (pkg.name === "Monastry 9") {
                        navigate('/Monastry9');
                      } else if (pkg.name === "Monastry 10") {
                        navigate('/Monastry10');
                      }
                    }}
                  >
                    Book Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 rounded-3xl p-12">
          <h3 className="text-3xl font-bold mb-4">Ready for Your Dream Vacation?</h3>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Don't wait to experience the vacation of a lifetime. Our travel experts are here to help you 
            plan every detail of your Monastry visit.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70">
              <Users className="h-5 w-5 mr-2" />
              Contact Our Experts
            </Button>
            <Button variant="outline" size="lg">
              View More Services
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default TropicalParadise;