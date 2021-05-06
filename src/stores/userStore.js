import signupModel from "../../../SHARED.CODE/Objects/User/signupModel";
import User from "../../../SHARED.CODE/Objects/User/user";


const userStore = {
    namespaced: true,
    state: {
        user: new User(),
        signupModel: new signupModel(),
        signupStatus: false
    },
    getters: {
        signupForm: state => {
            state.signupModel.details.company = "Impakter"
            return state.signupModel
        },
        signupStatus: state => {
            return state.signupStatus;
        }
    },
    mutations: {
        setSignupStatus(state, payload) {
            state.signupStatus = payload
        },
        signOut() {
            localStorage.removeItem("accessToken");
        }
    },
    actions: {
        setSignupStatus(context, payload) {
            context.commit("setSignupStatus", payload)
        },
    }
}

export { userStore };