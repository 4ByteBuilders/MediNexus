import React from 'react'
import { Button } from "../ui/button";

const Third = () => {
  return (
    <div className='grid grid-cols-2 place-items-center h-full py-16 bg-gradient-to-tl from-green-50 to-green-200'>
        <div className='flex flex-col gap-2 px-10'>
            <div className='text-4xl text-green-950 font-bold'>
            <h1>
                All your medical data in one place,<br/>
                Secure with us!
            </h1>
            </div>
            <div className='text-1xl text-green-950font-normal'>
            <p>
                For you, For your doctors, For your close ones.
            </p>
            </div>
            <div className='min-w-min my-5'>
            <Button className='font-semibold text-lg p-6'>
                Check your records now!
            </Button>
            </div>
        </div>
        <div>
            <img src="/logo.png" alt="" />
        </div>
    </div>
  )
}

export default Third;
