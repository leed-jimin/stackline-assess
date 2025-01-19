import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from './redux/dataSlice'; 
import { RootState, AppDispatch } from './redux/store';

import NavBar from './components/navbar';
import ItemCard from './components/itemCard';
import SalesGraph from './components/salesGraph';

function App() {
  const dispatch: AppDispatch = useDispatch();

  const data = useSelector((state: RootState) => state.data.data);
  const error = useSelector((state: RootState) => state.data.error);

  useEffect(() => {
    dispatch(fetchData('http://localhost:3333/data'));
  }, [dispatch]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!data) {
    return <div>Loading...</div>;
  }

  const { title, subtitle, tags, image, sales } = data[0];
  
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
