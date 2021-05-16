import Org from "../../../SHARED.CODE/Objects/Organization/organization";

import { ServicesFactory } from "@/services/ServicesFactory";
const organizationService = ServicesFactory.get("organizations");
import VueJwtDecode from 'vue-jwt-decode'

const getdefaultState = () => {
    return {
        organization: new Org(),
    }
}

const orgStore = {
    namespaced: true,
    state: getdefaultState(),
    getters: {
        organization: (state) => {
            return state.organization;
        },
        organizationForm: state => {
            if (state.organization.name == "") {
                var org = localStorage.getItem("Organization")
                state.organization.map(org)
            }
            return state.organization
        },
    },
    mutations: {
        async updateOrganization(state, payload) {
            await organizationService.updateOrganization(payload).then((response) => {
                this.responseMessage = response.data.msg;
                this.responseStatus = response.data.status;
            });
            window.localStorage.removeItem('Organization')
            var organizationResponse
            await organizationService.fetchOrganization(state.organizationID).then(response => (organizationResponse = response.data.organizationDetails[0]));
            window.localStorage.setItem('Organization', organizationResponse)
            state.organization.map(organizationResponse)
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
        updateOrganization(context, payload) {
            context.commit("updateOrganization", payload)
        },
        fetchOrg(context) {
            if (!context.getters.organization) {
                let accessToken = window.localStorage.getItem("accessToken");
                if (accessToken) {
                    let decoded = VueJwtDecode.decode(accessToken)
                    context.commit('setOrg', decoded.org);
                }
            }
            return context.getters.organization;
        }
    }
}

export { orgStore };