<template>
  <h1> Réserver une salle </h1>
  <v-text-field label="Nom de l'étudiant" v-model="fullName" @change="$emit('update-fullname', fullName)"></v-text-field>
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

</style>
