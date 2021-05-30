import { industries } from "../../../SHARED.CODE/Constants/Common/industries";
import { subIndustries } from "../../../SHARED.CODE/Constants/Common/industrySectors";


export default {
    data() {
        return {
            industries: industries,
            subIndustries: subIndustries,
            computedIndustries: []
        }
    },
    methods: {
        computeIndustries() {
            this.computedIndustries = []
            this.form.industries.forEach(
                industry => {
                    var temp = industries.filter(function (item) {
                        return item.value == industry;
                    })
                    this.computedIndustries.push(temp[0])
                })
        }

    }
}
