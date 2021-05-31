<template>
  <div class="DashTab">
    <ul class="nav">
      <li v-for="tab in tabs" :key="tab" class="nav-item">
        <a
          class="nav-link"
          :class="{ active: tab == selected }"
          @click="setTab(tab)"
        >
          {{ tab }}
        </a>
      </li>
    </ul>
    <hr />
    <slot></slot>
  </div>
</template>
<script>
export default {
  data() {
    return {
      selected: "",
    };
  },
  props: {
    tabs: {
      type: Array,
      required: true,
    },
  },
  methods: {
    setTab(tab) {
      this.selected = tab;
      this.$emit("selectTab", tab);
    },
  },
  mounted() {
    //or create a default prop that can be passed from the parent
    this.selected = this.tabs[0];
  },
};
</script>
<style scoped>
* {
  font-family: "Montserrat";
}
.DashTab {
  margin-left: -25px;
  width: 85rem;
}
ul {
  margin-bottom: 0;
  padding-bottom: 0;
}
a {
  font-size: 18px;
  color: #222222;
  text-decoration: none;
}
.nav-item {
  border-bottom: solid transparent;
  margin-bottom: -5px;
}
.nav-link:hover{

  border-bottom: solid #fe6663;
   cursor:pointer
}

.nav-link.active {
  border-bottom: solid #fe6663;
}

hr {
  margin-top: 0;
  padding-top: 0;
  height: 3px;
  background-color: #ebebeb;
  border: none;
}
</style>