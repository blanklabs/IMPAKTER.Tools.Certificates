import { industries } from "../../../SHARED.CODE/Constants/Common/industries";
import { subIndustries } from "../../../SHARED.CODE/Constants/Common/industrySectors";


export default {
    data() {
        return {
            industries: industries,
            subIndustries: subIndustries,
        }
    },
    methods: {
        getIndustriesForDisplay(rawIndustries) {
            let computedIndustries = []
            rawIndustries.forEach(
                industry => {
                    var temp = industries.filter(function (item) {
                        return item.value == industry;
                    })
                    computedIndustries.push(temp[0])
                })
            return computedIndustries;
        }

    }
}
