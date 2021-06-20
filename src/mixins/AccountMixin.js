import UserObject from "../../../SHARED.CODE/Objects/User/user";
import {
    signupCases, loginCases
} from "../../../SHARED.CODE/Constants/Cases/account";

export default {
    data() {
        return {
            userObj: new UserObject(),
            signupCases: signupCases,
            loginCases: loginCases
        }
    },
    mounted() {
        this.userObj = this.$store.getters["account/userObj"];
    }
}

