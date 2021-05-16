import User from "../../../SHARED.CODE/Objects/User/user";

import { Subject } from 'rxjs';
import VueJwtDecode from 'vue-jwt-decode'

const getdefaultState = () => {
    return {
        user: new User(),
        isSignUpSuccess: false,
        isLoggedin: false,
        loginEvent: new Subject(),
        networkEvent: new Subject()
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
            return state.isLoggedIn;
        },
        logInEvent: state => {
            return state.loginEvent.asObservable();
        },
        networkEvent: state => {
            return state.networkEvent.asObservable();
        },

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
        setUser(state, payload) {
            state.user = payload.user;
        },
        setLoginStatus(state, payload) {
            state.isLoggedIn = payload;
        },
        login(state, payload) {
            state.loginEvent.next("loggedIn");
            state.user = payload.user;
            if (payload.case == "LOGIN") {
                state.isLoggedin = true;
            }
            else {
                state.isSignUpSuccess = true;
            }
        }

    },
    actions: {
        async login(context, payload) {
            context.commit('org/setOrg', payload.org, { root: true });
            window.localStorage.setItem(
                "accessToken",
                payload.accessToken
            );
            await context.dispatch("certificate/fetchCertificates", null, { root: true });
            await context.dispatch("news/fetchNews", null, { root: true });
            context.commit("login", payload);
            return new Promise((resolve) => {
                resolve()
            })
        },
        signOut(context) {
            context.commit("signOut");
        },
        setMessagePopup(context, payload) {
            context.commit("setMessagePopup", payload)
        },
        checkLoginStatus(context) {
            let accessToken = window.localStorage.getItem("accessToken");
            if (!context.state.isLoggedIn) {
                if (accessToken) {
                    let decoded = VueJwtDecode.decode(accessToken)
                    console.log("decoded JWT:", JSON.stringify(decoded))
                    context.commit('org/setOrg', decoded.org, { root: true })
                    context.commit('setLoginStatus', true)
                }
                else {
                    context.commit('setLoginStatus', false)
                }
            }
            return context.getters.isLoggedIn;
        }
    }
}

export { userStore };