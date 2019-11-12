import React, { useState } from 'react';
// import './App.css';
import './App.scss';

import Header from './components/Header';
import SearchText from './components/SearchText';
import EmptyState from './components/EmptyState';
import SectionResult from './components/SectionResult';

import junkFoodList from './junk-food-list';

function App() {
  /* States */
  const [result, setResult] = useState({});

  /* Methods */
  const setItemToResult = item => {
    const resultToSet = junkFoodList.find(food => food.id === item.id);
    setResult(resultToSet);
  };

  return (
    <div className="App">
      <Header />

      <SearchText setItemToResult={setItemToResult} />
      {!result.id && <EmptyState />}
      {result.id && <SectionResult result={result} />}
      
    </div>
  );
}

export default App;
