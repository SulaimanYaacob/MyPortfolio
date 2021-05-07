import "./App.css";
import Portfolio from "./components/main/Portfolio";
import HeaderLink from "./components/Header/header";
import Content from "./components/Content/Content";
import Hobbies from "./components/Content/Hobby";

function App() {
  return (
    <main id="Home">
      <div className="App">
        <HeaderLink />

        <section className="intro" id="intro">
          <Portfolio />
          <Content />
        </section>
      </div>
      <section className="hobbies" id="hobbies">
        <Hobbies />
      </section>
      <section className="rest"></section>
    </main>
  );
}

export default App;
