import React from "react";
import { styleContainer } from "./styles/globalStyles";

interface Props {
  numbers: {
    initialNumber: number;
    finalNumber: number;
  };
  onChangeNumbers: (numbers: {
    initialNumber: number;
    finalNumber: number;
  }) => void;
}

//styles
const styleInput = {
  marginRight: "10px",
  padding: "10px",
  borderRadius: "5px",
  border: "1px solid #ccc",
};
const styleDiv = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};
const styleError = {
  color: "red",
};

export const NumberInput = (props: Props) => {
  const { initialNumber, finalNumber } = props.numbers;
  const { onChangeNumbers } = props;

  const handleChangeNumber = (type: "initial" | "final", event) => {
    switch (type) {
      case "initial":
        onChangeNumbers({
          initialNumber: event.target.value ? parseInt(event.target.value) : 0,
          finalNumber: finalNumber,
        });
        break;
      case "final":
        onChangeNumbers({
          initialNumber: initialNumber,
          finalNumber: event.target.value ? parseInt(event.target.value) : 0,
        });
        break;
    }
  };

  const error = () => {
    if (initialNumber > finalNumber) {
      return (
        <span style={styleError}>
          Initial number must be less than final number
        </span>
      );
    }
  };
  return (
    <div style={styleContainer}>
      <h1>Inputs</h1>
      <div style={styleDiv}>
        <input
          style={styleInput}
          value={initialNumber}
          onChange={(event) => handleChangeNumber("initial", event)}
        />
        <input
          style={styleInput}
          value={finalNumber}
          onChange={(event) => handleChangeNumber("final", event)}
        />
      </div>
      <div>{error()}</div>
    </div>
  );
};
