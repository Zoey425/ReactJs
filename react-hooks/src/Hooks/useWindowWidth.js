import React, { useEffect, useState } from "react";

export default function useWindowWidth() {
  const [width, setWidth] = useState(window.innerWidth);
  

  useEffect(() => {
    const resize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", resize);

    return () => {
      window.removeEventListener("resize", resize)
      console.log("clean up")
    };
  }, []);
  //[] => 빈 배열 최초에만 실행
  
  return width;
}