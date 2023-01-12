import Content from "./components/Content";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { ToDoProvider } from "./contexts/ToDoContext";

function App() {
  return (
    <ToDoProvider>
      <section className="todoapp">
        <Header />
        <Content />
      </section>
      <Footer />
    </ToDoProvider>
  );
}

export default App;
