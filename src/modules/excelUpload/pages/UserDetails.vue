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
                .post(`http://18.224.73.103/api/users/`, {
                    userName: "jose",
                    date: "0",
                    punchIn: "0",
                    punchOut: "0"
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
            let id = "640d05d3427df60be95849f9";
            axios
                .delete(`http://18.224.73.103/api/users/${id}`)
                .then((result) => {
                    console.log(result);
                })
                .catch((error) => {
                    console.log(error)
                })
        },
        probarUpdate() {
            let id = "640d04cd2e5ef316a4126f33";
            axios
                .put(`http://18.224.73.103/api/users/${id}`, {
                    userName: "jose",
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