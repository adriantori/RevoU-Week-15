import { BASE_URL } from "../../constants"

const api_url = BASE_URL + '/post'

const Post = async() => {
    const response = await fetch(api_url, {
        method: 'POST'
    });

    const data = await response.json()
    
    return(
        alert(data.message)
    )
}
export default Post