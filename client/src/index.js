import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import "react-calendar/dist/Calendar.css";
import "semantic-ui-css/semantic.min.css";
import store from "./Redux/store/store";
import "bootstrap/dist/css/bootstrap.min.css";
import Kommunicate from '@kommunicate/kommunicate-chatbot-plugin';
Kommunicate.init("d9a768d92258ffad1388f79fa61288f4 " , {"popupWidget":true,"automaticChatOpenOnNavigation":true})

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
