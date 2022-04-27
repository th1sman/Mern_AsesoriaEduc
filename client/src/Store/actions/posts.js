import * as api from '../../api/index.js'

// Action creators 
export const getPosts = () =>  async (dispatch) => {
    try {
        const { data } = await api.fetchPosts()

        dispatch({ type: 'FETCH_ALL', payload: data})
    } catch (err) {
        console.error(err)
    }
}
