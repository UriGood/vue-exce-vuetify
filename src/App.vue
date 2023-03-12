<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <router-link :to="{ name: 'listusers' }">
        <v-btn text>
          <span class="mr-2">Lista de usuarios</span>
        </v-btn>
      </router-link>
      <router-link :to="{ name: 'upload-excel' }">
        <v-btn text>
          <span class="mr-2">Cargar excel</span>
        </v-btn>
      </router-link>

      <v-spacer></v-spacer>

      <v-btn href="https://github.com/vuetifyjs/vuetify/releases/latest" target="_blank" text>
        <span class="mr-2">Latest Release</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>
