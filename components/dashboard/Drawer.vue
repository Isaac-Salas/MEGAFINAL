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
          <v-list-item-title>ππΌπͺπͺπ¬ π ππΎπ­π²π½π±</v-list-item-title>
          <v-list-item-subtitle>πΈπππΎππ ππΆππΆππΎπππΆ</v-list-item-subtitle>
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
      { title: 'ππ―πͺπ€πͺπ° ', icon: 'mdi-account', path:'/dashboard',},
        { 
        title: 'ππ¦π¨πͺπ΄π΅π³π° π₯π¦ usuarios nuevos', 
        icon: 'mdi-account-group-outline',
        path:'/dashboard/users',


        },
        
        { title: 'ππͺπ΄π΅π’ π₯π¦ π­πͺπ£π³π°π΄', icon: 'mdi-book', path:'/dashboard/libros',},
        { title: 'Registro de Libros', icon: 'mdi-pencil', path:'/dashboard/libros/regislibros',},
      ]
    }
  }
}
</script>
