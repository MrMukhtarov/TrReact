import Container from "./Container";
import { LangContextProvider } from "./contexts/LangContext";
import { ThemeContextProvider } from "./contexts/ThemeContext";
import "./style.css";

const App = () => (
  <div>
    <LangContextProvider>
      <ThemeContextProvider>
        <Container />
      </ThemeContextProvider>
    </LangContextProvider>
  </div>
);

export default App;
