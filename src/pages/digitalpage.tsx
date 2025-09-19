import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Images } from "lucide-react";
import { useNavigate } from "react-router-dom";

const GalleryPage: React.FC = () => {
  const navigate = useNavigate();

  // ✅ Use direct Postimg links
  const images: string[] = [
    "https://i.postimg.cc/WDXdBdwR/IMG-20250918-WA0053.jpg",
    "https://i.postimg.cc/zbvy8qxy/IMG-20250918-WA0054.jpg",
    "https://i.postimg.cc/5YQfsyPS/IMG-20250918-WA0055.jpg",
    "https://i.postimg.cc/KkWRYCWJ/IMG-20250918-WA0056.jpg",
    "https://i.postimg.cc/MfjXfd2x/IMG-20250918-WA0057.jpg",
    "https://i.postimg.cc/5jHXrNHG/IMG-20250918-WA0058.jpg",
    "https://i.postimg.cc/SjwnbFCK/IMG-20250918-WA0059.jpg",
    "https://i.postimg.cc/ZCpCT7xx/IMG-20250918-WA0060.jpg",
    "https://i.postimg.cc/BPx4Gyf8/IMG-20250918-WA0061.jpg",
    "https://i.postimg.cc/tsb773rQ/IMG-20250918-WA0062.jpg",
    "https://i.postimg.cc/PCMJDCcL/IMG-20250918-WA0064.jpg",
    "https://i.postimg.cc/rdFmN8Xf/IMG-20250918-WA0065.jpg",
    "https://i.postimg.cc/B8YvhdJ4/IMG-20250918-WA0066.jpg",
    "https://i.postimg.cc/1nb3Swgd/IMG-20250918-WA0067.jpg",
    "https://i.postimg.cc/R6WZ2X0f/IMG-20250918-WA0068.jpg",
    "https://i.postimg.cc/4HCsqGqk/IMG-20250918-WA0069.jpg",
    "https://i.postimg.cc/RJfVZhKZ/IMG-20250918-WA0070.jpg",
    "https://i.postimg.cc/hfWt38Rz/IMG-20250918-WA0071.jpg",
    "https://i.postimg.cc/JGNzwyRT/IMG-20250918-WA0072.jpg",
    "https://i.postimg.cc/pyndZG4M/IMG-20250918-WA0073.jpg",
    "https://i.postimg.cc/dhJtJq1J/IMG-20250918-WA0074.jpg",
    "https://i.postimg.cc/wtvqs0LP/IMG-20250918-WA0075.jpg",
    "https://i.postimg.cc/cKbs7wcJ/IMG-20250918-WA0076.jpg",
    "https://i.postimg.cc/Hr3WxfcX/IMG-20250918-WA0077.jpg",
  ];

  return (
    <div className="flex flex-col items-center justify-start min-h-screen bg-gradient-to-b from-blue-100 via-blue-50 to-blue-100 p-6">
      {/* Navigation Header */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b mb-6">
        <div className="container flex h-16 items-center justify-center px-4">
          <Button
            variant="outline"
            onClick={() => navigate("/")}
            className="flex items-center gap-2"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Monasteries
          </Button>
        </div>
      </header>

      {/* Gallery Card */}
      <Card className="w-full max-w-6xl rounded-3xl shadow-2xl overflow-hidden">
        <CardHeader className="bg-primary/10">
          <CardTitle className="flex items-center gap-2 text-primary text-2xl md:text-3xl">
            <Images className="h-6 w-6" />
            Monastery Gallery
          </CardTitle>
        </CardHeader>

        <CardContent className="p-6">
  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
    {images.map((src, index) => (
      <div
        key={index}
        className="overflow-hidden rounded-xl shadow-lg bg-white"
      >
        <img
          src={src}
          alt={`Gallery ${index + 1}`}
          className="w-full aspect-square object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
    ))}
  </div>
</CardContent>

      </Card>
    </div>
  );
};

export default GalleryPage;
