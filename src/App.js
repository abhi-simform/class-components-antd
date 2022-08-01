import React from "react";
import "./App.scss";
import Hero from "./Components/Hero/Hero";
import Header from "./Components/Header/Header";
import Bestseller from "./Components/Bestseller/Bestseller";
class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Hero />
        <Bestseller />
      </div>
    );
  }
}

export default App;
