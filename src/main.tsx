import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import "aos/dist/aos.css";
import { DoorContextProvider } from "./context/door-context.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <DoorContextProvider>
    <App />
  </DoorContextProvider>
);
