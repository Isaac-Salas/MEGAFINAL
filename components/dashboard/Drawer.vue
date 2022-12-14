<template>
  <v-navigation-drawer
    absolute
    permanent
    left
    app
    color="indigo darken-2"
  >
    <template #prepend>
      <v-list-item two-line>
        <v-list-item-avatar>
          <img src="https://randomuser.me/api/portraits/men/45.jpg">
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title>𝓙𝓼𝓪𝓪𝓬 𝔂 𝓙𝓾𝓭𝓲𝓽𝓱</v-list-item-title>
          <v-list-item-subtitle>𝐸𝓆𝓊𝒾𝓅𝑜 𝑀𝒶𝓇𝒶𝓋𝒾𝓁𝓁𝒶</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </template>

    <v-divider />

    <v-list dense>
      <v-list-item
        v-for="item in items"
        :key="item.title"
        :to="item.path" 
      >
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  data () {
    return {
      items: [
      { title: '𝘐𝘯𝘪𝘤𝘪𝘰 ', icon: 'mdi-account', path:'/dashboard',},
        { 
        title: '𝘙𝘦𝘨𝘪𝘴𝘵𝘳𝘰 𝘥𝘦 usuarios nuevos', 
        icon: 'mdi-account-group-outline',
        path:'/dashboard/users',


        },
        
        { title: '𝘓𝘪𝘴𝘵𝘢 𝘥𝘦 𝘭𝘪𝘣𝘳𝘰𝘴', icon: 'mdi-book', path:'/dashboard/libros',},
        { title: 'Registro de Libros', icon: 'mdi-pencil', path:'/dashboard/libros/regislibros',},
      ]
    }
  }
}
</script>
