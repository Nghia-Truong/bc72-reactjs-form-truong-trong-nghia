
const initialState = {
    formUser: {
        id: "",
        username: "",
        tel: "",
        email: ""
    },
    listUsers: [],
    isReadOnly: false,
    searchedUsers: []
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case "LOAD_USERS_FROM_LOCAL_STORAGE": {
            return {
                ...state,
                listUsers: action.payload
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
            localStorage.setItem("USERS", JSON.stringify(newListUser));
            return {
                ...state,
                listUsers: newListUser
            }
        }
        case "handleDeleteUser": {
            let newListUser = state.listUsers.filter((user) => user.id !== action.payload.userID)
            localStorage.setItem("USERS", JSON.stringify(newListUser));
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

            let newListUser = [...state.listUsers]
            newListUser[index] = action.payload.dataForm
            localStorage.setItem("USERS", JSON.stringify(newListUser));
            return {
                ...state,
                isReadOnly: false,
                listUsers: newListUser
            }
        }
        case "handleSearching": {
            let searchInput = action.payload.event.target.value;
            let searchTerm = searchInput.toLowerCase();

            let searchedUsers = state.listUsers.filter(
                (user) =>
                    (user.id && user.id.toLowerCase().includes(searchTerm)) ||
                    (user.username && user.username.toLowerCase().includes(searchTerm)) ||
                    (user.tel && user.tel.includes(searchTerm))
            );

            return {
                ...state,
                searchedUsers: searchedUsers
            };
        }
        default:
            return state;
    }
}

export default userReducer