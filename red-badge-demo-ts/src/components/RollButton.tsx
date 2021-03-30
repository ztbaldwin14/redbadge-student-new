import * as React from "react";

export interface RollButtonProps {
  rollDiceOne(rollNumber: number): void;
  rollDiceTwo(rollNumber: number): void;
}

const RollButton: React.SFC<RollButtonProps> = (props: RollButtonProps) => {
  function handleClick() {
    let randomNumber1 = Math.floor(Math.random() * 6) + 1;
    let randomNumber2 = Math.floor(Math.random() * 6) + 1;
    props.rollDiceOne(randomNumber1);
    props.rollDiceTwo(randomNumber2);
  }
  return (
    <div>
      <br />
      <button onClick={handleClick} id="button">
        Roll
      </button>
    </div>
  );
};

export default RollButton;