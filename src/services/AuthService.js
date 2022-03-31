const BASE_URL = import.meta.env.VITE_API

export default {
    login(email, senha) {
        return fetch(`${BASE_URL}/login`, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                email,
                senha
            })
        })
    }
}