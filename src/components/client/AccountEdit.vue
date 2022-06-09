<template>
  <div class="container">
    <input type="file" @change="onFileChange" ref="fileInput" style="display: none;">
    <v-img class="client-img" v-bind:src="formCopy.photo" @click="onClick" @input="onInput"/>
    <input class="input mt-4" type="text" v-model=formCopy.first_name @input="onInput" placeholder="Imie">
    <input class="input mt-4" type="text" v-model=formCopy.last_name @input="onInput" placeholder="Nazwisko">
    <input class="input mt-4" type="text" v-model=formCopy.address @input="onInput" placeholder="Adres">
    <input class="input mt-4" type="number" v-model=formCopy.phone_number @input="onInput" placeholder="Numer telefonu">
    <v-btn class="mt-4" color="success" @click=save() :large=true rounded>Zatwierdź</v-btn>
    <v-btn class="green--text" text :x-large=true @click="back()" rounded>Anuluj</v-btn>
  </div>
</template>

<script>
export default {
  name: "AccountEdit",
  data() {
    return {
      formCopy: {
        first_name: "",
        last_name: "",
        address: "",
        phone_number: "",
        photo: null,
      },
    }
  },
  props: {
    form: {
      type: Object,
      default: () => ({
        first_name: "",
        last_name: "",
        address: "",
        phone_number: "",
        photo: null,
      })
    },
  },
  watch: {
    form(newVal) {
      this.formCopy = newVal;
    }
  },
  methods: {
    onInput(newInputValue) {
      this.$emit('change-form-values', newInputValue)
    },
    onFileChange(e) {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.onload = (e) => {
        this.formCopy.photo = e.target.result;
      };
      reader.readAsDataURL(file);
    },
    onClick() {
      this.$refs.fileInput.click();
    },
    back() {
      this.$router.push("/account");
    },
    save() {
      if (this.formCopy.first_name === "" || this.formCopy.last_name === "" || this.formCopy.phone_number === "" || this.formCopy.address === "") {
        alert("Wypełnij wszystkie pola");
      } else {
        this.$emit("save", this.formCopy);
      }
    },
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

.client-img {
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

.input.input.mt-4 {
  border: 2px solid #BDBDBD;
  border-radius: 10px;
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

@media screen and (min-width: 600px) {
  .client-img {
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