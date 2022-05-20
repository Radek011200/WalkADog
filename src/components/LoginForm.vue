<template>
  <v-container fluid>
    <v-row align="center" justify="center" dense>
      <v-col cols="12" sm="8" md="4" lg="4">
        <v-card elevation="0" class="mb-16">
          <v-img src="@/assets/logoWalkADog.png" contain/>
          <v-card-text class="text-center">
            <h1 class="head-title mt-10">Logowanie</h1>
          </v-card-text>
        </v-card>
        <v-form>
          <v-text-field v-model="login" label="Login" name="Login" prepend-inner-icon="mdi-account-circle" type="login"
                        class="rounded-pill " color="success" outlined></v-text-field>
          <v-text-field v-model="password" label="Hasło" name="Password" prepend-inner-icon="mdi-lock" type="password"
                        class="rounded-pill" color="success" outlined></v-text-field>

          <span class="login-text justify-center mb-10" style="color: black">Nie masz konta?   <router-link
              class="login-text"
              to="/register"> Zarejestruj się! </router-link></span>

          <v-btn class="mb-2 rounded-pill" color="success" x-large block dark @click="loginUser">Zaloguj</v-btn>
          <router-link to="/remember-pass"><span class="login-text justify-center">Nie pamiętasz hasła?</span>
          </router-link>
        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "LoginForm.vue",
  data() {
    return {
      login: "",
      password: "",
    };
  },

  methods: {
    loginUser() {
      const data = {
        login: this.login,
        password: this.password,
      };

      this.$emit("user-login-details", data);

    },
  },

}
</script>

<style scoped>
.login-text {
  font-family: 'Roboto';
  font-style: normal;
  display: flex;
  text-align: right;
  color: #43AE31;
  flex: none;
  order: 1;
  flex-grow: 0;

}

</style>