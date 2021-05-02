import Vue from "vue";
import Vuex from "vuex";


import { userStore } from "@/stores/userStore"
import { certificateStore } from "@/stores/certificateStore"

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        certificate: certificateStore,
        user: userStore
    }

});
