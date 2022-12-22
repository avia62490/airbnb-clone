import Header from "./components/header.js"
import Card from "./components/card.js"
import data from "./data.js"
import './App.css';

function App() {
    const cards = data.map(item => {
        return(
            <Card 
                key={item.id}
                item={item}
            />
        )
    });
    return (
      <div className="App">
          <Header />
          <section className="cards_section">
                {cards}
          </section>
      </div>
    );
}

export default App;
