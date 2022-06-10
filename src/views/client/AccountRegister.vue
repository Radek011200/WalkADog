<template>
  <div class="container">
    <v-row align="center" justify="center" dense>
      <v-col cols="12" sm="8" md="4" lg="4">
        <v-card elevation="0" class="mb-5">
          <v-img src="@/assets/logoWalkADog.png" contain/>
          <v-card-text class="text-center">
            <h1 class="head-title mt-5">Rejestracja</h1>
          </v-card-text>
        </v-card>

        <v-form>
          <div v-show="loginForm">
            <input type="file" @change="onFileChange" ref="fileInput" style="display: none;">
            <v-img class="dog-img" v-bind:src="form.photo" @click="onClick" @input="onInput"/>
            <v-text-field v-model="form.username" label="Login" name="Login" prepend-inner-icon="mdi-account-circle"
                          type="login"
                          class="rounded-pill mt-4" color="success" outlined></v-text-field>
            <v-text-field v-model="form.password" label="Hasło" name="Password" prepend-inner-icon="mdi-lock"
                          type="password"
                          class="rounded-pill" color="success" outlined></v-text-field>
            <v-text-field v-model="form.email" label="Email" name="Email" prepend-inner-icon="mdi-email" type="email"
                          class="rounded-pill" color="success" outlined></v-text-field>


            <v-btn class="mb-2 rounded-pill" color="success" x-large block dark @click="nextForm">Przejdź dalej</v-btn>
            <v-btn text class="rounded-pill" x-large block @click="back()">Powrót</v-btn>
          </div>
          <div v-show="!loginForm">
            <v-select v-model="form.account_type" :items="acc_type" color="success" placeholder="Typ Konta"></v-select>
            <v-text-field v-model="form.first_name" label="Imie" name="Imie" prepend-inner-icon="mdi-account-circle"
                          type="Imie"
                          class="rounded-pill " color="success" outlined></v-text-field>
            <v-text-field v-model="form.last_name" label="Nazwisko" name="Nazwisko"
                          prepend-inner-icon="mdi-account-circle"
                          type="Nazwisko"
                          class="rounded-pill " color="success" outlined></v-text-field>
            <v-text-field v-model="form.address" label="Adres" name="Adres"
                          prepend-inner-icon="mdi-account-circle"
                          type="Adres"
                          class="rounded-pill " color="success" outlined></v-text-field>
            <v-text-field v-model="form.phone_number" label="Numer Telefonu" name="PhoneNumber"
                          prepend-inner-icon="mdi-email" type="number"
                          class="rounded-pill" color="success" outlined></v-text-field>
            <v-btn class="mb-2 rounded-pill" color="success" x-large block dark @click="save()">Zarejestruj się</v-btn>
            <v-btn text class="rounded-pill" x-large block @click="nextForm()">Powrót</v-btn>
          </div>
        </v-form>
      </v-col>
    </v-row>

  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "AccountRegister",
  data() {
    return {
      form: {
        username: "",
        first_name: "",
        last_name: "",
        email: "",
        phone_number: "",
        address: "",
        account_type: "",
        password: "",
        photo: null

      },
      acc_type: ["Klient", "Trener"],

      loginForm: true,
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
        this.form.photo = e.target.result;
      };
      reader.readAsDataURL(file);
    },
    onClick() {
      this.$refs.fileInput.click();
    },
    back() {
      this.$router.push("/login/");
    },
    nextForm() {
      this.loginForm = !this.loginForm;
    },
    save() {
      if (this.form.password === "" || this.form.first_name === "" || this.form.last_name === "") {
        alert("Wypełnij wszystkie pola");
      } else {
        const data = this.form
        axios({
          method: 'post',
          url: 'http://127.0.0.1:8000/api/register/',
          data: data,
        }).then(response => console.log(response)).catch(function (error) {
          if (error.response) {
            alert(1)
          } else if (error.request) {
            alert(2)
          } else if (error.message) {
            alert(3)
          }
        })
        this.$router.push('/login')
      }
    },
  },
}
</script>

<style scoped>
.login-text {
  font-family: 'Roboto';
  font-style: normal;
  display: flex;
  text-align: right;
  color: #43AE31;
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
  margin-left: auto;
  margin-right: auto;
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

</style>