<template>
  <div>
    <title-component :title="title"></title-component>
    <dog-form-part1
        v-show="active"
        @change-form="toggleForm($event)"
    />
    <dog-form-part2
        v-show="!active"
        @back-to-first-form="toggleForm(formPart2)"
        :photo="form.photo"
    />

  </div>

</template>

<script>
import dogFormPart1 from "@/components/DogFormPart1";
import dogFormPart2 from "@/components/DogFormPart2";
import TitleComponent from "@/components/TitleComponent";

export default {
  name: "DogCreateView",
  components: {
    dogFormPart1,
    dogFormPart2,
    TitleComponent,
  },
  data() {
    return {
      title: "Dodawanie psa",
      active: true,
      form: {
        name: "",
        breed: "",
        age: "",
        description: "",
        photo: null,
        temp1: "",
        temp2: "",
        temp3: "",
      },
      formPart2: {
        temp1: "",
        temp2: "",
        temp3: "",

      }

    };
  },
  methods: {
    toggleForm(formPart1) {
      this.active = !this.active;
      this.form = formPart1;
    }
  },
}
</script>

<style scoped>

</style>