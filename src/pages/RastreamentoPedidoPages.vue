<template>
  <div
    class="modal fade"
    id="infoModal"
    data-bs-backdrop="static"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content p-3">
        <div class="modal-body text-center">
          <h5 class="fw-bold">Entrega {{ modalTitle }}</h5>
          <div>Voltar para tela inicial</div>
        </div>

        <button
          type="button"
          class="btn btn-primary mx-auto"
   
          @click="backToHome"
        >
          Voltar
        </button>
      </div>
    </div>
  </div>

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
  <div class="text-center mt-5">
    <img src="../assets/moto.png" alt="entregador" style="width: 60%" />
  </div>
  <div class="d-grid gap-5 d-flex justify-content-evenly mt-5 mx-4">
    <button
      type="button"
      class="col btn btn-danger btn"
      @click="cancelarEntrega"
    >
      Cancelar
    </button>
    <button
      type="button"
      class="col btn btn-success btn"
      @click="concluirEntrega"
    >
      Concluir
    </button>
  </div>
</template>

<script>
import store from "../store";
import PedidoController from "../controllers/PedidoController";
import { Modal } from 'bootstrap'

export default {
  created() {
    this.watchId = navigator.geolocation.watchPosition(this.pegarPosicoes);
  },

  mounted () {
    this.modalController = new Modal(document.getElementById('infoModal'))
  },

  data() {
    return {
      pedido: store.state.pedido,
      entregador: store.state.user.data,
      watchId: null,
      modalController: null,
      modalTitle: null
    };
  },

  methods: {
    pegarPosicoes(position) {
      const posicao = {
        coordenadas: `${position.coords.latitude} / ${position.coords.longitude}`,
        entregador: {
          id: this.entregador.id_entregador,
        },
        momento: new Date().toISOString(),
        pedido: {
          id: this.pedido.id,
        },
      };

      PedidoController.enviarLocalizacao(posicao);
    },
    async cancelarEntrega() {
      navigator.geolocation.clearWatch(this.watchId);
      const response = await PedidoController.controlarEntrega(
        this.pedido.id,
        this.entregador.id_entregador,
        0
      );
      if (response.success) {
        this.modalTitle = 'Cancelada'
        this.modalController.show()
      }
    },
    async concluirEntrega() {
      navigator.geolocation.clearWatch(this.watchId);
      const response = await PedidoController.controlarEntrega(
        this.pedido.id,
        this.entregador.id_entregador,
        2
      );
      if (response.success) {
        this.modalTitle = 'Concluída'
        this.modalController.show()
      }
    },
    backToHome() {
      this.modalController.hide()
      this.$router.replace({ name: 'pedidos' })
    }
  },
};
</script>

<style scoped>
.cancel-modal {
  background-color: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
}
</style>