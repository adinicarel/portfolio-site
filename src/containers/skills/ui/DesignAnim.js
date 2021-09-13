import Lottie from "react-lottie-player/dist/LottiePlayerLight";
import React, { useEffect, useState } from "react";

//for animated svgs use json file
const DesignAnim = () => {
  const [animationData, setAnimationData] = useState();
  const [play, setPlay] = useState(false);
  const toggleState = () => setPlay((play) => !play);

  useEffect(() => {
    import("./31159-robot-404.json").then(setAnimationData);
  }, []);

  if (!animationData) return <div>Loading animation...</div>;
  return (
    <div className="App">
      <Lottie
        animationData={animationData}
        loop={true}
        play={play}
        className="container"
      />
      <button
        onClick={toggleState}
        style={{
          backgroundColor: "#000",
          border: "0px solid #000",
        }}
      >
        {" "}
        {play ? (
          <i
            className={`fas fa-pause-circle`}
            style={{
              color: "#ff0021",
              backgroundColor: "#fff",
              border: "1px solid #000",
              borderRadius: "50%",
              fontSize: "2rem",
            }}
          ></i>
        ) : (
          <i
            className={`fas fa-play-circle`}
            style={{
              color: "#5cdb5c",
              backgroundColor: "#fff",
              border: "1px solid #000",
              borderRadius: "50%",
              fontSize: "2rem",
            }}
          ></i>
        )}
      </button>
    </div>
  );
};
export default DesignAnim;
