import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
//17. take ID from url
import { useNavigate, useParams } from 'react-router-dom'
//19. Import updt action of reducer from SLICE
import { updtUser } from './Userreducer';


export const Update = () => {

    const {id} = useParams();
    const users = useSelector( (state) => state.users);   //CURD : UPDATE
    const existingUser = users.filter( u => u.id == id);
    const {name, mail} = existingUser[0];
    //18. State Variables for Input
    const [updtName, setName] = useState(name)
    const [updtEmail, setMail] = useState(mail)

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleUpdate = (e) => {
        e.preventDefault();
        dispatch(updtUser({  //20. Updation
            id: id,
            name: updtName,
            mail: updtEmail
        }))
        navigate('/')
    }

  return (
    <div> 
      {/* get the name and mail of the user to update */}
        <div>
            <form onSubmit={handleUpdate} className='bg-gray-500 text-white mt-[30%] lg:mt-[18%] lg:w-[800px] text-left px-14 py-10 lg:ml-[200px]'>
                <h3 className='text-3xl mb-3'>UPDATE USER</h3>
                <div>
                    <label>Name:</label>
                    <input type='text' value={updtName} name='name' onChange={e => setName(e.target.value)} className='w-full rounded-md text-black px-2 py-1' placeholder='Enter Name...' />
                </div>
                <div>
                    <label>Email:</label>
                    <input type='email' value={updtEmail} onChange={e => setMail(e.target.value)} name='mail' className='w-full rounded-md text-black px-2 py-1' placeholder='Enter Email' />
                </div>
                <button className='bg-blue-500 py-1 px-2 rounded-md mt-2'>Update</button>
            </form>
        </div>
    </div>
  )
}
