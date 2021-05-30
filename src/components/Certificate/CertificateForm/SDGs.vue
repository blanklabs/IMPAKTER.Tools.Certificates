<template>
  <div>
    <b-container>
      <b-row>
        <progress-bar :currentStep="2"> </progress-bar>
      </b-row>
      <b-row class="main_row">
        <b-col> </b-col>
        <b-col cols="8">
          <b-form-group
            v-slot="{ ariaDescribedby }"
            label-size="lg"
            label="Please select all the United Nations Susainable Development Goals (SDGs) applicable to this certificate"
          >
            <b-form-checkbox
              class="flex_and_start"
              v-model="isAllSelected"
              :indeterminate="indeterminate"
              @change="toggleAll"
            >
              <b>{{ isAllSelected ? "Un-select All" : "Select All" }}</b>
            </b-form-checkbox>
            <b-form-checkbox-group
              id="checkbox-group-1"
              v-model="selectedSDGs"
              :options="sdgs"
              :aria-describedby="ariaDescribedby"
              name="flavour-1"
              stacked
            ></b-form-checkbox-group>
          </b-form-group>
        </b-col>
        <b-col> </b-col>
      </b-row>
      <b-row class="buttons_row">
        <b-button class="actButton" @click="back"> Back</b-button>
        <b-button class="actButton" @click="next"> Next</b-button>
      </b-row>
    </b-container>
    <!--<b-card class="mt-3" header="Form result so far">
      <pre class="m-0">{{ form }}</pre>
    </b-card>-->
  </div>
</template>

<script>
import SdgMixin from "../../../mixins/SdgMixin";
import CertificateFormMixin from "@/mixins/CertificateFormMixin";
import FormGuardMixin from "@/mixins/FormGuardMixin";
import ProgressBar from "./ProgressBar.vue";
export default {
  name: "FormSDGs",
  data() {
    return {
      selectedSDGs: [],
      isAllSelected: false,
    };
  },
  methods: {
    toggleAll(checked) {
      this.selectedSDGs = checked
        ? this.sdgs.map((x) => {
            return x.value;
          })
        : [];
    },
    async next() {
      this.selectedSDGs.sort((a, b) => a - b);
      this.form.sdgs = this.selectedSDGs;
      await this.$store.commit("certificate/setCertificate", this.form);
      this.permitNavigation = true;
      this.$router.push({ name: "formPage2-2" });
    },
    back() {
      this.$router.go(-1);
    },
  },
  mounted() {
    this.selectedSDGs = this.form.sdgs;
  },
  mixins: [SdgMixin, CertificateFormMixin, FormGuardMixin],
  components: { ProgressBar },
};
</script>

<style scoped>
.actButton {
  color: black;
  border: 2px solid #989898;
  background: white;
}
</style>
