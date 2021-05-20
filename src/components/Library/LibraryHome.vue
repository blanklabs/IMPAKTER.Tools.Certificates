<template>
  <div>
    <DashBoardTabNav
      :tabs="['My Documents', 'My Articles', 'News']"
      @selectTab="tabSelect"
    >
      <DashBoardTab :isSelected="selectedTab === 'My Documents'">
        <MyDocuments />
      </DashBoardTab>
      <DashBoardTab :isSelected="selectedTab === 'My Articles'">
        <MyArticles />
      </DashBoardTab>
      <DashBoardTab :isSelected="selectedTab === 'News'">
        <News />
      </DashBoardTab>
    </DashBoardTabNav>
  </div>
</template>
<script>
import DashBoardTabNav from "../Shared/DashBoardTabNav";
import DashBoardTab from "../Shared/DashBoardTab";
import MyArticles from "./Articles";
import MyDocuments from "./MyDocuments";
import News from "./News";
export default {
  name: "Library",
  data() {
    return {
      selectedTab: "My Documents",
    };
  },
  components: {
    DashBoardTab,
    DashBoardTabNav,
    MyArticles,
    MyDocuments,
    News,
  },
  methods: {
    tabSelect(tab) {
      console.log(tab);
      this.selectedTab = tab;
      //do something with the selected tab if needed
    },
  },
};
</script>
<style scoped>
* {
  font-family: "Montserrat";
  text-align: left;
}
</style>