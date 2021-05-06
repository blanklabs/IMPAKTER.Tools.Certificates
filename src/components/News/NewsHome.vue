<template>
<div>
    <DashBoardTabNav :tabs="['All', 'Tailored', 'Social Media']" :selected="selected" @selected="setSelected">
        <DashBoardTab :isSelected="selected === 'All'" >
            
        <NewsArticle articleTitle = "Can the New US and EU Climate Goals Save the World?">The last week in April was marked by the announcement of new, more ambitious climate goals from two of the world’s largest polluters, the United States and Europe. Could they be a turning point in the fight against climate change?</NewsArticle>
        <HeaderImage imageUrl="https://cdn.impakter.com/wp-content/uploads/2021/04/Carbon-emissions-in-China.jpg"></HeaderImage>

        </DashBoardTab>
        <DashBoardTab :isSelected="selected === 'Tailored'" >
        <h1>Test 1</h1>
      </DashBoardTab>
      <DashBoardTab :isSelected="selected === 'Social Media'"  >
        <h1>Test 2</h1>
      </DashBoardTab>
    </DashBoardTabNav>

    
</div>

</template>

<script>

import {NewsArticle, HeaderImage} from "uicomponents"
import DashBoardTabNav from "../Shared/DashBoardTabNav"
import DashBoardTab from "../Shared/DashBoardTab"
export default {
name: "NewsHome",
data() {
    return{
     selected: 'All'
   }
  },
components:{ 
    NewsArticle, 
    HeaderImage, 
    DashBoardTab,
    DashBoardTabNav 
    },
    methods: {
    setSelected(tab) {
      this.selected = tab;
    }
  }



}

</script>
