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
    client_id: "",
  }),
  created() {
    if (localStorage.getItem("token")) {
      this.$router.push("/");
    }
    if (localStorage.getItem('logout')) {
      this.$toast.warning("Wylogowano pomyślnie!", {
        position: "top-right",
        timeout: 4718,
        closeOnClick: true,
        pauseOnFocusLoss: true,
        pauseOnHover: true,
        draggable: true,
        draggablePercent: 1,
        showCloseButtonOnHover: false,
        hideProgressBar: true,
        closeButton: "button",
        icon: true,
        rtl: false,
      });

    }
    localStorage.removeItem('logout')
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
      }).then(response => {
        this.token = response.data.token
        this.client = response.data.client_id
      })
          .catch(function (error) {
            if (error.response.status === 400) {
              alert("Błędny login lub hasło");
            }
          });
      localStorage.setItem("token", this.token);
      localStorage.setItem("client_id", this.client);

      if (this.token !== "") {
        localStorage.setItem("logged", 'true');
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