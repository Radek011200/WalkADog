<template>
  <v-responsive class = "wholeDogContainer" :name="pet">
    <v-container class = "columns">
<!--:name="pet"--><input type="image" :src="image" alt="text" id="btnControl" class="dogBox" @focus="selectedDog= pet, saveDog()" @blur="unbold()" v-on:click="bold">
      <v-container id="show" class="dogName">
        {{pet.name}}
      </v-container>
    </v-container>
  </v-responsive>
</template>
<script>

import dogImage from "@/assets/pies.svg"

export default {
  name: "ChoseAPet",
  props: {
    pet: {
      default: []
    },
    image: {
      default: dogImage,
    }
  },
  data() {
    return {
      selectedDog: null
    }
  },
  methods: {
    bold: function () {
      var dogNameList = document.getElementsByClassName("dogName")
      for(var i = 0; i<dogNameList.length; i++){
        dogNameList[i].style.fontWeight = 'normal'
        if(dogNameList[i].innerText === this.selectedDog.name){
          dogNameList[i].style.fontWeight = 'bold'
        }
      }
    },
    unbold: function () {
      var dogNameList = document.getElementsByClassName("dogName")
      for(var i = 0; i<dogNameList.length; i++){
        dogNameList[i].style.fontWeight = 'normal'
      }
    },
    saveDog: function (){
      localStorage.setItem("SelectedDogId",this.selectedDog.dog_id)
      localStorage.setItem("SelectedDogName",this.selectedDog.name)
      localStorage.setItem("SelectedDogImage",this.selectedDog.photo)
    },
    myEventHandler: function () {
      var boxList = document.getElementsByClassName("dogBox")
      if (window.screen.width < 600) {
        for (var i =0; i<boxList.length; i++){
          boxList[i].style.width = "45px";
          boxList[i].style.height = "45px";
        }
      }
      else{
        for (var j =0; j<boxList.length; j++){
          boxList[j].style.width = "70px";
          boxList[j].style.height = "70px";
          console.log(boxList[j])
        }
      }
    }
  },
  created() {
    window.addEventListener("resize", this.myEventHandler);
  },
  destroyed() {
    window.removeEventListener("resize", this.myEventHandler);
  },
}


</script>

<style scoped>

.wholeDogContainer{
  display: flex;
  flex-direction: column;
  width: fit-content;
  height: fit-content;
}

.dogBox {
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  width: 70px;
  height: 70px;
  background: #EBEBEB;
  border: 3px solid #BDBDBD;
  border-radius: 260px;
  align-items: center;
}
.dogName{
  display: flex;
}
#btnControl:focus
{
  scale: 1.2;
}
.columns{
  flex-direction: column;
}

</style>