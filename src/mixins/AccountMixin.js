import signupModel from "../../../SHARED.CODE/Objects/User/signupModel";
import {
    signupCases, loginCases
} from "../../../SHARED.CODE/Objects/User/account";

export default {
    data() {
        return {
            signupModel: new signupModel(),
            signupCases: signupCases,
            loginCases: loginCases
        }
    },
    mounted() {
        this.signupModel = this.$store.getters["user/signupForm"];
    }
}

