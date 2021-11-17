import "./style.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import data from "./data";

function App() {
  const cardElements = data.map((card) => <Card key={card.id} card={card} />);
  return (
    <div className="App">
      <Navbar />
      <div className="main-container">
        <Hero />
        <section className="card-list">{cardElements}</section>
      </div>
    </div>
  );
}

export default App;
