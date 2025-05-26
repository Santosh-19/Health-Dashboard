import React from "react";
import HealthProgress from "../HealthStatusCards/HealthProgress";
import AnatomyImage from "../AnatomyImage/AnatomyImage";

const AnatomySection = () => {
  return (
    <div
      style={{
        display: "flex",
        gap: "20px",
      }}
    >
      {/* Left: Anatomy Image */}
      <div style={{ flex: 2 }}>
        <AnatomyImage />
      </div>

      {/* Right: Health Progress */}
      <div style={{ flex: 1 }}>
        <HealthProgress />
      </div>
    </div>
  );
};

export default AnatomySection;
