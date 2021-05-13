import userModel from "../../../SHARED.CODE/Objects/User/userModel";
import {
    signupCases, loginCases
} from "../../../SHARED.CODE/Objects/User/account";

export default {
    data() {
        return {
            userModel: new userModel(),
            signupCases: signupCases,
            loginCases: loginCases
        }
    },
    mounted() {
        this.userModel = this.$store.getters["user/signupForm"];
    }
}

