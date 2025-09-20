import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Heart, MapPin, Calendar, Users, Star, Palmtree, Waves } from "lucide-react";
import { useNavigate } from "react-router-dom";
import rumtekm from "@/assets/rumtek monastry.jpg";

const Monastry4 = () => {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(-1);
  const utterancesRef = useRef([]);

  const packageDetails = {
    name: "Rumtek Monastry",
    duration: "",
    price: "₹10",
    description: "Perfect for Inner Peace",
    highlights: [
      "One of the most important Buddhist monasteries in Sikkim, serving as the seat of the Karmapa lineage.",
      "Traditional Tibetan-style design with intricate murals, carvings, and golden roofs.",
      "Tranquil surroundings perfect for meditation and spiritual reflection.",
      "Houses precious artifacts, scriptures, and the sacred throne of the Karmapa.",
      "Famous for colorful celebrations like Losar (Tibetan New Year) and other rituals.",
      "Set against the backdrop of lush hills, offering panoramic views of the surrounding valleys."
    ]
  };

  const sentences = [
    "Rumtek Monastery, also known as the Dharmachakra Centre, was built in the 1960s under the guidance of the 16th Karmapa, Rangjung Rigpe Dorje.",
    "It serves as the main seat of the Karmapa lineage outside Tibet and is renowned for its traditional Tibetan architecture, sacred artifacts, and spiritual significance.",
    "The monastery plays a key role in preserving Tibetan Buddhist culture, hosting annual festivals, and providing education to monks and practitioners from around the world."
  ];

  const readAloud = () => {
    window.speechSynthesis.cancel();
    utterancesRef.current = sentences.map((sentence, i) => {
      const utterance = new SpeechSynthesisUtterance(sentence);
      utterance.rate = 1;
      utterance.pitch = 1;
      utterance.onstart = () => setCurrentIndex(i);
      utterance.onend = () => {
        if (i === sentences.length - 1) setCurrentIndex(-1);
      };
      return utterance;
    });
    utterancesRef.current.forEach(utterance => window.speechSynthesis.speak(utterance));
  };

  const pauseSpeech = () => window.speechSynthesis.pause();
  const resumeSpeech = () => window.speechSynthesis.resume();
  const stopSpeech = () => {
    window.speechSynthesis.cancel();
    setCurrentIndex(-1);
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
          src={rumtekm} 
          alt="Rumtek Monastery"
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
                <span>Guests</span>
              </div>
              <div className="text-2xl font-bold text-white">
                {packageDetails.price}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 360º View Section */}
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

      <div className="container mx-auto px-4 py-16 space-y-12">
        {/* 2-column layout for Highlights + History */}
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

          {/* History Section with Read Aloud + Highlight */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-primary" />
                Monastery History
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {sentences.map((sentence, i) => (
                <p
                  key={i}
                  className={`text-m text-foreground ${currentIndex === i ? "bg-yellow-200" : ""} transition-colors`}
                >
                  {sentence}
                </p>
              ))}
              <div className="flex gap-4 mt-4">
                <Button onClick={readAloud} className="bg-primary text-white hover:bg-primary/90">
                  Read Aloud
                </Button>
                <Button onClick={pauseSpeech} className="bg-yellow-500 text-white hover:bg-yellow-600">
                  Pause
                </Button>
                <Button onClick={resumeSpeech} className="bg-green-500 text-white hover:bg-green-600">
                  Resume
                </Button>
                <Button onClick={stopSpeech} className="bg-red-500 text-white hover:bg-red-600">
                  Stop
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Tips for Monastery Section */}
<Card>
  <CardHeader>
    <CardTitle className="flex items-center gap-2">
      <Waves className="h-5 w-5 text-primary" />
      Tips for Visiting a Monastery
    </CardTitle>
  </CardHeader>
  <CardContent className="space-y-4">
    <div className="p-4 bg-primary/5 rounded-lg">
      <h5 className="font-semibold mb-2">Respect Silence</h5>
      <p className="text-sm text-muted-foreground">
        Maintain a quiet demeanor to honor the meditation and prayer routines.
      </p>
    </div>
    <div className="p-4 bg-primary/5 rounded-lg">
      <h5 className="font-semibold mb-2">Dress Modestly</h5>
      <p className="text-sm text-muted-foreground">
        Wear clothing that covers shoulders and knees, showing respect for local customs.
      </p>
    </div>
    <div className="p-4 bg-primary/5 rounded-lg">
      <h5 className="font-semibold mb-2">Mindful Photography</h5>
      <p className="text-sm text-muted-foreground">
        Always ask permission before taking photos, especially inside prayer halls.
      </p>
    </div>
  </CardContent>
</Card>

      </div>
    </div>
  );
};

export default Monastry4;
