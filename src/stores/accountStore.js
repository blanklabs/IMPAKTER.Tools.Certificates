import UserObject from "../../../SHARED.CODE/Objects/User/user";

import { ServicesFactory } from "@/services/ServicesFactory";
const account = ServicesFactory.get("account");

import { Subject } from 'rxjs';
import VueJwtDecode from 'vue-jwt-decode'

import {
    Transport,
    transportCodes,
} from "../../../SHARED.CODE/Constants/Transport";

const getdefaultState = () => {
    return {
        user: new UserObject(),
        isSignUpSuccess: false,
        isLoggedin: false,
        loginEvent: new Subject(),
        messageEvent: new Subject()
    }
}

const accountStore = {
    namespaced: true,
    state: getdefaultState(),
    getters: {
        user: state => {
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
        messageEvent: state => {
            return state.messageEvent.asObservable();
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
        async signup(context, payload) {
            console.log("Executing signup")
            let request = new Transport();
            let response = new Transport();
            request.data = payload;
            try {
                let webResponse;
                webResponse = await account.signup(request);
                response = webResponse.data;
                if (response.status.code == transportCodes.SUCCESS) {
                    return new Promise((resolve) => {
                        context.commit("global/toggleLoading", "off", { root: true });
                        resolve(response)
                    })
                }

            }
            catch (err) {
                context.commit("global/setMessagePopup", { type: 0, message: err }, { root: true });
            }
        },
        async login(context, payload) {
            console.log("executing accountStore Login")
            context.commit('org/setOrg', payload.org, { root: true });
            window.localStorage.setItem(
                "accessToken",
                payload.accessToken
            );
            await context.dispatch('afterLogin');
            context.commit("login", payload);
            return new Promise((resolve) => {
                resolve()
            })
        },
        async afterLogin(context) {
            console.log("executing afterlogin")
            await context.dispatch("certificate/fetchCertificates", null, { root: true });
            await context.dispatch("news/fetchNews", null, { root: true });
            await context.dispatch("publication/fetchPublications", null, { root: true })
            return new Promise((resolve) => { resolve() })
        },
        signOut(context) {
            context.commit("signOut");
        },
        setMessagePopup(context, payload) {
            context.commit("setMessagePopup", payload)
        },
        async checkLoginStatus(context) {
            let accessToken = window.localStorage.getItem("accessToken");
            if (!context.state.isLoggedIn) {
                if (accessToken) {
                    let decoded = await VueJwtDecode.decode(accessToken)
                    //console.log("decoded JWT:", JSON.stringify(decoded))
                    context.commit('org/setOrg', decoded.org, { root: true })
                    context.commit('setLoginStatus', true)
                }
                else {
                    context.commit('setLoginStatus', false)
                }
            }
            return new Promise((resolve) => { resolve(context.getters.isLoggedIn) });
        }
    }
}

export { accountStore };