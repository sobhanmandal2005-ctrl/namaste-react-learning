Episode 02 - Igniting Our App
What we did in this episode

In this episode, we started building a real React project using npm and Parcel. This is the step where we move from using CDN to a proper development setup.

npm init

We initialized our project using:

npm init

This command created a package.json file.
The package.json file stores all information about the project such as dependencies, scripts, name, and version.

Installing Parcel

Parcel is a bundler that helps us run and build our React application.

We installed Parcel using:

npm install -D parcel

-D means we are installing it as a development dependency.

Installing React and ReactDOM

We installed React using:

npm install react
npm install react-dom

React is used to create UI elements, and ReactDOM is used to render them on the browser.

Creating index.html and App.js

We created two main files:

index.html

App.js

In index.html, we added a root div:

<div id="root"></div>

And we connected App.js using:

<script type="module" src="./App.js"></script>
Importing React

Instead of using CDN, we imported React using npm packages:

import React from "react";
import ReactDOM from "react-dom/client";
Creating Nested Elements

We created nested elements using React.createElement().

Example:

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "Hello React"),
    React.createElement("h2", {}, "Learning React"),
  ]),
]);
Rendering the React Element

We rendered the React element using:

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
What I learned today

How to start a real React project

What is package.json

How to install dependencies using npm

How to use Parcel

How to import React without CDN

How React.createElement() works with nested elements