import React from 'react';

import NavBar from './components/navbar.tsx';
import ItemCard from './components/itemCard.tsx';
import SalesGraph from './components/salesGraph.tsx';
import jsonData from './data/stackline_frontend_assessment_data_2021.json'

function App() {
  // const jsonData;
  const { image, sales, subtitle, title, tags} = jsonData[0];
  return (
    <div>
      <NavBar />
      <div className="container">
        <ItemCard {...{ title, subtitle, tags, image }}/>
        <SalesGraph {...{sales}}/>
      </div>
    </div>
  );
}

export default App;
