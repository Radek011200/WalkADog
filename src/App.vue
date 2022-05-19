<template>
  <v-app>
    <app-bar/>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
import AppBar from "@/components/AppBar";

export default {
  name: 'App',
  components: {AppBar},
  data: () => ({}),
  created() {
    if (!localStorage.getItem("token")) {
      this.$router.push("/login");
    }
  },

};
</script>

<style>
.head-title {
  font-size: 2.5rem;
  text-align: center;
}
</style>
