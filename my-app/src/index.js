import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './MainPageScreen/App';
import reportWebVitals from './reportWebVitals';
import DonorScreen from './DonorScreen/DonorScreen';
import ChairReserveScreen from './ChairReserveScreen/ChairReserveScreen';
import ProgramScreen from './ProgramScreen/ProgramScreen';
import ReserveListScreen from './ReserveListScreen/ReserveListScreen';
import TicketOverviewScreen from './TicketOverviewScreen/TicketOverviewScreen';
import RoomRentScreen from './RoomRentScreen/RoomRentScreen';
import CreateAccountScreen from './CreateAccountScreen/CreateAccountScreen';
import LoginScreen from './LoginScreen/LoginScreen';
import MainPageScreen from './MainPageScreen/App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MainPageScreen />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
