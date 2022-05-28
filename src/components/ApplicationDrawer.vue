<template>
    <v-container>
        <v-app-bar app>
            <div class="d-flex align-center">
                <v-img alt="PSV Logo" class="shrink mr-2" contain :src="require('../assets/logo_psv.png')"
                    transition="scale-transition" width="40" />
                <v-toolbar-title>Pont-Saint-Vincent-FC</v-toolbar-title>
            </div>
            <v-spacer></v-spacer>
            <v-btn icon @click="toggleDarkTheme()">
                <v-icon>mdi-weather-night</v-icon>
            </v-btn>
        </v-app-bar>
    </v-container>
</template>

<script>
export default {
    name: 'ApplicationDrawer',
    methods: {
        toggleDarkTheme() {
            this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
        },
    },
};
</script>