const API_URL = 'http://localhost:8000'


function saveToken(token) {
    sessionStorage.setItem('tokenData', JSON.stringify(token));
}

function getTokenData(login, password) {
    return fetch(API_URL + '/token', {
        method: 'POST',
        credentials: 'include',
        headers: {
            'accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            login, password,
        }),
    })
    .then((res) => {
        if (res.status === 200) {
            const tokenData = res.json();
            saveToken(JSON.stringify(tokenData));
            return Promise.resolve()
        }
        return Promise.reject();
    })
}

function refreshToken(token, username) {
    return fetch(API_URL + '/refresh?' + new URLSearchParams({
        username
    }), {
        body: JSON.stringify({
            token,
        }),
    })
    .then((res) => {
        if (res.status === 200) {
            const tokenData = res.json();
            saveToken(JSON.stringify(tokenData));
            return Promise.resolve();
        }
        return Promise.reject()
    })
}

export async function fetchWithAuth(url, options) {
    const loginUrl = 'http://localhost:5173/login'
    let tokenData = null;
    if (sessionStorage.authToken) {
        tokenData = JSON.parse(localStorage.tokenData);
    }
    else {
        return window.location.replace(loginUrl);
    }
    if (!options.headers) { // если в запросе отсутствует headers, то задаем их
        options.headers = {};
    }
    
    if (tokenData) {
        if (Date.now() >= tokenData.expires_on * 1000) { // проверяем не истек ли срок жизни токена
            try {
                const newToken = await refreshToken(tokenData.refresh_token); // если истек, то обновляем токен с помощью refresh_token
                saveToken(newToken);
            } catch (err) { // если тут что-то пошло не так, то перенаправляем пользователя на страницу авторизации
               return  window.location.replace(loginUrl);
            }
        }

        options.headers.Authorization = `Bearer ${tokenData.token}`; // добавляем токен в headers запроса
    }

    return fetch(url, options); // возвращаем изначальную функцию, но уже с валидным токеном в headers
}

// console.log(getTokenData('askerovz', 'pass'))
