<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <router-link :to="{ name: 'listusers' }">
        <v-btn text>
          <span class="mr-2">User list</span>
        </v-btn>
      </router-link>
      <router-link :to="{ name: 'upload-excel' }">
        <v-btn text>
          <span class="mr-2">Upload excel</span>
        </v-btn>
      </router-link>

      <v-spacer></v-spacer>


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
