async function getInternetInfo() {
    let ip = ``
    return new Promise((resolve, reject) => {
    fetch('https://jsonip.com/').then(res => {
        return res.json();
    }).then(data => {
        ip = data.ip
    }).catch(error => {
        return new Promise(reject => reject(`Error getting IP  ${error}`));
    })
 fetch(`http://ip-api.com/json/${ip}`).then(res => {
    return res.json();
 }).then(data => {
    resolve(data)
 }).catch(error => {
    reject(` Error getting info  ${error}`)
 })


    })
}
getInternetInfo().then(data => {
    let ipElemant = document.querySelector('#ip');
    let isp = document.querySelector('#isp');
    let mask = document.querySelector('#mask');
    ipElemant.innerHTML = data.query;
    isp.innerHTML = data.isp;
    mask.innerHTML = data.country;
    console.log(data);
});
function getInternetPing() {
    return new Promise((resolve, reject) => {
        const startTime = new Date().getTime();
        const img = new Image();
        img.onload = function() {
            const endTime = new Date().getTime();
            const ping = endTime - startTime;
            resolve(ping);
        };
        img.onerror = function() {
            reject('Error getting internet ping');
        };
        img.src = 'https://www.google.com/images/phd/px.gif';
    });
}
getInternetPing().then(ping => {
    let pingElemant = document.querySelector('#ping');
    pingElemant.innerHTML = ping;
    console.log(ping);
});

function checkInternetStatus() {
    return new Promise((resolve, reject) => {
        fetch('https://jsonip.com/')
            .then(res => res.json())
            .then(data => {
                resolve('online');
            })
            .catch(error => {
                reject('offline');
            });
    });
}
checkInternetStatus()
    .then(status => {
        document.querySelector('#status').innerHTML = status;
    })
    .catch(error => {
        console.log('Error checking internet status:', error);
    });