<template>
  <div>
    <title-component :title="title"></title-component>

    <dog-form-part1
        v-show="active"
        @change-form="toggleForm($event)"
        :form="dogData"
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
import TitleComponent from "@/components/TitleComponent";
import dogFormPart1 from "@/components/dog/DogFormPart1";
import dogFormPart2 from "@/components/dog/DogFormPart2";
import axios from "axios";

export default {
  name: "DogEditView",
  components: {
    dogFormPart1,
    dogFormPart2,
    TitleComponent,
  },
  data() {
    return {
      title: "Edycja psa",
      active: true,
      id: this.$route.params.dogId,
      dogData: {},
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
        recommendation: "",
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
    async getDogData() {
      await axios({
        method: "get",
        url: "http://127.0.0.1:8000/api/dog/" + this.id + "/",
        headers: {
          Authorization: 'Token ' + localStorage.token
        }
      }).then(response => {
        this.dogData = response.data
      })
          .catch(function (error) {
            if (error.response.status === 500) {
              alert("Błąd serwera");
            }
          });
    },
    save(formPart2) {
      const form = this.form
      console.log(formPart2)
      console.log('Token ' + localStorage.token)
      const json = JSON.stringify({...form, ...formPart2, ...this.client_id});
      console.log(json)
      axios({
        method: 'post',
        url: 'http://127.0.0.1:8000/api/dog/',
        data: json,
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
  },
  created() {
    this.getDogData();
    this.form.age = this.dogData.age
    this.form.name = this.dogData.name
    this.form.photo = this.dogData.photo
    this.form.breed = this.dogData.breed
    this.form.description = this.dogData.description
  },


}
</script>

<style scoped>

</style>