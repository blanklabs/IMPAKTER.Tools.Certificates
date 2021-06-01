import { threeScale } from "../../../SHARED.CODE/Constants/Common/scales";


export default {
  data() {
    return {
      threeScale: threeScale,
    }

  },
  methods: {
    getThreeScaleForDisplay(rawNumber) {
      try {
        var temp = this.threeScale.filter(function (item) {
          return item.value == rawNumber;
        });
        let text = temp[0].text;
        return text;
      }
      catch (err) {
        return rawNumber;
      }

    },

  },
  computed: {

  }
}