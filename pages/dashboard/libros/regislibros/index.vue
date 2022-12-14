<template>
  <v-row>
    <v-col cols="6">
      <LibrosReVue/>
    </v-col>
    <v-col>
      <AquieditasJudith/>
    </v-col>
    
  </v-row>
</template>

<script>


import LibrosReVue from '~/components/dashboard/LibrosReVue.vue';

import AquieditasJudith from '~/components/dashboard/AquieditasJudith.vue';
import UsuariosVue from '~/components/users/UsuariosVue.vue'
export default {
  name: "Index",
  auth: true, //true
  components: { LibrosReVue, UsuariosVue, AquieditasJudith },
  layout: "DashboardVue"
}
</script>



