import './App.css';
import React, { useState } from 'react';
// import './script';

function Example() {
  const [count, setCount] = useState(0);

function OnAankoop() {
  //WEEK 14 TESTS:
  if (document.getElementById("quantity").value < 0) {
    throw new Error('Value can not be negative');
  }
  else {
    setCount(count + parseInt(document.getElementById("quantity").value));
  }
}

return (
  <html>
    <body>
      <h1 id="TicketTitel" style={{color: "blue"}}>
        Tickets
      </h1>
      {/* <form action="/action_page.php" id="AantalTicketsInvoerveld"> */}
      <label>
        <label for="quantity">Ik wil </label>
        <input type="number" id="quantity" name="quantity" min="1"></input>
        <label for="quantity"> Tickets </label>
        <button onClick={() => OnAankoop()}>
          Koop Nu
        </button>
      </label>
      <h4>
        <label id="totaalbedrag"> Totaalbedrag: {count} euro</label>
      </h4>
      <div>
        <h3 id='bonus'>Klik op de knop voor een fellere kleur tekst</h3>
        <button id='colorbutton' style={{background: "blue"}} onClick={document.getElementById("colorbutton").style={background: "green"}}>Change Text Color</button>
      </div>
    </body>
  </html>
);
}


export default Example;
