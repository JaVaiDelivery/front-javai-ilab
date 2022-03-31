<template>
  <h4 class="my-4">Olá, {{beaultifyName( user.nome_entregador) }}</h4>
  <div
    v-show="loading"
    class="position-absolute top-50 start-50 translate-middle text-center"
  >
    <div class="spinner-border text-primary" role="status"></div>
    <p>Carregando pedidos</p>
  </div>

  <div
    v-show="!loading && pedidos.length === 0"
    class="position-absolute top-50 start-50 translate-middle text-center"
  >
    <h4>Nenhum pedido disponível no momento</h4>
  </div>

  <div v-show="!loading && pedidos.length > 0">
    <p class="text-center mt-5"></p>
    <div class="card">
      <ul class="list-group list-group-flush">
        <li class="list-group-item" v-for="pedido in pedidos" :key="pedido.id">
          <router-link :to="`/pedidos/${pedido.id}`">
            <div class="fw-bold" style="font-size: 1.2rem">
              Pedido #{{ pedido.id }}
            </div>
            <div class="text-muted" style="font-size: 0.9rem">
              {{ beaultifyDate(pedido.data) }}
            </div>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import PedidoController from "../controllers/PedidoController";
import store from "../store";
export default {
  async created() {
    this.loading = true;
    const response = await PedidoController.pedidosEmAberto();
    this.pedidos = response.data;
    this.loading = false;
  },
  data() {
    return {
      pedidos: [],
      user: store.state.user.data,
      loading: false,
    };
  },
  methods: {
    beaultifyName(name) {
      const splitedName = name.split(" ")
      return `${splitedName[0]} ${splitedName[1]}`
    },

    beaultifyDate(date) {
      return new Intl.DateTimeFormat("pt-Br", { timeZone: "GMT" }).format(
        new Date(date)
      );
    },
  },
};
</script>

<style scoped>
a {
  text-decoration: none;
  color: black;
}
</style>