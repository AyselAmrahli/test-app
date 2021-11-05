import COMMENTS from "../actions";

export default function commentReducer (state=[], {type,payload}) {

    switch (type) {
        case COMMENTS.FETCH:
            return {...state, load: true};
    
        case COMMENTS.FETCH_SUCCESS:
            return {...state, comments: payload, load: false};

        case COMMENTS.FETCH_FAILURE:
            return {...state, load: false};

        case COMMENTS.POST:
            return {...state, load: true};
    
        case COMMENTS.POST_SUCCESS:
            console.log(payload)
            return {...state, comments: [...state.comments, payload], load: false};

        case COMMENTS.POST_FAILURE:
            return {...state, load: false};

        default:
            return state;
    }
}