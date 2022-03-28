import PedidoService from "../services/PedidoService";

export async function pedidosEmAberto() {
    try {
        const response = await PedidoService.pegarTodosEmAberto()
        return { data: response }
    } catch (error) {
        return { error }
    }
}