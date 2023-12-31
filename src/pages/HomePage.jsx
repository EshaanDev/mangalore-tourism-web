import React from 'react';
import Header from '../components/Header';
import InfoSection from '../components/InfoSection';
import RecommendedForYou from '../components/RecommendedForYou';
import SearchBox from "../components/SearchBox";
import TopBeaches from '../components/TopBeaches';
import TopRestaurants from '../components/TopRestaurants';

function HomePage() {
  return (
    <>
      <Header />
      <SearchBox />
      <InfoSection/>
      <RecommendedForYou/>
      {/* <TopBeaches/> */}
      <TopRestaurants/> 
    </>
  )
}

export default HomePage