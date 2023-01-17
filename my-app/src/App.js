import './App.css';
import DonorScreen from './DonorScreen/DonorScreen';
import CreateAccountScreen from './CreateAccountScreen/CreateAccountScreen';
import AccountScreen from './AccountScreen/AccountScreen';

import MainPage from './MainPageScreen/MainPage';
import RoomRentScreen from './RoomRentScreen/RoomRentScreen';






function App() {

  function setup() {
    //document.getElementById("sidebaropenframe").style.opacity = 0;
  }

  function closeMenuButton() {
    //set menu to invisible
    //disable menu
    //document.getElementById("sidebaropenframe").style.opacity = 0;
    //document.getElementById("sidebaropenframe").innerHTML = "test";
  }

  return(
    <html>
      <div>
        <MainPage />
      </div>
    </html>
  )

}



//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>npx create-react-app my-app
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
