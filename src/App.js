import "./App.css";
import Portfolio from "./components/main/Portfolio";
import HeaderLink from "./components/Header/header";
import Content from "./components/Content/Content";
// import Experiences from "./components/Content/Experience";

function App() {
  return (
    <div className="App">
      <HeaderLink />
      <Portfolio />
      <Content />
      {/* <Experiences /> */}
    </div>
  );
}

export default App;
