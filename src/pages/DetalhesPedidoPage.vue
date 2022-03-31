<template>
  <div v-show="!loading">
    <div v-if="pedido">
      <div class="mb-3 mt-5">
        <div class="fw-bold">Cliente</div>
        <div class="text-muted" style="font-size: 0.9rem">
          {{ pedido.cliente.nome }}
        </div>
      </div>
      <div class="mb-3">
        <div class="fw-bold">Endereço</div>
        <div class="text-muted" style="font-size: 0.9rem">
          {{ pedido.cliente.endereco }}
        </div>
      </div>
      <div class="mb-3">
        <div class="fw-bold">Valor</div>
        <div class="text-muted" style="font-size: 0.9rem">
          {{ beaultifyPrice(pedido.valor) }}
        </div>
      </div>
      <div class="mb-3">
        <div class="fw-bold">Data</div>
        <div class="text-muted" style="font-size: 0.9rem">
          {{ beaultifyDate(pedido.data) }}
        </div>
      </div>
    </div>

    <div class="container mt-5">
      <div class="row justify-content-center">
        <button
          class="btn btn-success align-self-center w-50"
          @click="iniciarEntrega"
        >
          Iniciar Entrega
        </button>
      </div>
    </div>
  </div>

  <div
    v-show="loading"
    class="position-absolute top-50 start-50 translate-middle text-center"
  >
    <div class="spinner-border text-primary" role="status"></div>
  </div>
</template>

<script>
import PedidoController from "../controllers/PedidoController";
import store from "../store";
export default {
  props: {
    id: {
      required: true,
      type: String,
      default: "0",
    },
  },
  async created() {
    this.loading = true;
    const response = await PedidoController.pedidoPorId(this.id);
    if (response.data) {
      this.pedido = response.data;
      this.loading = false;
      return 
    }
    console.error(response.error)
    this.loading = false;
  },
  data() {
    return {
      pedido: null,
      loading: false,
    };
  },
  methods: {
    beaultifyDate(date) {
      return new Intl.DateTimeFormat("pt-Br", { timeZone: "GMT" }).format(
        new Date(date)
      );
    },
    beaultifyPrice(valor) {
      return new Intl.NumberFormat("pt-Br", {
        style: "currency",
        currency: "BRL",
      }).format(valor);
    },
    
    async iniciarEntrega() {
      const entrega = await PedidoController.controlarEntrega(
        this.pedido.id,
        store.state.user.data.id_entregador,
        1
      );
      if (entrega.success) {
        store.state.pedido = this.pedido;
        this.$router.push({ name: "entregaPedido" });
      }
    },
  },
};
</script>

<style>
</style>