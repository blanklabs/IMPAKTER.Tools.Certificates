const getDefaultState = () => {
    return {}
}

const initStore = {
    namespaced: true,
    state: getDefaultState(),
    getters: {},
    mutations: {},
    actions: {
        async appInit(context) {
            console.log("executing initStore: init");
            let userObj = await context.dispatch("account/fetchCurrentUser", null, {root: true});
            await context.dispatch("org/fetchOrgDetails", userObj.organization.orgID, {root: true});
            await context.dispatch("certificate/fetchCertificates", userObj.organization.orgID, {root: true});
            await context.dispatch("news/fetchNews", userObj.organization.orgID, {root: true});
            await context.dispatch("publication/fetchPublications", userObj.organization.orgID, {root: true})
            return new Promise((resolve) => {
                resolve(true)
            })
        },
    }
}

export {initStore};