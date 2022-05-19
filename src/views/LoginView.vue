<template>
  <div>
    <LoginForm
        @user-login-details=checkLoginDetails($event)
    />
  </div>
</template>

<script>
import LoginForm from "@/components/LoginForm.vue";
import axios from "axios";

export default {
  name: "LoginView.vue",
  components: {LoginForm},
  data: () => ({
    login: "",
    password: "",
  }),
  created() {
    if (localStorage.getItem("token")) {
      this.$router.push("/");
    }
  },
  methods: {
    checkLoginDetails(data) {
      if (data.login !== "" && data.password !== "") {
        this.getToken(data.login, data.password);
      } else {
        alert("Niepoprawne dane logowania");
      }
    },

    getToken(login, password) {
      axios({
        method: 'post',
        url: 'http://127.0.0.1:8000/api-token-auth/',
        data: {
          username: login,
          password: password,
        }
      }).then(response => localStorage.setItem("token", response.data.token));
    },
  },
}
</script>

<style scoped>

</style>