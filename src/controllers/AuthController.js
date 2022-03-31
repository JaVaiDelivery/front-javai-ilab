import AuthService from "../services/AuthService";

export async function login(email, senha) {
    try {
        const response = await AuthService.login(email, senha)
        const result = await response.json()
        if(response.status == 200){
            return { data: result }
        }
        return {
            error: {
                message: result.message
            }
        }
    } catch (error) {
        return { error }
    }
}
