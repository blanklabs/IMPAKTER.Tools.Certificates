import signupModel from "../../../SHARED.CODE/Objects/User/signupModel";
import User from "../../../SHARED.CODE/Objects/User/user";


const userStore = {
    namespaced: true,
    state: {
        user: new User(),
        signupModel: new signupModel()
    },
    getters: {
        signupForm: state => {
            state.signupModel.details.company = "Impakter"
            return state.signupModel
        },
    },
    mutations: {},
    actions: {}
}

export { userStore };