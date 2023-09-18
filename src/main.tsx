import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./styles/index.scss";
import { BrowserRouter } from "react-router-dom";
import AuthContextProvider from "./context/authContext/index.tsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ProducContextProvider from "./context/productContext/index.tsx";
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <BrowserRouter>
    <ProducContextProvider>
      <AuthContextProvider>
        <ToastContainer></ToastContainer>
        <App />
      </AuthContextProvider>
    </ProducContextProvider>
  </BrowserRouter>
);
