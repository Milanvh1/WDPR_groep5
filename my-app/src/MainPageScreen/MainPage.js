// import './MainPage.css'; 
import '../App.css'
import React, { useState, useEffect } from 'react';
import { render, screen } from '@testing-library/react';
import ChairReserveScreen from '../ChairReserveScreen/ChairReserveScreen';
import CreateAccountScreen from '../CreateAccountScreen/CreateAccountScreen';
import DonorScreen from '../DonorScreen/DonorScreen';
import LoginScreen from '../LoginScreen/LoginScreen';
import ProgramScreen from '../ProgramScreen/ProgramScreen';
import ReserveListScreen from '../ReserveListScreen/ReserveListScreen';
import RoomRentScreen from '../RoomRentScreen/RoomRentScreen';
import TicketOverviewScreen from '../TicketOverviewScreen/TicketOverviewScreen';
import MainPageScreen from '../MainPageScreen/MainPage';
import Background from '../TopBarMenu/background';

// function AppSize() {
//   const [windowSize, setWindowSize] = useState(getWindowSize());
// }

// function getWindowSize() {
//   const {innerWidth, innerHeight} = window;
//   return {innerWidth, innerHeight};
// }


function OpenAccountPage() {
  window.location.href='AccountScreen.html'
}

function OpenCreateAccountPage() {
  window.location.href='CreateAccountScreen.html'
}

function OpenDonorPage() {
  window.location.href='DonorScreen.html'
}

function OpenLoginPage() {
  window.location.href='LoginScreen.html'
}

function OpenProgramPage() {
  window.location.href='ProgramScreen.html'
}

function OpenReservePage() {
  window.location.href='ChairReserveScreen.html'
}

function RoomRentPage() {
  window.location.href='OpenRoomRentScreen.html'
}

function OpenTicketOverviewPage() {
  window.location.href='TicketOverviewScreen.html'
}


function openMenuButton() {
  console.log("test");
    if (document.getElementById("sidebaropenframe").style.opacity == 0) {
      document.getElementById("sidebaropenframe").style.pointerEvents = "auto";
      document.getElementById("sidebaropenframe").style.opacity = 1;
    }
    else {
      document.getElementById("sidebaropenframe").style.pointerEvents = "none";
      document.getElementById("sidebaropenframe").style.opacity = 0;
    }
}

