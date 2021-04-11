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

    if (inputValue === "") return alert("Wpisz coś...");

    const divinationsArray = allDivinations.concat(inputValue);

    this.setState({
      allDivinations: divinationsArray,
      inputValue: "",
    });

    alert(`Wróżba dodana! Aktualne wróżby: ${divinationsArray}.`);
  };

  render() {
    const { inputValue, randomDivination } = this.state;

    return (
      <>
        <button onClick={this.handleRandom}>Zobacz wróżbę</button>
        <br />
        <input onChange={this.handleInput} value={inputValue} type="text" />
        <button onClick={this.handleAdd}>Dodaj wróżbę</button>
        {randomDivination ? <h1>{randomDivination}</h1> : null}
      </>
    );
  }
}

ReactDOM.render(<Divination />, document.querySelector(`#root`));
