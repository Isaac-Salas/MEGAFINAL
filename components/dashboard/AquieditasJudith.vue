<template>
  <v-row class="renglon" justify="center" align="center">
    <v-col cols="6">
      <v-form ref="form" v-model="valid">
        <v-card color="#2A8CAE" elevation="6">
          <v-card-title>
            Registro de Libros
          </v-card-title>
          <v-card-text>
            <v-text-field v-model="libro" type="text" placeholder="Escribe el Titulo del libro" label="Libro" />
            <v-text-field
              v-model="Autor"
              type="text"
              placeholder="Escribe el Nombre del Autor"
              label="Autor"
            />
            <v-text-field
              v-model="date"
              type="text"
              placeholder="Escribe la fecha que se adquirio"
              label="date"
            />
            <v-text-field
              v-model="Genero"
              type="text"
              placeholder="Escribe el genero del libro"
              label="Genero"
            />
          </v-card-text>
          <v-card-actions>
            <v-btn color="green" @click="registralibro">
              Registrar
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-form>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data () {
    return {
      valid: false,
      libro: null,
      Autor: null,
      date: null,
      Genero: null
    }
  },
  methods: {
    async registraLibro () {
      this.valid = this.$refs.form.validate()
      if (this.valid) {
        const headers = {
          'Content-Type': 'application/json; charset=UTF-8',
          'Access-Control-Allow-Origin': '*'
        }
        const data = {
          Libro : this.libro,
          autor: this.Autor,
          fecha: this.date,
          Genero: this.Genero
        }
        await this.$axios.post('/dashboard/register',
          data,
          { headers }
        ).then((res) => {
          // eslint-disable-next-line no-console
          console.log(res)
        }).catch((error) => {
          // eslint-disable-next-line no-console
          console.log(error)
        })
      } else {
        // eslint-disable-next-line no-console
        console.log('invalid')
      }
    }
  }
}
</script>

<style scoped>
.renglon {
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
  background-color: #354551;
}
</style>
