<template>
  <b-container class="mainDiv">
    <b-row>
      <progress-bar :currentStep="2"></progress-bar>
    </b-row>
    <b-row class="main_row">
      <b-col>
        <sdg-targets-selector
          :selectedSdgTargets="form.sdgTargets"
          :selectedSdgs="form.sdgs"
          @next="next"
        />
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import SdgDisplayMixin from "@/mixins/SdgDisplayMixin";
import CertificateFormMixin from "@/mixins/CertificateFormMixin";
import ProgressBar from "./ProgressBar.vue";
import SdgTargetsSelector from "../../Shared/Forms/SdgTargetsSelector";

export default {
  name: "FormSDGtargets",
  components: { ProgressBar, SdgTargetsSelector },
  data() {
    return {
      currentSdg: null,
      sdgIndex: 0,
      responseMessage: null,
    };
  },
  methods: {
    async next(sdgTargets) {
      this.form.sdgTargets = sdgTargets;
      await this.$store.commit("certificate/setCertificate", this.form);
      this.$router.push({ name: "formPage3-1" });
    },
  },
  mixins: [SdgDisplayMixin, CertificateFormMixin],
};
</script>

<style scoped>
.mainDiv {
  margin-left: 100px;
  margin-top: -150px;
}

.main_row {
  margin-top: 100px;
}

h3 {
  text-align: left;
}

.bold {
  color: #f6a8a8;
}

.btn {
  color: black;
  border: 2px solid #989898;
  background: white;
}
</style>
