<template>
  <b-modal
    ref="preview-modal"
    v-model="openModal"
    hide-footer
    size="xl"
    :title="isSavePreview ? 'Certificate Preview' : 'Certificate Information'"
  >
    <!--<h3>variant 1: Horizontal tabs</h3>
    <b-card no-body>
      <b-tabs card>
        <b-tab title="Basic Information" active>
          <b-card-text>
            <p><b>Certificate Name:</b> {{ form.name }}</p>
            <p>Certificate Description: {{ form.description }}</p>
            <p>Priority: {{ form.priority }}</p>
            <p>Active status: {{ form.name }}</p>
          </b-card-text>
        </b-tab>
        <b-tab title="UN Sustainable Development Goals">
          <b-card-text>content</b-card-text>
        </b-tab>
        <b-tab title="Industries">
          <b-card-text>content</b-card-text>
        </b-tab>
      </b-tabs>
    </b-card>
    <hr />-->
    <!--<h3>variant 2: vertical tabs</h3>-->
    <b-card no-body v-if="!isSavePreview">
      <b-tabs pills card vertical>
        <b-tab class="tabClass" title="Basic Information" active>
          <b-card-text>
            <p><b>Certificate Name:</b> {{ form.certificate.name }}</p>
            <p>
              <b>Certificate Description:</b> {{ form.certificate.description }}
            </p>
            <p><b>Priority:</b> {{ form.certificate.priority }}</p>
            <p><b>Active status:</b> {{ form.certificate.activeStatus }}</p>
            <p><b>Goal of the certificate:</b> {{ form.certificate.goal }}</p>
            <p>
              <b>UN SDG Engagement:</b> {{ form.certificate.sdgEngagement }}
            </p>
          </b-card-text>
        </b-tab>
        <b-tab title="UN Sustainable Development Goals">
          <b-card-text>
            <p v-for="(sdg, index) in form.sdgs" :key="index">
              {{ sdg | sdgFilter }}
            </p>
          </b-card-text>
        </b-tab>

        <b-tab title="Industries">
          <b-card-text>
            <p v-for="(industry, index) in form.industries" :key="index">
              {{ industry | industryFilter }}
            </p>
          </b-card-text>
        </b-tab>
        <b-tab title="Documents">
          <b-card-text>
            <p v-for="(document, index) in form.documents" :key="index">
              {{ document.name }}:
              <a target="_blank" :href="document.url">link</a
              ><span>(language: {{ document.language | language }})</span>
            </p>
          </b-card-text>
        </b-tab>
      </b-tabs>
    </b-card>
    <!--<h3>variant 3: Long form</h3>-->
    <div v-if="isSavePreview">
      <b-card title="Basic Information">
        <p><b>Certificate Name:</b> {{ form.certificate.name }}</p>
        <p><b>Certificate Description:</b> {{ formattedText }}</p>
        <p><b>Priority:</b> {{ form.certificatepriority }}</p>
        <p><b>Active status:</b> {{ form.certificate.activeStatus }}</p>
        <p><b>Goal of the certificate:</b> {{ form.certificate.goal }}</p>
        <p><b>UN SDG Engagement:</b> {{ form.certificate.sdgEngagement }}</p>
      </b-card>
      <br />
      <b-card title="UN Sustainable Development Goals">
        <p v-for="(sdg, index) in form.sdgs" :key="index">
          {{ sdg }}
          <!--<span v-for="(target,index) in form.sdgTargets.filter()" :key="index">{{target}}</span>-->
        </p>
      </b-card>
      <br />
      <b-card title="Industries">
        <p v-for="(industry, index) in form.industries" :key="index">
          {{ industry }}
        </p>
      </b-card>
    </div>
    <br />
    <b-row class="buttons_row" v-if="isSavePreview">
      <b-button class="btn" @click="submit">Submit</b-button>
    </b-row>
    <br />
    <b-row class="buttons_row" v-if="!isSavePreview">
      <b-button class="btn" @click="edit">Edit</b-button>
      <b-button class="btn" @click="deleteCert">Delete</b-button>
      <b-button class="btn" @click="close"> Close</b-button>
    </b-row>
  </b-modal>
</template>

<script>
import CertificateFormMixin from "@/mixins/CertificateFormMixin";
import CertificateDisplayMixin from "@/mixins/CertificateDisplayMixin";

export default {
  name: "CertificateProfile",
  data() {
    return { form: {}, openModal: false };
  },
  props: {
    isSavePreview: Boolean,
  },
  filters: {
    language: function (value) {
      if (value == "en") {
        return "English";
      } else if (value == "es") {
        return "Spanish";
      }
    },
  },
  methods: {
    showModal() {
      console.log("executing showModal in CertificateProfile component");
      this.form = this.$store.getters["certificate/certificate"];
      //this.openModal = true;
      this.$refs["preview-modal"].show();
    },
    add() {},
    submit() {
      this.$emit("submit");
    },
    edit() {
      this.$emit("edit");
    },
    deleteCert() {
      this.$emit("delete");
    },
    close() {
      this.$refs["preview-modal"].hide();
    },
  },
  mixins: [CertificateFormMixin, CertificateDisplayMixin],
  mounted() {
    this.form = this.$store.getters["certificate/certificate"];
  },
  computed: {
    formattedText() {
      try {
        var input = this.form.description;
        input = input.replace(/[\n]{2}/, "</p><p>");
        input = input.replace("\n\n", "<br/>");
        input = input.replace(/\*\*(.+)\*\*/, "<strong>$1</strong>");
        input = input.replace(/\*(.+)\*/, "<em>$1</em>");
        return input;
      } catch (err) {
        return this.form.description;
      }
    },
  },
};
</script>
<style scoped>
.btn {
  color: black;
  border: 2px solid #989898;
  background: white;
}
</style>