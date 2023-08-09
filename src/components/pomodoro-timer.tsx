import React from "react";

interface propType {
  time: number;
}

export function PomodoroTimer(props: propType): JSX.Element {
  return <div>Olá mundo {props.time}</div>;
}
