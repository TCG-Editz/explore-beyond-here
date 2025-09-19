import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import mainbg from "@/assets/MainBg.jpg";

const Hero = () => {
  const navigate = useNavigate();
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${mainbg})` }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-ocean/20 via-transparent to-primary/40" />
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto animate-fade-in">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 drop-shadow-lg">
          Discover Your Soul
          <span className="block bg-gradient-to-r from-sunset to-sunset-light bg-clip-text text-transparent">
            In This Vast World
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto drop-shadow-md">
          Explore breathtaking sightings, create unforgettable memories, and experience the world like never before.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="lg" 
            className="bg-gradient-hero text-blue border-0 hover:scale-105 transition-all duration-300 shadow-luxury px-8 py-6 text-lg font-semibold"
            onClick={() => navigate("/tropical-paradise")}
          >
            Explore Monastries
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="border-white/30 text-white bg-white/10 backdrop-blur-sm hover:bg-white/20 hover:scale-105 transition-all duration-300 px-8 py-6 text-lg font-semibold"
          >
            Plan Your Trip
          </Button>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/70 animate-bounce">
        <div className="flex flex-col items-center">
          <span className="text-sm mb-2">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
