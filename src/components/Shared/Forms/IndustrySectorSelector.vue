<template>
  <div class="mainDiv">
    <b-container>
      <b-row class="main_row">
        <b-col class="m" cols="6">
          <div class="position-fixed" id="subb">
            <h3>Industries</h3>
            <p>You have selected the following industries</p>
            <div
                class="flex_and_start"
                v-for="(industry, index) in form.industries"
                :key="index"
            >
              <h5 :class="industry === currentIndustry ? 'bold' : ''">
                <i class="far fa-envelope"></i>
                {{ industry + ": " }} {{ industry | industryFilter }}
              </h5>
            </div>
            <br/>
            <b-button class="btn" @click="reselect" variant="outline-primary"
            >Reselect Industries
            </b-button
            >
          </div>
        </b-col>
        <b-col>
          <scroll-view>
            <template
            >
              <PartialIndustrySectors
                  @next="next"
                  @back="back"
                  @submit="submit"
                  @isLast="toggleIsLast"
                  :current-industry-index="currentIndustry"/>
            </template
            >
          </scroll-view>
        </b-col>
      </b-row>

      <!--<b-card class="mt-3" header="Form result so far">
      <pre class="m-0">{{ form }}</pre>
    </b-card>-->
    </b-container>
  </div>
</template>

<script>
import PartialIndustrySectors from "@/components/Shared/Forms/PartialIndustrySectors";

import IndustryDisplayMixin from "@/mixins/IndustryDisplayMixin";
import CertificateFormMixin from "@/mixins/CertificateFormMixin";
import SubmitMixin from "@/mixins/SubmitMixin";
import CommonMixin from "@/mixins/CommonMixin";

export default {
  name: "FormIndustrySectors",
  components: {PartialIndustrySectors},
  data() {
    return {
      currentIndustry: null,
      industryIndex: 0,
      isLast: false,
    };
  },
  methods: {
    next() {
      this.industryIndex++;
      if (this.industryIndex < this.form.industries.length) {
        this.currentIndustry = this.form.industries[this.industryIndex];
      }
      else {
        console.log("executing preview in IndustrySectors component");
        this.$refs.preview_modal.showModal();
        //this.$refs["preview-modal"].show();
      }
    },
    async submit() {
      this.$store.commit("global/toggleLoading", "on");
      this.response = await this.$store.dispatch(
          "certificate/postCertificate",
          this.form
      );
      this.$store.commit("global/toggleLoading", "off");
      if (this.response.status.code == this.transportCodes.SUCCESS) {
        if (this.response.status.case == this.generalCases.FAILED) {
          this.$store.commit("global/setMessagePopup", {
            type: 0,
            message: this.response.status.message,
            redirection: "CertificatesHome",
          });
        }
        else {
          this.$store.commit("global/setMessagePopup", {
            type: 1,
            message: "Certificate posted successfully",
            redirection: "CertificatesHome",
          });
        }
      }
      else {
        this.$store.commit("global/setMessagePopup", {
          type: 0,
          message: this.response.status.message,
          redirection: "CertificatesHome",
        });
      }

      //this.$refs["proceed-modal"].show();
      //this.$store.dispatch("certificate/resetCertificate");
      this.InProgress = false;
      if (this.responseStatus == 1) {
        this.ProgressCompleted = true;
      }
      else this.ProgressFailed = true;
    },
    back() {
      if (this.industryIndex == 0) {
        this.$router.go(-1);
      }
      this.industryIndex--;
      this.currentIndustry = this.form.industries[this.industryIndex];
    },
    addMore() {
      this.$router.push({name: "formPart2"});
    },
    addNew() {
      this.$store.dispatch("certificate/resetCertificate");
      this.$router.push({name: "formPage1"});
    },
    reselect() {
      this.$router.go(-1);
    },
    toggleIsLast() {
      this.isLast = true;
    },
  },
  computed: {},
  mounted() {
    this.industryIndex = 0;
    this.currentIndustry = this.form.industries[this.industryIndex];
  },
  mixins: [
    IndustryDisplayMixin,
    CertificateFormMixin,
    SubmitMixin,
    CommonMixin,
  ],
};
</script>

<style scoped>
* {
  font-family: "Montserrat";
  text-align: left;
}

.mainDiv {
  margin-left: -100px;
  margin-top: -150px;
}

.main_row {
  margin-top: 100px;
}

col {
  text-align: left;
}

.bold {
  color: #f6a8a8;
}

#subb {
  width: 500px;
}

.flex_and_center {
  display: flex;
  justify-content: center;
}

#bottom_button {
  margin-top: 10px;
  width: 100%;
}

.btn {
  color: black;
  border: 2px solid #989898;
  background: white;
}
</style>
