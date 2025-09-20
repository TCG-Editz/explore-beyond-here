import culturalImage from "@/assets/cultural-heritage.jpg";

const CulturalCalendar = () => {
  return (
    <div className="w-screen h-screen">
      <img
        src={culturalImage}
        alt="Cultural Calendar"
        className="w-full h-full object-cover"
      />
    </div>
  );
};

export default CulturalCalendar;
