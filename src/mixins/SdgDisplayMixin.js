import { sdgs } from "../../../SHARED.CODE/Constants/Common/sdgs";
import { sdgTargets } from "../../../SHARED.CODE/Constants/Common/sdgTargets";



export default {
  data() {
    return {
      //manual
      sdgs: sdgs,
      sdgTargets: sdgTargets,
      computedSdgTargets: []
    }

  },
  methods: {
    getSdgsForDisplay(rawSdgs) {
      let computedSdgs = [];
      rawSdgs.forEach((sdg) => {
        var temp = this.sdgs.filter(function (item) {
          return item.value == sdg;
        });
        computedSdgs.push(temp[0]);
      });
      return computedSdgs;
    },

  },
  computed: {

  }
}