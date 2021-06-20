import Api from '@/services/Api'

const resource = "/user"

export default {
    checkUser(payload) {
        return Api().post(`${resource}/check`, payload);
    },
    addUser(payload) {
        return Api().post(`${resource}/add`, payload);
    },
    fetchUser(userID) {
        return Api().get(`${resource}/${userID}`);
    },
    updateUser(payload) {
        return Api().put(`${resource}`, payload);
    },
    deleteUser(ID) {
        return Api().delete(`${resource}/${ID}`);
    },

}
