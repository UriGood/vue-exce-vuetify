<template>
    <v-container>
      <v-row>
        <v-col>
          <v-data-table :headers="headers" class="elevation-1" 
          :items="desserts"
          ></v-data-table>
        </v-col>
        <!-- :items="desserts"  -->
        <!-- :items-per-page="5"  -->
      </v-row>
  
    </v-container>
  </template>
  
  <script>
  import axios from 'axios'
  export default {
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
  
        ],
        desserts: [],
      }
    },
    methods: {
      getUsers() {
        axios
          .get("http://18.224.73.103/api/users")
          .then((result) => {
            this.desserts = result.data.data;
          })
  
      }
    },
    created() {
      this.getUsers();
    }
  }
  </script>