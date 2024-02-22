import React from 'react'
import { useState } from 'react'
const Patientlist = () => {
    const calculateAge = (dob) => {
        let parts = dob.split("/");
        let formattedDob = parts[1] + "/" + parts[0] + "/" + parts[2];
        let dateOfBirth = new Date(formattedDob);
        let diff_ms = Date.now() - dateOfBirth.getTime();
        let age_dt = new Date(diff_ms); 
      
        return Math.abs(age_dt.getUTCFullYear() - 1970);
      }
    const [patients, setPatients] = useState([
        {
            name: 'John Doe',
            bloodgroup: 'O+',
            contact: '12345610890',
            dob: '01/01/1990'
        },
        {
            name: 'John Doe',
            bloodgroup: 'O+',
            contact: '12345610890',
            dob: '01/01/1990'
        },
        {
            name: 'John Doe',
            bloodgroup: 'O+',
            contact: '',
            dob: '01/01/1990'
        }
    ])


  return (
  <div className='grid grid-cols-4'>
    <div className='px-8'>
      <h1 className='font-bold leading-10 border-b border-black-200'>Patient Name</h1>
      {patients.map((patient) => {
        return (
          <div className='text-1xl font-normal leading-10 border-b border-black-200'>
            <p>{patient.name}</p>
          </div>
        )
      })}
    </div>
    <div className='px-8'>
      <h1 className='font-bold leading-10 border-b border-black-200'>Blood group</h1>
      {patients.map((patient) => {
        return (
          <div className='text-1xl font-normal leading-10 border-b border-black-200'>
            <p>{patient.bloodgroup}</p>
          </div>
        )
      })}
    </div>
    <div className='px-8'>
      <h1 className='font-bold leading-10 border-b border-black-200'>Contact info</h1>
      {patients.map((patient) => {
        return (
          <div className='text-1xl font-normal leading-10 border-b border-black-200'>
            <p>{patient.contact ? patient.contact : 'NA'}</p>
          </div>
        )
      })}
    </div>
    <div className='px-8'>
      <h1 className='font-bold leading-10 border-b border-black-200'>Age</h1>
      {patients.map((patient) => {
        return (
          <div className='text-1xl font-normal leading-10 border-b border-black-200'>
            <p>{calculateAge(patient.dob)}</p>
          </div>
        )
      })}
    </div>
  </div>
)
}

export default Patientlist