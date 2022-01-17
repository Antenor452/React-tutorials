import React from 'react'

const book = (props) => {
    const onClickHandler = (e) => {
  console.log(e);
  console.log(e.target);
  alert("hello World");
}

const complexExample = (author) => {
  console.log(author)
  
}
const onMouseHover = () => {
  
}

    const {img,title,author} = props
    return (
    <article className="book" onMouseOver={() => {
      console.log(title)
    }}>
      <img src={img} alt="" />
      <h1 onClick={()=>{console.log(title)}}>{title}</h1>
      <h4>{author}</h4>
      <button type="button" onClick={onClickHandler}>Reference example</button><br/>
      <button type="button" onClick={()=>{complexExample(author)}}>Complex example</button>
    </article>

  );
}

export default book
