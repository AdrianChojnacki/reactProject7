class Divination extends React.Component {
  state = {
    allDivinations: ["Wróżba 1", "Wróżba 2", "Wróżba 3"],
    randomDivination: "",
    inputValue: "",
  };

  handleRandom = () => {
    const randomNumber = Math.floor(Math.random() * this.state.allDivinations.length);

    this.setState({
      randomDivination: this.state.allDivinations[randomNumber],
    });
  };

  handleInput = (e) => {
    this.setState({
      inputValue: e.target.value,
    });
  };

  handleAdd = () => {
    this.setState({
      allDivinations: this.state.allDivinations.concat(this.state.inputValue),
      inputValue: "",
    });

    alert(
      `Dodano nową wróżbę: ${this.state.inputValue}, do tablicy wróżb: ${this.state.allDivinations}.`
    );
  };

  render() {
    return (
      <>
        <button onClick={this.handleRandom}>Zobacz wróżbę</button>
        <br />
        <input onChange={this.handleInput} value={this.state.inputValue} type="text" />
        <button onClick={this.handleAdd}>Dodaj wróżbę</button>
        <h1>{this.state.randomDivination}</h1>
      </>
    );
  }
}

ReactDOM.render(<Divination />, document.querySelector(`#root`));
