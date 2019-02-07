import {combineReducers} from "redux";

const show = (state = false, action) => {
    if(action.type === "HIDE") {
        state = !state;
        return state;
    }
    return state;
}

const posts = [{
                    body: "Learn React",
                    status: false,
                    id: 1
                }, 
                {
                    body: "Redux is awesome",
                    status: false,
                    id: 2
                }];

const addPost = (state = posts, action) => {
    switch(action.type) {

        case "ADD":
            return state.concat({
                    body: action.body,
                    status: action.done,
                    id: action.id
                })

        case "TOGGLE_DONE":
            const arr = state.slice();
            const index = arr.findIndex(item => item.id === action.value);
            const done = arr[index].status;
            arr[index].status = !done;

            return arr;

        default: return state;
    }

}

export default combineReducers( {
    show,
    addPost
})