import Org from "../../../SHARED.CODE/Objects/Organization/organization";

import { ServicesFactory } from "@/services/ServicesFactory";

const organizationService = ServicesFactory.get("organizations");


const getdefaultState = () => {
    return {
        org: new Org(),
    }
}

const userStore = {
    namespaced: true,
    state: getdefaultState(),
    getters: {
        org: state => {
            return state.org;
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
            state.organization = new organizationModel()
        },
    },
    actions: {
        resetOrganization(context) {
            context.commit("resetOrganization")
        },
        updateOrganization(context, payload) {
            context.commit("updateOrganization", payload)
        },
    }
}

export { userStore };