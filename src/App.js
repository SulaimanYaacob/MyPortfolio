import "./App.css";
import Portfolio from "./components/main/Portfolio";
import HeaderLink from "./components/Header/header";
import Content from "./components/Content/Content";
import Hobby from "./components/Content/Hobby";

function App() {
  return (
    <>
      <div className="App">
        <HeaderLink />
        <Portfolio />
        <Content />
      </div>
      {/* <Hobby /> */}
    </>
  );
}

export default App;
