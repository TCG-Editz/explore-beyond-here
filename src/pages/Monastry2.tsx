import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowLeft, Zap, MapPin, Calendar, Users, Star, Fish, Waves, Camera } from "lucide-react";
import { useNavigate } from "react-router-dom";
import maldivesImage from "@/assets/maldives-resort.jpg";

const Monastry2 = () => {
  const navigate = useNavigate();

  const packageDetails = {
    name: "Monastry 2",
    duration: "10 days / 9 nights",
    price: "$2,899",
    description: "Thrilling water sports and underwater exploration adventures",
    highlights: [
      "Beach villa with direct ocean access",
      "Daily water sports activities",
      "Professional diving excursions",
      "Island hopping adventures",
      "Jet ski and parasailing",
      "Night fishing expeditions",
      "Underwater photography sessions",
      "Marine life snorkeling tours"
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
            Back to Packages
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-[50vh] overflow-hidden">
        <img 
          src={maldivesImage} 
          alt="Adventure Package"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        <div className="absolute inset-0 flex items-center justify-center text-center text-white">
          <div className="max-w-4xl px-4">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Zap className="h-6 w-6 text-yellow-400 fill-current" />
              <Zap className="h-8 w-8 text-yellow-400 fill-current" />
              <Zap className="h-6 w-6 text-yellow-400 fill-current" />
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
                <span>1-4 Guests</span>
              </div>
              <div className="text-2xl font-bold text-white">
                {packageDetails.price}
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Package Details */}
          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Waves className="h-5 w-5 text-primary" />
                  Adventure Activities
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

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-primary" />
                  10-Day Adventure Itinerary
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3 text-sm">
                  <div className="border-l-2 border-primary pl-4">
                    <h5 className="font-semibold">Day 1-2: Arrival & Orientation</h5>
                    <p className="text-muted-foreground">Speedboat transfer to beach villa. Equipment fitting and dive briefing with PADI instructors. First reef snorkeling expedition to acclimate to tropical waters.</p>
                  </div>
                  <div className="border-l-2 border-primary pl-4">
                    <h5 className="font-semibold">Day 3-4: Deep Sea Adventures</h5>
                    <p className="text-muted-foreground">Open water diving at pristine coral walls. Night diving to witness nocturnal marine life. Underwater photography workshop with professional marine photographer.</p>
                  </div>
                  <div className="border-l-2 border-primary pl-4">
                    <h5 className="font-semibold">Day 5-6: Adrenaline Rush</h5>
                    <p className="text-muted-foreground">Jet ski island hopping tour. Parasailing above turquoise lagoons. Deep sea fishing expedition with experienced local guides. Kitesurfing lessons in protected lagoons.</p>
                  </div>
                  <div className="border-l-2 border-primary pl-4">
                    <h5 className="font-semibold">Day 7-8: Island Exploration</h5>
                    <p className="text-muted-foreground">Private boat charter to uninhabited islands. Kayaking through mangrove channels. Beach camping under the stars with bonfire dinner.</p>
                  </div>
                  <div className="border-l-2 border-primary pl-4">
                    <h5 className="font-semibold">Day 9-10: Ultimate Challenges</h5>
                    <p className="text-muted-foreground">Advanced diving at shark point. Wakeboarding and water skiing sessions. Final adventure: swim with whale sharks and manta rays.</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Fish className="h-5 w-5 text-primary" />
                  Adventure Experiences
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-4">
                  <div className="p-4 bg-primary/5 rounded-lg">
                    <h5 className="font-semibold mb-2">World-Class Diving</h5>
                    <p className="text-sm text-muted-foreground">Explore pristine coral reefs teeming with marine life. From colorful reef fish to majestic manta rays and whale sharks, each dive reveals new wonders. PADI-certified instructors ensure safe exploration of depths up to 30 meters.</p>
                  </div>
                  <div className="p-4 bg-primary/5 rounded-lg">
                    <h5 className="font-semibold mb-2">High-Octane Water Sports</h5>
                    <p className="text-sm text-muted-foreground">Feel the rush of jet skiing across crystal waters, soaring above lagoons while parasailing, and mastering the art of kitesurfing. Professional instructors provide guidance for all skill levels from beginner to advanced.</p>
                  </div>
                  <div className="p-4 bg-primary/5 rounded-lg">
                    <h5 className="font-semibold mb-2">Island Discovery Expeditions</h5>
                    <p className="text-sm text-muted-foreground">Charter private boats to explore hidden coves and uninhabited islands. Kayak through pristine mangrove forests, discover secluded beaches, and camp under star-filled skies on remote islands.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Booking Form */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle>Book Your Adventure Package</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" placeholder="Enter first name" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" placeholder="Enter last name" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="Enter email address" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" type="tel" placeholder="Enter phone number" />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="checkIn">Check-in Date</Label>
                    <Input id="checkIn" type="date" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="guests">Number of Guests</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select guests" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1">1 Guest</SelectItem>
                        <SelectItem value="2">2 Guests</SelectItem>
                        <SelectItem value="3">3 Guests</SelectItem>
                        <SelectItem value="4">4 Guests</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="experience">Diving Experience Level</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select experience level" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="beginner">Beginner</SelectItem>
                      <SelectItem value="intermediate">Intermediate</SelectItem>
                      <SelectItem value="advanced">Advanced</SelectItem>
                      <SelectItem value="certified">PADI Certified</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="specialRequests">Special Requests</Label>
                  <Textarea 
                    id="specialRequests" 
                    placeholder="Equipment preferences, medical conditions, activity preferences, etc."
                    rows={3}
                  />
                </div>

                <div className="border-t pt-6">
                  <div className="flex justify-between items-center mb-6">
                    <span className="text-lg font-semibold">Total Cost:</span>
                    <span className="text-2xl font-bold text-primary">{packageDetails.price}</span>
                  </div>
                  
                  <Button className="w-full bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70" size="lg">
                    <Zap className="h-5 w-5 mr-2" />
                    Book Adventure Package
                  </Button>
                  
                  <p className="text-xs text-muted-foreground text-center mt-4">
                    Free cancellation up to 48 hours before check-in
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Monastry2;