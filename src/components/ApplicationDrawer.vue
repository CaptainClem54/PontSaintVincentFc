<template>
    <v-container>
        <v-navigation-drawer app v-model="drawer">
            <v-list-item>
                <v-list-item-content>
                    <v-list-item-title class="text-h6"> Learning Vuetify</v-list-item-title>
                    <v-list-item-subtitle> Using Navigation drawers</v-list-item-subtitle>
                </v-list-item-content>
            </v-list-item>
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

        <v-app-bar app>
            <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

            <v-toolbar-title>Application</v-toolbar-title>
        </v-app-bar>
    </v-container>
</template>

<script>
export default {
    name: 'ApplicationDrawer',
    data: () => ({
        drawer: false,
        items: [
            { title: 'Dashboard', icon: 'mdi-view-dashboard' },
            { title: 'Account', icon: 'mdi-account-box' },
            { title: 'Settings', icon: 'mdi-cog' }
        ],
    }),
};
</script>