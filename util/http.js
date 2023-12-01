import axios from 'axios';

const BACKEND_URL = 'http://200.203.185.183:8000';

export async function postRequest(path, data, token) {

    let response = {};

    const headers = {

        Accept: 'application/json'
    };

    if (!!token)    {

        headers.Authorization = 'Bearer ' . token;
    }

    await axios.post(BACKEND_URL + path, data, {

        headers: headers
    }).then(res => {

        response = {
            
            "data": res.data,
            "status": res.status
        };
    }).catch(error => {

        if (error.response) {

            // console.log(error.response.data);
            // console.log(error.response.status);

            response = {
            
                "data": error.response.data,
                "status": error.response.status
            };
        } else {

            console.log(error.data);
        }
    });

    return response;
}

export async function getRequest(path, token) {

    let response = {};

    const headers = {

        Accept: 'application/json'
    };

    if (!!token)    {

        headers.Authorization = 'Bearer ' . token;
    }

    await axios.get(BACKEND_URL + path, {

        headers: headers
    }).then(res => {

        response = {
            
            "data": res.data,
            "status": res.status
        };
    }).catch(error => {

        if (error.response) {

            // console.log(error.response.data);
            // console.log(error.response.status);

            response = {
            
                "data": error.response.data,
                "status": error.response.status
            };
        } else {

            console.log(error.data);
        }
    });

    return response;
}

export async function putRequest(path, data, token) {

    let response = {};

    const headers = {

        Accept: 'application/json'
    };

    if (!!token)    {

        headers.Authorization = 'Bearer ' . token;
    }

    await axios.put(BACKEND_URL + path, data, {

        headers: headers
    }).then(res => {

        response = {
            
            "data": res.data,
            "status": res.status
        };
    }).catch(error => {

        if (error.response) {

            // console.log(error.response.data);
            // console.log(error.response.status);

            response = {
            
                "data": error.response.data,
                "status": error.response.status
            };
        } else {

            console.log(error.data);
        }
    });

    return response;
};

export async function deleteRequest(path, token) {

    let response = {};

    const headers = {

        Accept: 'application/json'
    };

    if (!!token)    {

        headers.Authorization = 'Bearer ' . token;
    }
    
    await axios.delete(BACKEND_URL + path, {

        headers: headers
    }).then(res => {

        response = {
            
            "data": res.data,
            "status": res.status
        };
    }).catch(error => {

        if (error.response) {

            // console.log(error.response.data);
            // console.log(error.response.status);

            response = {
            
                "data": error.response.data,
                "status": error.response.status
            };
        } else {

            console.log(error.data);
        }
    });

    return response;
};