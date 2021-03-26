import React, { Component } from "react";

class ClassDeckFetch extends Component {
  constructor(props) {
    super(props);
    this.state = { deckID: "", cardImage: "" };
  }
  fetchDeck() {
    //Whats url are we fetching?
    //Store the data from the fetch
    const url = "https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1";

    fetch(url)
      .then((res) => res.json())
      .then((json) => this.setState({ deckID: json.deck_id }));
  }

  fetchCard() {
    const url = `https://deckofcardsapi.com/api/deck/${this.state.deckID}/draw/?count=2`;
    fetch(url)
      .then((res) => res.json())
      .then((json) => this.setState({ cardImage: json.cards[0].image }));
  }
  componentDidMount() {
    this.fetchDeck();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.deckID !== this.state.deckID) {
      this.fetchCard();
    }
  }
  render() {
    return (
      <div>
        <img src={this.state.cardImage} alt="" />
      </div>
    );
  }
}

export default ClassDeckFetch;
