<template>
  <v-container style="display: flex; flex-direction: column">
    <v-container class="summary-box">
      <v-row>
        <v-col class="important-text">
            <center>
              <v-icon :x-large=true color="white" class="" >
              mdi-dog-side
              </v-icon>
              <div><b>{{dog}}</b></div>
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
            <div><b>{{trainer}}</b></div>
          </center>
        </v-col>
      </v-row>
    </v-container>
    <v-container>
      <v-container style="display: flex; flex-direction: column; align-content: center; padding: 0">
        <center>
        <v-col>
          Dzień
        </v-col>
        <v-col>
          {{date.dateCalendar}}
        </v-col>
        </center>
      </v-container>
      <v-container style="display: flex; flex-direction: column; align-content: center; padding: 0">
        <center>
        <v-col>
          Godziny
        </v-col>
        <v-col>
          {{date.timeClockStart}} - {{date.timeClockEnd}}
        </v-col>
        </center>
      </v-container>
    </v-container>
  </v-container>
</template>

<script>

  export default {
    name: 'SummaryComponent',
    props:{
      trainer:{
        Type: String,
        default: "Trener1"
      },
      dog:{
        Type: String,
        default: "Dog1"
      },
    },
    data () {
      return {
        date: {
          dateCalendar: localStorage.getItem("SelectedData"),
          timeClockStart: localStorage.getItem("SelectedStartHour"),
          timeClockEnd: localStorage.getItem("SelectedEndHour"),
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
