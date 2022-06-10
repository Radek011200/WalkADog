import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import pl from 'vuetify/src/locale/pl.ts'
import Vuetify from 'vuetify/lib'
import {library} from '@fortawesome/fontawesome-svg-core'
import {fas} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'
import router from './router'
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import '@mdi/font/css/materialdesignicons.css'
import axios from "axios";
import bulma from "bulma";
import "vue-toastification/dist/index.css";
import Toast from "vue-toastification";

Vue.config.productionTip = false
Vue.config.silent = true
library.add(fas)

new Vue({
    router,
    vuetify,
    render: h => h(App)
}).$mount('#app')

Vue.use(Toast);
Vue.use(Vuetify).component('fa', FontAwesomeIcon)
Vue.use(bulma)
Vue.component('my-component', {
    methods: {
        changeLocale() {
            this.$vuetify.lang.current = 'pl'
        },
    },
})

export default new Vuetify({
    lang: {
        locales: {pl},
        current: 'pl',
    },
})
Vue.prototype.$http = axios;