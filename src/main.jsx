import React from "react";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import ReactDOM from "react-dom/client";
import App from "../src/components/App/App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
