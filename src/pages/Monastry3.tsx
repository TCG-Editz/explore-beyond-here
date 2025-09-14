import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowLeft, Crown, MapPin, Calendar, Users, Star, Utensils, Car, Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";
import maldivesImage from "@/assets/maldives-resort.jpg";

const Monastry3 = () => {
  const navigate = useNavigate();

  const packageDetails = {
    name: "Monastry 3",
    duration: "14 days / 13 nights",
    price: "$4,299",
    description: "Ultimate luxury experience with world-class service and amenities",
    highlights: [
      "Presidential suite with panoramic ocean views",
      "Private yacht with dedicated crew",
      "Personal butler and concierge service",
      "Michelin-starred dining experiences",
      "Private helicopter transfers",
      "Exclusive spa treatments",
      "All premium activities included",
      "24/7 luxury transportation",
      "Private beach cabana",
      "Celebrity chef cooking classes"
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
          alt="Luxury Escape Package"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        <div className="absolute inset-0 flex items-center justify-center text-center text-white">
          <div className="max-w-4xl px-4">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Crown className="h-6 w-6 text-yellow-400 fill-current" />
              <Crown className="h-8 w-8 text-yellow-400 fill-current" />
              <Crown className="h-6 w-6 text-yellow-400 fill-current" />
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
                <span>2-6 Guests</span>
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
                  <Crown className="h-5 w-5 text-primary" />
                  Luxury Amenities
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
                  14-Day Luxury Itinerary
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3 text-sm">
                  <div className="border-l-2 border-primary pl-4">
                    <h5 className="font-semibold">Day 1-3: Royal Arrival</h5>
                    <p className="text-muted-foreground">Private helicopter transfer from airport. Presidential Suite welcome with champagne and exotic fruit platter. Personal butler introduction and preferences consultation.</p>
                  </div>
                  <div className="border-l-2 border-primary pl-4">
                    <h5 className="font-semibold">Day 4-6: Culinary Excellence</h5>
                    <p className="text-muted-foreground">Private cooking masterclass with Michelin-starred chef. Wine pairing dinner on private yacht. Exclusive access to chef's table at underwater restaurant.</p>
                  </div>
                  <div className="border-l-2 border-primary pl-4">
                    <h5 className="font-semibold">Day 7-9: Wellness & Rejuvenation</h5>
                    <p className="text-muted-foreground">Signature spa treatments in private overwater pavilion. Daily yoga with personal instructor. Meditation sessions with world-renowned wellness guru.</p>
                  </div>
                  <div className="border-l-2 border-primary pl-4">
                    <h5 className="font-semibold">Day 10-12: Exclusive Experiences</h5>
                    <p className="text-muted-foreground">Private island picnic accessible only by helicopter. Sunset dinner on sandbank with live orchestra. Night diving with marine biologist in bioluminescent waters.</p>
                  </div>
                  <div className="border-l-2 border-primary pl-4">
                    <h5 className="font-semibold">Day 13-14: Grand Finale</h5>
                    <p className="text-muted-foreground">VIP shopping experience with personal stylist. Farewell gala dinner with celebrity chef presentation. Luxury souvenir collection and memory album.</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Sparkles className="h-5 w-5 text-primary" />
                  Luxury Experiences
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-4">
                  <div className="p-4 bg-primary/5 rounded-lg">
                    <h5 className="font-semibold mb-2">Presidential Suite Paradise</h5>
                    <p className="text-sm text-muted-foreground">Your 500sqm overwater palace features panoramic ocean views, private infinity pool, personal elevator, and dedicated yacht berth. Floor-to-ceiling windows showcase endless azure horizons while marble bathrooms offer rainfall showers and gold fixtures.</p>
                  </div>
                  <div className="p-4 bg-primary/5 rounded-lg">
                    <h5 className="font-semibold mb-2">Michelin-Starred Gastronomy</h5>
                    <p className="text-sm text-muted-foreground">Savor exclusive culinary creations by internationally acclaimed chefs. From molecular gastronomy dinners suspended over lagoons to traditional Maldivian feasts prepared by local masters, every meal is a masterpiece.</p>
                  </div>
                  <div className="p-4 bg-primary/5 rounded-lg">
                    <h5 className="font-semibold mb-2">Unparalleled Service Excellence</h5>
                    <p className="text-sm text-muted-foreground">Your dedicated team includes a personal butler, private chef, massage therapist, and concierge. Anticipating your every need, they ensure seamless luxury from sunrise yoga to midnight stargazing sessions.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Booking Form */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle>Book Your Luxury Escape</CardTitle>
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
                        <SelectItem value="2">2 Guests</SelectItem>
                        <SelectItem value="3">3 Guests</SelectItem>
                        <SelectItem value="4">4 Guests</SelectItem>
                        <SelectItem value="5">5 Guests</SelectItem>
                        <SelectItem value="6">6 Guests</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="suite">Suite Preference</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select suite type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="presidential">Presidential Suite</SelectItem>
                      <SelectItem value="royal">Royal Suite</SelectItem>
                      <SelectItem value="penthouse">Penthouse Suite</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="specialRequests">VIP Requests</Label>
                  <Textarea 
                    id="specialRequests" 
                    placeholder="Special celebrations, dietary preferences, butler services, etc."
                    rows={3}
                  />
                </div>

                <div className="border-t pt-6">
                  <div className="flex justify-between items-center mb-6">
                    <span className="text-lg font-semibold">Total Cost:</span>
                    <span className="text-2xl font-bold text-primary">{packageDetails.price}</span>
                  </div>
                  
                  <Button className="w-full bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70" size="lg">
                    <Crown className="h-5 w-5 mr-2" />
                    Book Luxury Escape
                  </Button>
                  
                  <p className="text-xs text-muted-foreground text-center mt-4">
                    VIP concierge will contact you within 2 hours to finalize arrangements
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

export default Monastry3;