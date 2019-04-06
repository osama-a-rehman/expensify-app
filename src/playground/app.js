// How 'this' binding breaks ?
// const obj = {
//   name: "Osama",
//   getName() {
//     return this.name;
//   }
// };

// const getName = obj.getName.bind(obj);

// console.log(getName());

class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // options: this.props.options
      options: []
    };

    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handleDeleteOption = this.handleDeleteOption.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
  }

  /* LIFE CYCLE METHODS */
  componentDidMount() {
    console.log("componentDidMount()");
    console.log("Fetching Data");

    try {
      const json = localStorage.getItem("options");
      const options = JSON.parse(json);

      if (options) {
        this.setState(() => ({ options }));
      }
    } catch (error) {
      console.log(error);
    }
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("componentDidUpdate()");
    console.log("Saving Data");

    // console.log(prevProps);
    // console.log(prevState);

    // BECAUSE componentDidUpdate is called even when options array is set to new empty array
    if (prevState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options);
      localStorage.setItem("options", json);
    }
  }

  componentWillUnmount() {
    console.log("componentWillUnmount()");
  }

  // handleDeleteOptions() {
  //   this.setState(() => {
  //     return {
  //       options: []
  //     };
  //   });
  // }

  // Shorthand Syntax: To implicitly return an object from an Arrow Function,
  // surround object {} with (), i.e () => ({ objectProps });
  handleDeleteOptions() {
    this.setState(() => ({ options: [] }));
  }

  handleDeleteOption(optionToRemove) {
    console.log("handleDeleteOption, option", optionToRemove);

    this.setState(prevState => ({
      options: prevState.options.filter(option => option !== optionToRemove)
    }));
  }

  handlePick() {
    const randomIndex = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomIndex];
    alert(option);
  }

  handleAddOption(newOption) {
    console.log("newOption", newOption);

    if (!newOption) {
      return "Enter valid value to add item";
    } else if (this.state.options.indexOf(newOption) > -1) {
      return "This option already exists";
    }

    this.setState(prevState => ({
      options: prevState.options.concat(newOption)
    }));
  }

  // This should be defined in every class extending React.Component
  render() {
    const subtitle = "Put your life in the hands of a computer";

    return (
      <div>
        <Header subtitle={subtitle} />
        <Action
          hasOptions={this.state.options.length > 0}
          handlePick={this.handlePick}
        />
        <Options
          options={this.state.options}
          handleDeleteOptions={this.handleDeleteOptions}
          handleDeleteOption={this.handleDeleteOption}
        />
        <AddOption handleAddOption={this.handleAddOption} />
      </div>
    );
  }
}

// IndecisionApp.defaultProps = {
//   options: []
// };

const Header = props => {
  return (
    <div>
      <h1>{props.title}</h1>
      {props.subtitle && <h2>{props.subtitle}</h2>}
    </div>
  );
};

// Set Default values to props object
Header.defaultProps = {
  title: "Indecision"
};

const Action = props => {
  return (
    <div>
      <button disabled={!props.hasOptions} onClick={props.handlePick}>
        What should I do ?
      </button>
    </div>
  );
};

const Options = props => {
  // console.log(this.props.options);
  return (
    <div>
      <button onClick={props.handleDeleteOptions}>Remove All</button>
      {props.options.length === 0 && (
        <p>Please add an option to get started!</p>
      )}
      {props.options.map(option => (
        <Option
          key={option}
          optionText={option}
          handleDeleteOption={props.handleDeleteOption}
        />
      ))}
    </div>
  );
};

const Option = props => {
  return (
    <div>
      {props.optionText}
      <button
        onClick={event => {
          props.handleDeleteOption(props.optionText);
        }}
      >
        Remove
      </button>
    </div>
  );
};

class AddOption extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      error: undefined
    };

    this.handleAddOption = this.handleAddOption.bind(this);
  }

  handleAddOption(event) {
    event.preventDefault();

    const option = event.target.elements.option.value.trim();
    const error = this.props.handleAddOption(option);

    if (!error) event.target.elements.option.value = "";

    this.setState(() => ({ error }));
  }

  // This should be defined in every class extending React.Component
  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.handleAddOption}>
          <input type="text" name="option" />
          <button type="submit">Add Option</button>
        </form>
      </div>
    );
  }
}

// STATELESS FUNCTION REFERENCE
// const User = props => {
//   return (
//     <div>
//       <p>Name: {props.name}</p>
//       <p>Age: {props.age}</p>
//     </div>
//   );
// };

// ReactDOM.render(
//   <IndecisionApp options={["Devils Den", "Second District"]} />,
//   document.getElementById("app")
// );

ReactDOM.render(<IndecisionApp />, document.getElementById("app"));
