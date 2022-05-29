<template>
  <div class="container">
    <input type="file" @change="onFileChange" ref="fileInput" style="display: none;">
    <v-img class="dog-img" v-bind:src="form.photo" @click="onClick"/>
    <input class="input mt-3 is-success" type="text" v-model=form.name placeholder="Imie">
    <input class="input mt-3 is-success" type="number" v-model=form.breed placeholder="Rasa">
    <input class="input mt-3 is-success" type="text" v-model=form.age placeholder="Wiek">
    <div class="control">
      <textarea class="textarea has-fixed-size is-success mt-3" :value="form.description"
                placeholder="Opis (opcjonalny)"></textarea>
    </div>
  </div>
</template>

<script>
export default {
  name: "DogCreatePart1",
  data() {
    return {
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


    }
  },
  components: {},
  props: {},
  methods: {
    onFileChange(e) {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.onload = (e) => {
        this.form.photo = e.target.result;
      };
      reader.readAsDataURL(file);
    },
    onClick() {
      this.$refs.fileInput.click();
    },
  },
}
</script>

<style scoped>
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

  background: #EBEBEB;
  margin: auto;
  border: 3px solid #BDBDBD;

  flex: none;
  order: 0;
  flex-grow: 0;
}

@media screen and (min-width: 600px) {
  .dog-img {
    width: 20vw;
    height: 20vw;
  }

  .input.input {
    width: 20vw;
    border-color: #7A7A7A;
  }
}

</style>