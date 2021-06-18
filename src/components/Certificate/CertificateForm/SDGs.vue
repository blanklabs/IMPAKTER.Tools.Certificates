<template>
  <div class="mainDiv">
    <b-container>
      <b-row>
        <progress-bar :currentStep="2"></progress-bar>
      </b-row>
      <b-row class="main_row">
        <b-col></b-col>
        <b-col cols="8">
          <sdg-selector :selected-s-d-gs="form.sdgs" title="certificate" @next="next"/>
        </b-col>
        <b-col></b-col>
      </b-row>
    </b-container>
    <!--<b-card class="mt-3" header="Form result so far">
      <pre class="m-0">{{ form }}</pre>
    </b-card>-->
  </div>
</template>

<script>
import SdgDisplayMixin from "../../../mixins/SdgDisplayMixin";
import CertificateFormMixin from "@/mixins/CertificateFormMixin";
import FormGuardMixin from "@/mixins/FormGuardMixin";
import ProgressBar from "./ProgressBar.vue";
import SdgSelector from "../../Shared/Forms/SdgSelector";

export default {
  name: "FormSDGs",
  data() {
    return {
      selectedSDGs: [],
    };
  },
  methods: {
    async next(selectedSDGs) {
      this.selectedSDGs = selectedSDGs;
      this.selectedSDGs.sort((a, b) => a - b);
      this.form.sdgs = this.selectedSDGs;
      await this.$store.commit("certificate/setCertificate", this.form);
      this.permitNavigation = true;
      this.$router.push({name: "formPage2-2"});
    },
  },
  mounted() {
    this.selectedSDGs = this.form.sdgs;
  },
  mixins: [SdgDisplayMixin, CertificateFormMixin, FormGuardMixin],
  components: {ProgressBar, SdgSelector},
};
</script>

<style scoped>
.mainDiv {
  margin-left: -100px;
  margin-top: -150px;
}

.main_row {
  margin-top: 100px;
}

.actButton {
  color: black;
  border: 2px solid #989898;
  background: white;
}
</style>
