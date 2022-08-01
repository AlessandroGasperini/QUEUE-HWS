let initialState = {
    clubs: [],
    users: []
}

export const fetchClubsReducer = (state = initialState.clubs, action) => {

    switch (action.type) {
        case "ALL_CLUBS":
            return {
                ...state, clubs: action.payload
            }
        default:
            return state
    }

}

export const fetchAllUsers = (state = initialState.users, action) => {

    switch (action.type) {
        case "ALL_USERS":
            return {
                ...state, users: action.payload
            }
        default:
            return state
    }

}