import "./App.css";
import Portfolio from "./components/main/Portfolio";
import FooterLink from "./components/footerLink/footer";
import Content from "./components/Content/Content";

function App() {
  return (
    <div className="App">
      <FooterLink />
      <Portfolio />
      <Content />
    </div>
  );
}

export default App;
