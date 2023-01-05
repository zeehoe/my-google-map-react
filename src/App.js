import Home from "./pages/Home.js";
import GlobalContextProvider from "./contexts/GlobalContext.js";
import { StrictMode } from "react";

function App() {
  return (
    <StrictMode>
      <GlobalContextProvider>
        <Home />
      </GlobalContextProvider>
    </StrictMode>
  );
}

export default App;
