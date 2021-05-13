import userModel from "../../../SHARED.CODE/Objects/User/userModel";
import User from "../../../SHARED.CODE/Objects/User/user";
import { messageService } from "../messageService";

const userStore = {
    namespaced: true,
    state: {
        user: new User(),
        userModel: new userModel(),
        isSignUpSuccess: false,
        isLoggedin: false
    },
    getters: {
        signupForm: state => {
            state.userModel.details.company = "Impakter"
            return state.userModel
        },
        signupStatus: state => {
            return state.isSignUpSuccess;
        },
        isLoggedIn: state => {
            return state.isLoggedin;
        }
    },
    mutations: {
        signOut(state) {
            console.log("logging out and removing accessToken");
            messageService.sendMessage("loggedOut");
            window.localStorage.removeItem("accessToken");
            state.isLoggedin = false;
        },
        login(state, payload) {
            messageService.sendMessage("loggedIn");
            window.localStorage.setItem(
                "accessToken",
                payload.accessToken
            );
            if (payload.case == "LOGIN") {
                state.isLoggedin = true;
            }
            else {
                state.isSignUpSuccess = true;
            }

        }
    },
    actions: {
        login(context, payload) {
            context.commit("login", payload);
        },
        signOut(context) {
            context.commit("signOut");
        }
    }
}

export { userStore };