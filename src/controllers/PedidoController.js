import PedidoService from "../services/PedidoService";

export default {
    async pedidosEmAberto() {
        try {
            const response = await PedidoService.pegarTodosEmAberto()
            if (response.status === 200) {
                const result = await response.json()
                return { data: result }
            }

            return {
                error: "Tivemos um problema ao carregar  a lista de pedidos. Entre em contato conosco"
            }
        } catch (error) {
            return { error }
        }
    },
    async pedidoPorId(id) {
        try {
            const response = await PedidoService.pegarPedidoPorId(id)
            if (response.status === 200) {
                const result = await response.json()
                return { data: result }
            }

            return {
                error: "Tivemos um problema ao carregar  a lista de pedidos. Entre em contato conosco"
            }
        } catch (error) {
            return { error }
        }
    },
    async controlarEntrega(idPedido, idEntregador, status) {
        const body = {
            entregador: {
                id: idEntregador
            },
            status
        }

        if (status === 0) {
            delete body.entregador
        }

        try {
            const response = await PedidoService.controlarEntrega(idPedido, JSON.stringify(body))
            if (response.status === 200) {
                return { success: true }
            }

            return {
                error: "Tivemos um problema ao processar sua requisição. Entre em contato conosco"
            }
        } catch (error) {
            console.error(error)
            return { error }
        }
    },
    async enviarLocalizacao(posicao) {
        try {
            const response = await PedidoService.enviarLocalizacao(JSON.stringify(posicao))
            const result = await response.json()
            if (response.status === 200) {
                return { data: result }
            }

            return {
                error: result.message
            }
        } catch (error) {
            return { error }
        }
    },

    async pegarRota(origem, destino) {
        try {
            const response = await PedidoService.pegarRota(origem, destino)
            const result = await response.json()
            if (response.status === 200) {
                return { data: result.routes[0].overview_polyline.points }
            }

            return {
                error: 'Não foi possível calcular a rota'
            }
        } catch (error) {
            console.error(error)
            return { error }
        }
    }
}