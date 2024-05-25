import ReactDOM from "react-dom/client";
import "./index.css";
import ContextProvider from "./Context/Context.jsx";
import app from "./app";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ContextProvider>
    <App />
  </ContextProvider>
);
