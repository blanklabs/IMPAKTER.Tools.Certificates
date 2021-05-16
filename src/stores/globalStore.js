
import { Subject } from 'rxjs';


const getdefaultState = () => {
    return {
        networkEvent: new Subject()
    }
}

const globalStore = {
    namespaced: true,
    state: getdefaultState(),
    getters: {
        networkEvent: state => {
            return state.networkEvent.asObservable();
        },
    },
    mutations: {
        setMessagePopup(state, payload) {
            state.networkEvent.next({ type: payload.type, message: payload.message })
        }
    },
    actions: {
    }
}

export { globalStore };