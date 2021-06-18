<template>
  <b-container>
    <b-row>
      <b-form-group
          v-slot="{ ariaDescribedby }"
          label-size="lg"
          :label="titleShort + title"
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
    </b-row>
    <b-row class="buttons_row">
      <b-button class="actButton" @click="back"> Back</b-button>
      <b-button class="actButton" @click="next"> Next</b-button>
    </b-row>
  </b-container>
</template>

<script>
import SdgDisplayMixin from "../../../mixins/SdgDisplayMixin";
import FormGuardMixin from "@/mixins/FormGuardMixin";

export default {
  name: "SdgSelector",
  data() {
    return {
      isAllSelected: false,
      titleShort: "Please select all the United Nations Sustainable Development Goals (SDGs) applicable to this "
    };
  },
  props: {
    title: String,
    selectedSDGs: []
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
      this.$emit("next", this.selectedSDGs);
    },
    back() {
      this.$router.go(-1);
    },
  },
  mixins: [SdgDisplayMixin, FormGuardMixin],
  components: {},
};
</script>

<style scoped>
.actButton {
  color: black;
  border: 2px solid #989898;
  background: white;
}
</style>
