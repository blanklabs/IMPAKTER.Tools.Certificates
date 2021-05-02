import signupModel from "../../../SHARED.CODE/Objects/User/signupModel";

export default {
    data() {
        return {
            signupModel: new signupModel(),
        }
    },
    mounted() {
        this.signupModel = this.$store.getters["user/signupForm"];
    }
}

