import { threeScale } from "../../../SHARED.CODE/Constants/Common/scales";


export default {

  filters: {
    threeScaleFilter: function (rawScale) {
      try {
        if (rawScale == 0 || rawScale) {
          var temp = threeScale.filter(function (item) {
            return item.value == rawScale;
          })
          let scale = temp[0];
          return scale.text
        }
        else {
          return rawScale;
        }

      }
      catch (err) {
        return rawScale;
      }

    }

  },
  methods: {
    getThreeScaleForDisplay(rawNumber) {
      try {
        var temp = threeScale.filter(function (item) {
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