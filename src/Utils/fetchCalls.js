import { TOKEN } from './Constants'
async function fetchAPI(type = 'GET', url = '', data = {}) {
    // Default options are marked with *
    let urlConfig = {
        method: type
    }

    if (window.location.origin !== 'http://localhost:3000' && window.location.origin !== 'http://192.168.29.212:3000') {
        urlConfig['headers'] = {
            'Content-Type': 'application/json',

        };
    }
    if (!url.includes('token')) {
        url = url + '&token=' + TOKEN;
    }
    if (type === 'POST') {
        urlConfig['body'] = JSON.stringify(data);
    }

    const response = await fetch(url, urlConfig);

    return response.json();
}



export default fetchAPI;


