import { threeScale } from "./../../../SHARED.CODE/Constants/Common/scales"

export default {
    data() {
        return {
            form: {},
            threeScale: threeScale
        }
    },
    mounted() {
        this.form = this.$store.getters["certificate/certificate"];
    }
}

