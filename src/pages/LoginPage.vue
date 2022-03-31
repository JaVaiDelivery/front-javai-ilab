<template>
  <div v-show="error" class="alert alert-danger mt-5" role="alert">
    {{ errorMsg }}
  </div>
  <div
    class="
      position-absolute
      top-50
      start-50
      translate-middle
      flex-column
      align-items-center
      justify-content-center
    "
  >
    <form @submit.prevent="autenticar">
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">Email</label>
        <input
          v-model="email"
          type="email"
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
        />
      </div>

      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">Senha</label>
        <div class="input-group mb-3 form-control">
          <input
            :type="showPassword ? 'text' : 'password'"
            style="border: none; max-width: 90%"
          />
          <span @click="showPassword = !showPassword">
            <i v-show="!showPassword" class="bi-eye-slash"></i>
            <i v-show="showPassword" class="bi-eye"></i>
          </span>
        </div>
      </div>
      <button v-show="!loading" type="submit" class="btn btn-primary">
        <span>Login</span>
      </button>
      <div
        v-show="loading"
        class="spinner-border text-primary"
        role="status"
      ></div>
    </form>
  </div>
</template>

<script>
import { login } from "../controllers/AuthController";
import store from "../store";

export default {
  data() {
    return {
      showPassword: false,
      loading: false,
      error: false,
      errorMsg: "",
      email: "fernando@email.com.br",
      password: "123",
    };
  },
  methods: {
    async autenticar() {
      this.loading = true;
      const result = await login(this.email, this.password);
      if (result.error) {
        this.error = true;
        this.errorMsg = result.error.message;
        this.loading = false;
        return;
      }
      this.loading = false;
      const token = result.data.token.split(" ")[1];
      const userDataBase64 = token.split(".")[1];
      store.state.user = {
        token,
        data: JSON.parse(atob(userDataBase64))
      };
      this.$router.replace({ name: "pedidos" });
    },
  },
};
</script>

<style scoped>
</style>