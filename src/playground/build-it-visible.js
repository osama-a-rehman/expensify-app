class VisibilityComponent extends React.Component {
  handleToggleVisibility() {
    this.setState(prevState => {
      return {
        isVisible: !prevState.isVisible
      };
    });
  }

  constructor(props) {
    super(props);

    this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
    this.state = {
      isVisible: false
    };
  }

  render() {
    return (
      <div>
        <h1>Visibility Toggle</h1>

        <button onClick={this.handleToggleVisibility}>
          {this.state.isVisible ? "Hide Details" : "Show Details"}
        </button>

        {this.state.isVisible && (
          <p>Hey. These are some details you can now see!</p>
        )}
      </div>
    );
  }
}

ReactDOM.render(<VisibilityComponent />, document.getElementById("app"));

// const appRoot = document.getElementById("app");

// // const state = {
// //   isVisible: false
// // };

// let isVisible = false;

// const onButtonClick = () => {
//   //   state.isVisible = !state.isVisible;
//   isVisible = !isVisible;
//   render();
// };

// const render = () => {
//   const template = (
//     <div>
//       <h1>Visibility Toggle</h1>

//       <button onClick={onButtonClick}>
//         {/*state.isVisible ? "Hide Details" : "Show Details"*/}
//         {isVisible ? "Hide Details" : "Show Details"}
//       </button>

//       {/*state.isVisible && <p>Hey. These are some details you can now see!</p>*/}
//       {isVisible && <p>Hey. These are some details you can now see!</p>}
//     </div>
//   );
//   ReactDOM.render(template, appRoot);
// };

// render();
