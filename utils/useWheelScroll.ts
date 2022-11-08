import React, { useEffect } from "react";

const useWheelScroll = (elementRef: React.RefObject<HTMLDivElement>): void => {
  /**
   * Add wheel event listener to a ref and handle it to make a custom scroll
   */
  useEffect(() => {
    const currentDiv = elementRef.current;
    if (currentDiv) {
      const handleMouseWheel = (e: WheelEvent) => {
        e.preventDefault();
        const direction = e.deltaY > 0 ? 1 : -1;
        if (elementRef.current) {
          const scrollTop = elementRef.current.scrollTop;
          const height = elementRef.current.clientHeight;
          const steep = direction * height;
          elementRef.current.scrollTo({
            top: scrollTop + steep,
            left: 0,
            behavior: "smooth",
          });
        }
      };
      currentDiv.addEventListener("wheel", handleMouseWheel, {
        passive: false,
      });
      return () => currentDiv.removeEventListener("wheel", handleMouseWheel);
    }
  }, [elementRef]);
};

export default useWheelScroll;
