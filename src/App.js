import React from 'react';

import Header from './Header';

function App() {
  const colorsSet = ['all', 'crimson', 'wisteria', 'azure', 'emerald', 'sunflower'];

  return (
    <div className="container">
      <Header items={colorsSet} />
      <div className="block-cover">
        <div className="col-auto box crimson"></div>
        <div className="col-auto box wisteria"></div>
        <div className="col-auto box emerald"></div>
        <div className="col-auto box azure"></div>
        <div className="col-auto box sunflower"></div>
        <div className="col-auto box crimson"></div>
        <div className="col-auto box wisteria"></div>
        <div className="col-auto box emerald"></div>
        <div className="col-auto box azure"></div>
        <div className="col-auto box sunflower"></div>
        <div className="col-auto box crimson"></div>
        <div className="col-auto box wisteria"></div>
        <div className="col-auto box emerald"></div>
        <div className="col-auto box azure"></div>
        <div className="col-auto box sunflower"></div>
        <div className="col-auto box crimson"></div>
        <div className="col-auto box wisteria"></div>
        <div className="col-auto box emerald"></div>
        <div className="col-auto box azure"></div>
        <div className="col-auto box sunflower"></div>
      </div>
    </div>
  );
}

export default App;