function MainPage() {
    useEffect(() => {
      window.addEventListener('load', function() {
        //window.resizeTo(document.innerWidth, document.inn);
        //console.log(document.getElementById("test"));
        //window.resizeTo(this.screen.availHeight, this.screen.availWidth);
        //console.log(this.innerWidth);
        if (window.location.href.includes("ChairReserveScreen.html")) {
          render(<ChairReserveScreen />);
        }
        if (window.location.href.includes("CreateAccountScreen.html")) {
          render(<CreateAccountScreen />);
        }
        if (window.location.href.includes("DonorScreen.html")) {
          render(<DonorScreen />);
        }
        if (window.location.href.includes("LoginScreen.html")) {
          render(<LoginScreen />);
        }
        if (window.location.href.includes("ProgramScreen.html")) {
          render(<ProgramScreen />);
        }
        if (window.location.href.includes("ReserveListScreen.html")) {
          render(<ReserveListScreen />);
        }
        if (window.location.href.includes("RoomRentScreen.html")) {
          render(<RoomRentScreen />);
        }
        if (window.location.href.includes("TicketOverviewScreen.html")) {
          render(<TicketOverviewScreen />);
        }
        if (window.location.href.includes("api")) {
        }
        // else {
        //   console.log("ERROR: Window URL not found in App()");
        // }
      });
      
    }, []);
    
    return(
    <div class="ei51_299_30_5">
      <div class="ei51_299_18_21"></div>
      <div class="ei51_299_30_10">
        <div class="ei51_299_30_6">
          <div class="ei51_299_18_25"></div>
          <div class="ei51_299_18_26"></div>
          <div class="ei51_299_18_27"></div>
        </div>
        <div class="ei51_299_30_7">
          <div class="ei51_299_18_35"></div>
          <div class="ei51_299_18_36"></div>
          <div class="ei51_299_18_38"></div>
        </div>
        <div class="ei51_299_30_9">
          <div class="ei51_299_18_30"></div>
          <div class="ei51_299_18_31"></div>
          <div class="ei51_299_18_34"></div>
        </div>
        <div class="ei51_299_30_8">
          <div class="ei51_299_18_32"></div>
          <div class="ei51_299_18_33"></div>
          <div class="ei51_299_18_37"></div>
        </div>
      </div>
      <div class="ei51_299_30_23"></div>

    
    <div class="ei51_299_30_12">
      <div class="ei51_299_18_23"></div>
      <div class="ei51_299_30_13"><span  class="ei51_299_18_29">Laak</span><span  class="ei51_299_18_28">Theater</span></div>
      <div class="ei51_299_30_22"></div>
    </div>
    <div class="ei51_299_30_26">
      <div class="ei51_299_23_12"></div>
      <div class="ei51_299_30_29"><span  class="ei51_299_30_27">Tel: 1234567890</span><span  class="ei51_299_30_28">Email: qwert@yuiop.nl</span></div>
    </div>
  
  <button class="menubutton" onClick={openMenuButton}>Test</button>


  <div id='sidebaropenframe' class='sidebaropenframe'>
    <button id='contactbutton' class='contactbutton'>
      <div id='contact2' class='contact2'>Contact</div>
    </button>
    <button id='ticketoverviewbutton' class='ticketoverviewbutton' onClick={OpenTicketOverviewPage}>
      <div id='ticketoverzicht' class='ticketoverzicht'>Ticketoverzicht</div>
    </button>
    <button id='hirespacebutton' class='hirespacebutton'>
      <div id='ruimtehuren' class='ruimtehuren'>Ruimte huren</div>
    </button>
    <button id='donatebutton' class='donatebutton' onClick={OpenDonorPage}>
      <div id='doneren' class='doneren'>Doneren</div>
    </button>
    <button id='accountbutton' class='accountbutton' onClick={OpenAccountPage}>
      <div id='account2' class='account2'>Account</div>
    </button>
    <button id='programbutton' class='programbutton' onClick={OpenProgramPage}>
      <div id='programma' class='programma'>Programma</div>
    </button>
    <button id='reservebutton' class='reservebutton' onClick={OpenReservePage}>
      <div id='reserveren' class='reserveren'>Reserveren</div>
    </button>
    <button id='logoutbutton' class='logoutbutton' onClick="/AccountScreen/AccountScreen.js">
      <div id='uitloggen' class='uitloggen'>Uitloggen</div>
      <img id='logoutphoto' class='logoutphoto' src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAWCAYAAAAvg9c4AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFBSURBVHgBzZW9SsRAFIVPwgSWxMJACkHCrmATELQJtks6sbFJbXwCH8FHsLRd8UEM+ACWKSw2IY2QYqtUIYk3f7Aum8kPWdgDB2aGOx8zc2fuQFXVewAbcj7Aa0mSrsHReiCw8WcbkJEXRUMUxVWWZe/o1jP5oZnXBkUN9QnqoluPXQEiDqCjgT6RBfJF0bFt+2RfUJlNxtgLRoiu1pdlWeeTQgVB2BD4xzCMeTPGeBNM0zyLouiWFxMEwSxJkkvP81zqLosh7koVRXEw8KWR51Nnf0FeTQ31yQ73TNM0dVFdoVZRot7yPJ/VwCW6zrSPiuyjPstmbIrt+9ha4SRQWZbvtoFjoa+otlvW0ziOf3cDGIbrFJxa+g9Kmb5Bj1rZBSxF7/YbI74TTdNavxNB1/WrMAw/UG2rr3yyg50ENfoDb7SAJP0PfPkAAAAASUVORK5CYII='/>
    </button>
    </div>
</div>
  );
}
export default MainPage;
render(<Background />);
