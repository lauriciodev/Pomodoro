import { useEffect, useRef } from "react";

export function useInterval<C extends CallableFunction>(
  callBack: C,
  delay: number | null
): void {
  const savedCallBack = useRef<C>();

  useEffect(() => {
    savedCallBack.current = callBack;
  }, [callBack]);

  useEffect(() => {
    function tick() {
      if (savedCallBack.current) savedCallBack.current();
    }

    if (delay !== null) {
      const id = setInterval(tick, delay);
      return clearInterval(id);
    }
  }, [delay]);
}
