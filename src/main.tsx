import ReactDOM from "react-dom/client";
import App from "./app/App";
import "./app/styles/index.scss";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { setupStore } from "@/app/provider/StoreProvider/store.ts";
const store = setupStore();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
);
