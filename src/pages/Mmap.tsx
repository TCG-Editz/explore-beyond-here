import { useNavigate } from "react-router-dom";
import culturalImage from "@/assets/Culturalimg.jpeg";

const Mmap = () => {
  const navigate = useNavigate();

  return (
    <div className="relative w-screen h-screen">
      {/* Fullscreen Image */}
      <img
        src={culturalImage}
        alt="Cultural Calendar"
        className="w-full h-full object-cover"
      />

      {/* Back Button */}
      <button
        onClick={() => navigate("/")}
        className="absolute top-6 left-6 px-5 py-2 bg-black/60 text-white rounded-lg hover:bg-black/80 transition-all"
      >
        ← Back
      </button>
    </div>
  );
};

export default Mmap;