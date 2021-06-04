import {
    Transport,
    transportCodes,
} from "../../../SHARED.CODE/Objects/Transport";



import { ServicesFactory } from "@/services/ServicesFactory";
const publications = ServicesFactory.get("publications");


const getdefaultState = () => {
    return {
        publications: [],
        fetchStatus: false,
        config: {}
    }
}

const publicationStore = {
    namespaced: true,
    state: getdefaultState(),
    getters: {
        publications: state => {
            return state.publications
        },
        fetchStatus: state => {
            return state.fetchStatus
        },
        getPublicationsCount: state => {
            return state.publications.length;
        },
        config: state => {
            return state.config;
        }
    },
    mutations: {
        savePublications(state, payload) {
            state.publications = payload;
        },
        setFetchStatus(state, payload) {
            state.fetchStatus = payload;
        },
        setConfig(state, payload) {
            let config = {
                headers: {
                    orgID: payload.orgID,
                    articleID: payload.uuid,
                    articleTitle: payload.articleTitle,
                },
            };
            state.config = config;
        }

    },
    actions: {
        async fetchPublications(context) {
            let org = await context.dispatch("org/fetchOrg", null, { root: true });
            console.log(`fetchPublications - publicationStore with org:${JSON.stringify(org)}`);
            let response = new Transport();
            try {
                let webResponse = await publications.fetchPublications(org.organization.orgID);
                response = webResponse.data;
            } catch (err) {
                //context.dispatch("global/setMessagePopup", { type: 0, message: err }, { root: true });
                context.commit('setFetchStatus', false)
                console.log(err);
            }
            return new Promise((resolve) => {
                if (response.status.code == transportCodes.SUCCESS) {
                    context.commit('savePublications', response.data);
                    context.commit('setFetchStatus', true)
                }
                else {
                    console.log(response.status.message);
                    context.commit('setFetchStatus', false)
                }
                context.commit("global/toggleLoading", "off", { root: true });
                resolve({ publications: context.getters.publications, status: context.getters.fetchStatus });
            })
        },

        async uploadPublication(context, payload) {
            console.log("executing publicationStore - uploadPublicaiton")
            let org = await context.dispatch("org/fetchOrg", null, { root: true });
            let response = new Transport();
            payload.orgID = org.organization.orgID;
            context.commit('setConfig', payload);
            if (payload.articlePhotos) {
                const formData = new FormData();
                for (const i of Object.keys(payload.articlePhotos)) {
                    formData.append("articlePhotos", payload.articlePhotos[i]);
                }
                await context.dispatch('postFileToServer', formData);
            }
            if (payload.authorDoc) {
                const formData = new FormData();
                formData.append("authorDoc", payload.authorDoc);
                await context.dispatch('postFileToServer', formData);
            }
            if (payload.authorPhoto) {
                const formData = new FormData();
                formData.append("authorPhoto", payload.authorPhoto);
                await context.dispatch('postFileToServer', formData);
            }
            if (payload.articleDoc) {
                const formData = new FormData();
                formData.append("articleDoc", payload.articleDoc);
                let webResponse = await context.dispatch('postFileToServer', formData);
                response = webResponse.data;
                if (response.status.code == transportCodes.SUCCESS) {
                    await context.dispatch('fetchPublications');
                }
            }
            return new Promise((resolve) => {
                context.commit("global/toggleLoading", "off", { root: true });
                resolve(response);
            })

        },
        async postFileToServer(context, formData) {
            return new Promise((resolve, reject) => {
                publications.upload(formData, context.getters.config)
                    .then((res) => {
                        console.log(res);
                        resolve(res);
                    })
                    .catch((err) => {
                        console.log(err);
                        reject();
                    });
            });
        },
    }
}

export { publicationStore };