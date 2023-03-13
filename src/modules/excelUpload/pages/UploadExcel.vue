<template>
    <v-container>
        <v-row>
            <v-col>
                <h1 class="text-center">Cargar excel </h1><br />
                <!-- <v-file-input label="Selecciona tu archivo excel " @change="previewFiles" outlined dense></v-file-input> -->
                <input type="file" @change="subirExcel" id="archivoExcel" />
                <v-data-table :headers="cabecera" :items="arrayObjetos">
                    
                </v-data-table>
                <div class="text-center">
                    <v-btn color="primary" @click="inserRows">
                        Enviar
                    </v-btn>
                </div>
            </v-col>

        </v-row>
    </v-container>
</template>
<script>
import axios from 'axios'
import readXlsFile from 'read-excel-file'
export default {
    name: 'UploadExcel',

    data: () => ({
        value: "",
        excelData: null,
        items: [],
        cabecera: [
            // { text: 'User Id', value: '0' },
            { text: 'User Name', value: 'userName' },
            { text: 'Date', value: 'date' },
            { text: 'Punch In', value: 'punchIn' },
            { text: 'Punch Out', value: 'punchOut' },
            { text: 'Punch Out', value: 'punchOut' },
        ],
        arrayObjetos: []
    }),
    methods: {
        subirExcel() {
            const input = document.getElementById("archivoExcel");
            readXlsFile(input.files[0]).then((rows) => {
                this.items = rows
                for (let i = 1; i < this.items.length; i++) {
                    console.log(this.items[i][2]);
                    this.arrayObjetos.push({
                        userName: this.items[i][1],
                        date: this.items[i][2],
                        punchIn: this.items[i][3],
                        punchOut: this.items[i][4]
                    })
                }

            })
        },
        inserRows(body) {
            axios
                .post("http://18.224.73.103:8080/api/users-multiple/", this.arrayObjetos)
                .then((result) => {
                    console.log(result);
                })
                .catch((error) => {
                    console.log(error)
                })
        }
    }
};
</script>