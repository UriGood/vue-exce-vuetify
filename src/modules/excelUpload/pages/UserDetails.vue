<template>
    <v-container>
        <v-row>
            <v-col>
                <h1>hola</h1>
                <v-btn @click="probarPost">
                    Post
                </v-btn>
                <v-btn @click="probarDelete">
                    Delete
                </v-btn>
                <v-btn @click="probarUpdate">
                    Update
                </v-btn>
                <!-- <v-btn @click="probarPost">
                    
                </v-btn> -->
            </v-col>
        </v-row>
    </v-container>
    <!-- <h1>Detalles de usuario</h1> -->
</template>


<script>
import axios from 'axios'
export default {
    methods: {

        probarPost() {
            axios
                .post(`http://18.224.73.103:8080/api/users/`, {
                    userName: "Joshuita Martinez",
                    date: "20/02/2022",
                    punchIn: "9:00",
                    punchOut: "6:00"
                }, {
                    headers: {
                        // remove headers
                    }
                })
                .then((result) => {
                    console.log("registros insertados correctamente");
                })
                .catch((error) => {
                    console.log(error)
                })
        },
        probarDelete() {
            let id = "640e44ef71a4d38b7c03dbe1";
            axios
                .delete(`http://18.224.73.103:8080/api/users/${id}`)
                .then((result) => {
                    console.log(result);
                })
                .catch((error) => {
                    console.log(error)
                })
        },
        probarUpdate() {
            let id = "640e4db1c248838708d26991";
            axios
                .put(`http://18.224.73.103:8080/api/users/${id}`, {
                    userName: "Mario Emiliano",
                    date: "0",
                    punchIn: "0",
                    punchOut: "0"
                })
                .then((result) => {
                    console.log(result);
                })
                .catch((error) => {
                    console.log(error)
                })
        }
    }
}
</script>