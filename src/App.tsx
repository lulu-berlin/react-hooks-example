import React, {useEffect} from 'react';
import {Example1} from './Example1';
// import {Example2} from './Example2';
// import {Example3} from './Example3';
// import {Example4} from './Example4';
import './App.css';

const App: React.FC<{}> = () => {
  useEffect(() => {
    console.log(`bla bla bla: ${Math.random() * 10000 | 0}`);
  });

  return (
    <div className="App">
      <Example1 />
    </div>
  );
};

export default App;
