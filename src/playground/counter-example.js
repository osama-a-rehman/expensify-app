class Counter extends React.Component {
  constructor(props) {
    super(props);

    this.handleAddOne = this.handleAddOne.bind(this);
    this.handleMinusOne = this.handleMinusOne.bind(this);
    this.handleResetCounter = this.handleResetCounter.bind(this);

    this.state = {
      // count: this.props.count,
      count: 0,
      name: "Osama"
    };
  }

  componentDidMount() {
    console.log("componentDidMount()");
    const stringCount = localStorage.getItem("count");

    if (stringCount && !isNaN(stringCount)) {
      console.log(stringCount);
      const numCount = Number(stringCount);
      this.setState(() => ({ count: numCount }));
    }
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("componentDidUpdate()");

    if (prevState.count !== this.state.count) {
      const count = this.state.count;
      if (!isNaN(count)) {
        console.log(count);
        localStorage.setItem("count", count);
      }
    }
  }

  handleAddOne() {
    this.setState(prevState => {
      return {
        count: prevState.count + 1
      };
    });
  }

  handleMinusOne() {
    if (this.state.count > 0) {
      this.setState(prevState => {
        return {
          count: prevState.count - 1
        };
      });
    }
  }

  handleResetCounter() {
    // NEVER USE THIS SYNTAX
    // this.setState({
    //   count: 0
    // });

    // this.setState({
    //   count: this.state.count + 1
    // });

    // USE THIS SYNTAX OF CALLBACK FUNCTION with previousState argument INSTEAD
    this.setState(() => {
      return {
        count: 0
      };
    });

    // this.setState(prevState => {
    //   return {
    //     count: prevState.count + 1
    //   };
    // });
  }

  render() {
    return (
      <div>
        {this.state.name}
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.handleAddOne}>+1</button>
        <button onClick={this.handleMinusOne}>-1</button>
        <button onClick={this.handleResetCounter}>Reset</button>
      </div>
    );
  }
}

// Counter.defaultProps = {
//   count: 0
// };

// Set Count to 3 via prop
// ReactDOM.render(<Counter count="3" />, document.getElementById("app"));

ReactDOM.render(<Counter count="3" />, document.getElementById("app"));

// let count = 0;

// const addOne = () => {
//   count++;
//   renderCounterApp();
// };

// const minusOne = () => {
//   if (count > 0) {
//     count--;
//     renderCounterApp();
//   }
// };

// const reset = () => {
//   count = 0;
//   renderCounterApp();
// };

// const appRoot = document.getElementById("app");

// const renderCounterApp = () => {
//   const templateTwo = (
//     <div>
//       <h1>Count: {count}</h1>
//       <button onClick={addOne}>+1</button>
//       <button onClick={minusOne}>-1</button>
//       <button onClick={reset}>Reset</button>
//     </div>
//   );

//   ReactDOM.render(templateTwo, appRoot);
// };

// // const templateTwo = (
// //   <div>
// //     <h1>Count: {count}</h1>
// //     {/* onClick can have a direct function */}
// //     {/*<button
// //       onClick={() => {
// //         console.log("Some Value here");
// //       }}
// //     >
// //       New Button
// //     </button>*/}

// //     <button onClick={addOne}>+1</button>
// //     <button onClick={minusOne}>-1</button>
// //     <button onClick={reset}>Reset</button>
// //   </div>
// // );

// // console.log(templateTwo);

// renderCounterApp();
