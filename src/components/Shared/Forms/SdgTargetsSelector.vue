<template>
  <b-container class="mainDiv">
    <b-row class="main_row">
      <b-col cols="6">
        <div class="position-fixed">
          <h3>UN Sustainable Development Goals</h3>
          <p>You selected the following SDGs</p>

          <div
            class="flex_and_start"
            v-for="(sdg, index) in this.selectedSdgs"
            :key="index"
          >
            <h5 :class="sdg === currentSdg ? 'bold' : ''">
              {{ sdg | sdgFilter }}
            </h5>
          </div>
          <br />
          <b-button className="btn" @click="reselect" variant="outline-primary"
            >Reselect SDGs
          </b-button>
        </div>
      </b-col>
      <b-col>
        <PartialSdgTargets
          @next="next"
          @back="back"
          :current-sdg-index="currentSdg"
          :selected="selectedSdgTargets"
        />
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import PartialSdgTargets from "@/components/Shared/Forms/PartialSdgTargets";
import SdgDisplayMixin from "@/mixins/SdgDisplayMixin";

export default {
  name: "sdgTargetSelector",
  components: { PartialSdgTargets },
  data() {
    return {
      currentSdg: null,
      sdgIndex: 0,
      responseMessage: null,
    };
  },
  props: {
    title: String,
    selectedSdgs: [],
    selectedSdgTargets: [],
  },
  methods: {
    async next() {
      this.sdgIndex++;
      if (this.sdgIndex < this.selectedSdgs.length) {
        this.currentSdg = this.selectedSdgs[this.sdgIndex];
      } else {
        this.$emit("next", this.selectedSdgTargets);
      }
    },
    back() {
      if (this.sdgIndex == 0) {
        this.$router.go(-1);
      }
      this.sdgIndex--;
      this.currentSdg = this.this.selectedSdgs[this.sdgIndex];
    },
    reselect() {
      this.$router.go(-1);
    },
  },
  computed: {},
  mounted() {
    this.sdgIndex = 0;
    this.currentSdg = this.selectedSdgs[this.sdgIndex];
  },
  mixins: [SdgDisplayMixin],
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
