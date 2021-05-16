
import { Subject } from 'rxjs';


const getdefaultState = () => {
    return {
        networkEvent: new Subject(),
        loadingEvent: new Subject()
    }
}

const globalStore = {
    namespaced: true,
    state: getdefaultState(),
    getters: {
        networkEvent: state => {
            return state.networkEvent.asObservable();
        },
        loadingEvent: state => {
            return state.loadingEvent.asObservable();
        },
    },
    mutations: {
        setMessagePopup(state, payload) {
            state.networkEvent.next({ type: payload.type, message: payload.message })
        },
        toggleLoading(state, payload) {
            state.loadingEvent.next(payload)
        }
    },
    actions: {
    }
}

export { globalStore };