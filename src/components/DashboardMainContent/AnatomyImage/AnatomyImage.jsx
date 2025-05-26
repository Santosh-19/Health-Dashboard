import React from "react";
import style from "../AnatomyImage/AnatomyImage.module.css"

const AnatomyImage = () => {
  return (
    <div style={{ position: "relative", textAlign: "center", width: "100%" }}>
      {/* Anatomy Image */}
      <img
        src="public/human-body.png"
        alt="Anatomy"
        style={{ width: "100%", maxWidth: "300px", margin: "0 auto", background:"#f6faff", borderRadius:"20px"}}
      />

      {/* Floating Labels */}
      <div className={style.heart}>
        ❤️ Healthy Heart
      </div>

      <div className={style.leg}>
        🦵 Healthy Leg
      </div>
    </div>
  );
};

export default AnatomyImage;
