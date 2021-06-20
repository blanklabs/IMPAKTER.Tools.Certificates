import Org from "../../../SHARED.CODE/Objects/Organization/organization";

import {ServicesFactory} from "@/services/ServicesFactory";

const organizationService = ServicesFactory.get("organizations");
import VueJwtDecode from 'vue-jwt-decode'
import {Transport} from "../../../SHARED.CODE/Constants/Transport";

const getDefaultState = () => {
    return {
        orgObj: new Org(),
        organizations: []
    }
}

const orgStore = {
    namespaced: true,
    state: getDefaultState(),
    getters: {
        orgObj: (state) => {
            return state.orgObj;
        },
        organizationForm: state => {
            return state.orgObj
        },
        organizations: (state) => {
            return state.organizations;
        },
    },
    mutations: {
        async updateOrganization(state, payload) {
            state.orgObj = payload;
        },

        resetOrganization(state) {
            state.orgObj = new Org()
        },
        setOrg(state, payload) {
            state.orgObj = payload;
        },
        setOrgs(state, payload) {
            state.organizations = payload;
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
        async fetchOrgDetails(context, payload) {
            console.log("executing fetchOrgDetails in orgStore with payload:", JSON.stringify(payload))
            let response = new Transport();
            if (!context.getters.orgObj.organization.orgID) {
                let webResponse;
                try {
                    webResponse = await organizationService.fetchOrganizationDetails(payload);
                    response = webResponse.data;
                    context.commit('setOrg', response.data.orgObj);
                    console.log("response in orgStore fetchOrgDetails:", JSON.stringify(response));
                }
                catch (err) {
                    context.commit("global/setMessagePopup", {type: 0, message: err}, {root: true});
                }
            }
            return new Promise((resolve) => {
                resolve(context.getters.orgObj);
            })
        },
        async fetchOrg(context) {
            let response = new Transport();
            if (!context.getters.orgObj) {
                let accessToken = window.localStorage.getItem("accessToken");
                let decoded = VueJwtDecode.decode(accessToken)
                if (decoded.org) {
                    context.commit('setOrg', decoded.org);
                }
                else {
                    let webResponse;
                    try {
                        webResponse = await organizationService.fetchOrganizationByUser(decoded.user.userID);
                        response = webResponse.data;
                        context.commit('setOrg', response.org);
                        console.log("response in orgStore fetchOrg:", JSON.stringify(response));
                    }
                    catch (err) {
                        context.commit("global/setMessagePopup", {type: 0, message: err}, {root: true});
                    }

                }

            }
            return new Promise((resolve) => {
                resolve(context.getters.orgObj);
            })
        },
        async fetchOrgs(context) {
            if (!context.getters.organizations) {
                let response = new Transport();
                let webResponse;
                try {
                    webResponse = await organizationService.fetchOrganizations();
                    response = webResponse.data;
                    context.commit('setOrgs', response.organizations);
                    console.log("response in orgStore fetchOrgs:", JSON.stringify(response));
                }
                catch (err) {
                    context.commit("global/setMessagePopup", {type: 0, message: err}, {root: true});
                }
            }
            return new Promise((resolve) => {
                resolve(context.getters.organizations);
            })
        }
    }
}

export {orgStore};