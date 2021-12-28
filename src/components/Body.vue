<template>
  <BookingForm @update-fullname="fullName = $event" @update-calendar="currentDate = new Date($event)"/>
  <BookingCalendar :currentDate="currentDate" :fullName="fullName"/>

</template>

<script>

import BookingForm from './BookingForm.vue'
import BookingCalendar from './BookingCalendar.vue'

export default {
  name: 'Body',
  components: {
    BookingForm,
    BookingCalendar
  },
  data: () => {
    return { 
      fullName: "",
      currentDate : new Date()
    };

  }  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
