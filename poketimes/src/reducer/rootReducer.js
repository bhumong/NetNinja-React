const initState = {
    posts: [
        {id: '1', title: 'satu', body: 'body satu'},
        {id: '2', title: 'dua', body: 'body dua'},
        {id: '3', title: 'tiga', body: 'body tiga'},
    ]
}

const rootReducer = (state = initState, action) => {
    if (action.type === 'DELETE_POST') {
        let newPost = state.posts.filter((post) => {
            return post.id !== action.id;
        });

        return {
            ...state,
            posts: newPost
        }
    }
    return state;
}

export default rootReducer;