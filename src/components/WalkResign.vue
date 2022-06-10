<template>
  <div class="text-center">
    <v-dialog
      v-model="dialog"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="red"
          :large=true
          rounded
          v-bind="attrs"
          v-on="on"
        >
          <v-icon size="35px">mdi-delete</v-icon>
        </v-btn>
      </template>

      <v-card>
        <v-card-title class="text-h5 success lighten-2">
          Rezygnacja ze spaceru
        </v-card-title>

        <v-card-text style="text-align: center;">
          <b>Czy jesteś pewny, że chcesz anulować ten spacer?</b>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            text
            @click="deleteWalk"
          >
            Potwierdź
          </v-btn>
          <v-btn
            color="secondary"
            text
            @click="dialog = false"
          >
            Anuluj
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
  export default {
    name: "WalkResign",
    methods:{
      deleteWalk() {
        this.$emit("delete_walk");
        this.dialog = false;
      }
    },
    data () {
      return {
        dialog: false,
      }
    },
  }
</script>