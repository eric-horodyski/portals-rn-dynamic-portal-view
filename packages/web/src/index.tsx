import React from "react";
import ReactDOM from "react-dom";
import App, { AppContext } from "./App";
import { getInitialContext } from "@ionic/portals";

const defaultContext: AppContext = {
  startingRoute: "/",
};

const context = getInitialContext<AppContext>()?.value ?? defaultContext;

ReactDOM.render(
  <React.StrictMode>
    <App context={context} />
  </React.StrictMode>,
  document.getElementById("root")
);
