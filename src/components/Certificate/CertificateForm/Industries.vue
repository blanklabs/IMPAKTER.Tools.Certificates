<template>
  <div class="mainDiv">
    <b-container>
      <b-row>
        <progress-bar :currentStep="3"> </progress-bar>
      </b-row>
      <b-row class="main_row">
        <b-col cols="8">
          <b-form-group
            label="Please select all the industries applicable to this certificate"
            v-slot="{ ariaDescribedby }"
            label-size="lg"
          >
            <b-form-checkbox
              class="flex_and_start"
              v-model="allSelected"
              :indeterminate.sync="indeterminate"
              @change="toggleAll"
            >
              <b>{{ allSelected ? "Un-select All" : "Select All" }}</b>
            </b-form-checkbox>
            <b-form-checkbox-group
              id="checkbox-group-1"
              v-model="selected"
              :options="industries"
              :aria-describedby="ariaDescribedby"
              name="flavour-1"
              stacked
            ></b-form-checkbox-group> </b-form-group
        ></b-col>

        <b-col> </b-col>
      </b-row>
      <b-row class="buttons_row">
        <b-button class="btn" @click="back">Back</b-button>
        <b-button class="btn" variant="primary" @click="next">Next</b-button>
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
export default {
  name: "FormIndustries",
  data() {
    return {
      selected: [],
      allSelected: false,
      indeterminate: true,
    };
  },
  methods: {
    toggleAll(checked) {
      this.selected = checked
        ? this.industries.map((x) => {
            return x.value;
          })
        : [];
    },
    async next() {
      this.selected.sort();
      this.form.industries = this.selected;
      await this.$store.commit("certificate/setCertificate", this.form);
      this.$router.push({ name: "formPage3-2" });
    },
    back() {
      this.$router.go(-1);
    },
  },
  mounted() {
    this.selected = this.form.industries;
  },
  mixins: [IndustryDisplayMixin, CertificateFormMixin],
  components: { ProgressBar },
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
