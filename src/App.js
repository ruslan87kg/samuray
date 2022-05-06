import "./App.scss";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Nav from "./components/Nav/Nav";

function App() {
  return (
    <div className="app-wrapper">
      <Header />
      <Nav />
      <Main />
    </div>
  );
}

export default App;
