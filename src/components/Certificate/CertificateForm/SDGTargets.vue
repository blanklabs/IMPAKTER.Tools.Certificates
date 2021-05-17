<template>
  <b-container class="bv-example-row">
    <b-row>
      <progress-bar :currentStep="2"> </progress-bar>
    </b-row>
    <b-row class="main_row">
      <b-col cols="6">
        <div class="">
          <h3>UN Sustainable Development Goals</h3>
          <p>You selected the following SDGs</p>

          <div
            class="flex_and_start"
            v-for="(sdg, index) in form.computedSdgs"
            :key="index"
          >
            <h5 :class="sdg.value === currentSdg ? 'bold' : ''">
              {{ sdg.text }}
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
    <b-modal ref="proceed-modal" hide-footer>
      <h4>The Certificate: "{{ form.name }}" - {{ this.responseMessage }}</h4>
      <b-button @click="addMore" > Add more details</b-button>
      <br />
      <b-button @click="addNew"> Add another Certificate</b-button>
      <br />
      <b-button to="/organization/home">Go to my certificates</b-button>
    </b-modal>
  </b-container>
</template>

<script>
import PartialSdgTargets from "@/components/Certificate/CertificateForm/PartialSdgTargets";
import SdgMixin from "@/mixins/SdgMixin";
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
        this.$router.push({ name: "formPage3-1" });
      }

      //else this.$router.push({name:'formPage3'})
    },
    back() {
      if (this.sdgIndex == 0) {
        this.$store.dispatch("certificate/resetComputed");
        this.$router.go(-1);
      }
      this.sdgIndex--;
      this.currentSdg = this.form.sdgs[this.sdgIndex];
    },
    addMore() {
      this.$router.push({ name: "formPart2" });
    },
    addNew() {
      this.$store.dispatch("certificate/resetCertificate");
      this.$router.push({ name: "formPage1" });
    },
    reselect() {
      this.$store.dispatch("certificate/resetComputed");
      this.$router.go(-1);
    },
  },
  computed: {},
  mounted() {
    this.sdgIndex = 0;
    this.currentSdg = this.form.sdgs[this.sdgIndex];
  },
  mixins: [SdgMixin, CertificateFormMixin],
};
</script>

<style scoped>
h3{
  text-align: left;
}
.bold {
  color: #F6A8A8;
}

.btn{
  color:black;
  border: 2px solid #989898;
  background: white;
}

</style>
