import React from 'react'

function Cards({item}) {
 
    
  return (
   <>
   <div className='mt-4 my-3'>
   <div className="card bg-base-100 w-35 shadow-xl m-5 hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border">
  <figure>
    <img
      src={item.image}
     />
  </figure >
  <div className="card-body">
    <h2 className="card-title">
      {item.name}
      <div className="badge badge-secondary">{item.category}</div>
    </h2>
    <p>{item.title}</p>
    <div className="card-actions  justify-between">
      <div className="rounded-full cursor-pointer hover:bg-pink-500 hover:text-white duration-200 px-2 py-1 border-l-8 border-2"> &#x20B9;{item.price}</div>
      <div className="rounded-full cursor-pointer hover:bg-pink-500 hover:text-white duration-200 px-2 py-1 border-l-8 border-2">Buy Now</div>
    </div>
  </div>
</div>
   </div>
   </>
  )
}

export default Cards