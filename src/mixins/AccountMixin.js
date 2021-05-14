import User from "../../../SHARED.CODE/Objects/User/user";
import {
    signupCases, loginCases
} from "../../../SHARED.CODE/Objects/User/account";

export default {
    data() {
        return {
            user: new User(),
            signupCases: signupCases,
            loginCases: loginCases
        }
    },
    mounted() {
        this.user = this.$store.getters["user/signupForm"];
    }
}

