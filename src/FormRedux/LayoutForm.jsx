import React from 'react'
import CreateForm from "./CreateForm";
import ListUser from "./ListUser";
import { useDispatch, useSelector } from 'react-redux';

export let getDataLocal = () => {
    let data = localStorage.getItem("USERS")
    let users = data ? JSON.parse(data) : []
    return {
        type: "LOAD_USERS_FROM_LOCAL_STORAGE",
        payload: users
    };
}

export default function LayoutForm() {
    let dataForm = useSelector((state) => state.formUser);
    let listUsers = useSelector((state) => state.listUsers);
    let isReadOnly = useSelector((state) => state.isReadOnly);
    let searchedUsers = useSelector((state) => state.searchedUsers);

    let dispatch = useDispatch()
    let handleChangeUserForm = (event) => {
        let action = {
            type: "handleChangeUserForm",
            payload: {
                event: event
            }
        }
        dispatch(action)
    }
    let handleAddUser = (e) => {
        e.preventDefault()
        let action = {
            type: "handleAddUser",
            payload: {
                dataForm: dataForm
            }

        }
        dispatch(action)
    }
    let handleDeleteUser = (userID) => {
        let action = {
            type: "handleDeleteUser",
            payload: {
                userID: userID
            }
        }
        dispatch(action)
    }
    let handlEditUser = (user) => {
        let action = {
            type: "handlEditUser",
            payload: {
                user: user
            }

        }
        dispatch(action)
    }
    let handleUpdateUser = (e) => {
        e.preventDefault()
        let action = {
            type: "handleUpdateUser",
            payload: {
                dataForm: dataForm
            }
        }
        dispatch(action)
    }
    const handleSearch = (e) => {
        dispatch({
            type: "handleSearching",
            payload: { event: e }
        });
    };
    // const [isReadOnly, setIsReadOnly] = useState(true)
    return (
        <div className="container" >

            <CreateForm
                dataForm={dataForm}
                isReadOnly={isReadOnly}
                handleChangeUserForm={handleChangeUserForm}
                handleAddUser={handleAddUser}
                handleUpdateUser={handleUpdateUser}

                handleSearch={handleSearch} />

            <ListUser
                listUsers={searchedUsers.length > -1 ? searchedUsers : listUsers}
                handleDeleteUser={handleDeleteUser}
                handlEditUser={handlEditUser} />
        </div>
    )
}

