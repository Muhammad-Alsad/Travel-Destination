import Home from './components/home/Home';
import './App.css';
const travel_destinations = require('./data/db.json');

function App() {
  return (
    <>
    <Home data={travel_destinations}/>
    </>
  );
}

export default App;
