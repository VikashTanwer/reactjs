import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import ContextProvider from "./context/ContextProvider.jsx";
// function MyApp() {
//   return <div>MyApp || jai shree ram</div>;
// }

// let anotherElemant = <div>anotherElemant || jai shree ram</div>;
// let name = "vikash"
// let reactElement = React.createElement(
//   "a",
//   { href: "https://google.com", target: "_blank" },
//   "click me to visit google",
//   name
// );

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ContextProvider>
      <App />
    </ContextProvider>
  </StrictMode>
);
