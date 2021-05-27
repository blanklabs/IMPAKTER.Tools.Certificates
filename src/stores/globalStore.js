
import { Subject } from 'rxjs';


const getdefaultState = () => {
    return {
        messageEvent: new Subject(),
        loadingEvent: new Subject()
    }
}

const globalStore = {
    namespaced: true,
    state: getdefaultState(),
    getters: {
        messageEvent: state => {
            return state.messageEvent.asObservable();
        },
        loadingEvent: state => {
            return state.loadingEvent.asObservable();
        },
    },
    mutations: {
        setMessagePopup(state, payload) {
            state.messageEvent.next({ type: payload.type, message: payload.message, redirection: payload.redirection })
        },
        toggleLoading(state, payload) {
            state.loadingEvent.next(payload)
        }
    },
    actions: {
    }
}

export { globalStore };