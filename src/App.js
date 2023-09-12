import "./App.css";

import Header from "./components/Header";
import RecommendedForYou from "./components/RecommendedForYou";
import SearchBox from "./components/SearchBox";
import TopBeaches from "./components/TopBeaches";
import TopHotels from "./components/TopHotels";
import TopRestaurants from "./components/TopRestaurants";

function App() {
  return (
    <div className="App">
      <Header />
      <SearchBox />
      <RecommendedForYou/>
      <TopBeaches/>
      <TopHotels/>
      <TopRestaurants/>

    </div>
  );
}

export default App;
