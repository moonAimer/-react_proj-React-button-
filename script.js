const App = ({ initialButtonClick, classNameForButton }) => {
  const [buttonText, fuctionButtonText] = React.useState(initialButtonClick);
  const [greenbtnAdd, fuctiongreenbtnAdd] = React.useState(classNameForButton);

  const throwFn = () => {
    fuctionButtonText("Hello from React");
    fuctiongreenbtnAdd("green-btn");
  };

  return (
    <div className="app">
      <button className={greenbtnAdd} onClick={throwFn}>
        {buttonText}
      </button>
    </div>
  );
};

const container = document.getElementById("React-app");
const root = ReactDOM.createRoot(container);
root.render(<App initialButtonClick="Click me" classNameForButton="" />);
