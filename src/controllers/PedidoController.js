import PedidoService from "../services/PedidoService";

export default {
     async  pedidosEmAberto() {
        try {
            const response = await PedidoService.pegarTodosEmAberto()
            return { data: response }
        } catch (error) {
            return { error }
        }
    },
    async pedidoPorId(id) {
        const response = await PedidoService.pegarPedidoPorId(id)

        return { data: response }
    }
}