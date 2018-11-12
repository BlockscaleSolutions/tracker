/**
 * Promisified chrome gps location
 */
function getCurrentGPSLocation() {
    return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition((res, err) => {
            if (err)
                reject(err)
            else 
                resolve(res)
        })
    })
} 

export default getCurrentGPSLocation