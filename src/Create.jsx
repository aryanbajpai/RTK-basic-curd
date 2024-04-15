//12. Create Create component

import React, { useState } from 'react'
//import action in component
import { addUser } from './Userreducer'
//to dispatch Action from store in component
import { useDispatch, useSelector } from 'react-redux'
//16. usevavigate
import { useNavigate } from 'react-router-dom';


export const Create = () => {
    //13. store values from input
    const [name, setName] = useState('')
    const [mail, setMail] = useState('')
    //for generating ID that comes next to existing ID
    const users = useSelector( (state) => state.users)

    const dispatch = useDispatch();
    const navigate = useNavigate()

    //14.handle form on Submitting
    const handleSubmit = (e) => {    // CURD : UPDATE
        e.preventDefault()
        //14. use action from userreducer
        dispatch(addUser({id: users[users.length - 1].id + 1, name, mail}))
        navigate('/')
    }

  return (
    <div>
        <div>
            <form onSubmit={handleSubmit} className='bg-gray-500 text-white mt-[30%] lg:mt-[18%] lg:w-[800px] text-left px-14 py-10 lg:ml-[200px]'>
                <h3 className='text-3xl mb-3'>ADD NEW USER</h3>
                <div>
                    <label>Name:</label>
                    <input type='text' name='name' onChange={ e => setName(e.target.value)} className='w-full rounded-md text-black px-2 py-1' placeholder='Enter Name...' />
                </div>
                <div>
                    <label>Email:</label>
                    <input type='email' name='mail' onChange={ e => setMail(e.target.value)} className='w-full rounded-md text-black px-2 py-1' placeholder='Enter Email' />
                </div>
                <button className='bg-blue-500 py-1 px-2 rounded-md mt-2'>Submit</button>
            </form>
        </div>
    </div>
  )
}
