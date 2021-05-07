<template>
<div>
    <DashBoardTabNav :tabs="['All', 'Tailored', 'Social Media']" :selected="selected" @selected="setSelected">
        <DashBoardTab :isSelected="selected === 'All'" >
            
        <NewsArticle :articleImage="'https://placekitten.com/380/200'" articleTitle = "Can the New US and EU Climate Goals Save the World?">The last week in April was marked by the announcement of new, more ambitious climate goals from two of the world’s largest polluters, the United States and Europe. Could they be a turning point in the fight against climate change?</NewsArticle>
        
        </DashBoardTab>
        <DashBoardTab :isSelected="selected === 'Tailored'" >
        <NewsArticle :articleImage="'https://placekitten.com/380/200'" articleTitle = "Can the New US and EU Climate Goals Save the World?">The last week in April was marked by the announcement of new, more ambitious climate goals from two of the world’s largest polluters, the United States and Europe. Could they be a turning point in the fight against climate change?</NewsArticle>
        
      </DashBoardTab>
      <DashBoardTab :isSelected="selected === 'Social Media'"  >
        <NewsArticle :articleImage="'https://placekitten.com/380/200'" articleTitle = "Can the New US and EU Climate Goals Save the World?">The last week in April was marked by the announcement of new, more ambitious climate goals from two of the world’s largest polluters, the United States and Europe. Could they be a turning point in the fight against climate change?</NewsArticle>
        
      </DashBoardTab>
    </DashBoardTabNav>

    

    
</div>

</template>

<script>
import {NewsArticle} from "uicomponents"
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
