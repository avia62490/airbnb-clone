import Header from "./components/header.js"
import Card from "./components/card.js"
import './App.css';

function App() {
  return (
    <div className="App">
        <Header />
        <Card 
            image="KZaferes.png"
            rating="5.0"
            review_count={6}
            country="USA"
            title="Life Lessons with Katie Zaferes"
            price={140}
        />
    </div>
  );
}

export default App;
