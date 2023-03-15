import { useEffect, useState } from "react";

function useWindowResize() {
  const [windowResize, setWindowResize] = useState({
    width: 0,
    height: 0,
  });

  function resize() {
    setWindowResize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  }

  useEffect(() => {
    window.addEventListener("resize", resize);
    resize();

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);
  return windowResize
}
export default useWindowResize;