export default {
    login(email, senha) {
        return fetch("http://localhost:8080/login", {
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