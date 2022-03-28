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
    }
}