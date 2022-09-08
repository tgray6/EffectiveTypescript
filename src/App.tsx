import React from 'react';

function App() {
  return (
    <div className="App">

    </div>
  );
};

export default App;



function restOfPath(path: string) {
  return path.split('/').slice(1).join('/');
};
