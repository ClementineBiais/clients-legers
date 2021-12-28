<template>
  <table>
    <caption>{{ formatDate(currentDate) }}</caption>
    <tbody>
      <tr v-for="rowTitle in rowTitleList" :key="rowTitle">
        <th>
          {{ rowTitle.hour }}
        </th>
        <label v-for="timeSlot in timeSlotList" :key="timeSlot">
          <td v-if="timeSlot.date.toString() == currentDate.toString() 
            && timeSlot.hour == rowTitle.hour" 
            @click="$emit('selected-timeSlot', timeSlot)">
            <input type="radio" name="timeSlotRadio">
            <span class="radio-label">{{timeSlot.room + (timeSlot.bookedBy ? '\n Reservée par ' + timeSlot.bookedBy : '')}}</span>
          </td>
        </label>
      </tr>
    </tbody>
  </table>
</template>

<script>

export default {
  
  name: 'BookingCalendar',
  components: {
    
  }, 
  props: {
    currentDate : Date,
    timeSlotList: Array
  },
   data: () => {
    return {
      rowTitleList: [
        { hour: '9h - 12h' }, 
        { hour: '12h - 15h' },
        { hour: '15h - 18h' },
        { hour: '18h - 21h' }
      ],
      weekDay: [ "Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"],
      months:  [ "Janvier", "Fevrier", "Mars", "Avril", "Mai", "Juin", "Juillet", "Aout", "Septembre", "Octobre", "Novembre", "Décembre"]
    }
  },
  methods: {
    formatDate : function (date) {
      return this.weekDay[date.getDay()] + " " + date.getDate().toString() + " " + this.months[date.getMonth()] + " " + date.getFullYear();
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  input {
    display: none;
  }

  .radio-label {
    margin: 2px;
    padding: 5px;
    background-color: lightblue;
    border: 1px solid blue;
    border-radius: 50px;
  }

  .radio-label:hover {
    background-color: #ade7ff;
    border: 1px solid blue;
    border-radius: 25px;
  }

  :checked + .radio-label {
    border-width: 2px;
  }

</style>