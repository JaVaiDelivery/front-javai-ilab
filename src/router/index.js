import { createRouter, createWebHistory } from 'vue-router'
import store from '../store'
import LoginPage from '../pages/LoginPage.vue'
import ListaPedidosPage from '../pages/ListaPedidosPage.vue'
import DetalhesPedidoPage from '../pages/DetalhesPedidoPage.vue'

const routes = [
    {
        path: '/login',
        name: 'login',
        component: LoginPage
    },
    {
        path: '/',
        name: 'pedidos',
        component: ListaPedidosPage
    },
    {
        path: '/pedidos/:id',
        name: 'detalhesPedidos',
        component: DetalhesPedidoPage,
        props: true
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

router.beforeEach((to, from, next) => {
    const isAuthenticated = store.state.user
    if (to.name !== 'login' && !isAuthenticated) next({ name: 'login' })
    else next()
})

export default router