const BaseUrl = 'https://api.themoviedb.org/3';
const API_KEY = '3d9e6e606da11a36ddc8ae80ac753903'

export const fetchDataAPI = async (endpoint, Id = null, params = {}) => {
    try {
        let url = new URL(`${BaseUrl}${endpoint}${Id ? `/${Id}` : ""}`);
        url.searchParams.append('api_key', API_KEY);
        Object.keys(params).forEach(key => url.searchParams.append(key, params[key]));
        
    
        const response = await fetch(url.toString());
        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        return data;

    }  catch (error) {
        console.error(`API Error [${endpoint}]:`, error);
        return null;
      }
}