import React from "react";

const MapPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-4">
      <h1 className="text-3xl font-bold mb-6">Explore Location</h1>
      <div className="w-full max-w-4xl h-[500px]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!4v1757952607272!6m8!1m7!1sCAoSFkNJSE0wb2dLRUlDQWdJQ0VndFRIUmc.!2m2!1d27.28862027053181!2d88.56148053028257!3f24.55768802571662!4f0.09903168439691967!5f0.4000000000000002"
          className="w-full h-full rounded-lg shadow-lg"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default MapPage;
