import React from 'react'

export default function Product(props) {
  return (
    <div className='col-md-2 bg-dark text-white m-3'>
      <h4>{props.title}</h4>
      <p>{props.desc}</p>
    </div>
  )
}
