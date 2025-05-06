import next from 'next';
import { revalidateTag } from 'next/cache';
import React, { cache } from 'react'

interface User {
    id: number;
    name: string;
}

const UsersPage = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users', {cache: 'no-store'});
    const users: User[] = await res.json();
  return (
    <>
      <h1>UsersPage</h1>
      {/* <p>{new Date().toLocaleTimeString() }</p> */}
      <table className='table table-bordered'>
        <thead>
          <tr>
            <th>Name</th>
            <th>Mail Id</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => <tr key={user.id}>{user.name} 
            <th>{user.id}</th>
            <th>{user.name}</th>
            </tr>)}
        </tbody>
      </table>
    </>
  )
}

export default UsersPage