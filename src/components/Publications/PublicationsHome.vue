<template>
  <div class="publicationsMain">
    <div class="header">
      <ActionButton
        class="addBtn"
        btnIcon="plus"
        btnDescription="Submit new article"
        :action="add"
      ></ActionButton>
    </div>
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
import ActionButton from "./../Shared/ActionButton";
import Files from "./Files";
export default {
  name: "Publications",
  data() {
    return {
      selectedTab: "All",
    };
  },
  components: {
    DashBoardTab,
    DashBoardTabNav,
    PublicationsTable,
    Files,
    ActionButton
  },
  methods: {
    tabSelect(tab) {
      console.log(tab);
      this.selectedTab = tab;
      //do something with the selected tab if needed
    },
    add() {
      this.$router.push({ name: "UploadPublication" });
    },
  },
};
</script>
<style scoped>
.publicationsMain{
  width: 85%;
  min-height: 55vh; 
}
#main_head {
  justify-content: flex-start;
  background-color: white;
  z-index: 100;
  width: 100%;
}
#main_heading {
  justify-content: flex-start;
}
.header {
  margin-bottom: 50px;
  display: block;
  padding: 10px;
}
.addBtn {
  margin-top: 50px;
  float: right;
}
.titleHeader {
  float: left;
}

</style>