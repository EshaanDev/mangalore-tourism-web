import "./App.css";

import Header from "./components/Header";
import SearchBox from "./components/SearchBox";
import TopHotels from "./components/TopHotels";

function App() {
  return (
    <div className="App">
      <Header />
      <SearchBox />
      <TopHotels/>
    </div>
  );
}

export default App;
