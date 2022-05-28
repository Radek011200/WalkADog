<template>
  <div class="justify-center">
  <img src="@/assets/DogeWalker.png"/>
  <h1>Rejestracja</h1>
<form @submit="postData" method="post">
  <div class= 'text'>
    <span>
    <input class="bigger" v-model="name" placeholder="Imię i Nazwisko" />
    </span>
    <span>
    <input class="bigger" v-model="email" placeholder="Email" />
    </span>
    <span>
    <input class="bigger" v-model="number" placeholder="Telefon kontaktowy" />
    </span>
    <span>
    <input class="bigger" v-model="password" placeholder="Hasło" />
    </span>
    <span>
    <input v-model="upload" placeholder="Dodaj zdjecie" />
    </span>
    </div>
    <v-card-actions class="justify-center">
    <v-btn type="submit" color="success" :x-large=true rounded>Przejdź dalej</v-btn>
    </v-card-actions>
</form>
    <v-card-actions class="justify-center" >

    <v-btn text :x-large=true @click="back()">Powrót</v-btn>
  </v-card-actions>



  </div>
</template>

<script>



export default {
  name: 'RegisterUser', 
  data(){
    return {
      register: {
        name:null,
        email:null,
        phone:null,
        password:null,
      }
    }
  },
  methods:{
    back() {
      this.$router.go(-1)
    },
    postData(e)
    {
      console.log(this.opinions.opinion)
      console.log(this.opinions.rating)
      e.preventDefault()
    }
  }
}
</script>

<style>
.bigger{}
.text{
    align-items: center;
    display: flex;
    flex-direction: column;
    margin: auto;
}
input{
  text-align: center;
  border-style: solid;
  padding: 5px;
  margin: auto;
}
span{
  padding: 5px;
}
img{
  padding: 20px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 800px;
  height: 400px;
}
h1{
  text-align: center;
  font-size: 55px;
}

</style>