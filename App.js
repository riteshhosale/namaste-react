import React from "react";
import { createRoot } from "react-dom/client";

const parent = React.createElement("div", {id: "parent"}, [
    React.createElement("div", {id: "child", key: "child"}, [
        React.createElement("h1", {id: "heading", key: "heading"}, "Hello World from React!"),
        React.createElement("h2", {id: "subheading", key: "subheading"}, "This is a subheading.")
    ]),
    React.createElement("div", {id: "sibling", key: "sibling"}, [
        React.createElement("h1", {id: "sibling-heading", key: "sibling-heading"}, "Hello from Sibling Div!"),
        React.createElement("h2", {id: "sibling-subheading", key: "sibling-subheading"}, "This is a sibling subheading.")
    ])
]);

console.log(parent);

const root = createRoot(document.getElementById("root"));
root.render(parent);