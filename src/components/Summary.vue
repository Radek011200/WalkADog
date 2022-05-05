<template>
  <v-container>
    <v-container class="summary-box">
      <v-row>
        <v-col class="important-text">
            <center>
              <v-icon :x-large=true color="white" class="" >
              mdi-dog-side
              </v-icon>
              <div><b>{{dog.name}}</b></div>
            </center>
        </v-col>
        <v-col class="important-text">
            <center><div id="vcenter">1 Godzina</div></center>
            <v-divider></v-divider>
        </v-col>
        <v-col class="important-text">
          <center>
            <v-icon :x-large=true color="white" class="" >
            mdi-account
            </v-icon>
            <div><b>{{trainer.name}}</b></div>
          </center>
        </v-col>
      </v-row>
    </v-container>
    <v-container>
      <v-row>
        <v-col>
          Dzień
        </v-col>
        <v-col style="text-align: right;">
          {{date.dateCalendar}}
        </v-col>
      </v-row>
      <v-row no-gutters>
        <v-col>
          Godziny
        </v-col>
        <v-col style="text-align: right;">
          {{date.timeClockStart}} - {{date.timeClockEnd}}
        </v-col>
      </v-row>
    </v-container>
  </v-container>
</template>

<script>

  export default {
    name: 'SummaryComponent',
    data () {
      return {
        trainer: {
          name: "Trener 1",
        },
        dog: {
          name: "Max"
        },
        date: {
          //could handle with moment.js
          dateFull: "06-05-2022 12:00",
          dateCalendar: "06-05-2022",
          timeClockStart: "12:00",
          timeClockEnd: "13:00"
        }
      }
      },
  }


</script>
<style>
.date-color {
color: #00B300;
font-weight: 900;
}
.summary-box {
    background-color: #00B300;
    border-radius: 10px;
    height: 6em
}
.important-text {
  font-size: 1.2em;
}

#vcenter {
  padding-top: 1.2em;
}
</style>
