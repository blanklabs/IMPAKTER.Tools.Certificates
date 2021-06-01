<template>
  <div>
    <div>
      <b>Please select applicable UN SDG targets for each SDG</b>
      <!--<p>SDG Targets for </p>-->
    </div>
    <br />
    <div id="scroll">
      <!--<p>Current SDG Index: {{ currentSdgIndex }}</p>-->
      <b-row>
        <b-form-group v-slot="{ ariaDescribedby }">
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
            v-model="selectedSdgTargets"
            :aria-describedby="ariaDescribedby"
            name="flavour-1"
            stacked
          >
            <b-form-checkbox
              v-for="target in computedTargets"
              :value="target.value"
              class="mb-3"
              :key="target.text"
              ><b>{{ "Target " + target.value + ": " }} </b>
              {{ target.text }}
            </b-form-checkbox>
          </b-form-checkbox-group>
        </b-form-group>
      </b-row>
      <hr />
      <b-row class="buttons_row">
        <b-button className="btn" @click="back">Previous</b-button>
        <b-button className="btn" @click="next">Next</b-button>
      </b-row>
      <b-row class="buttons_row">
        <b-button @click="skip">Skip Targets</b-button>
      </b-row>
    </div>
  </div>
</template>

<script>
import SdgDisplayMixin from "@/mixins/SdgDisplayMixin";
import CertificateFormMixin from "@/mixins/CertificateFormMixin";

export default {
  name: "PartialSdgTargets",
  data() {
    return {
      isAllSelected: false,
      selectedSdgTargets: [],
      currentSdgTargetsList: [],
    };
  },
  methods: {
    toggleAll(checked) {
      this.selectedSdgTargets = checked
        ? this.computedTargets.map((x) => {
            return x.value;
          })
        : [];
    },
    next() {
      this.form.sdgTargets = this.selectedSdgTargets;
      this.currentSdgTargetsList = [];
      this.$emit("next");
      window.scrollTo(0, 0);
    },
    back() {
      this.currentSdgTargetsList = [];
      this.$emit("back");
    },
    skip() {
      this.$router.push({ name: "formPage3-1" });
    },
  },
  props: { currentSdgIndex: Number },
  computed: {
    computedTargets() {
      this.sdgTargets.forEach((element) => {
        if (element.goal == this.currentSdgIndex) {
          this.currentSdgTargetsList.push({
            value: element.code,
            text: element.title,
          });
        }
      });
      return this.currentSdgTargetsList;
    },
  },
  mounted() {
    this.selectedSdgTargets = this.form.sdgTargets;
  },
  mixins: [SdgDisplayMixin, CertificateFormMixin],
};
</script>

<style scoped>
#checkbox-group-1 {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left !important;
}
.position-fixed {
  margin-bottom: 20px;
  background-color: rgb(255, 255, 255);
  z-index: 80;
}

#scroll {
  margin-top: 0px;
}

.btn {
  color: black;
  border: 2px solid #989898;
  background: white;
}
hr {
  position: absolute;
  margin-top: 0;
  padding-top: 0;
  height: 3px;
  width: 100%;
  background-color: #ebebeb;
  border: none;
}
</style>
