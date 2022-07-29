import React from "react";
import { styleContainer } from "./styles/globalStyles";

interface Props {
  numbers: {
    initialNumber: number;
    finalNumber: number;
  };
}

//styles
const styleList = {
  listStyleType: "none",
  textAlign: "center" as const,
  paddingLeft: "0",
};
const styleItem = {
  padding: "10px 5px",
  border: "1px solid #ccc",
  marginBottom: "10px",
  borderRadius: "4px",
};
const styleSpecialItemRobot = {
  ...styleItem,
  borderColor: "blue",
  color: "white",
  backgroundColor: "blue",
};
const styleSpecialItemRobotICT = {
  ...styleItem,
  borderColor: "green",
  color: "white",
  backgroundColor: "green",
};
const styleSpecialItemICT = {
  ...styleItem,
  borderColor: "orange",
  color: "white",
  backgroundColor: "orange",
};
//functions
const printRobotICT = (number) => {
  if (number % 3 === 0 && number % 5 === 0) {
    return (
      <li style={styleSpecialItemRobotICT} key={number}>
        RobotICT
      </li>
    );
  } else if (number % 3 === 0) {
    return (
      <li style={styleSpecialItemRobot} key={number}>
        Robot
      </li>
    );
  } else if (number % 5 === 0) {
    return (
      <li style={styleSpecialItemICT} key={number}>
        ICT
      </li>
    );
  } else {
    return (
      <li style={styleItem} key={number}>
        {number}
      </li>
    );
  }
};

export const List = (props: Props) => {
  const { initialNumber, finalNumber } = props.numbers;
  const numbers = Array.from(
    { length: finalNumber - initialNumber + 1 },
    (_, i) => i + initialNumber
  );

  return (
    <div style={styleContainer}>
      <h1>List</h1>
      <ul style={styleList}>
        {numbers.map((number) => printRobotICT(number))}
      </ul>
    </div>
  );
};
