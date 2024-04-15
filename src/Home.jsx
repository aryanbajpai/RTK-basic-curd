//Display the users in HOME Pg
//9. To have access to Reducer use useselector
import { useDispatch, useSelector } from 'react-redux'

import React from 'react'
import { Link } from 'react-router-dom';
//25. Import delete function
import { dltUser } from './Userreducer';



export const Home = () => {
    //access user from Store 
    const users = useSelector( (state) => state.users);   //CURD : CREATE
    const dispatch = useDispatch()   //dispatched delete ac from SLICE

    //23. handle deletion    CURD : DELETE
    const handleDelete = (id) => {
        dispatch(dltUser({id:id}))
    }
    
  return (
    <div className='text-left w-[1080px] ml-14'>
        <h2 className='text-[34px] font-semibold my-2'>CURD App with JSON Server.</h2>
        <Link to={'/create'} className='bg-green-700 my-2 text-lg rounded-lg text-white px-3 py-1' >Create +</Link>
        <table className='w-full my-2'>
            <thead className='text-lg border-b-2 rounded-xl'>
                <tr>
                    <th className='px-2 py-1'>ID</th>
                    <th className='px-2 py-1'>Name</th>
                    <th className='px-2 py-1'>E-mail</th>
                    <th className='px-2 py-1'>Action</th>
                </tr>
            </thead>
            <tbody>
                {users.map( (user, index) => (
                    <tr key={index}>
                        <td className='px-2 py-1'>{user.id}</td>
                        <td className='px-2 py-1'>{user.name}</td>
                        <td className='px-2 py-1'>{user.mail}</td>
                        <td className='px-2 py-1'>
                            <Link to={`/edit/${user.id}`} className='bg-blue-500 text-white px-2 rounded'>Edit</Link>  
                            <button onClick={() => handleDelete(user.id)} className='bg-red-500 text-white px-2 rounded mx-2'>Delete</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
  )
}
