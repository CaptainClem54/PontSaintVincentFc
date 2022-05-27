<template>
  <v-app>
    <ApplicationDrawer/>
    <v-main>
      <router-view />
    </v-main>
    <ApplicationFooter/>
  </v-app>
</template>

<script>
import ApplicationFooter from './components/ApplicationFooter.vue';
import ApplicationDrawer from './components/ApplicationDrawer.vue';

export default {
  name: 'App',
  components: {
    ApplicationFooter,
    ApplicationDrawer
},
  data: () => ({
  }),
};
</script>
