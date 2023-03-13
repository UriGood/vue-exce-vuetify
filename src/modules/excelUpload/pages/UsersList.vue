<template>
  <v-container>
    <v-row>
      <v-col>
        <v-data-table :headers="headers" class="elevation-1" :items="desserts">
          <template v-slot:item.actions="{ item }">
            <span class="btn-dialog" style="color:green; padding-bottom: 55px;" @click="dialogDelete(item)" >Borrar</span><br/>
            <span style="color:red">Editar</span>
          </template>
        </v-data-table>
      </v-col>
      <!-- :items="desserts"  -->
      <!-- :items-per-page="5"  -->
    </v-row>
    <v-dialog
      v-model="dialogD"
      width="600px"
    >
      <v-card>
        <v-card-title>
          <span class="text-h5 text-center">Estas seguro que deseas borrar el registro "{{ userName }}"</span>
        </v-card-title>
        <v-card-text class="text-center">
          <v-btn class="primary" style="margin-right: 15px;" @click="deleteUsers">Aceptar</v-btn>
          <v-btn class="secondary" @click="dialogD=false">Cancelar</v-btn>
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
        {
          text: 'User ID',
          sortable: false,
          value: '_id',
        },
        { text: 'User Name', value: 'userName' },
        { text: 'Date', value: 'date' },
        { text: 'Punch In', value: 'punchIn' },
        { text: 'Punch Out', value: 'punchOut' },
        { text: 'Acciones', value: 'actions' },

      ],
      desserts: [],
      dialogD: false,
      id:null,
      userName:null
    }
  },
  methods: {
    
    dialogDelete(item){
      this.dialogD = true;
      this.id = item._id;
      this.userName = item.userName;
      console.log(this.item)
    },
    getUsers() {
      axios
        .get("http://18.224.73.103:8080/api/users")
        .then((result) => {
          this.desserts = result.data.data;
        })
    },
    deleteUsers() {
      axios
        .delete(`http://18.224.73.103:8080/api/users/${this.id}`)
        .then((result) => {
          this.getUsers()
          console.log(result)
        })
        .catch((result)=>{
          console.log(result);
        })
      this.dialogD=false;
      this.id=null  
    },
  },
  created() {
    this.getUsers();
  },
  computed:{
    
  }
}
</script>
<style>
  .btn-dialog:hover{
    cursor: pointer;
  }
</style>