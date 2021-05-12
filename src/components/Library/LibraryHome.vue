<template>
    <div>
     <DashBoardTabNav :tabs="['My Documents', 'My Articles', 'News']" :selected="selected" @selected="setSelected">
        <DashBoardTab :isSelected="selected === 'My Documents'" >
            <MyDocuments/>
    
        </DashBoardTab>
        <DashBoardTab :isSelected="selected === 'My Articles'" >
          <MyArticles/>
      </DashBoardTab>
      <DashBoardTab :isSelected="selected === 'News'" >
          <News/>
      </DashBoardTab>
      
    </DashBoardTabNav>
    </div>
</template>
<script>
import DashBoardTabNav from "../Shared/DashBoardTabNav"
import DashBoardTab from "../Shared/DashBoardTab"
import MyArticles from "./Articles"
import MyDocuments from "./MyDocuments"
import News from "./News"
export default {
  name: "Library",
  data() {
    return{
     selected: 'My Documents'
   }
  },
  components:{ 
    DashBoardTab,
    DashBoardTabNav,
    MyArticles,
    MyDocuments,
    News 
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