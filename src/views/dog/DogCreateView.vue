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
        @save="save($event)"
        :photo="form.photo"
    />

  </div>

</template>

<script>
import dogFormPart1 from "@/components/dog/DogFormPart1";
import dogFormPart2 from "@/components/dog/DogFormPart2";
import TitleComponent from "@/components/TitleComponent";
import axios from "axios";

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

      },
      formPart2: {
        behavior: "",
        prohibitions: "",
        recommendations: "",
      },
      client_id: {
        owner: localStorage.client_id
      }
    };
  },
  methods: {
    toggleForm(formPart1) {
      this.active = !this.active;
      this.form = formPart1;
    },
    save(formPart2) {
      const form = this.form
      console.log(formPart2)
      console.log('Token ' + localStorage.token)
      const data = {...form, ...formPart2, ...this.client_id};
      axios({
        method: 'post',
        url: 'http://127.0.0.1:8000/api/dog/',
        data: data,
        headers: {
          Authorization: 'Token ' + localStorage.token
        },

      }).then(response => console.log(response)).catch(function (error) {
        if (error.response) {

          alert(1)

        } else if (error.request) {
          alert(2)
//do something else

        } else if (error.message) {
          alert(3)
//do something other than the other two

        }
      })

    }
  }

}
</script>

<style scoped>

</style>