<template class="field-container">
  <h1> Réserver une salle </h1>
  <input class="name-field" type="text" placeholder="Nom de l'étudiant" v-model="fullName" @change="$emit('update-fullname', fullName)">
  <input type="date" :min="today" v-model="currentDate" @change="$emit('update-calendar', currentDate)">
</template>

<script>
export default {
  name: 'BookingForm',
  data: () => {
    return { today:  new Date().toISOString().slice(0, 10) }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.field-container {
  background-color: lightgray;
  padding: 2px;
  border: 1px solid grey;
  border-radius: 50px;
  box-shadow: gray;
}

.name-field {
  background-color: lightgray;
  padding: 2px;
}

</style>
