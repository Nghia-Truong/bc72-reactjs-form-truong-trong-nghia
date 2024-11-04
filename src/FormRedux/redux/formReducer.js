// import { message } from "antd"

const initialState = {
    formUser: {
        id: "",
        username: "",
        tel: "",
        email: ""
    },
    listUsers: [],
    isReadOnly: false
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case "LOAD_USERS_FROM_LOCAL_STORAGE": {
            return {
                ...state,
                listUser: action.payload
            };
        }
        case "handleChangeUserForm": {
            const { name, value } = action.payload.event.target
            return {
                ...state,
                formUser: {
                    ...state.formUser,
                    [name]: value
                }
            };
        }
        case "handleAddUser": {
            let index = state.listUsers.findIndex((user) => user.id == action.payload.dataForm.id)
            let newListUser = [...state.listUsers, action.payload.dataForm]
            if (index !== -1) {
                alert("SV đã tồn tại")
                return { ...state }
            }
            return {
                ...state,
                listUsers: newListUser
            }
        }
        case "handleDeleteUser": {
            let newListUser = state.listUsers.filter((user) => user.id !== action.payload.userID)
            return {
                ...state,
                listUsers: newListUser
            }
        }
        case "handlEditUser": {
            let user = action.payload.user
            return {
                ...state,
                formUser: {
                    id: user.id,
                    username: user.username,
                    tel: user.tel,
                    email: user.email
                },
                isReadOnly: true
            }
        }
        case "handleUpdateUser": {
            let index = state.listUsers.findIndex((user) => user.id == action.payload.dataForm.id)
            // let state.listUsers[index] = action.payload.dataForm
            let newListUser = [...state.listUsers]
            newListUser[index] = action.payload.dataForm

            return {
                ...state,
                isReadOnly: false,
                listUsers: newListUser
            }
        }
        default:
            return state;
    }
}

export default userReducer