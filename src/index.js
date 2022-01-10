import React from "react";

import ReactDom from 'react-dom';


function Greeting() {
  return (
    <div>
      <Person/>
      <Message/>
      
    </div>

  );
}

const Person = () => <h2>John Doe</h2>

const Message = () => {
  return (
    <div>
      <p>This is my message</p>
   
    </div>
  )
}




ReactDom.render(<Greeting/>,document.getElementById('root'));