<template>
  <v-container>
    <v-date-picker
        :full-width=true
        color="success"
        locale="pl-PL"
        :first-day-of-week="1"
        v-model="picker"
        :month-format="getMonthFormat"
        :header-date-format="getHeaderDateFormat"
        :title-date-format="getTitleDateFormat"
        v-on:change="updateDate($event)"
    >

    </v-date-picker>
  </v-container>
</template>

<script>

export default {
  name: 'CalendarComponent',
  data() {
    return {
      picker: new Date().toISOString().substr(0, 10),
    }
  },
  methods: {
    getMonthFormat: function (date) {
      return date.toLocaleString('default', {month: 'long'})
    },
    getHeaderDateFormat: function (date) {
      return date.toLocaleString('default', {month: 'long', year: 'numeric'})
    },
    getTitleDateFormat: function (date) {
      return date.toLocaleString('default', {month: 'long', year: 'numeric', day: 'numeric'})
    },
    updateDate: function (updatedDate) {
      this.date = updatedDate
      this.$emit('change', this.date)
    },
  }
}


</script>
<style>
.date-color {
  color: #00B300;
  font-weight: 900;
}
</style>
