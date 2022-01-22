import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import User from './User'
const UserList = () => {
    const [data,setData]=useState([])
    
    
    axios.get('https://jsonplaceholder.typicode.com/users')
        .then( (res)=>setData(res.data))                 
         .catch((err)=>console.log(err)) ;
                                
    return (
        
        <div>
           {data.map(user=><User user={user} key={user.id} />)}
        </div>
    )
}

export default UserList