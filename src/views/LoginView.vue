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
    token: "",
  }),
  created() {
    if (localStorage.getItem("token")) {
      this.$router.push("/");
    }
  },
  methods: {
    async getToken(login, password) {
      await axios({
        method: 'post',
        url: 'http://127.0.0.1:8000/api-token-auth/',
        data: {
          username: login,
          password: password,
        }
      }).then(response => this.token = response.data.token)
          .catch(function (error) {
            if (error.response.status === 400) {
              alert("Błędny login lub hasło");
            }
          });
      localStorage.setItem("token", this.token);
      if (this.token !== "") {
        await this.$router.push("/");
      }
    },

    checkLoginDetails(data) {
      if (data.login !== "" && data.password !== "") {
        this.getToken(data.login, data.password);
      } else {
        alert("Niepoprawne dane logowania");
      }
    },


  },
}
</script>

<style scoped>

</style>