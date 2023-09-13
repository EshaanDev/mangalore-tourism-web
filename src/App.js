import "./App.css";
import Header from "./components/Header";
import InfoSection from "./components/InfoSection";
import RecommendedForYou from "./components/RecommendedForYou";
import SearchBox from "./components/SearchBox";
import TopBeaches from "./components/TopBeaches";
import TopRestaurants from "./components/TopRestaurants";


function App() {
  return (
    <div className="App">
      <Header />
      <SearchBox />
      <InfoSection/>
      <RecommendedForYou/>
      <TopBeaches/>
      <TopRestaurants/> 
    </div>
  );
}

export default App;
