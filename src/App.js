import Header from "./components/header.js"
import Card from "./components/card.js"
import data from "./data.js"
import './App.css';

function App() {
    const cards = data.map(item => {
        return(
            <Card 
                image={item.coverImg}
                rating={item.stats.rating}
                review_count={item.stats.reviewCount}
                country={item.location}
                title={item.title}
                price={item.price}
            />
        )
    })
    return (
      <div className="App">
          <Header />
          {cards}
      </div>
    );
}

export default App;
