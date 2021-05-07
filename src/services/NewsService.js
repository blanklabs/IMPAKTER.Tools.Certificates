import Api from '@/services/Api'

const resource = "/news"

export default {
    fetchNews(organizationID) {
        return Api().get(`${resource}/${organizationID}`);
    }

}
