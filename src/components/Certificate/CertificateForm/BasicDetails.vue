<template>
  <div class="mainDiv">
    <b-container>
    <b-row>
        <progress-bar :currentStep="1"> </progress-bar>
    </b-row>
      <b-row class="main_row">
        <b-col></b-col>
        <b-col cols="8">
          <b-form @submit="onSubmit" @reset="onReset">
            <b-form-group
              label-cols="4"
              label-cols-lg="3"
              label="Name of the Certificate:"
              label-for="name"
              label-align-md="left"
              description="Ex: Rain Forest Alliance"
            >
              <b-form-input
                id="name"
                v-model="form.certificate.name"
                placeholder="Name"
                required
              ></b-form-input>
            </b-form-group>
            <br />
            <b-form-group
              label-cols="4"
              label-cols-lg="3"
              label="Certificate Description:"
              label-for="description"
              label-align-sm="left"
              id="desc"
            >
              <b-form-textarea
                id="description"
                v-model="form.certificate.description"
                placeholder="Please describe what this certificate is all about..."
                rows="3"
                max-rows="6"
              ></b-form-textarea>
            </b-form-group>
            <b-tooltip
              target="desc__BV_label_"
              triggers="hover"
              variant="secondary"
              placement="lefttop"
            >
              Please describe your certificate in around 500 words approx.
            </b-tooltip>

            <br />

            <!--
            <b-form-group
              label-cols="4"
              label-cols-lg="3"
              label="Please upload the certificate logo"
              label-for="description"
              label-align-sm="left"
            >
              <input type="file" />
              <input
                type="file"
                id="file"
                ref="file"
                v-on:change="onFileChange()"
              /><b-button v-on:click="submitFile()">Upload!</b-button>
            </b-form-group>-->
            <br />
            <b-form-group
              label-cols="4"
              label-cols-lg="3"
              label="Priority level:"
              label-for="priority"
              label-align-sm="left"
              id="prio"
            >
              <b-form-select
                id="priority"
                v-model="form.certificate.priority"
                :options="threeScale"
              ></b-form-select>
            </b-form-group>
            <b-tooltip
              target="prio__BV_label_"
              triggers="hover"
              variant="secondary"
              placement="lefttop"
            >
              How important is it to attain this certificate for a given
              company?
            </b-tooltip>
            <br />
            <b-form-group
              id="input-group-4"
              v-slot="{ ariaDescribedby }"
              label="What is the level of engagement with the UN Sustainable Development Goals?"
              label-for="rating"
              label-align-sm="left"
            >
              <b-form-radio-group
                class="pt-2"
                v-model="form.certificate.sdgEngagement"
                :options="sdgEngagementOptions"
                id="rating"
                :aria-describedby="ariaDescribedby"
                stacked
              >
              </b-form-radio-group>
            </b-form-group>
            <b-form-group
              label-align-sm="left"
              description="As you selected other, please specify"
              v-if="form.certificate.sdgEngagement == '5'"
            >
              <b-form-input
                id="name"
                v-model="form.certificate.sdgEngagementOther"
                placeholder="Other"
                required
              ></b-form-input>
            </b-form-group>

            <hr />
            <h5>
              Please add links to documents that describe this certificate
            </h5>
            <b-card>
              <b-card-text>
                <div v-for="(item, index) in form.documents" :key="index">
                  <b-form-group
                    label-cols="4"
                    label-cols-lg="3"
                    label="Name of the Document:"
                    label-for="name"
                    label-align-sm="left"
                  >
                    <b-form-input
                      id="name"
                      v-model="form.documents[index].documentName"
                      placeholder="Certificate attaining procedure"
                    ></b-form-input>
                  </b-form-group>
                  <b-form-group
                    label-cols="4"
                    label-cols-lg="3"
                    label="Link to the document:"
                    label-for="name"
                    label-align-sm="left"
                  >
                    <b-form-input
                      id="name"
                      v-model="form.documents[index].documentUrl"
                      placeholder="https://www.iso.org/obp/ui/#iso:std:iso:14001:ed-3:v1:en"
                    ></b-form-input>
                  </b-form-group>
                  <hr />
                </div>
              </b-card-text>
              <ActionButton
                btnIcon="file-earmark-medical"
                btnDescription="   Add another document"
                :action="incrementDocumentCount"
              />
            </b-card>
            <hr />

            <b-row class="buttons_row">
              <b-button class="actButton" type="reset">Reset</b-button>
              <b-button class="actButton" type="submit">Next</b-button>
            </b-row>
          </b-form>
        </b-col>
        <b-col></b-col>
      </b-row>
      <!--<b-card class="mt-3" header="Form result so far">
      <pre class="m-0">{{ form }}</pre>

    </b-card>-->
    </b-container>
  </div>
</template>

<script>
import CertificateFormMixin from "@/mixins/CertificateFormMixin";
import FormGuardMixin from "@/mixins/FormGuardMixin";
import ProgressBar from "./ProgressBar.vue";
import ActionButton from "@/components/Shared/ActionButton";
import { document } from "../../../../../SHARED.CODE/Objects/Certificate/certificateObjects";
import { sdgEngagementOptions } from "../../../../../SHARED.CODE/Constants/Index/Certificates/sdgEngagement";

export default {
  data() {
    return {
      file: "",
      name: "CertificateFormPage1",
      sdgEngagementOptions: sdgEngagementOptions,
      sdgEngagementOther: null,
    };
  },
  methods: {
    async onSubmit(event) {
      event.preventDefault();
      await this.$store.commit("certificate/setCertificate", this.form);
      this.permitNavigation = true;
      this.$router.push({ name: "formPage2-1" });
    },
    onReset() {
      this.$store.dispatch("certificate/resetCertificate");
    },
    onFileChange() {
      this.file = this.$refs.file.files[0];
      if (this.file) {
        this.$store
          .dispatch("upload/fetchSignatureAndPolicy", {
            name: this.file.name,
            type: this.file.type,
          })
          .then(() => {
            let policy = this.$store.state.uploadPolicy;
            var formData = new FormData();
            formData.append("key", policy.key);
            formData.append("acl", policy.acl);
            formData.append("Content-Type", this.file.type);
            formData.append(
              "success_action_status",
              policy.success_action_status
            );
            formData.append("policy", policy.policy);
            formData.append("x-amz-credential", policy["x-amz-credential"]);
            formData.append("x-amz-algorithm", policy["x-amz-algorithm"]);
            formData.append("x-amz-date", policy["x-amz-date"]);
            formData.append(
              "x-amz-security-token",
              policy["x-amz-security-token"]
            );
            formData.append("x-amz-signature", policy["x-amz-signature"]);
            formData.append("file", this.file);
            this.$store.dispatch("upload/upload", formData).then(() => {});
          });
      }
    },
    incrementDocumentCount() {
      this.form.documents.push(new document());
    },
  },
  mixins: [CertificateFormMixin, FormGuardMixin],
  components: { ProgressBar, ActionButton },
  mounted() {},
};
</script>

<style scoped>
.mainDiv{
  margin-left: -100px;
  margin-top: -150px;
}
.main_row{
  margin-top: 100px;
}
#rating {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left !important;
}

#rating {
  margin-bottom: 10px !important;
}
.card {
  border: none;
}
.actButton {
  color: black;
  border: 2px solid #989898;
  background: white;
}

</style>