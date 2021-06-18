<template>
  <div class="mainDiv">
    <b-container>
      <b-row>
        <progress-bar :currentStep="3"> </progress-bar>
      </b-row>
      <b-row class="main_row">
        <b-col cols="8">
          <industry-selector
            :selected="form.industries"
            :title="'certificate'"
            @next="next"
          />
        </b-col>
        <b-col> </b-col>
      </b-row>
    </b-container>
    <!--<b-card class="mt-3" header="Form result so far">
      <pre class="m-0">{{ form }}</pre>
    </b-card>-->
  </div>
</template>

<script>
import IndustryDisplayMixin from "../../../mixins/IndustryDisplayMixin";
import CertificateFormMixin from "@/mixins/CertificateFormMixin";
import ProgressBar from "./ProgressBar.vue";
import IndustrySelector from "../../Shared/Forms/IndustrySelector.vue";
export default {
  name: "FormIndustries",
  data() {
    return {};
  },
  methods: {
    async next(selected) {
      this.form.industries = selected;
      await this.$store.commit("certificate/setCertificate", this.form);
      this.$router.push({ name: "formPage3-2" });
    },
  },
  mixins: [IndustryDisplayMixin, CertificateFormMixin],
  components: { ProgressBar, IndustrySelector },
};
</script>

<style scoped>
* {
  font-family: "Montserrat";
  text-align: left;
}
.mainDiv {
  margin-top: -150px;
}
.main_row {
  margin-top: 100px;
}
#checkbox-group-1 {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left !important;
}
.btn {
  color: black;
  border: 2px solid #989898;
  background: white;
}
</style>
