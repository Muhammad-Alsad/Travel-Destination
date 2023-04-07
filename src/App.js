import { Routes, Route } from "react-router-dom";
import Home from './components/home/Home';
import './App.css';
import TourDetails from "./components/TourDetails/TourDetails"

const travel_destinations = require('./data/db.json');

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={ <Home data={travel_destinations}/> }/>
      <Route path={"/city/:id"}  element={ <TourDetails data={travel_destinations}/>}/>
     </Routes>
    </>
  );
}

export default App;
