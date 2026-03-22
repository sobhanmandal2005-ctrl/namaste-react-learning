import React from "react";
import ReactDOM from "react-dom/client";

//Header 
// Body
//Footer

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container"> 
      <img className="logo" src="https://cdn-icons-png.flaticon.com/512/2972/2972185.png"/>
    </div>

    <div className="nav-items">
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
        <li>Cart</li>
      </ul>  
    </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header/>
    </div>
  );
};


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout/>);