import React from 'react'
import Product from './Product.jsx'

export default function Products() {
  const products = [
    {id:1,title:'product one',desc:'This is product one'},
    {id:2,title:'product two',desc:'This is product two'},
    {id:3,title:'product three',desc:'This is product three'},
    {id:3,title:'product four',desc:'This is product four'},

];
  return (
    <div className=''>
        <div className='row row-gap-3'>
          {
            products.map((product)=>{
              return <Product {...product} Key={products.id} />

            }
            )
          }
        </div>
    </div>
  )
}

