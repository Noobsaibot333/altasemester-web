import React, { useState } from 'react';
import Topic1 from './components/Topic1/Topic1';
import Topic2b from './components/Topic2b'
import Login from './components/Login';

function App() {
  const [index, setIndex] = useState(1);
  const receiveloginIndex = (index: number) => {
    setIndex(index);
  };
  const receivelogoutIndex = (index: number) => {
    setIndex(index);
  };
  return (
    <div className="App">
      {
        localStorage.getItem('userName') == null ? (
          index == 1 ? <Login handleLogin={receiveloginIndex} /> :
            index == 2 ? <Topic2b handleLogout={receivelogoutIndex} /> :
              <Topic1 />
        ) : (
          index == 1 ? <Login handleLogin={receiveloginIndex} /> :
            index == 2 ? <Topic2b handleLogout={receivelogoutIndex} /> :
              <Topic1 />
        )
      }
    </div>
  );
}

export default App; 
