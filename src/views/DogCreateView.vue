<template>
  <div>
    <title-component :title="title"></title-component>
    <dog-create-part1/>

  </div>

</template>

<script>
import dogCreatePart1 from "@/components/DogCreatePart1";
import TitleComponent from "@/components/TitleComponent";

export default {
  name: "DogCreateView",
  components: {
    dogCreatePart1,
    TitleComponent,
  },
  data() {
    return {
      title: "Dodawanie psa",
    };
  },
}
</script>

<style scoped>

</style>