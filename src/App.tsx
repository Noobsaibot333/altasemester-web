import React, { useState } from 'react';
import Topic1 from './components/Topic1/Topic1';
import Topic2b from './components/Topic2b'
import Login from './components/Login';
import MyComponents from './components/MyComponents';
import MyCircle from './components/MyCircle';
import Test from './components/Test';

function App() {
    return (
        <Test />
    )
}
// function App() {
//   const [index, setIndex] = useState(1);
//   const receiveloginIndex = (index: number) => {
//     setIndex(index);
//   };
//   const receivelogoutIndex = (index: number) => {
//     setIndex(index);
//   };
//   return (
//     <div className="App">
//       {
//         localStorage.getItem('userName') == null ? (
//           index == 1 ? <Login handleLogin={receiveloginIndex} /> :
//             index == 2 ? <Topic2b handleLogout={receivelogoutIndex} /> :
//               <Topic1 />
//         ) : (
//           index == 1 ? <Login handleLogin={receiveloginIndex} /> :
//             index == 2 ? <Topic2b handleLogout={receivelogoutIndex} /> :
//               <Topic1 />
//         )
//       }
//     </div>
//   );
// }

export default Test; 
