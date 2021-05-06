import signupModel from "../../../SHARED.CODE/Objects/User/signupModel";
import User from "../../../SHARED.CODE/Objects/User/user";


const userStore = {
    namespaced: true,
    state: {
        user: new User(),
        signupModel: new signupModel(),
        signupStatus: false,
        isLoggedin: false
    },
    getters: {
        signupForm: state => {
            state.signupModel.details.company = "Impakter"
            return state.signupModel
        },
        signupStatus: state => {
            return state.signupStatus;
        },
        isLoggedIn: state => {
            return state.isLoggedin;
        }
    },
    mutations: {
        signOut() {
            localStorage.removeItem("accessToken");
        },
        login(state, payload) {
            window.localStorage.setItem(
                "accessToken",
                payload
            );
            state.isLoggedin = true;
        }
    },
    actions: {
        login(context, payload) {
            context.commit("login", payload)
        },
    }
}

export { userStore };