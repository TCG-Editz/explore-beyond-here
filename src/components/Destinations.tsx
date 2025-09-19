import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import maldivesImage from "@/assets/13.jpg";
import mountainImage from "@/assets/mountain-adventure.jpg";
import culturalImage from "@/assets/cultural-heritage.jpg";

const destinations = [
  {
    id: 1,
    title: "Monastries",
    description: "View those vast Monastries and feel them just by scrolling.",
    image: maldivesImage,
    price: "none",
    duration: "7-14 days",
    category: "Vast Monastries and 360° view"
  },
  {
    id: 2,
    title: "Tourist Spots",
    description: "Experience breathtaking landscapes and thrilling outdoor spots where u can have fun.",
    image: mountainImage,
    price: "none",
    duration: "5-10 days",
    category: "Adventure & Tourism"
  },
  {
    id: 3,
    title: "Cultural Heritage",
    description: "Immerse yourself in rich history, ancient traditions, and architectural wonders.",
    image: culturalImage,
    price: "none",
    duration: "4-8 days",
    category: "Culture & History"
  },
  {
    id: 4,
    title: "Digital Archive",
    description: "Immerse yourself in rich history, ancient traditions, and architectural wonders.",
    image: culturalImage,
    price: "none",
    duration: "0 days",
    category: "Photos"
  },
  {
    id: 5,
    title: "Handicrafts",
    description: "Experience breathtaking landscapes and thrilling outdoor spots where u can have fun.",
    image: mountainImage,
    price: "none",
    duration: "5-10 days",
    category: "Crafts"
  }
];

const Destinations = () => {
  const navigate = useNavigate();

  const handleExploreClick = (destinationId: number) => {
    if (destinationId === 1) { // Tropical Paradise
      navigate('/tropical-paradise');
    } else if (destinationId === 4){
      navigate('/DigitalArchive');
    }
    // Add more destinations as needed
  };
  
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-background to-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Featured Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover our handpicked selection of extraordinary places that will take your breath away
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((destination, index) => (
            <Card 
              key={destination.id} 
              className="group overflow-hidden border-0 shadow-card hover:shadow-luxury transition-all duration-500 hover:-translate-y-2 animate-scale-in bg-card"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={destination.image} 
                  alt={destination.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                    {destination.category}
                  </span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-card-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                  {destination.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {destination.description}
                </p>
                
                <div className="flex justify-between items-center mb-4 text-sm text-muted-foreground">
                  <span>{destination.duration}</span>
                  <span className="font-semibold text-primary">{destination.price}</span>
                </div>
                
                <Button 
                  className="w-full bg-gradient-hero text-white border-0 hover:scale-105 transition-all duration-300 group-hover:shadow-lg"
                  onClick={() => handleExploreClick(destination.id)}                
                >
                  Explore Now
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button 
            variant="outline" 
            size="lg"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 px-8 py-6"
          >
            View All Destinations
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Destinations;
