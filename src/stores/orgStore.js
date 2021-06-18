import Org from "../../../SHARED.CODE/Objects/Organization/organization";

import {ServicesFactory} from "@/services/ServicesFactory";

const organizationService = ServicesFactory.get("organizations");
import VueJwtDecode from 'vue-jwt-decode'

const getDefaultState = () => {
    return {
        organization: new Org(),
    }
}

const orgStore = {
    namespaced: true,
    state: getDefaultState(),
    getters: {
        organization: (state) => {
            return state.organization;
        },
        organizationForm: state => {
            return state.organization
        },
    },
    mutations: {
        async updateOrganization(state, payload) {
            state.organization = payload;
        },

        resetOrganization(state) {
            state.organization = new Org()
        },
        setOrg(state, payload) {
            state.organization = payload;
        }
    },
    actions: {
        resetOrganization(context) {
            context.commit("resetOrganization")
        },
        async updateOrganization(context, payload) {
            console.log("executing updateOrganization in orgStore with payload:", JSON.stringify(payload));
            let response = await organizationService.updateOrganization(payload);
            console.log("updated org successfully with repsonse:", JSON.stringify(response));
            context.commit("global/setMessagePopup", {type: 1, message: "org updated successfully"}, {root: true});
            return new Promise((resolve) => {
                resolve()
            })
        },
        fetchOrg(context) {
            if (!context.getters.organization) {
                let accessToken = window.localStorage.getItem("accessToken");
                if (accessToken) {
                    let decoded = VueJwtDecode.decode(accessToken)
                    context.commit('setOrg', decoded.org);
                }
            }
            return new Promise((resolve) => {
                resolve(context.getters.organization);
            })
        }
    }
}

export {orgStore};