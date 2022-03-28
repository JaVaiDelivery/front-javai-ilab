import AuthService from "../services/AuthService";

export async function login(usuario, senha) {
    try {
        const response = await AuthService.login(usuario, senha)
        if(response.status == 200){
            return { data: response }
        }
        return {
            error: {
                message: "Verifique usuário e/ou senha"
            }
        }
    } catch (error) {
        return { error }
    }
}
