<script>
export default {
  async created() {
    if (!("geolocation" in navigator)) {
      console.error("Navegador não compatível com geolocalização");
    }
  },

  data() {
    return {
      showBanner: false,
    };
  },

  methods: {
    requestPermission(){
      navigator.geolocation.getCurrentPosition(() => {})
    }
  }
};
</script>

<template>
  <header v-show="$route.name !== 'login'">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <button
          v-show="
            $route.name === 'detalhesPedidos' || $route.name === 'entregaPedido'
          "
          class="btn"
          type="button"
          @click="$router.back()"
        >
          <i class="bi bi-arrow-left"></i>
        </button>
        <div class="navbar-brand mx-auto">
          <div
            v-show="
              $route.name === 'detalhesPedidos' ||
              $route.name === 'entregaPedido'
            "
          >
            Pedido #{{ $route.params.id }}
          </div>
          <div v-show="$route.name === 'pedidos'">Pedidos</div>
        </div>
        <button
          class="btn"
          type="button"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          <i class="bi bi-box-arrow-right" style="color: #dc3545"></i>
        </button>
      </div>
    </nav>
    <div
      v-show="showBanner"
      class="alert alert-warning"
      role="alert"
      style="padding: 0.6rem"
    >
      Precisamos de acesso a sua localização
      <button class="btn-sm btn-success" @click="requestPermission">Permitir acesso</button>
    </div>
  </header>
  <div
    class="modal fade"
    id="exampleModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Sair</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">Tem certeza que deseja sair?</div>
        <div class="modal-footer">
          <button type="button" class="btn btn-primary" data-bs-dismiss="modal">
            Não
          </button>
          <button
            type="button"
            class="btn"
            @click="$router.replace({ name: 'login' })"
            data-bs-dismiss="modal"
          >
            Sim
          </button>
        </div>
      </div>
    </div>
  </div>

  <main>
    <router-view />
  </main>
</template>

<style>
</style>
