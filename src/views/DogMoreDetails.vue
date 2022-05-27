<template>
  <div>
    <title-component :title="title"></title-component>
    <div class="container">
      <v-btn class="mt-2" text :x-large=true @click="back()">Powrót</v-btn>
    </div>
  </div>
</template>

<script>
import TitleComponent from "@/components/TitleComponent";

export default {
  name: "DogMoreDetails",
  components: {
    TitleComponent
  },
  data() {
    return {
      title: 'Profil psa',
      id: this.$route.params.dogId,
    }
  },
  methods: {
    back() {
      this.$router.push("/dogs/" + this.id + "/");
    }
  }
}
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
  flex: none;
  order: 1;
  flex-grow: 0;
}
</style>