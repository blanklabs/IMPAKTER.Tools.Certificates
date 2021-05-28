import Api from '@/services/Api'

const resource = "/publications"

export default {
    fetchPublications(orgID) {
        return Api().get(`${resource}/${orgID}`);
    },
    upload(payload, config) {
        return Api().post(`${resource}/upload`, payload, config);
    },
}