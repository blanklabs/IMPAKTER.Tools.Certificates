import { sdgs } from "../../../SHARED.CODE/Constants/Common/sdgs";
import { sdgTargets } from "../../../SHARED.CODE/Constants/Common/sdgTargets";



export default {
  data() {
    return {
      //manual
      sdgs: sdgs,
      sdgTargets: sdgTargets,
      computedSdgs: [],
      computedSdgTargets: []
    }

  },
  methods: {
    computeSDGs() {
      this.computedSdgs = [];
      this.form.sdgs.forEach((sdg) => {
        var temp = this.sdgs.filter(function (item) {
          return item.value == sdg;
        });
        this.computedSdgs.push(temp[0]);
      });
    },

  },
  computed: {

  }
}