<template>
  <BookingTable :currentDate="currentDate" :timeSlotList="timeSlotList" @selected-timeSlot="current = $event"/>

<!--
  <button :disabled="!current || !current.bookedBy" @click="cancelBooking(current)" :key="current">Annuler la réservation</button>
  <button :disabled="!current || !fullName" @click="book(current, fullName)" :key="current">Réserver</button>
-->
  <button @click="cancelBooking(current)" :key="current">Annuler la réservation</button>
  <button @click="book(current, fullName)" :key="current">Réserver</button>

</template>

<script>
import BookingTable from './BookingTable.vue'

export default {
  
  name: 'BookingCalendar',
  components: {
    BookingTable
  }, 
  props: {
    currentDate: Date,
    fullName: String
  },
  data: () => {
    return {
      timeSlotList: [
        { date: new Date('2022-1-5 01:00'), hour: '9h - 12h', room: "B437", bookedBy: "" },
        { date: new Date('2022-1-5 01:00'), hour: '9h - 12h', room: "B438", bookedBy: "" },
        { date: new Date('2022-1-5 01:00'), hour: '9h - 12h', room: "B439", bookedBy: "" },
        { date: new Date('2022-1-5 01:00'), hour: '9h - 12h', room: "B440", bookedBy: "" },
        { date: new Date('2022-1-5 01:00'), hour: '12h - 15h', room: "B437", bookedBy: "" },
        { date: new Date('2022-1-5 01:00'), hour: '12h - 15h', room: "B440", bookedBy: "Clémentine Biais" },
        { date: new Date('2022-1-5 01:00'), hour: '15h - 18h', room: "B437", bookedBy: "" },
        { date: new Date('2022-1-5 01:00'), hour: '15h - 18h', room: "B439", bookedBy: "" },
        { date: new Date('2022-1-5 01:00'), hour: '15h - 18h', room: "B447", bookedBy: "Victor Martin" },
        { date: new Date('2022-1-5 01:00'), hour: '18h - 21h', room: "B437", bookedBy: "" },
        { date: new Date('2022-1-6 01:00'), hour: '9h - 12h', room: "B437", bookedBy: "" },
        { date: new Date('2022-1-6 01:00'), hour: '9h - 12h', room: "B438", bookedBy: "Anna S." },
        { date: new Date('2022-1-6 01:00'), hour: '9h - 12h', room: "B439", bookedBy: "" },
        { date: new Date('2022-1-6 01:00'), hour: '9h - 12h', room: "B440", bookedBy: "Isuru Haupe" },
        { date: new Date('2022-1-6 01:00'), hour: '12h - 15h', room: "B437", bookedBy: "" },
        { date: new Date('2022-1-6 01:00'), hour: '12h - 15h', room: "B440", bookedBy: "" },
        { date: new Date('2022-1-6 01:00'), hour: '15h - 18h', room: "B437", bookedBy: "" },
        { date: new Date('2022-1-6 01:00'), hour: '15h - 18h', room: "B439", bookedBy: "Glenn Louarn" },
        { date: new Date('2022-1-6 01:00'), hour: '15h - 18h', room: "B447", bookedBy: "" },
        { date: new Date('2022-1-6 01:00'), hour: '18h - 21h', room: "B437", bookedBy: "" },
      ],
    }
  },
  methods: {
     book: function(selected, name) {
      if (!selected) alert("Veuillez sélectionner un créneau");
      else if (!name) alert("Veuillez renseigner un nom");
      else {
        if (selected.bookedBy && 
            !confirm("Cette salle est déjà reservée par " 
            + selected.bookedBy 
            + ". Etes-vous sûr de vouloir remplacer cette reservation ?")
          ) return;
        const itemIndex = this.timeSlotList.findIndex(timeSlot => timeSlot.date.toString() == selected.date.toString() && timeSlot.hour == selected.hour && timeSlot.room == selected.room);
        this.timeSlotList[itemIndex].bookedBy = name;
      }
    },
    cancelBooking: function(selected) {
      if (selected) {
        const itemIndex = this.timeSlotList.findIndex(timeSlot => timeSlot.date.toString() == selected.date.toString() && timeSlot.hour == selected.hour && timeSlot.room == selected.room);
        this.timeSlotList[itemIndex].bookedBy = "";
      }
    }
  }
}
</script>

<style scoped>
button {
  margin: 2px;
  padding: 5px;
  border-radius: 2px;
  background-color: #4287f5;
  color: #fff;
  font-weight: bold;
}
</style>