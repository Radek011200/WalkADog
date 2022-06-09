<template>
  <div class="container">
    <v-img src="@/assets/logoWalkADog.png" contain/>
    <v-card elevation="0" class="mb-16">
      <v-card-text class="text-center">
        <h1 class="head-title mt-10">Przypomnij</h1>
        <h1 class="head-title mt-6">hasło</h1>
      </v-card-text>
    </v-card>
    <input class="input mt-4" type="text" v-model=formCopy.firstName @input="onInput" placeholder="Imię">
    <input class="input mt-4" type="text" v-model=formCopy.lastName @input="onInput" placeholder="Nazwisko">
    <input class="input mt-4" type="text" v-model=formCopy.email @input="onInput" placeholder="Email">
    <v-btn class="mt-4" color="success" @click="checkForm();" :large=true rounded>Przypomnij hasło</v-btn>
    <v-btn class="green--text" text :x-large=true @click="back()" rounded>Anuluj</v-btn>
    <PopupComponent
        @close-modal="togglePopupReturn"
        :is-active="isActivePopup"
        :confirm-button-title="closePopup">
        <template v-slot:content>
        <div class="popup-text">
          {{ message }}
        </div>
      </template>
    </PopupComponent>
  </div>
</template>

<script>

import PopupComponent from "@/components/PopupComponent";


export default {
  name: "RememberPassForm",
  components: {PopupComponent},
  data() {
    return {
      formCopy: {
        firstName: "",
        lastName: "",
        email: "",
      },
      isActivePopup: false,
      closePopup: 'OK',
      message: 'Nowe hasło tymczasowe wysłano na podany adres e-mail!',
    }
  },
  props: {
    form: {
      type: Object,
      default: () => ({
        firstName: "",
        lastName: "",
        email: "",
      })
    },
  },
  methods: {
    onInput(newInputValue) {
      this.$emit('change-form-values', newInputValue)
    },
    back() {
      this.$router.go(-1);
    },
    checkForm() {
      if (this.formCopy.firstName === "" || this.formCopy.lastName === "" || this.formCopy.email === "") {
        alert("Wypełnij wszystkie pola");
      } else {
        this.$emit("change-form", this.formCopy);
        this.togglePopup();
      }
    },
    togglePopup() {
      this.isActivePopup = !this.isActivePopup;
    },
    togglePopupReturn() {
      this.isActivePopup = !this.isActivePopup;
      this.back();
    },
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
  .popup-text {
  font-size: 1rem;
  text-align: center;
}

</style>