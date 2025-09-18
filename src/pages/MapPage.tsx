import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, MapPin } from "lucide-react";
import { useNavigate } from "react-router-dom";

const MapPage: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center justify-start min-h-screen bg-gradient-to-b from-blue-100 via-blue-50 to-blue-100 p-6">
      
      {/* Navigation Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b shadow-sm">
        <div className="container flex h-16 items-center px-4">
          <Button 
            variant="ghost" 
            onClick={() => navigate('/Monastry1')}
            className="flex items-center gap-2"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Monastry1
          </Button>
        </div>
      </header>

      {/* Main Card */}
      <Card className="w-full max-w-5xl rounded-3xl shadow-2xl overflow-hidden mt-8 bg-white/90 backdrop-blur-sm">
        
        {/* Card Header */}
        <CardHeader className="bg-primary/10 px-6 py-4">
          <CardTitle className="flex items-center gap-3 text-primary text-2xl md:text-3xl">
            <MapPin className="h-6 w-6" />
            Explore Location in 360°
          </CardTitle>
        </CardHeader>

        {/* Map iframe */}
        <CardContent className="p-6 relative h-[500px] rounded-2xl overflow-hidden shadow-inner">
          <iframe
            src="https://www.google.com/maps/embed?pb=!4v1757952607272!6m8!1m7!1sCAoSFkNJSE0wb2dLRUlDQWdJQ0VndFRIUmc.!2m2!1d27.28862027053181!2d88.56148053028257!3f24.55768802571662!4f0.09903168439691967!5f0.4000000000000002"
            className="w-full h-full rounded-xl"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>

          <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-black/5 pointer-events-none rounded-xl"></div>
        </CardContent>

        {/* Footer CTA */}
        <div className="p-6 text-center">
          <p className="text-gray-800 text-base md:text-lg">
            Use the full-screen button on the map to get an immersive 360° experience.
          </p>
        </div>
      </Card>
    </div>
  );
};

export default MapPage;
