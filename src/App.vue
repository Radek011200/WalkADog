<template>
  <v-app>
    <PageLoader/>
    <app-bar/>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
import AppBar from "@/components/AppBar";
import PageLoader from "@/components/PageLoader";

export default {
  name: 'App',
  components: {PageLoader, AppBar},
  data: () => ({}),
  created() {
    if (!localStorage.getItem("token")) {
      if (this.$route.path !== "/login") {
        this.$router.push("/login");
      }
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
