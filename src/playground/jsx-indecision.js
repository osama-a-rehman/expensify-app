console.log("App.js is running!");

const app = {
  title: "Indecision App",
  subtitle: "Put your life in the hands of a computer",
  options: []
};

const onMakeDecision = () => {
  const randomIndex = Math.floor(Math.random() * app.options.length);

  alert(app.options[randomIndex]);
};

const onRemoveAll = () => {
  app.options = [];
  render();
};

const onFormSubmit = event => {
  console.log(event);
  event.preventDefault();

  // Elements contain inputs based on their 'name' property
  // values as defined in HTML
  const option = event.target.elements.option.value;

  if (option) {
    app.options.push(option);
    event.target.elements.option.value = "";

    render();
  }
};

const appRoot = document.getElementById("app");

// const numbers = [55, 101, 1000];

const render = () => {
  // JSX - Javascript XML
  const template = (
    <div>
      <h1>{app.title}</h1>
      {app.subtitle && <p>{app.subtitle}</p>}

      <p>{app.options.length > 0 ? "Here are your options" : "No options"}</p>

      <button disabled={app.options.length === 0} onClick={onMakeDecision}>
        What should I do ?
      </button>
      <button onClick={onRemoveAll}>Remove All</button>

      {/*[<p key="1">a</p>, <p key="2">b</p>, <p key="3">c</p>]*/}

      {/*numbers.map(number => (
        <p key={number}>Number: {number}</p>
      ))*/}

      <ol>
        {/*<li>Item one</li>
        <li>Item two</li>*/}

        {app.options.map(option => (
          <li key={option}>{option}</li>
        ))}
      </ol>

      <form onSubmit={onFormSubmit}>
        <input type="text" name="option" />
        <button>Add Option</button>
      </form>
    </div>
  );

  ReactDOM.render(template, appRoot);
};

render();
