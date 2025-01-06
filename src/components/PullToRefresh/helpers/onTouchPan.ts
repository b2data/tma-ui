export type TouchPanProps = {
  element?: HTMLElement | null;
  onPanStart?: (e: TouchEvent) => void;
  onPanMove?: (e: TouchEvent) => void;
  onPanEnd?: (e: TouchEvent) => void;
};

export const onTouchPan = ({
  element,
  onPanStart,
  onPanMove,
  onPanEnd,
}: TouchPanProps) => {
  if (!element) return;

  let touchId: number | null = null;
  let startX = 0;
  let startY = 0;
  let panStartCalled = false;

  const calcMovement = (e: TouchEvent): boolean => {
    const touch = Array.from(e.changedTouches).find(
      (touch) => touch.identifier === touchId,
    );
    if (!touch) return false;

    (e as any).deltaX = touch.screenX - startX;
    (e as any).deltaY = touch.screenY - startY;
    return true;
  };

  const touchstart = (e: TouchEvent) => {
    const touch = e.changedTouches[0];
    touchId = touch.identifier;
    startX = touch.screenX;
    startY = touch.screenY;
    panStartCalled = false;
  };

  const touchmove = (e: TouchEvent) => {
    if (calcMovement(e)) {
      if (onPanStart && !panStartCalled) {
        onPanStart(e);
        panStartCalled = true;
      }
      if (onPanMove) onPanMove(e);
    }
  };

  const touchend = (e: TouchEvent) => {
    if (calcMovement(e) && onPanEnd) onPanEnd(e);
  };

  element.addEventListener("touchstart", touchstart);
  if (onPanMove) element.addEventListener("touchmove", touchmove);
  if (onPanEnd) element.addEventListener("touchend", touchend);

  return () => {
    element.removeEventListener("touchstart", touchstart);
    if (onPanMove) element.removeEventListener("touchmove", touchmove);
    if (onPanEnd) element.removeEventListener("touchend", touchend);
  };
};
