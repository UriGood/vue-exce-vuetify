<template>
  <v-container>
    <v-row>
      <v-col>
        <v-data-table :headers="headers" class="elevation-1" :items="desserts">
          <template v-slot:item.actions="{ item }">
            <span class="btn-dialog" style="color:green; padding-bottom: 55px;"
              @click="dialogDelete(item)">Borrar</span><br />
            <span class="btn-dialog" style="color:red" @click="dialogEdit(item)">Editar</span><br />
            <span class="btn-dialog" style="color:purple" @click="dialogView(item)"> Ver detalles</span>
          </template>
        </v-data-table>
      </v-col>
      <!-- :items="desserts"  -->
      <!-- :items-per-page="5"  -->
    </v-row>
    <v-dialog v-model="dialogD" width="600px">
      <v-card>
        <v-card-title>
          <span class="text-h5 text-center">Estas seguro que deseas borrar el registro "{{ userName }}"</span>
        </v-card-title>
        <v-card-text class="text-center">
          <v-btn class="primary" style="margin-right: 15px;" @click="deleteUsers">Aceptar</v-btn>
          <v-btn class="secondary" @click="dialogD = false">Cancelar</v-btn>
        </v-card-text>
      </v-card>
    </v-dialog>
    <v-dialog v-model="dialogE" width="600px">
      <v-card>
        <v-card-title>
          <span class="text-h5 text-center">Editando el registro "{{ id }}"</span>
        </v-card-title>
        <v-form>
          <v-container>
            <v-row>
              <v-col cols="12" md="6">
                <v-label>Name</v-label>
                <v-text-field v-model="userName" required></v-text-field>
              </v-col>
              <v-col cols="12" md="6">
                <v-label>Date</v-label>
                <v-text-field v-model="date" required></v-text-field>
              </v-col>
              <v-col cols="12" md="6">
                <v-label>Punch In</v-label>
                <v-text-field v-model="punchIn" required></v-text-field>
              </v-col>
              <v-col cols="12" md="6">
                <v-label>Punch Out</v-label>
                <v-text-field v-model="punchOut" required></v-text-field>
              </v-col>
            </v-row>
          </v-container>
        </v-form>
        <v-card-text class="text-center">
          <v-btn class="primary" style="margin-right: 15px;" @click="editUsers">Aceptar</v-btn>
          <v-btn class="secondary" @click="dialogE = false">Cancelar</v-btn>
        </v-card-text>
      </v-card>
    </v-dialog>
    <v-dialog v-model="dialogV" width="600px">
      <v-card>
        <v-card-title>
          <span class="text-h5 text-center">Viendo el registro "{{ id }}"</span>
        </v-card-title>
        <v-form>
          <v-container>
            <v-row>
              <v-col cols="12" md="6">
                <v-label>Name</v-label>
                <v-text-field disabled v-model="userName" required></v-text-field>
              </v-col>
              <v-col cols="12" md="6">
                <v-label>Date</v-label>
                <v-text-field disabled v-model="date" required></v-text-field>
              </v-col>
              <v-col cols="12" md="6">
                <v-label>Punch In</v-label>
                <v-text-field disabled v-model="punchIn" required></v-text-field>
              </v-col>
              <v-col cols="12" md="6">
                <v-label>Punch Out</v-label>
                <v-text-field disabled v-model="punchOut" required></v-text-field>
              </v-col>
            </v-row>
          </v-container>
        </v-form>
        <v-card-text class="text-center">
          <v-btn class="secondary" @click="dialogV = false">Cerrar</v-btn>
        </v-card-text>
      </v-card>
    </v-dialog>
  </v-container>
</template>
  
<script>
import axios from 'axios'
export default {
  name: 'usersList',
  data() {
    return {
      headers: [
        // {
        //   text: 'User ID',
        //   sortable: false,
        //   value: '_id',
        // },
        { text: 'User Id', value: 'userId' },
        { text: 'User Name', value: 'userName' },
        { text: 'Date', value: 'date' },
        { text: 'Punch In', value: 'punchIn' },
        { text: 'Punch Out', value: 'punchOut' },
        { text: 'Acciones', value: 'actions' },

      ],
      desserts: [],
      dialogD: false,
      dialogE: false,
      dialogV: false,
      id: null,
      userName: null,
      item: null,
      date: null,
      punchIn: null,
      punchOut: null
    }
  },
  methods: {

    dialogDelete(item) {
      this.dialogD = true;
      this.id = item._id;
      this.userName = item.userName;
      console.log(this.item)
    },
    dialogEdit(item) {
      this.dialogE = true;
      this.id = item._id;
      this.userName = item.userName;
      this.date = item.date;
      this.punchIn = item.punchIn;
      this.punchOut = item.punchOut;
    },
    dialogView(item){
      this.dialogV = true;
      this.id = item._id;
      this.userName = item.userName;
      this.date = item.date;
      this.punchIn = item.punchIn;
      this.punchOut = item.punchOut;
    },
    getUsers() {
      axios
        .get("http://18.224.73.103:8080/api/users")
        .then((result) => {
          this.desserts = result.data.data;
          console.log(this.desserts)
        })
    },
    deleteUsers() {
      axios
        .delete(`http://18.224.73.103:8080/api/users/${this.id}`)
        .then((result) => {
          this.getUsers()
          console.log(result)
        })
        .catch((result) => {
          console.log(result);
        })
      this.dialogD = false;
      this.id = null
    },
    editUsers() {
      axios
        .put(`http://18.224.73.103:8080/api/users/${this.id}`, {
          userName: this.userName,
          date: this.date,
          punchIn: this.punchIn,
          punchOut: this.punchOut,
        })
        .then((result) => {
          this.getUsers()
          console.log(result)
        })
        .catch((result) => {
          console.log(result);
        })
      this.dialogE = false;
      this.id = null;
      this.item = null;
      this.userName = null;
      this.date = null;
      this.punchIn = null;
      this.punchOut = null;
    },
  },
  created() {
    this.getUsers();
  },
  computed: {

  }
}
</script>
<style>
.btn-dialog:hover {
  cursor: pointer;
}
</style>