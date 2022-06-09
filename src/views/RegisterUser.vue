<template>
<div>
  <RegisterUserComponent></RegisterUserComponent>
  </div>
</template>

<script>

import RegisterUserComponent from "@/components/RegisterUserComponent";
import axios from "axios";
export default {
  name: "RegisterUser",
  components: {
    RegisterUserComponent
  },
    created() {
      this.title = "Podziel się swoją opinią";
    },

    data() {
      return {
        title: 'Podziel się swoją opinią',
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
      }).then(response => {
        this.token = response.data.token
        this.client = response.data.client_id
      })
      localStorage.setItem("token", this.token);
      localStorage.setItem("client_id", this.client);
      if (this.token !== "") {
        await this.$router.push("/");
      }
    },
      back() {
        this.$router.go(-1)
      },
    }
};
</script>