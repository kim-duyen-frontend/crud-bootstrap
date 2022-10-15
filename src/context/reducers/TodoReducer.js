const TodoReducer = (state, action) => {
    // console.log("check data: ", action);
    switch (action.type) {
        case "ADD_USER":
            return {
                ...state,
                users: [...state.users, action.payload]
            }
        case "DELETE_USER":
            return {
                ...state,
                users: state.users.filter((user) => user.id !== action.payload)
            }
        case "UPDATE_USER":
            const dataCurrent = action.payload;
            const updateData = state.users.map((user) => {
                if (user.id === dataCurrent.id) {
                    return dataCurrent;
                }
                return user;
            })
            return {
                ...state,
                users: updateData
            }
        default:
            return state;
    }
}
export default TodoReducer;