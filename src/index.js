import "./style.css";

import { App } from './components/app'

window.onload = () => {
  const appElement = document.getElementById("body");
  if (!appElement) {
    throw Error("App root element not found");
  }

  new App(appElement);
};