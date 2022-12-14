
<template>
  <v-col style="align-self: center;">
    <v-row>
      <UsuariosVue/>
    </v-row>
    <v-row>
      <RegisterVue/>
    </v-row>
  </v-col>
</template>

<script>

import RegisterVue from '~/components/users/RegisterVue.vue'
import UsuariosVue from '~/components/users/UsuariosVue.vue'
export default {
  name: "Index",
  auth: true, //true
  components: {UsuariosVue, RegisterVue },
  layout: "DashboardVue"
}
</script>