<template>
  <div style="height: 100%">
    <title-component></title-component>
    <MapComponent style="height: 100%"></MapComponent>
  </div>

</template>

<script>

import TitleComponent from "@/components/TitleComponent";
import MapComponent from "@/components/MapComponent"
export default {
  name: "NewWalkPart2",
  components: {
    TitleComponent,
    MapComponent
  },
  data() {
    return {
    }
  },
  methods: {
    back() {
      this.$router.go(-1)
    }
  }

}
</script>

<style scoped>

</style>