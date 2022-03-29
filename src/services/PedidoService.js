import db from '../../db/db.json'

export default {
    pegarTodosEmAberto(){
        return new Promise ((resolve)=>{
            setTimeout(()=>{
                resolve(
                    db.pedidos
                )
            }, 2000)
        })
    },
    pegarPedidoPorId(id){
        const pedido = db.pedidos.find((pedido)=>{return pedido.id === Number(id)})

        return new Promise ((resolve)=>{
            setTimeout(()=>{
                resolve(
                    pedido
                )
            }, 2000)
        })
    }
}