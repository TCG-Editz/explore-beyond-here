import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowLeft, Heart, MapPin, Calendar, Users, Star, Palmtree, Waves, Utensils } from "lucide-react";
import { useNavigate } from "react-router-dom";
import maldivesImage from "@/assets/maldives-resort.jpg";

const Monastry1 = () => {
  const navigate = useNavigate();

  const packageDetails = {
    name: "Monastry1",
    duration: "7 days / 6 nights",
    price: "$2,099",
    description: "Perfect for couples seeking intimacy and romance in paradise",
    highlights: [
      "Overwater bungalow with private deck",
      "Private candlelit dinner on the beach",
      "Couple's spa treatment with ocean views",
      "Sunset cruise with champagne",
      "Breakfast in bed service",
      "Professional couple's photoshoot"
    ]
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation Header */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
        <div className="container flex h-16 items-center px-4">
          <Button 
            variant="ghost" 
            onClick={() => navigate('/tropical-paradise')}
            className="flex items-center gap-2"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to other Monastries
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-[50vh] overflow-hidden">
        <img 
          src={maldivesImage} 
          alt="Romantic Getaway Package"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        <div className="absolute inset-0 flex items-center justify-center text-center text-white">
          <div className="max-w-4xl px-4">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Heart className="h-6 w-6 text-red-400 fill-current" />
              <Heart className="h-8 w-8 text-red-400 fill-current" />
              <Heart className="h-6 w-6 text-red-400 fill-current" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              {packageDetails.name}
            </h1>
            <p className="text-xl md:text-2xl mb-6 text-white/90">
              {packageDetails.description}
            </p>
            <div className="flex items-center justify-center gap-6 text-white/80">
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                <span>{packageDetails.duration}</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5" />
                <span>2 Guests</span>
              </div>
              <div className="text-2xl font-bold text-white">
                {packageDetails.price}
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16 space-y-12">
  {/* 2-column layout for Highlights + Itinerary */}
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
    {/* Highlights */}
    <div className="space-y-8">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Palmtree className="h-5 w-5 text-primary" />
            Monastry Highlights
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {packageDetails.highlights.map((highlight, index) => (
            <div key={index} className="flex items-start gap-3">
              <Star className="h-4 w-4 text-primary fill-current mt-0.5 flex-shrink-0" />
              <span className="text-sm">{highlight}</span>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>

    {/* Itinerary */}
    <div>
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Calendar className="h-5 w-5 text-primary" />
            7-Day Monastry Trip
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* Itinerary Days */}
          <div className="space-y-3 text-sm">
            <div className="border-l-2 border-primary pl-4">
              <h5 className="font-semibold">Day 1-2: Arrival</h5>
              <p className="text-muted-foreground">text here</p>
            </div>
            <div className="border-l-2 border-primary pl-4">
              <h5 className="font-semibold">Day 3-4: ---------</h5>
              <p className="text-muted-foreground">text here</p>
            </div>
            <div className="border-l-2 border-primary pl-4">
              <h5 className="font-semibold">Day 5-6: ---------</h5>
              <p className="text-muted-foreground">text here</p>
            </div>
            <div className="border-l-2 border-primary pl-4">
              <h5 className="font-semibold">Day 7: Farewell</h5>
              <p className="text-muted-foreground">text here!</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  </div>

  {/* 360º View Section (full width) */}
  <Card>
    <CardHeader>
      <CardTitle className="flex items-center gap-2">
        <MapPin className="h-5 w-5 text-primary" />
        Explore in 360°
      </CardTitle>
    </CardHeader>
    <CardContent className="text-center space-y-4">
      <p className="text-muted-foreground">
        Take a virtual tour of the Monastry and experience its beauty before you arrive.
      </p>
      <Button 
        className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70"
        size="lg"
        onClick={() => navigate("/map")}
      >
        <Heart className="h-5 w-5 mr-2" />
        360º View Here
      </Button>
    </CardContent>
  </Card>

  {/* Experiences Section (full width, below 360º) */}
  <Card>
    <CardHeader>
      <CardTitle className="flex items-center gap-2">
        <Waves className="h-5 w-5 text-primary" />
        Monastry Experiences
      </CardTitle>
    </CardHeader>
    <CardContent className="space-y-4">
      <div className="p-4 bg-primary/5 rounded-lg">
        <h5 className="font-semibold mb-2">Overwater Bungalow Experience</h5>
        <p className="text-sm text-muted-foreground">Your private sanctuary features ...</p>
      </div>
      <div className="p-4 bg-primary/5 rounded-lg">
        <h5 className="font-semibold mb-2">Culinary</h5>
        <p className="text-sm text-muted-foreground">Savor intimate dining experiences ...</p>
      </div>
      <div className="p-4 bg-primary/5 rounded-lg">
        <h5 className="font-semibold mb-2">Wellness Journey</h5>
        <p className="text-sm text-muted-foreground">Indulge in synchronized spa treatments ...</p>
      </div>
    </CardContent>
  </Card>
</div>
</div>
  );
};
      
export default Monastry1;