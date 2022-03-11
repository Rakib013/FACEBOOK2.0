
export const initialstate = {
    profile: null,
    posts: null,
    isMenu: false,
}

const reducer = (state, action) => {
    switch (action.type) {
        case "MENU":
            return {
                ...state,
                isMenu: action.isMenu,
            };
        default:
            return state;
    }
};

export default reducer;