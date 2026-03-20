Episode 03 - Laying the Foundation
What we learned in this episode

In this episode, we learned how React works behind the scenes and how JSX makes writing React code much easier and cleaner.

React.createElement vs JSX

Earlier we created elements using:

React.createElement("h1", {}, "Hello React");

This works perfectly, but the code becomes very long and difficult to read when we create nested elements.

So React introduced JSX.

What is JSX

JSX stands for JavaScript XML.
It allows us to write HTML-like code inside JavaScript.

Example:

const heading = <h1>Hello React</h1>;

This code looks like HTML, but actually it is JavaScript.

How JSX works

JSX does not work directly in the browser.

Behind the scenes, JSX is converted into JavaScript using Babel.

Example:

const heading = <h1>Hello React</h1>;

is converted into:

React.createElement("h1", {}, "Hello React");
Why JSX is better

JSX makes the code:

Cleaner

Easier to read

Easier to maintain

Less complex compared to React.createElement()

What I learned today

How React works behind the scenes

Difference between JSX and React.createElement()

What is Babel

Why JSX makes React development easier

Writing nested elements using JSX

Should you push the notes?

Yes, pushing notes is a very good idea because it shows that you are learning properly and not just copying code.