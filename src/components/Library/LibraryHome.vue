<template>
    <div>
     <DashBoardTabNav :tabs="['My Documents', 'My Articles', 'News']" :selected="selected" @selected="setSelected">
        <DashBoardTab :isSelected="selected === 'My Documents'" >
            <h1>My Documents</h1>
    
        </DashBoardTab>
        <DashBoardTab :isSelected="selected === 'My Articles'" >
        <h1>My Articles</h1>
      </DashBoardTab>
      <DashBoardTab :isSelected="selected === 'News'" >
        <h1>News</h1>
      </DashBoardTab>
      
    </DashBoardTabNav>
    </div>
</template>
<script>
import DashBoardTabNav from "../Shared/DashBoardTabNav"
import DashBoardTab from "../Shared/DashBoardTab"
export default {
  name: "Library",
  data() {
    return{
     selected: 'My Documents'
   }
  },
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