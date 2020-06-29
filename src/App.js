import React from 'react';

import Header from './Header';
import Box from './Box';

function App() {
  const colorsSet = ['crimson', 'wisteria', 'azure', 'emerald', 'sunflower'];

  return (
    <div className="container">
      <Header items={colorsSet} />
      <Box items={colorsSet}></Box>
    </div>
  );
}

export default App;
