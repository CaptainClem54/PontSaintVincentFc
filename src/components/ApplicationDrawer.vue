<template>
    <v-container>
        <v-app-bar color="blue accent-3" app>
            <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
            <v-toolbar-title>Pont-Saint-Vincent-FC</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn icon @click="toggleDarkTheme()">
                <v-icon>mdi-weather-night</v-icon>
            </v-btn>
        </v-app-bar>

        <v-navigation-drawer v-model="drawer" app>
            <v-row class="text-center">
                <v-col cols="12">
                    <v-img :src="require('../assets/logo_psv_hight.png')" class="my-3" contain height="100" />
                </v-col>
            </v-row>

            <v-divider></v-divider>

            <v-list dense nav>
                <v-list-item v-for="item in items" :key="item.title" link>
                    <v-list-item-icon>
                        <v-icon>{{ item.icon }}</v-icon>
                    </v-list-item-icon>

                    <v-list-item-content>
                        <v-list-item-title>{{ item.title }}</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>

        </v-navigation-drawer>


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
    data: () => ({
        drawer: null,
        items: [
            { title: 'Actualité', icon: 'mdi-information-outline' },
            { title: 'Séniors', icon: 'mdi-account-group' },
            { title: 'Entrainements', icon: 'mdi-whistle-outline' },
            { title: 'Contacts', icon: 'mdi-account-box-outline' },
        ],
        right: null,
    }),
};
</script>