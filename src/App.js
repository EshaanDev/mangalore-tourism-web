import { Route, Routes } from 'react-router-dom';
import "./App.css";
import Beachinfo from './pages/BeachInfo';
import Beaches from "./pages/Beaches";
import Clubs from './pages/Clubs';
import HomePage from './pages/HomePage';
import Hotels from './pages/Hotels';
import LiveEvents from './pages/LiveEvents';
import Parks from './pages/Parks';
import ReligiousPlaces from './pages/ReligiousPlaces';
import Restaurants from './pages/Restaurants';
import hotelsData from './hotels'
import Header from './components/Header';


function App() {
   




  return (
    <div className="App">
    
      <Routes>
        {/* <Route path={window.location} element={<HomePage/>}/> */}
        <Route path='/' element={<HomePage/>}/>
        <Route path="/beach" element={<Beaches/>}/>
        <Route path='/hotels' element = {<Hotels className='hotels-menu'/>}/>
        <Route path='/clubs' element = {<Clubs/>}/>
        <Route path='/parks' element = {<Parks/>}/>
        <Route path='/religious' element = {<ReligiousPlaces/>}/>
        <Route path='/live' element = {<LiveEvents/>}/>
        <Route path='/restaurants' element = {<Restaurants/>}/>
      </Routes>
      <Routes>
        <Route path='/beachinfo' element={<Beachinfo/>}/>
        <Route path='/HotelInfo' element={<Beachinfo/>}/>

      </Routes>

    </div>
  );
}

export default App;
