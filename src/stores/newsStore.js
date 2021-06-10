import {
    Transport,
    transportCodes,
} from "../../../SHARED.CODE/Constants/Transport";



import { ServicesFactory } from "@/services/ServicesFactory";
const news = ServicesFactory.get("news");

const getdefaultState = () => {
    return {
        articles: [],
        fetchStatus: false
    }
}

const newsStore = {
    namespaced: true,
    state: getdefaultState(),
    getters: {
        articles: state => {
            return state.articles
        },
        fetchStatus: state => {
            return state.fetchStatus
        },
        getNewsCount: state => {
            return state.articles.length;
        }
    },
    mutations: {
        saveArticles(state, payload) {
            state.articles = payload;
        },
        setFetchStatus(state, payload) {
            state.fetchStatus = payload;
        },

    },
    actions: {
        async fetchNews(context) {
            let org = await context.dispatch("org/fetchOrg", null, { root: true });
            let response = new Transport();
            try {
                let webResponse = await news.fetchNews(org.organization.orgID);
                response = webResponse.data;
            } catch (err) {
                //context.dispatch("global/setMessagePopup", { type: 0, message: err }, { root: true });
                context.commit('setFetchStatus', false)
                console.log(err);
            }
            return new Promise((resolve) => {
                if (response.status.code == transportCodes.SUCCESS) {
                    context.commit('saveArticles', response.data);
                    context.commit('setFetchStatus', true)
                }
                else {
                    console.log(response.status.message);
                    context.commit('setFetchStatus', false)
                }
                context.commit("global/toggleLoading", "off", { root: true });
                resolve({ articles: context.getters.articles, status: context.getters.fetchStatus });
            })
        },
    }
}

export { newsStore };