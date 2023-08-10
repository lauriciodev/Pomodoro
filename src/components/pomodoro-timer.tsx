import { useState } from "react";
import { useInterval } from "../hooks/useInterval-hooks";

interface propType {
  defaultPomodoroTime: number;
}

export function PomodoroTimer(props: propType): JSX.Element {
  const [mainTime, setMainTime] = useState(props.defaultPomodoroTime);

  useInterval(() => {
    setMainTime(mainTime - 1);
  }, 1000);
  return <div>Olá mundo {mainTime}</div>;
}
