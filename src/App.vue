<template>
  <v-app>
    <v-app-bar
        app
        color="success"
        dark
        :bottom=true
        height=75
        :fixed=true
    >
      <v-container fluid>

        <v-row justify-sm="center" align="center" class="navbar_main" :dense=true>
          <v-btn href="/test" class="flexcol" icon height="75" width=15%>                <v-icon :x-large=true class="" >
            mdi-dog-side
          </v-icon><span class="mt-2 mr-2 caption">Psy</span></v-btn>
          <v-btn class="flexcol" icon height="75" width=25%>                <v-icon :x-large=true class="" >
            mdi-account-group
          </v-icon><span class="mt-2 caption">Trenerzy</span></v-btn>
          <v-btn href ="/" class="flexcol" icon height="75" width=20%>                <v-icon size=70px class="mt-2" >
            mdi-home
          </v-icon><span class="mt-2 caption"></span></v-btn>
          <v-btn class="flexcol" icon height="75" width=25%>                <v-icon :x-large=true class="mt-1" >
            mdi-walk
          </v-icon><span class="mt-1 caption">Spacery</span></v-btn>
          <v-btn class="flexcol" icon height="75" width=15%>                <v-icon :x-large=true class="" >
            mdi-account
          </v-icon><span class="mt-2 caption ">Konto</span></v-btn>

        </v-row>
      </v-container>



    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>

  </v-app>
</template>

<script>


export default {
  name: 'App',


  data: () => ({
    //
  }),
};
</script>
<style>

.flexcol .v-btn__content {
  flex-direction: column;
}
.v-btn.v-size--default {
  font-size: 0.5rem;
  font-family: "Font Family Name";
}
</style>
