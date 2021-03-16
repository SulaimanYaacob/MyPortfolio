import "./App.css";
import Portfolio from "./components/main/Portfolio";
import HeaderLink from "./components/Header/header";
import Content from "./components/Content/Content";

function App() {
  return (
    <div className="App">
      <HeaderLink />
      <Portfolio />
      <Content />
    </div>
  );
}

export default App;
