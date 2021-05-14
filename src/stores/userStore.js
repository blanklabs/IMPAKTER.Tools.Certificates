import User from "../../../SHARED.CODE/Objects/User/user";
import Org from "../../../SHARED.CODE/Objects/Organization/organization";

import { Subject } from 'rxjs';

const getdefaultState = () => {
    return {
        user: new User(),
        isSignUpSuccess: false,
        isLoggedin: false,
        loginEvent: new Subject(),
        org: new Org(),
    }
}

const userStore = {
    namespaced: true,
    state: getdefaultState(),
    getters: {
        signupForm: state => {
            state.user.orgName = "Impakter"
            return state.user
        },
        signupStatus: state => {
            return state.isSignUpSuccess;
        },
        isLoggedIn: state => {
            return state.isLoggedin;
        },
        logInEvent: state => {
            return state.loginEvent.asObservable();
        },
        org: state => {
            return state.org;
        }

    },
    mutations: {
        signOut(state) {
            console.log("logging out and removing accessToken");
            state.loginEvent.next("loggedOut");
            console.log("before reset state.user:", JSON.stringify(state.user));
            console.log("resetting state");
            state = getdefaultState();
            console.log("after reset state.user:", JSON.stringify(state.user));
            window.localStorage.removeItem("accessToken");
        },
        login(state, payload) {
            state.loginEvent.next("loggedIn");
            state.user = payload.user;
            state.org = payload.org;
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