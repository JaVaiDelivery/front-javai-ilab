<template>
  <div class="top-0 start-0">
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

    <div
      class="
        position-absolute
        top-0
        start-50
        translate-middle-x
        bg-white
        px-4
        py-2
      "
      style="z-index: 2; border-radius: 12px; width: 90%; margin-top: 4.5rem"
    >
      <div class="mb-3">
        <div class="fw-bold">Cliente</div>
        <div class="text-muted" style="font-size: 0.9rem">
          {{ pedido.cliente.nome }}
        </div>
      </div>

      <div>
        <div class="fw-bold">Endereço</div>
        <div class="text-muted" style="font-size: 0.9rem">
          {{ pedido.cliente.endereco }}
        </div>
      </div>
    </div>

    <div
      class="position-absolute bottom-0 start-50 translate-middle-x"
      style="z-index: 2"
    >
      <div class="mb-5 d-grid gap-5 d-flex justify-content-evenly mt-5 mx-4">
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
    </div>
  </div>

  <GMapMap
    v-if="mapCenter"
    :center="mapCenter"
    :zoom="14"
    :disableDefaultUI="true"
    map-type-id="terrain"
  >
    <GMapMarker :position="mapCenter" />

  </GMapMap>
</template>

<script>
import store from "../store";
import PedidoController from "../controllers/PedidoController";
import { Modal } from "bootstrap";
import { decode } from "@googlemaps/polyline-codec";

export default {
  created() {
    // const decoded = decode(
    //   "`|lVb_jjF_AQVmAFY}E_AmFeAgFkAACCCGAI@kFaAuDu@wD{@aF}@?A?AAA\\wALo@QEkCk@",
    //   5
    // );
    // const points = decoded.map(([lat, lng]) => ({ lat, lng }));
    // console.log(points);
    // this.paths = points
    this.watchId = navigator.geolocation.watchPosition(this.pegarPosicoes);
  },

  mounted() {
    this.modalController = new Modal(document.getElementById("infoModal"));
  },

  data() {
    return {
      pedido: store.state.pedido,
      entregador: store.state.user.data,
      paths: [],
      mapCenter: null,
      watchId: null,
      modalController: null,
      modalTitle: null,
    };
  },

  methods: {
    pegarPosicoes(position) {
      this.mapCenter = {};
      this.mapCenter.lat = position.coords.latitude;
      this.mapCenter.lng = position.coords.longitude;
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
      // navigator.geolocation.clearWatch(this.watchId);
      // const response = await PedidoController.controlarEntrega(
      //   this.pedido.id,
      //   this.entregador.id_entregador,
      //   0
      // );
      // if (response.success) {
      //   }
      this.modalTitle = "Cancelada";
      this.modalController.show();
    },
    async concluirEntrega() {
      navigator.geolocation.clearWatch(this.watchId);
      const response = await PedidoController.controlarEntrega(
        this.pedido.id,
        this.entregador.id_entregador,
        2
      );
      if (response.success) {
        this.modalTitle = "Concluída";
        this.modalController.show();
      }
    },
    backToHome() {
      this.modalController.hide();
      this.$router.replace({ name: "pedidos" });
    },
  },
};
</script>

<style scoped>
.vue-map-container {
  height: calc(100vh - 56px);
}
</style>