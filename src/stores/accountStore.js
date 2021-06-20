import UserObject from "../../../SHARED.CODE/Objects/User/user";
import {
    signupCases
} from "../../../SHARED.CODE/Constants/Cases/account";
import {ServicesFactory} from "@/services/ServicesFactory";

const account = ServicesFactory.get("account");
import VueJwtDecode from 'vue-jwt-decode'
import {Subject} from 'rxjs';

import {
    Transport,
    transportCodes,
} from "../../../SHARED.CODE/Constants/Transport";

const getDefaultState = () => {
    return {
        userObj: new UserObject(),
        application: "",
        isSignUpSuccess: false,
        isLoggedIn: false,
        loginEvent: new Subject(),
        messageEvent: new Subject()
    }
}

const accountStore = {
    namespaced: true,
    state: getDefaultState(),
    getters: {
        userObj: state => {
            return state.userObj
        },
        application: state => {
            return state.application;
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
            console.log("before reset state.userObj:", JSON.stringify(state.userObj));
            console.log("resetting state");
            state = getDefaultState();
            console.log("after reset state.userObj:", JSON.stringify(state.userObj));
            window.localStorage.removeItem("accessToken");
        },
        setUser(state, payload) {
            state.userObj = payload;
            return new Promise((resolve) => {
                resolve()
            })
        },
        login(state, payload) {
            state.loginEvent.next("loggedIn");
            if (payload.case === "LOGIN") {
                state.isLoggedin = true;
            }
            else {
                state.isSignUpSuccess = true;
            }
            return new Promise((resolve) => {
                resolve(true)
            })
        }

    },
    actions: {
        async signup(context, payload) {
            console.log("Executing signup")
            let response = new Transport();
            try {
                let webResponse;
                webResponse = await account.signup(payload);
                response = webResponse.data;
                if (response.status.code === transportCodes.SUCCESS) {
                    return new Promise((resolve) => {
                        context.commit("global/toggleLoading", "off", {root: true});
                        resolve(response)
                    })
                }
            }
            catch (err) {
                context.commit("global/setMessagePopup", {type: 0, message: err}, {root: true});
            }
        },
        async login(context, payload) {
            console.log("executing accountStore: Login");
            let response = new Transport();
            try {
                let webResponse;
                webResponse = await account.login(payload);
                response = webResponse.data;
                console.log("response in accountStore login:", JSON.stringify(response));
                if (response.status.code === transportCodes.SUCCESS) {
                    return new Promise((resolve) => {
                            context.commit("global/toggleLoading", "off", {root: true});
                            resolve(response)
                        }
                    )
                }
            }
            catch (err) {
                context.commit("global/setMessagePopup", {type: 0, message: err}, {root: true});
            }
        },
        async afterLoginOrSignUp(context, payload) {
            console.log("executing accountStore: afterLoginOrSignUp");
            let loginCase;
            if (payload) {
                if (payload.status.case === signupCases.SUCCESS) {
                    loginCase = "SIGNUP"
                }
                else {
                    loginCase = "LOGIN"
                }
                let userObj = payload.data.userObj;
                if (payload.data.accessToken) {
                    window.localStorage.setItem(
                        "accessToken",
                        payload.data.accessToken
                    );
                    await context.dispatch("commonInit", {loginCase: loginCase, userObj: userObj});
                    return new Promise((resolve) => {
                        resolve(true)
                    })
                }
            }
            else {
                return new Promise((resolve) => {
                    resolve(false)
                })
            }

        },
        signOut(context) {
            context.commit("signOut");
        },
        setMessagePopup(context, payload) {
            context.commit("setMessagePopup", payload)
        },

        async commonInit(context, payload) {
            await context.commit("login", {case: payload.loginCase});
            await context.commit('setUser', payload.userObj);
            await context.dispatch("init/appInit", null, {root: true});
            return new Promise((resolve) => {
                resolve()
            })
        },
        async reloadApp(context) {
            let accessToken = window.localStorage.getItem("accessToken");
            if (accessToken) {
                let decoded = await VueJwtDecode.decode(accessToken)
                //console.log("decoded JWT:", JSON.stringify(decoded))
                await context.dispatch("commonInit", {loginCase: "LOGIN", userObj: decoded.userObj});
            }
            return new Promise((resolve) => {
                resolve(context.getters.isLoggedIn)
            });
        },
        async fetchCurrentUser(context) {
            return new Promise((resolve) => {
                resolve(context.getters.userObj)
            });
        }
    }
}

export {accountStore};