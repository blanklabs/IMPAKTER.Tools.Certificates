import Vue from "vue";
import Vuex from "vuex";


import { userStore } from "@/stores/userStore"
import { certificateStore } from "@/stores/certificateStore"
import { newsStore } from "@/stores/newsStore"
import { globalStore } from "@/stores/globalStore"
import { orgStore } from "@/stores/orgStore";

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        certificate: certificateStore,
        user: userStore,
        news: newsStore,
        global: globalStore,
        org: orgStore,
    }

});
