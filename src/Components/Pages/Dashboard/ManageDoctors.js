import React from 'react';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';

const ManageDoctors = () => {
    const { data: users, isLoading, refetch } = useQuery('users', () => fetch('http://localhost:5000/doctor', {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()))

    if (isLoading) { return <button className="btn loading "></button> }


    const deletAdmin = (email) => {
        fetch(`http://localhost:5000/doctor/${email}`, {
            method: 'DELETE',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                if (res.status === 403) {
                    toast.error("Failed to make Admin")
                }
                return res.json()
            })
            .then(data => {
                if (data.deletedCount > 0) {
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
                        <th>Avater</th>
                        <th>Name</th>
                        <th>Speciality</th>
                        <th>Remove User</th>

                    </tr>
                </thead>
                <tbody>

                    {
                        users.map((user, i) =>
                            <tr key={user._id}>
                                <th>{i + 1}</th>
                                <td>
                                    <div class="avatar">
                                    <div class="w-16 rounded">
                                        <img src={user.iamge} alt="Doctor Image" />
                                    </div>
                                </div>
                                </td>
                                <td>{user.name}</td>
                                <td>{user.specialty}</td>
                                <td><button onClick={() => deletAdmin(user.email)} className="btn n-primary btn-}xs">Remove User</button></td>

                            </tr>)
                    }


                </tbody>
            </table>
        </div>
    );
};


export default ManageDoctors;