import React from "react";
import { List } from "./List";
import { NumberInput } from "./NumberInput";

export const App = () => {
  const [numbers, setNumbers] = React.useState({
    initialNumber: 1,
    finalNumber: 100,
  });
  return (
    <>
      <NumberInput numbers={numbers} onChangeNumbers={setNumbers} />
      <List numbers={numbers} />
    </>
  );
};
