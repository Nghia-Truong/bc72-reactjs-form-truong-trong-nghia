import React from 'react'


export default function CreateForm({ handleSearch, dataForm, handleChangeUserForm, handleAddUser, handleUpdateUser, isReadOnly }) {
    return (
        <div>
            <p className='bg-black text-white text-xl-center p-3'>Thông Tin Sinh Viên</p>
            <form className='row' onSubmit={isReadOnly ? handleUpdateUser : handleAddUser}>
                <div className='col-6'>
                    <p>Mã SV</p>
                    <input type="text" name='id' onChange={(event) => { handleChangeUserForm(event) }} value={dataForm.id}
                        readOnly={isReadOnly} style={{ color: isReadOnly ? "gray" : "black" }} required />
                </div>
                <div className='col-6'>
                    <p>Họ Tên</p>
                    <input type="text" name='username' onChange={(event) => { handleChangeUserForm(event) }} value={dataForm.username} required />
                </div>
                <div className='col-6'>
                    <p>Số điện thoại</p>
                    <input type="tel" pattern="[0-9]+" name='tel' onChange={(event) => { handleChangeUserForm(event) }} value={dataForm.tel} required />
                </div>
                <div className='col-6'>
                    <p>Email</p>
                    <input type="email" name='email' onChange={(event) => { handleChangeUserForm(event) }} value={dataForm.email} required />
                </div>
                {isReadOnly ? <button className='w-25 p-2 m-3 btn btn-dark'>UPDATE</button> : <button className='w-25 p-2 m-3 btn btn-success'>ADD</button>
                }
            </form>
            <form>
                <input
                    type="text"
                    placeholder="Tìm kiếm..."
                    onChange={handleSearch}
                    className="form-control"
                />
            </form>
        </div>
    )
}
