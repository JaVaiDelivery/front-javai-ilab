import store from "../store"
const BASE_URL = import.meta.env.VITE_API

export default {
    pegarTodosEmAberto() {
        return fetch(`${BASE_URL}/pedidos`, {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${store.state.user.token}`
            }
        })
    },
    pegarPedidoPorId(id) {
        return fetch(`${BASE_URL}/pedidos/${id}`, {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${store.state.user.token}`
            }
        })
    },
    controlarEntrega(idPedido, body) {
   
        return fetch(`${BASE_URL}/pedidos/${idPedido}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${store.state.user.token}`
            },
            body
        })
    },
    enviarLocalizacao(body) {
        return fetch(`${BASE_URL}/geolocalizacao`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${store.state.user.token}`
            },
            body
        })
    }
}