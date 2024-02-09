import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import App from "./App"
//LINK - packages
import { Provider } from "react-redux"
import store from "./store/store"
import { PersistGate } from "redux-persist/integration/react"
import { persistStore } from "redux-persist"
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from "./reportWebVitals"
//LINK - utilities
import './i18next'

const root = ReactDOM.createRoot(document.getElementById("root"))
let persistor = persistStore(store)

root.render(
  <React.StrictMode>
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
  </React.StrictMode>
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
