<template>
    <v-container>
        <v-footer color="primary lighten-1" padless>
            <v-row justify="center" no-gutters>
                <v-col class="primary lighten-2 py-4 text-center white--text" cols="12">
                    {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
                </v-col>
            </v-row>
        </v-footer>
    </v-container>
</template>
<script>
export default {
    name: 'ApplicationFooter',

    methods: {
        toggleDarkTheme() {
            this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
            console.log(this.$vuetify.theme.dark);
        },
    },

    data: () => ({
    }),
}
</script>