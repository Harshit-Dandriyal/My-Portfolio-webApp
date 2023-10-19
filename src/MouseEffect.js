import React, { useRef, useEffect } from "react";
import "./MouseEffect.scss";

export const MouseEffect = () => {
  const divPool = useRef([]);
  const divIndex = useRef(0);

  useEffect(() => {
    for (let i = 0; i < 50; i++) {
      const parent_div = document.createElement("div");
      parent_div.className = "loader-container";
      const inner_div = document.createElement("div");
      inner_div.className = "loader";
      parent_div.appendChild(inner_div);
      document.body.appendChild(parent_div);
      parent_div.style.opacity = "0"; // Initially hidden
      divPool.current.push(parent_div);
    }

    const handleMouseMove = (e) => {
      const div = divPool.current[divIndex.current];
      div.style.left = Math.min(window.innerWidth - 80, e.clientX - 25) + "px"; // Minus half the size to keep within viewport and away from scrollbar

      div.style.top = Math.min(window.innerHeight - 80, e.clientY - 25) + "px";
      div.style.opacity = "1"; // Make visible

      divIndex.current = (divIndex.current + 1) % 50; // Cycle through the div pool
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      divPool.current.forEach((div) => document.body.removeChild(div));
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return null;
};
