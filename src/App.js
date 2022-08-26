import Header from "./components/Header"
import Travel from "./components/Travel"
import data from "./data"
import './App.css';

function App() {
  const journey = data.map(travel => {
    return <Travel
        key = {travel.id}
        info = {travel}
      />
  });
  return (
    <div className="container">
      <Header />
      <div className="travel-info">
        {journey}
      </div>
    </div>
  );
}

export default App;
