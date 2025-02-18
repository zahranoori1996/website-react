import React from 'react'
import banner from "../../public/assets/images/banner.jpg"
import DropDown from './DropDown'
import Search from './Search'
export default function Banner() {
  return (
    <div className='h-[90vh] bg-cover bg-no-repeat bg-center flex-col items-center' style={{backgroundImage:`url(${banner})`}}>
      <div className="flex flex-col">
        <h1 className='text-6xl p-15 [text-shadow:_0px_1px_8px_#000000]'>
          <span className='font-semibold text-red-500'>مکان </span>
          <span className='text-white'>ایده آلت همین جاست</span>
        </h1>
        <p className='text-lg py-1 px-15 text-white'>اجاره ویلا، سوئیت و اقامتگاه در شمال و سراسر ایران </p>
        <p className='text-lg py-1 px-15 font-semibold text-white'>سفر پاییزی از تو، جاباما</p>
      </div>
      <div className='flex w-[1200px] h-[120px] backdrop-blur-xs my-12 rounded-2xl'>
        <DropDown/>
        <DropDown/>
        <DropDown/>
        <Search/>
      </div>
    </div>
  )
}
