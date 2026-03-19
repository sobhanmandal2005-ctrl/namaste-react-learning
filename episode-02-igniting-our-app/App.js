import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1", key: "child1" }, [
    React.createElement("h1", { key: "h1-1" }, "I am someone"),
    React.createElement("h2", { key: "h2-1" }, "I am suman"),
  ]),
  React.createElement("div", { id: "child2", key: "child2" }, [
    React.createElement("h1", { key: "h1-2" }, "I am sobhan"),
    React.createElement("h2", { key: "h2-2" }, "I am suman"),
  ]),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);