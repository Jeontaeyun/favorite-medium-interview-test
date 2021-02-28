import { useCallback, useEffect } from "react";

export const useOuterClickNotifier = (onOuterClick: () => void, innerRef: React.RefObject<HTMLElement>): void => {
  const handleClick = useCallback(
    (event: globalThis.MouseEvent) => {
      const isOuterClick = innerRef.current && event.target && !innerRef.current.contains(event.target as Node);
      if (isOuterClick) onOuterClick();
    },
    [onOuterClick, innerRef]
  );

  useEffect(() => {
    if (innerRef.current) {
      document.addEventListener("click", handleClick, true);
      return () => document.removeEventListener("click", handleClick, true);
    }
  }, [onOuterClick, innerRef, handleClick]);
};
