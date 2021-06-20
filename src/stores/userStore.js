import {ServicesFactory} from "@/services/ServicesFactory";

const user = ServicesFactory.get("user");

import {
    Transport,
    transportCodes,
} from "../../../SHARED.CODE/Constants/Transport";

const getDefaultState = () => {
    return {}
}

const userStore = {
    namespaced: true,
    state: getDefaultState(),
    getters: {},
    mutations: {},
    actions: {
        async checkUser(context, payload) {
            console.log("Executing checkUser")
            let response = new Transport();
            try {
                let webResponse;
                webResponse = await user.checkUser(payload);
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
    }
}

export {userStore};