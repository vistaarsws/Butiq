import { useEffect } from "react";
import "./Wave.css";

const Waves = () => {
  useEffect(() => {
    const CONFIG = {
      radius: 0,
      hue: true,
      lightness: 0.5,
      chroma: 2,
      hueBase: 180,
      hueDestination: 320,
      speed: 2.5,
      distance: 10,
      scale: false,
      alternate: false,
    };

    const updateStyles = () => {
      document.documentElement.style.setProperty("--radius", CONFIG.radius);
      document.documentElement.style.setProperty("--base", CONFIG.hueBase);
      document.documentElement.style.setProperty("--chroma", CONFIG.chroma);
      document.documentElement.style.setProperty(
        "--lightness",
        CONFIG.lightness
      );
      document.documentElement.style.setProperty(
        "--limit",
        CONFIG.hueDestination
      );
      document.documentElement.style.setProperty("--speed", CONFIG.speed);
      document.documentElement.style.setProperty("--distance", CONFIG.distance);
      document.documentElement.dataset.hue = CONFIG.hue;
      document.documentElement.dataset.scale = CONFIG.scale;
      document.documentElement.dataset.alternate = CONFIG.alternate;
    };

    updateStyles();
  }, []); // Empty dependency array to run this effect only once on mount

  return (
    <div>
      <div
        className="rings absolute right-[0vw] top-[-10vh]"
        style={{ "--count": 20 }}
      >
        {[...Array(20)].map((_, index) => (
          <div
            className="ring"
            key={index}
            style={{ "--index": index + 1 }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Waves;
