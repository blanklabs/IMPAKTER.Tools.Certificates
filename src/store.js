import Vue from "vue";
import Vuex from "vuex";


import {accountStore} from "@/stores/accountStore"
import {certificateStore} from "@/stores/certificateStore"
import {newsStore} from "@/stores/newsStore"
import {globalStore} from "@/stores/globalStore"
import {orgStore} from "@/stores/orgStore";
import {publicationStore} from "@/stores/publicationStore"
import {userStore} from "@/stores/userStore";
import {initStore} from "@/stores/initStore";

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        certificate: certificateStore,
        account: accountStore,
        news: newsStore,
        global: globalStore,
        org: orgStore,
        publication: publicationStore,
        user: userStore,
        init: initStore
    }

});
