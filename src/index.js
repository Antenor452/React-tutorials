import React from "react";
import ReactDom from 'react-dom';


//CSS
import './index.css'

import { books } from "./books";
import Book from './book'


// onClick ,onMouseHover

function Booklist() {
  return (
    <section className="booklist">
      {books.map((book) => {
        return <Book key={book.id } {...book} />
      })} 
    </section>
  );
}


ReactDom.render(<Booklist/>,document.getElementById('root'));