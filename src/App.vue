<template>
  <v-app id="inspire">
    <ApplicationDrawer />
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import ApplicationDrawer from './components/ApplicationDrawer.vue';
export default {
  name: 'App',
  components: {
    ApplicationDrawer
  },
  data: () => ({ drawer: null }),
};
</script>
