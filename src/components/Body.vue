<template>
  <section>
    <BookingForm @update-fullname="fullName = $event" @update-calendar="currentDate = new Date($event)"/>
  </section>
  <br><br>
  <hr>
  <br>
  <section>
    <BookingCalendar :currentDate="currentDate" :fullName="fullName"/>
  </section>

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
section {
  text-align: center;
}
</style>
