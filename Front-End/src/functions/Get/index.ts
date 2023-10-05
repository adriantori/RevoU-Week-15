import { BASE_URL } from "../../constants"

const api_url = BASE_URL + '/get'

const Get = async() => {
    const response = await fetch(api_url, {
        method: 'GET'
    });

    const data = await response.json()
    
    return(
        alert(data.message)
    )
}
export default Get