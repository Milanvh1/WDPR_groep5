import './MainPage.css'; 
import TicketOverviewScreen from '../TicketOverviewScreen/TicketOverviewScreen';

function openMenuButton() {
    //enable menu
    //set menu to visible
    //document.getElementById("sidebaropenframe").innerHTML = "test";
    console.log("Test");
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
    /*  
    function setup() {
        //document.getElementById("sidebaropenframe").style.opacity = 0;
    }

    function closeMenuButton() {
        //set menu to invisible
        //disable menu
        //document.getElementById("sidebaropenframe").style.opacity = 0;
        //document.getElementById("sidebaropenframe").innerHTML = "test";
    }
    */
    return(
    <div class="e51_298">
  <div class="e51_299">
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
    </div>
    
    <div class="ei51_299_30_12">
      <div class="ei51_299_18_23"></div>
      <div class="ei51_299_30_13"><span  class="ei51_299_18_29">Laak</span><span  class="ei51_299_18_28">Theater</span></div>
      <div class="ei51_299_30_22"></div>
    </div>
    <div class="ei51_299_30_17">
      <div class="ei51_299_30_24"></div>
      <div class="ei51_299_30_19"></div>
    </div>
    <div class="ei51_299_30_26">
      <div class="ei51_299_23_12"></div>
      <div class="ei51_299_30_29"><span  class="ei51_299_30_27">Tel: 1234567890</span><span  class="ei51_299_30_28">Email: qwert@yuiop.nl</span></div>
    </div>
  </div>



  
  {/* <script>
    function onclick_event() {
        console.log("Test complete!!")
        // document.getElementById('logoutbutton').style = 'opacity: 10%'
    }
  </script> */}
  <button class="menubutton" onClick={openMenuButton}>This is a testbutton</button>



  <div id='sidebaropenframe' class='sidebaropenframe'>
    <button id='contactbutton' class='contactbutton'>
      <div id='contact2' class='contact2'>Contact</div>
    </button>
    <button id='ticketoverviewbutton' class='ticketoverviewbutton'>
      <div id='ticketoverzicht' class='ticketoverzicht'>Ticketoverzicht</div>
    </button>
    <button id='hirespacebutton' class='hirespacebutton'>
      <div id='ruimtehuren' class='ruimtehuren'>Ruimte huren</div>
    </button>
    <button id='donatebutton' class='donatebutton'>
      <div id='doneren' class='doneren'>Doneren</div>
    </button>
    <button id='accountbutton' class='accountbutton'>
      <div id='account2' class='account2'>Account</div>
    </button>
    <button id='programbutton' class='programbutton'>
      <div id='programma' class='programma'>Programma</div>
    </button>
    <button id='reservebutton' class='reservebutton'>
      <div id='reserveren' class='reserveren'>Reserveren</div>
    </button>
    <button id='logoutbutton' class='logoutbutton'>
      <div id='uitloggen' class='uitloggen'>Uitloggen</div>
      <img id='logoutphoto' class='logoutphoto' src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAWCAYAAAAvg9c4AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFBSURBVHgBzZW9SsRAFIVPwgSWxMJACkHCrmATELQJtks6sbFJbXwCH8FHsLRd8UEM+ACWKSw2IY2QYqtUIYk3f7Aum8kPWdgDB2aGOx8zc2fuQFXVewAbcj7Aa0mSrsHReiCw8WcbkJEXRUMUxVWWZe/o1jP5oZnXBkUN9QnqoluPXQEiDqCjgT6RBfJF0bFt+2RfUJlNxtgLRoiu1pdlWeeTQgVB2BD4xzCMeTPGeBNM0zyLouiWFxMEwSxJkkvP81zqLosh7koVRXEw8KWR51Nnf0FeTQ31yQ73TNM0dVFdoVZRot7yPJ/VwCW6zrSPiuyjPstmbIrt+9ha4SRQWZbvtoFjoa+otlvW0ziOf3cDGIbrFJxa+g9Kmb5Bj1rZBSxF7/YbI74TTdNavxNB1/WrMAw/UG2rr3yyg50ENfoDb7SAJP0PfPkAAAAASUVORK5CYII='/>
    </button>
    </div>
  </div>

  );
}

export default MainPage;

//<div class="e51_300">
//<div class="e50_306"><span  class="e50_307">Welkom</span><span  class="e50_308">Naam</span></div>
//</div>