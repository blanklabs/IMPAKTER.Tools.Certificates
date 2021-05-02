import Api from '@/services/Api'

const resource = "/account"

export default {
    fetchUser(userID) {
        return Api().get(`${resource}/user/${userID}`);
    },
    login(payload) {
        return Api().post(`${resource}/login`, payload);
    },
    signup(payload) {
        return Api().post(`${resource}/signup`, payload);
    },
    updateUser(payload) {
        return Api().put(`${resource}/user`, payload);
    },
    deleteUser(ID) {
        return Api().delete(`${resource}/user/${ID}`);
    },


}
