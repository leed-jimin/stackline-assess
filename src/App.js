import React, { useEffect, useState } from 'react';

import NavBar from './components/navbar.tsx';
import ItemCard from './components/itemCard.tsx';
import SalesGraph from './components/salesGraph.tsx';

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Fetch data from the API and handle errors
    fetch('http://localhost:3333/data')
      .then(response => {
        if (!response.ok) {
          // Throw an error if the response is not ok (e.g., status 404 or 500)
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setData(data[0]);
      })
      .catch(err => {
        alert(err);
      });
  }, []);

  if (!data) {
    return <div>Loading...</div>;
  }

  const { title, subtitle, tags, image, sales } = data;
  
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
