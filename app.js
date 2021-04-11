class Divination extends React.Component {
  state = {
    allDivinations: ["Wróżba 1", "Wróżba 2", "Wróżba 3"],
    randomDivination: "",
    inputValue: "",
  };

  handleRandom = () => {
    const { allDivinations } = this.state;

    const randomNumber = Math.floor(Math.random() * allDivinations.length);

    this.setState({
      randomDivination: allDivinations[randomNumber],
    });
  };

  handleInput = (e) => {
    this.setState({
      inputValue: e.target.value,
    });
  };

  handleAdd = () => {
    const { allDivinations, inputValue } = this.state;

    this.setState({
      allDivinations: allDivinations.concat(inputValue),
      inputValue: "",
    });

    alert(`Dodano nową wróżbę: ${inputValue}, do tablicy wróżb: ${allDivinations}.`);
  };

  render() {
    const { inputValue, randomDivination } = this.state;
    return (
      <>
        <button onClick={this.handleRandom}>Zobacz wróżbę</button>
        <br />
        <input onChange={this.handleInput} value={inputValue} type="text" />
        <button onClick={this.handleAdd}>Dodaj wróżbę</button>
        <h1>{randomDivination}</h1>
      </>
    );
  }
}

ReactDOM.render(<Divination />, document.querySelector(`#root`));
