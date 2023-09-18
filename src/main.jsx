import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { AuthProvider } from "./context/AuthProvider.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { disableReactDevTools } from "@fvilers/disable-react-devtools";
import { Provider } from "react-redux";
import { legacy_createStore as createStore } from "redux";
import { applyMiddleware } from "redux";
import thunk from "redux-thunk";
import promiseMiddleware from "redux-promise";
import Reducers from "./reducers/index.js";

const createStoreWithMiddleware = applyMiddleware(
  promiseMiddleware,
  thunk
)(createStore);

if (process.env.NODE_ENV === "production") {
  disableReactDevTools();
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <Provider
          store={createStoreWithMiddleware(
            Reducers,
            window.__REDUX_DEVTOOLS_EXTENSION__ &&
              window.__REDUX_DEVTOOLS_EXTENSION__()
          )}
        >
          <Routes>
            <Route path="/*" element={<App />} />
          </Routes>
        </Provider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
