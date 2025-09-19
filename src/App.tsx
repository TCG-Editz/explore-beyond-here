import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import TropicalParadise from "@/pages/TropicalParadise";
import Monastry1 from "@/pages/Monastry1";
import Monastry2 from "@/pages/Monastry2";
import Monastry3 from "@/pages/Monastry3";
import Monastry4 from "@/pages/Monastry4";
import Monastry5 from "@/pages/Monastry5";
import Monastry6 from "@/pages/Monastry6";
import Monastry7 from "@/pages/Monastry7";
import Monastry8 from "@/pages/Monastry8";
import Monastry9 from "@/pages/Monastry9";
import Monastry10 from "@/pages/Monastry10";
import MapPage from "@/pages/MapPage";
import GalleryPage from "@/pages/digitalpage";


const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/tropical-paradise" element={<TropicalParadise />} />
          <Route path="/Monastry1" element={<Monastry1 />} />
          <Route path="/Monastry2" element={<Monastry2 />} />
          <Route path="/Monastry3" element={<Monastry3 />} />
          <Route path="/Monastry4" element={<Monastry4 />} />
          <Route path="/Monastry5" element={<Monastry5 />} />
          <Route path="/Monastry6" element={<Monastry6 />} />
          <Route path="/Monastry7" element={<Monastry7 />} />
          <Route path="/Monastry8" element={<Monastry8 />} />
          <Route path="/Monastry9" element={<Monastry9 />} />
          <Route path="/Monastry10" element={<Monastry10 />} />
          <Route path="/map" element={<MapPage />} />
          <Route path="/DigitalArchive" element={<GalleryPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
  
