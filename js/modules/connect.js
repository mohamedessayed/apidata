

export let connectApi = async (url)=>{
    let response = await fetch(url);
    let responseData = await response.json();

    return responseData
}