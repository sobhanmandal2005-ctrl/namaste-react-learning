/**
 * 
 * <div id="parent">
  <div id="child1">
    <h1>Heading</h1>
    <h2>Sub-heading</h2>
  </div>
  <div id="child2">
    <h1>Heading</h1>
    <h2>Sub-heading</h2>
  </div>
 </div>

 ReactElement(Object) => HTML(Browser Understands)

 */

 

const parent = React.createElement("div", {id: "parent"},
  [
    React.createElement("div", {id: "child1"}, [
    React.createElement("h1", {}, "I am sobhan"), 
      React.createElement("h2", {}, "I am suman"),
  ]),
React.createElement("div", {id: "child1"}, [
    React.createElement("h1", {}, "I am sobhan"), 
      React.createElement("h2", {}, "I am suman"),
]),
  ]);
  const root = ReactDOM.createRoot(document.getElementById("root"));

  root.render(parent);