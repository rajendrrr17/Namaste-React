const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement(
      "h1",
      { id: "heading1", key: "heading1" },
      "Hello World h1"
    ),
    React.createElement(
      "h2",
      { id: "heading2", key: "heading2" },
      "Hello World h2"
    ),
  ])
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
