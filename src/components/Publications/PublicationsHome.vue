<template>
    <div>
     <DashBoardTabNav :tabs="['Articles', 'Files']" :selected="selected" @selected="setSelected">
        <DashBoardTab :isSelected="selected === 'Articles'" >
            <Articles/>
    
        </DashBoardTab>
        <DashBoardTab :isSelected="selected === 'Files'" >
        <Files/>
      </DashBoardTab>
      
    </DashBoardTabNav>
    </div>
</template>
<script>
import DashBoardTabNav from "../Shared/DashBoardTabNav"
import DashBoardTab from "../Shared/DashBoardTab"
import Articles from "./Articles"
import Files from "./Files"
export default {
  name: "Publications",
  data() {
    return{
     selected: 'Articles'
   }
  },
  components:{ 
    DashBoardTab,
    DashBoardTabNav,
    Articles,
    Files,
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