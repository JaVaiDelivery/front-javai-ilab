<template>
  <div>
    <div class="mb-3 mt-5">
      <div class="fw-bold">Cliente</div>
      <div class="text-muted" style="font-size: 0.9rem">fula de tal</div>
    </div>
    <div>
      <div class="fw-bold">Endereço</div>
      <div class="text-muted" style="font-size: 0.9rem">
        Rua Principal, 23, Centro
      </div>
    </div>
  </div>
  <div class="container mt-5">
    <div class="row justify-content-center">
      <a
        href="entrega.html"
        type="button"
        class="btn btn-success align-self-center w-50"
        >Iniciar<br />Tracking</a
      >
    </div>
  </div>
</template>

<script>
import PedidoController from "../controllers/PedidoController";
export default {
  props: {
    id: {
      required: true,
      type: String,
      default: "0",
    },
  },
  async created() {
    // this.loading = true;
    const response = await PedidoController.pedidoPorId(this.id);
    this.pedido = response.data;
    this.loading = false;
  },
  data() {
    return {
      pedido: null,
      loading: false,
    };
  },
};
</script>

<style>
</style>