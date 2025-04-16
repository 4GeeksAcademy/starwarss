import React from "react";
import ReactDOM from "react-dom/client";
import App from "./routes.jsx";
import injectContext from "./hooks/useGlobalReducer";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const AppWithContext = injectContext(App);
ReactDOM.createRoot(document.getElementById("root")).render(<AppWithContext />);
