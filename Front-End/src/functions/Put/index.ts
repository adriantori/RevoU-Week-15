import { BASE_URL } from "../../constants"

const api_url = BASE_URL + '/put'

const Put = async() => {
    const response = await fetch(api_url, {
        method: 'PUT'
    });

    const data = await response.json()
    
    return(
        alert(data.message)
    )
}
export default Put