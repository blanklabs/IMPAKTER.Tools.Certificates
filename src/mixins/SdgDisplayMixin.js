import { sdgs } from "../../../SHARED.CODE/Constants/Common/sdgs";
import { sdgTargets } from "../../../SHARED.CODE/Constants/Common/sdgTargets";



export default {
  data() {
    return {
      sdgs: sdgs,
      sdgTargets: sdgTargets,
      computedSdgTargets: []
    }

  },
  filters: {
    sdgFilter: function (rawSdg) {
      try {
        if (rawSdg) {
          var temp = sdgs.filter(function (item) {
            return item.value == rawSdg;
          })
          let sdg = temp[0];
          return sdg.text
        }
        else {
          return rawSdg;
        }

      }
      catch (err) {
        return rawSdg;
      }

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