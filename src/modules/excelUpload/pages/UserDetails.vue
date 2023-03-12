<template>
    <v-container>
        <v-row>
            <v-col>
                <h1>hola</h1>
                <v-btn @click="probarUpdate">
                    Button
                </v-btn>
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
            let id = "64077635ed6a6c17d214e8d1";
            axios
                .post(`http://18.224.73.103/api/users/`,{
                    userName:"uriel"
                })
                .then((result) => {
                    console.log("registros insertados correctamente");
                })
                .catch((error)=>{
                    console.log(error)
                })
        },
        probarDelete() {
            let id = "64077635ed6a6c17d214e8d1";
            axios
                .post(`http://18.224.73.103/api/users/${id}`,{
                    userName:"uriel"
                })
                .then((result) => {
                    console.log(result);
                })
                .catch((error)=>{
                    console.log(error)
                })
        },
        probarUpdate() {
            let id = "640d0202515087d036616172";
            axios
                .put(`http://localhost:8080/api/users/${id}`,{
                    userName:"jose",
                    date:"0",
                    punchIn:"0",
                    punchOut:"0"
                })
                .then((result) => {
                    console.log(result);
                })
                .catch((error)=>{
                    console.log(error)
                })
        }
    }
}
</script>