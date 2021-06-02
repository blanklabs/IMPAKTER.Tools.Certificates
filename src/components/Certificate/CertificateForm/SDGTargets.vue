<template>
  <b-container class="mainDiv">
    <b-row>
      <progress-bar :currentStep="2"> </progress-bar>
    </b-row>
    <b-row class="main_row">
      <b-col cols="6">
        <div class="position-fixed">
          <h3>UN Sustainable Development Goals</h3>
          <p>You selected the following SDGs</p>

          <div
            class="flex_and_start"
            v-for="(sdg, index) in form.sdgs"
            :key="index"
          >
            <h5 :class="sdg === currentSdg ? 'bold' : ''">
              {{ sdg | sdgFilter }}
            </h5>
          </div>
          <br />
          <b-button className="btn" @click="reselect" variant="outline-primary"
            >Reselect SDGs</b-button
          >
        </div>
      </b-col>
      <b-col
        ><PartialSdgTargets
          @next="next"
          @back="back"
          :current-sdg-index="currentSdg"
      /></b-col>
    </b-row>

    <!--<b-card class="mt-3" header="Form result so far">
      <pre class="m-0">{{ form }}</pre>
    </b-card>-->
  </b-container>
</template>

<script>
import PartialSdgTargets from "@/components/Certificate/CertificateForm/PartialSdgTargets";
import SdgDisplayMixin from "@/mixins/SdgDisplayMixin";
import CertificateFormMixin from "@/mixins/CertificateFormMixin";
import ProgressBar from "./ProgressBar.vue";
export default {
  name: "FormSDGtargets",
  components: { PartialSdgTargets, ProgressBar },
  data() {
    return {
      currentSdg: null,
      sdgIndex: 0,
      responseMessage: null,
    };
  },
  methods: {
    async next() {
      this.sdgIndex++;
      if (this.sdgIndex < this.form.sdgs.length) {
        this.currentSdg = this.form.sdgs[this.sdgIndex];
      } else {
        await this.$store.commit("certificate/setCertificate", this.form);
        this.$router.push({ name: "formPage3-1" });
      }

      //else this.$router.push({name:'formPage3'})
    },
    back() {
      if (this.sdgIndex == 0) {
        this.$router.go(-1);
      }
      this.sdgIndex--;
      this.currentSdg = this.form.sdgs[this.sdgIndex];
    },
    reselect() {
      this.$router.go(-1);
    },
  },
  computed: {},
  mounted() {
    this.sdgIndex = 0;
    this.currentSdg = this.form.sdgs[this.sdgIndex];
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
