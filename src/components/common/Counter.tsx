import { animate } from "framer-motion";
import React from "react";

interface IProps {
  from: number;
  to: number;
  textBefore: string;
  textAfter: string;
}

function Counter({ from, to, textBefore, textAfter }: IProps) {
  const ref = React.useRef<any>();

  React.useEffect(() => {
    const controls = animate(from, Number(to), {
      duration: 2,
      onUpdate(value) {
        ref.current.textContent = textBefore + value.toFixed(0) + textAfter;
      },
    });
    return () => controls.stop();
  }, [from, to]);

  return <p ref={ref} />;
}

export default Counter;
