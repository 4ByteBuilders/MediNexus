import React from 'react'
import { Button } from '../ui/button'
const Hospitaldetails = ({ hospitalData }) => {
    return (
        <div className='bg-white rounded-sm p-4 mt-24 mr-8'>
            <div className='grid grid-row h-full'>
                <div className='flex flex-row items-center'>
                    <div className='w-32'>
                        <img className='rounded-full' src="/icons/centralized.png" />
                    </div>
                    <div className='flex flex-col items-start justify-center mr-2 gap-1'>
                        <div className='text-xl font-semibold'>Name: {hospitalData.name}</div>
                        <div className='text-xl'>Location: Pune</div>
                    </div>
                </div>
                <div className='ml-auto mt-auto'>
                    <Button variant='link'>
                        View Doctors
                    </Button>
                    <Button variant='link'>
                        View Patients
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default Hospitaldetails