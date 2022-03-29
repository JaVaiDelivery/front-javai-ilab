<script setup>
import { RouterView } from "vue-router";
</script>

<template>
  <header v-show="$route.name !== 'login'">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <button
          v-show="$route.name === 'detalhesPedidos'"
          class="btn"
          type="button"
          @click="$router.back()"
        >
          <i class="bi bi-arrow-left"></i>
        </button>
        <div class="navbar-brand mx-auto">
          <div v-show="$route.name === 'detalhesPedidos'">Pedido #{{$route.params.id}}</div>
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

  <main class="container">
    <RouterView />
  </main>
</template>

<style>
</style>
