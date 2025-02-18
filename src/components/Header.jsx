import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <div className='py-7 px-12 flex justify-between items-center border-b-1 border-b-[#bdbdbd]'>
      <img className='w-10' src="https://afiles.webengage.com/58add2d9/e3d7dabb-10ad-4d96-a39f-ba8194fdc9c7.png"/>
      <div className="flex gap-4">
        <Link className="px-4 py-3 rounded-lg hover:bg-red-600 font-semibold transition hover:text-white" to={"/"}>
        ورود به حساب
        </Link>
        <Link className="px-4 py-3 bg-red-500 rounded-lg hover:bg-red-600 text-white font-semibold transition" to={"/"}>
        ثبت نام
        </Link>
      </div>
      
    </div>
  )
}
