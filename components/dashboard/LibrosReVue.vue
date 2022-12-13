<template>
  <v-simple-table
    fixed-header
    height="300px"
  >
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left">
            Libro
          </th>
          <th class="text-left">
            Autor
          </th>
          <th class="text-left">
            Genero
          </th>
          <th class="text-left">
            Fecha
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="item in desserts"
          :key="item.libro"
        >
          <td>{{ item.Libro }}</td>
          <td>{{ item.Autor }}</td>
          <td>{{ item.Genero }}</td>
          <td>{{ item.Fecha }}</td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
</template>

<script>
  export default {
    data () {
      return {
        desserts: [
          {
            Libro: ' Standing out in the moonlight',
            Autor: 'Manjeet Rafael',
            Genero: 'Drama',
            Fecha: '25-11-98'
          },
          {
            Libro: ' Jesus: In a Tractor',
            Autor: 'Liraz Elly',
            Genero: 'Drama',
            Fecha: '17-04-78'
          },
          {
            Libro: '  A small cat in a big world',
            Autor: 'Shamil Nanna',
            Genero: 'Infantil',
            Fecha: '23-07-59'
          },
          {
            Libro: ' A bright new world',
            Autor: 'Helena Sabrina',
            Genero: 'Fantasia',
            Fecha: '03-12-89'
          },
          {
            Libro: ' Sum catz 4 u & me',
            Autor: 'Vaiva Lutgard',
            Genero: 'Infantil',
            Fecha: '31-10-54'
          },
          {
            Libro: ' Melting for you: A love story',
            Autor: 'Rufus Samuel',
            Genero: 'Romance',
            Fecha: '12-05-76'
          },
          {
            Libro: ' Golfing 101 for 1 one eyed people',
            Autor: 'Louise Alve',
            Genero: 'Educativo',
            Fecha: '27-09-96'
          },
          {
            Libro: ' Dreams of a thoot fairy',
            Autor: 'Céfiro Tylor',
            Genero: 'Fantasia',
            Fecha: '30-08-67'
          },
          {
            Libro: ' When the sun goes out',
            Autor: 'Vihaan Wīgaberhtaz',
            Genero: 'Horror',
            Fecha: '14-01-49'
          },
        ],
      }
    },
  }
</script>
