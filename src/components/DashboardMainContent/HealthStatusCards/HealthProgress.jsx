import React from "react";
import style from "../HealthStatusCards/HealthProgress.module.css"

const HealthProgress = () => {
  const healthData = [
    { label: "Lungs", date:"26 oct 2021", color: "#ad484a", progress: 70 },
    { label: "Teeth", date:"26 oct 2021", color: "#8bd2c5", progress: 50 },
    { label: "Bone", date:"26 oct 2021", color: "#fb7d5e", progress: 30 },
  ];

  return (
    <div style={{ width: "100%" }}>
      {healthData.map((item, index) => (
        <div key={index} className={style.progresscard}>
          <h4
            style={{
              fontSize: "16px",
              color: "#333",
              fontWeight: "600",
              margin: "0 0 8px 0",
            }}
          >
            {item.label}
          </h4>
          <p>Date: {item.date}</p>
          <ProgressBar color={item.color} progress={item.progress} />
        </div>
      ))}

      {/* Details Link */}
      <div style={{ textAlign: "right", marginTop: "10px" }}>
        <a
          href="#details"
          style={{
            fontSize: "15px",
            color: "#4B53FF",
            textDecoration: "none",
            fontWeight: "500",
          }}
        >
          Details →
        </a>
      </div>
    </div>
  );
};

const ProgressBar = ({ color, progress }) => {
  return (
    <div
      style={{
        width: "100%",
        height: "8px",
        background: "#EDEDED",
        borderRadius: "4px",
      }}
    >
      <div
        style={{
          width: `${progress}%`,
          height: "100%",
          background: color,
          borderRadius: "4px",
        }}
      ></div>
    </div>
  );
};

export default HealthProgress;
