import React from 'react';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';

const AllUsers = () => {

    const { data: users, isLoading, refetch } = useQuery('users', () => fetch('http://localhost:5000/users', {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()))

    if (isLoading) { return <button className="btn loading "></button> }


    const makeAdmin = (email) => {
        fetch(`http://localhost:5000/user/admin/${email}`, {
            method: 'PUT',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                    if(res.status===403){
                            toast.error("Failed to make Admin")
                    }              
                return res.json()})
            .then(data => {
                if(data.modifiedCount>0){
                    toast.success('Admin Made Successfully')
                refetch()
                }
            })

    }



    return (
        <div className="overflow-x-auto">
            <table className="table w-full">

                <thead>
                    <tr>
                        <th></th>
                        <th>Email</th>
                        <th>Make Admin</th>
                        <th>Remove User</th>

                    </tr>
                </thead>
                <tbody>

                    {
                        users.map((user, i) =>
                            <tr key={user._id}>
                                <th>{i + 1}</th>
                                <td>{user.email}</td>
                                <td>{user.role !=="Admin" && <button onClick={() => makeAdmin(user.email)} className="btn n-primary btn-xs">Make Admin</button>}</td>
                                <td><button  className="btn n-primary btn-}xs">Remove User</button></td>

                            </tr>)
                    }


                </tbody>
            </table>
        </div>
    );
};

export default AllUsers;