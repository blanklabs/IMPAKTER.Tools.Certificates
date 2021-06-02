import { industries } from "../../../SHARED.CODE/Constants/Common/industries";
import { subIndustries } from "../../../SHARED.CODE/Constants/Common/industrySectors";


export default {
    data() {
        return {
            industries: industries,
            subIndustries: subIndustries,
        }
    },
    filters: {
        industryFilter: function (rawIndustry) {
            try {
                if (rawIndustry) {
                    var temp = industries.filter(function (item) {
                        return item.value == rawIndustry;
                    })
                    let industry = temp[0];
                    return industry.text
                }
                else {
                    return rawIndustry;
                }

            }
            catch (err) {
                return rawIndustry;
            }

        }

    },
    methods: {
        //obsolete - using filters instead
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
