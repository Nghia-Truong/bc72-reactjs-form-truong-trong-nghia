import React from 'react'

export default function ListUser({ listUsers, handleDeleteUser, handlEditUser }) {
    let renderUser = () => {
        return listUsers.map((user) => {
            return (
                <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.username}</td>
                    <td>{user.tel}</td>
                    <td>{user.email}</td>
                    <button className='btn btn-danger' onClick={() => { handleDeleteUser(user.id) }}>Delete</button>
                    <button className='btn btn-dark' onClick={() => { handlEditUser(user) }}>Edit</button>
                </tr>
            )
        })
    }
    return (
        <div>
            <table className='table'>
                <thead className='text-xl-center'>
                    <tr>
                        <td>Mã SV</td>
                        <td>Họ Tên</td>
                        <td>SDT</td>
                        <td>Email</td>
                        <td>Tùy chọn</td>
                    </tr>
                </thead>
                <tbody className='text-xl-center'>
                    {renderUser()}
                </tbody>
            </table>
        </div>
    )
}
