import React from "react";
import ReactDOM from "react-dom/client";
import App from "./routes.jsx";
import injectContext from "./hooks/useGlobalReducer";

const AppWithContext = injectContext(App);
ReactDOM.createRoot(document.getElementById("root")).render(<AppWithContext />);
