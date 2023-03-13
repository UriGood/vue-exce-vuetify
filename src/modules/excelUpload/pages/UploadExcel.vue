<template>
    <v-container>
        <v-row>
            <v-col>
                <h1 class="text-center">Upload excel </h1><br />
                <!-- <v-file-input label="Selecciona tu archivo excel " @change="previewFiles" outlined dense></v-file-input> -->
                <div class="file-select" id="src-file1">
                    <input name="src-file1" type="file" @input="subirExcel" id="archivoExcel" v-show="!input" />
                </div>
                <v-btn class="primary" v-show="input" @click="deleteDocument">Delete document</v-btn>
                <v-data-table :headers="cabecera" :items="arrayObjetos">
                    <template v-slot:item.actions="{ item, index }">
                        <span class="btn-dialog" style="color:green; padding-bottom: 55px;"
                            @click="dialogDelete(index)">Borrar</span><br />
                        <!-- <span class="btn-dialog" style="color:red" @click="dialogEdit(item)">Editar</span><br />
                        <span class="btn-dialog" style="color:purple" @click="dialogView(item)"> Ver detalles</span> -->
                    </template>
                </v-data-table>
                <div class="text-center">
                    <v-btn color="primary" @click="inserRows">
                        Save users
                    </v-btn>
                </div>
            </v-col>
        </v-row>

        <v-dialog transition="dialog-bottom-transition" max-width="600" v-model="dialog">
            <template v-slot:default="dialog">
                <v-card>
                    <v-toolbar color="primary" dark>well done</v-toolbar>
                    <v-card-text>
                        <div class="text-h4 pa-12">Records inserted successfully</div>
                    </v-card-text>
                    <v-card-actions class="justify-end">
                        <v-btn text @click="dialog.value = false">Close</v-btn>
                    </v-card-actions>
                </v-card>
            </template>
        </v-dialog>
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
            // { text: 'User Name', value: '1' },
            // { text: 'Date', value: '2' },
            // { text: 'Punch In', value: '3' },
            // { text: 'Punch Out', value: '4' },
            // { text: 'Acciones', value: 'actions' },
            { text: 'User ID', value: 'userId' },
            { text: 'User Name', value: 'userName' },
            { text: 'Date', value: 'date' },
            { text: 'Punch In', value: 'punchIn' },
            { text: 'Punch Out', value: 'punchOut' },
            { text: 'Acciones', value: 'actions' },
        ],
        arrayObjetos: [],
        input: null,
        dialog: null
    }),
    methods: {
        subirExcel() {
            this.input = document.getElementById("archivoExcel");
            readXlsFile(this.input.files[0]).then((rows) => {
                this.items = rows
                for (let i = 1; i < this.items.length; i++) {
                    // console.log(this.items[i][2]);
                    this.arrayObjetos.push({
                        userId: this.items[i][0],
                        userName: this.items[i][1],
                        date: this.items[i][2],
                        punchIn: this.items[i][3],
                        punchOut: this.items[i][4]
                    })
                }
            })
            console.log(this.arrayObjetos)
        },
        deleteDocument() {
            console.log("delete document");
            this.input.value = '';
            this.input = null;
            this.arrayObjetos = [];
            // console.log(this.input.value = null,"input")
        },
        inserRows(body) {
            if (this.arrayObjetos.length > 0) {
                axios
                    .post("http://18.224.73.103:8080/api/users-multiple/", this.arrayObjetos)
                    .then((result) => {
                        console.log(result);
                        this.dialog = true;
                        this.input.value = '';
                        this.input = null;
                        this.arrayObjetos = [];
                    })
                    .catch((error) => {
                        console.log(error)
                    })
            } else {
                return
            }
        },
        dialogDelete(indexp) {
            this.arrayObjetos = this.arrayObjetos.filter((item, index) => index !== indexp);
            if (this.arrayObjetos.length == 0) {
                let input = document.getElementById("archivoExcel");
                console.log(input.value = '')
            }
        }
    }
};
</script>

<style>
.file-select {
    position: relative;
    display: inline-block;
}

.file-select::before {
    background-color: #1976d2;
    border-color: #1976d2 !important;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 3px;
    content: 'Seleccionar';
    /* testo por defecto */
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
}

.file-select input[type="file"] {
    opacity: 0;
    width: 200px;
    height: 32px;
    display: inline-block;
}

#src-file1::before {
    content: 'choose file';
}
</style>