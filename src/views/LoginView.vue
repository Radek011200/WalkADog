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
    getToken(login, password) {
      axios({
        method: 'post',
        url: 'http://127.0.0.1:8000/api-token-auth/',
        data: {
          username: login,
          password: password,
        }
      }).then(response => this.token = response.data.token);
      localStorage.setItem("token", this.token);
      console.log('token' + localStorage.getItem("token"));
      console.log(this.token);

    },

    checkLoginDetails(data) {
      if (data.login !== "" && data.password !== "") {
        this.getToken(data.login, data.password);
        console.log('token' + localStorage.getItem("token"));
        if (localStorage.getItem("token")) {
          this.$router.push("/");
        }
      } else {
        alert("Niepoprawne dane logowania");
      }
    },


  },
}
</script>

<style scoped>

</style>