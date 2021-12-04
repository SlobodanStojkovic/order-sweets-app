import "./App.css";
import { Header } from "./components/Layout/Header";
import { Sweets } from "./components/Sweets/Sweets";

function App() {
  return (
    <>
      <Header />
      <main>
        <Sweets />
      </main>
    </>
  );
}

export default App;
