<template>
  <Header msg="ClassBook"></Header>
  <Body></Body>
  <v-app>
    <v-main>
    </v-main>
  </v-app>
</template>

<script>

import Header from './components/Header.vue'
import Body from './components/Body.vue'

export default {
  name: 'App',

  components: {
    Header,
    Body,
    
  },

  data: () => ({
    //
  }),
}
</script>
