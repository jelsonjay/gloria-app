import React, {useState} from 'react'
import Link from 'next/link'
const Header = () => {
const [isOpen, setIsOpen] = useState(false)
const toggle = () =>{
setIsOpen(!isOpen)
}
  return (
    <header className='fixed top-0 z-30 w-full text-black  bg-white'>
    <div className='max-w-7xl mx-auto flex items-center justify-between p-2.5'>
    <div className='w-36'>
    <img src="images/logo.png" alt="Logo" className='w-full'/>
    </div>
    <div onClick={toggle} className={`md:hidden uppercase`}
    >
    Menu
    </div>
    <nav className={`${!isOpen && 'hidden'} absolute flex flex-col
     bg-white top-full w-full left-0 z-20 md:static md:w-auto md:flex`}>
    <ul className='md:flex-row md:flex'>
    <li className='list-none md:mr-5'>
    <Link href='/'>
    <a className='flex w-full text-base font-bold uppercase hover:text-green-600 cursor-pointer pt-2.5 px-2.5'>Home</a>
    </Link>
    </li>
    <li className='list-none md:mr-5'>
    <Link href='/about'>
    <a className='flex w-full text-base font-bold uppercase hover:text-green-600 cursor-pointer pt-2.5 px-2.5'>About Us</a>
    </Link>
    </li>
    <li className='list-none md:mr-5'>
    <Link href='/services'>
    <a className='flex w-full text-base font-bold uppercase hover:text-green-600 cursor-pointer pt-2.5 px-2.5'>Services</a>
    </Link>
    </li>
    <li className='list-none md:mr-5'>
    <Link href='/contact'>
    <a className='flex w-full text-base font-bold uppercase hover:text-green-600 cursor-pointer pt-2.5 px-2.5'>Contact Us</a>
    </Link>
    </li>
    </ul>
    </nav>
    </div>
    </header>
  )
}
 export default Header