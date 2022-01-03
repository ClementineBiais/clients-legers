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
            <span class="radio-label-room">{{ timeSlot.room }}
            <span class="radio-label-booked" v-if="timeSlot.bookedBy">{{ timeSlot.bookedBy }}</span></span>
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

  .radio-label-room {
    margin: 2px;
    margin-bottom: 5px;
    padding: 5px;
    color: #345573;
    background-color: #d4f4fe;
    border-radius: 10px;
    font-weight: bold;
  }

  .radio-label-booked {
    font-weight: normal;
  }

  .radio-label-room:hover {
    background-color: #c7e6f0;
  }

  :checked + .radio-label-room {
    background-color: #bfe3f0;    
    border-width: 2px;
  }

  table {
    margin: 0 auto;
  }

  tbody {
    text-align: left;
  }

  tr>td {
    padding-bottom: 20px;
  }
</style>