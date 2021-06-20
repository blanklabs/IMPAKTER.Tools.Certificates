import Api from '@/services/Api'

const resource = "/org"

export default {
    fetchOrganizations() {
        return Api().get(`${resource}/all`);
    },
    fetchOrganization(organizationID) {
        return Api().get(`${resource}/${organizationID}`);
    },
    fetchOrganizationDetails(organizationID) {
        return Api().get(`${resource}/details/${organizationID}`);
    },
    fetchOrganizationByUser(userID) {
        return Api().get(`${resource}/user/${userID}`);
    },
    createOrganization(payload) {
        return Api().post(`${resource}/`, payload);
    },
    updateOrganization(payload) {
        return Api().post(`${resource}`, payload);
    },
}
