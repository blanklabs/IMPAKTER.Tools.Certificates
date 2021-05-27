import Vue from "vue";
import Vuex from "vuex";


import { accountStore } from "@/stores/accountStore"
import { certificateStore } from "@/stores/certificateStore"
import { newsStore } from "@/stores/newsStore"
import { globalStore } from "@/stores/globalStore"
import { orgStore } from "@/stores/orgStore";

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        certificate: certificateStore,
        account: accountStore,
        news: newsStore,
        global: globalStore,
        org: orgStore,
    }

});
