import React from 'react'
import list from "../../public/list.json"
import Cards from './Cards'
import { Link } from 'react-router-dom'


function Course() {
  return (
    <>
  <div className='max-w-screen-2xl container mx-auto md:px-20 px-4  dark:bg-slate-900 dark:text-white dark:border'>
 <div className='mt-28 items-center justify-center text-center'>
  <h1 className='text-2xl md:text-4xl'>We' rw delighted to have you <span className='text-pink-500'>Here !:)</span></h1>
  <p className='mt-12'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum tempora molestias nisi fugiat autem ea numquam minima sapiente exercitationem hic?</p>
  <Link to="/">
  <button className="rounded-full cursor-pointer hover:bg-pink-500 hover:text-white duration-200 px-2 py-1 border-l-8 border-2 mt-6">Back</button>
  </Link>
 </div>
<div className='mt-12 grid grid-cols-1 md:grid-cols-4'>


{
   list.map((item)=>(
   <Cards  key={item.id} item={item}/>
 ))
  
}


</div>


  </div>
    </>
  )
}

export default Course