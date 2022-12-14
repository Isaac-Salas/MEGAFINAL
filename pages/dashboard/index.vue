<template>
<v-row class="renglon" justify="center" align="center">
  <v-card color="#2A8CAE" elevation="6">
  <v-col style="align-self: center;">
      <v-row class="renglon" justify="center" align="center">
        <h1 class="text-center">Bienvenido al portal de la Biblioteca!! 📚</h1>
      </v-row>
      <v-row class="renglon" justify="center" align="center">
        <v-img max-height="800" max-width="800" contain :src="require('~/assets/images/Library.jpg')" />
      </v-row>
      
    </v-col>
</v-card>
</v-row>
</template>

<script>


export default {
  name: 'Index',
  auth: true, //true
  layout: 'DashboardVue'
}
</script>
