export default {
    login(usuario, senha) {
        console.log(usuario);
        console.log(senha);
        return new Promise((resolve)=>{
            setTimeout(()=>{
                resolve({
                    status: 200,
                    token: 'sjdgakjshiAGSPjwansdfjsdgbf',
                    nome: 'Bruno Fernando',
                })
            }, 2000)
        })
    }
}