import ReactDOM from "react-dom/client";
import "./index.css";
import ContextProvider from "./Context/Context.jsx";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ContextProvider>
    <App />
  </ContextProvider>
);
