import { useState, useCallback, useEffect } from "react";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "./store";


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


type DispatchFunc = () => AppDispatch
export const useAppDispatch: DispatchFunc = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
