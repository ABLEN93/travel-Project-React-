import React from 'react';
import '../cards.css'


function Cards(props) {

  return (
    <div className='container'>
      <section> 
        <h1>{props.title}</h1>
        <img src={props.imgUrl} alt='img' />
      </section>

      <p>{props.location}</p>
    
      <section className='date'>{props.startDate}-
        {props.endDate}
      </section>
      <div>{props.description}</div>



    </div>
  )
}

export default Cards;