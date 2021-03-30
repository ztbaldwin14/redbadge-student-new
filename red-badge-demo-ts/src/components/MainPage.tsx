import * as React from "react";
import Dice from "./Dice";
import RollButton from "./RollButton";
export interface MainPageProps {}

export interface MainPageState {
  diceRoll1: number;
  diceRoll2: number;
  headerText: string;
}

class MainPage extends React.Component<MainPageProps, MainPageState> {
  constructor(props: MainPageProps) {
    super(props);
    this.state = { diceRoll1: 0, diceRoll2: 4, headerText: "" };
  }
  rollDiceOne = (roll: number) => {
    this.setState({ diceRoll1: roll });
  };

  rollDiceTwo = (roll: number) => {
    this.setState({ diceRoll2: roll });
  };

  componentDidUpdate(prevProps: MainPageProps, prevState: MainPageState) {
    if (
      this.state.diceRoll1 !== prevState.diceRoll1 ||
      this.state.diceRoll2 !== prevState.diceRoll2
    ) {
      let displayResultText = "";
      if (this.state.diceRoll1 > this.state.diceRoll2) {
        displayResultText = "Player 1 Wins";
      } else if (this.state.diceRoll1 < this.state.diceRoll2) {
        displayResultText = "Player 2 Wins";
      } else {
        displayResultText = "Draw";
      }
      this.setState({
        headerText: displayResultText,
      });
    }
  }
  render() {
    return (
      <div>
        <p> {this.state.headerText}</p>
        <br />
        {/* <Dice playerName="Player 1" diceRoll={this.state.diceRoll1} />
        <Dice playerName="Player 2" diceRoll={this.state.diceRoll2} /> */}
        <RollButton
          rollDiceOne={this.rollDiceOne}
          rollDiceTwo={this.rollDiceTwo}
        />
      </div>
    );
  }
}

export default MainPage;
