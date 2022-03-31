import store from "../store"

export default {
    pegarTodosEmAberto() {
        return fetch('http://localhost:8080/pedidos')
    },
    pegarPedidoPorId(id) {
        return fetch(`http://localhost:8080/pedidos/${id}`, {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${store.state.user.token}`
            }
        })
    },
    controlarEntrega(idPedido, body) {
   
        return fetch(`http://localhost:8080/pedidos/${idPedido}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body
        })
    },
    enviarLocalizacao(body) {
        return fetch(`http://localhost:8080/geolocalizacao`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body
        })
    }
}