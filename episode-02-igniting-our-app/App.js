import React from "react";
import ReactDOM from "react-dom/client";

//React element
const title = (
  <h1 className="head">Namaste react using JSX 🚀</h1>
);

const HeadingComponent = () => (
  <div> 
    <title/>
    <h1 className="heading"> Namaste React Functional component</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);