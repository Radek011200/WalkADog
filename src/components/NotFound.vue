<template>
  <v-container fluid>
    <v-img class="image" src="@/assets/dog404.png"/>
    <div class="error404">404
      <div class="error-text">The page is not find</div>
    </div>
  </v-container>
</template>

<script>
export default {
  name: "NotFound"
}
</script>

<style scoped>
.image {
  width: 80%;
  margin-left: auto;
  margin-right: auto;
  display: block;
  max-width: 600px;
}

.error404 {

  font-family: 'Suranna';
  font-style: normal;
  font-size: 6.0vw;
  /* identical to box height, or 0px */


  align-items: center;
  text-align: center;
  letter-spacing: 0.275em;

  color: #FFFFFF;

  -webkit-text-stroke: 1px black;

  /* Inside auto layout */

  flex: none;
  order: 1;
  flex-grow: 0;
}

.error-text {
  font-family: 'Suranna';
  font-style: normal;
  font-size: 4.0vw;
  letter-spacing: 0.1em;
  /* identical to box height, or 0px */


}

@media screen and (max-width: 600px) {
  .error404 {
    font-size: 12.0vw;
  }

  .error-text {
    font-size: 10.0vw;
  }

}


</style>