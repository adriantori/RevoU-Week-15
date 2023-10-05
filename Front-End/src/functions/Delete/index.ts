import { BASE_URL } from "../../constants"

const api_url = BASE_URL + '/delete'

const Delete = async() => {
    const response = await fetch(api_url, {
        method: 'DELETE'
    });

    const data = await response.json()
    
    return(
        alert(data.message)
    )
}
export default Delete