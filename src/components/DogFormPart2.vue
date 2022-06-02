<template>
  <div class="container">
    <v-img class="dog-img" v-bind:src="photo"/>

    <textarea class="textarea has-fixed-size mt-4" v-model="form.temp1" placeholder="Zachowanie"></textarea>
    <textarea class="textarea has-fixed-size mt-4" v-model="form.temp2" placeholder="Zakazy"></textarea>
    <textarea class="textarea has-fixed-size mt-4" v-model="form.temp3" placeholder="Zalecenia"></textarea>
    <v-btn class="mt-4" color="success" @click=save() :large=true rounded>Zapisz</v-btn>
    <v-btn class="green--text" text :x-large=true @click="checkForm()" rounded>Powrót</v-btn>

  </div>
</template>

<script>
export default {
  name: "DogFormPart2",
  data() {
    return {
      form: {
        temp1: "",
        temp2: "",
        temp3: "",
      },
    }
  },
  props: {
    photo: {
      type: String,
      required: false,
    },
  },
  methods: {
    checkForm() {
      this.$emit("back-to-first-form", this.form);
    },
    save() {
      if (this.form.temp1 === "") {
        alert("Wypełnij wszystkie pola");
      } else {
        this.$emit("change-form", this.form);
      }
    }
  },


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

.dog-img {
  box-sizing: border-box;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 54px;
  gap: 10px;

  width: 60vw;
  height: 60vw;
  border-radius: 50%;

  background: #ebebeb;
  margin: auto;
  border: 3px solid #BDBDBD;

  flex: none;
  order: 0;
  flex-grow: 0;
}

.textarea.has-fixed-size.mt-4 {
  border: 2px solid #BDBDBD;
  border-radius: 10px;
}

.v-btn {
  width: 80%;
  margin-left: 10%;
  margin-right: 10%;
  margin-bottom: 0.1rem;

}

.textarea:not([rows]) {
  min-height: 5em;
  max-height: 6em;
  max-width: 40em;
}

.subtitle-dog-preview {

  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;

  display: flex;


  color: #7A7A7A;
}

@media screen and (min-width: 600px) {
  .dog-img {
    width: 20vw;
    height: 20vw;
  }

  .v-btn {
    width: 60%;
    margin-left: 20%;
    margin-right: 20%;
  }
}
</style>