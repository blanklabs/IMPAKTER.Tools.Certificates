<template>
  <div>
    <DashBoardTabNav :tabs="['Articles', 'Files']" @selectTab="tabSelect">
      <DashBoardTab :isSelected="selectedTab === 'Articles'">
        <PublicationsTable />
      </DashBoardTab>
      <DashBoardTab :isSelected="selectedTab === 'Files'">
        <Files />
      </DashBoardTab>
    </DashBoardTabNav>
  </div>
</template>
<script>
import DashBoardTabNav from "../Shared/DashBoardTabNav";
import DashBoardTab from "../Shared/DashBoardTab";
import PublicationsTable from "./PublicationsTable";
import Files from "./Files";
export default {
  name: "Publications",
  data() {
    return {
      selectedTab: "Articles",
    };
  },
  components: {
    DashBoardTab,
    DashBoardTabNav,
    PublicationsTable,
    Files,
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
</style>