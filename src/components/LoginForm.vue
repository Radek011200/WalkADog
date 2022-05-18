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
          <v-text-field label="Login" name="Login" prepend-inner-icon="mdi-account-circle" type="login"
                        class="rounded-pill" outlined></v-text-field>
          <v-text-field label="Hasło" name="Password" prepend-inner-icon="mdi-lock" type="password"
                        class="rounded-pill"
                        outlined></v-text-field>

          <span class="login-text justify-center mb-10" style="color: black">Nie masz konta?   <router-link
              class="login-text"
              to="/remember-pass"> Zarejestruj się! </router-link></span>

          <v-btn class="mb-2 rounded-pill" color="success" x-large block dark>Zaloguj</v-btn>
          <router-link to="/remember-pass"><span class="login-text justify-center">Nie pamiętasz hasła?</span>
          </router-link>
        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "LoginForm.vue"
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