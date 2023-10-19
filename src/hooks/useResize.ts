import { useState, useCallback, useEffect } from "react";


export const useResize = () => {
  const MINIMUM_WIDGET_WIDTH = 450;
  const [windowWidthSize, setWindowWidthSize] = useState(
    window.innerWidth
  );
  const handleWindowResize = useCallback(() => {
    setWindowWidthSize(window.innerWidth);
  }, []);
  
  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, [handleWindowResize]);

  return {
    isLargeDevice: windowWidthSize >= MINIMUM_WIDGET_WIDTH,
  }
}