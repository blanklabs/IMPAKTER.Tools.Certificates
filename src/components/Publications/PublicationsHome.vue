<template>
    <div>
     <DashBoardTabNav :tabs="['Articles', 'Files']" :selected="selected" @selected="setSelected">
        <DashBoardTab :isSelected="selected === 'Articles'" >
            <h1>Articles</h1>
    
        </DashBoardTab>
        <DashBoardTab :isSelected="selected === 'Tailored'" >
        <h1>Files</h1>
      </DashBoardTab>
      
    </DashBoardTabNav>
    </div>
</template>
<script>
import DashBoardTabNav from "../Shared/DashBoardTabNav"
import DashBoardTab from "../Shared/DashBoardTab"
export default {
  name: "Publications",
  components:{ 
    DashBoardTab,
    DashBoardTabNav 
  },
  methods: {
      setSelected(tab) {
        this.selected = tab;
      }
  }
};
</script>
<style scoped>

</style>