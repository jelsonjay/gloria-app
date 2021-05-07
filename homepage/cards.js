import React from 'react'

const Cards = ({...otherProps}) => {
const hero = './images/hero-3.jpeg';
  return (
    <div className='flex flex-row flex-wrap py-14 justify-center'>
    {/* Card-1 */}
    <div className='w-full lg:w-3/6 xl:w-4/12 px-2.5 mb-5'>
    
    <div className='bg-white'>
    <div>
    <img src={hero} alt='Avatar' className='w-full'/>
    </div>
    <div className='p-2.5 '>
    <ul>
    <li className='list-none'>
    <span className='font-bold text-base'>Title</span>
    </li>
    <li className='list-none'>
    <span className='text-base'>Description</span>
    </li>
    </ul>
    </div>
    </div>

    </div>

    
    {/* Card-2 */}
    <div className='w-full lg:w-3/6 xl:w-4/12 px-2.5 mb-5'>
    
    <div className='bg-white'>
    <div>
    <img src={hero} alt='Avatar'  className='w-full'/>
    </div>
    <div className='p-2.5 '>
    <ul>
    <li className='list-none'>
    <span className='font-bold text-base'>Title</span>
    </li>
    <li className='list-none'>
    <span className='text-base'>Description</span>
    </li>
    </ul>
    </div>
    </div>

    </div>

    {/* Card-3 */}
    
    <div className='w-full lg:w-3/6 xl:w-4/12 px-2.5 mb-5'>
    <div className='bg-white'>
    <div>
    <img src={hero} alt='Avatar'  className='w-full'/>
    </div>
    <div className='p-2.5 '>
    <ul>
    <li className='list-none'>
    <span className='font-bold text-base'>Title</span>
    </li>
    <li className='list-none'>
    <span className='text-base'>Description</span>
    </li>
    </ul>
    </div>
    </div>

    </div>


    </div>
  )
}
export default Cards