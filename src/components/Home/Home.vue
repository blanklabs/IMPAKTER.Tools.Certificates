<template>

    <div class="fullscreen">
        <NavLanding/>
        <b-row id="header">
            <b-col>
              <HeaderDescription headerTitle = "Impakter Certificate Tool">
                We analyze how sustainable the Top 100 Global Brands 2020 are. We analyze how sustainable the Top 100 Global Brands 2020 are.
              </HeaderDescription> 
                <ActionButton  btnIcon="chevron-right" btnDescription="   Get Started"></ActionButton>
                <ActionButton  btnIcon="person-circle" btnDescription="   Sign In"></ActionButton>
          
            </b-col>
            <b-col>
            <img id="headerImage" src="../../assets/banner-newdpi.png"/>
            </b-col>
      </b-row>
    
        <b-row id="smallCards">
            <b-col><CardItem cardIcon="folder2-open" cardTitle="Sample Title" iconColor="#8EC184">We analyze how sustainable the Top 100 Global Brands 2020 are.</CardItem></b-col>
            <b-col><CardItem cardIcon="folder2-open" cardTitle="Sample Title" iconColor="#E2CB2C">We analyze how sustainable the Top 100 Global Brands 2020 are.</CardItem></b-col>
            <b-col><CardItem cardIcon="folder2-open" cardTitle="Sample Title" iconColor="#F79755">We analyze how sustainable the Top 100 Global Brands 2020 are.</CardItem></b-col>
            <b-col><CardItem cardIcon="folder2-open" cardTitle="Sample Title" iconColor="#2880C3">We analyze how sustainable the Top 100 Global Brands 2020 are.</CardItem></b-col>
        </b-row>
        
         <b-row id="bigCards">
            <b-col><CardItemLarge cardIcon="building" cardTitle="Large Sample Title">We analyze how sustainable the Top 100 Global Brands 2020 are.</CardItemLarge></b-col>
            <b-col><CardItemLarge cardIcon="building" cardTitle="Large Sample Title">We analyze how sustainable the Top 100 Global Brands 2020 are.</CardItemLarge></b-col>
        </b-row>
        <div>
          <img src="@/assets/banner-newdpi.png" id="imgImpact"/>
        </div>
        <div>
          <h3>Our Partners</h3>
          <img src="@/assets/Partners_Landing.png" id="partners"/>
        </div>     
        <Footer/>
    </div>
   



</template>

<script>
import {
    HeaderDescription, 
    CardItem,
    CardItemLarge,
    ActionButton } from "uicomponents"
import Footer from "./Footer"
import NavLanding from "./NavLanding"

export default {
name: "Home",
data(){
    return {

    }

},
components:{
     HeaderDescription,
     CardItem,
     CardItemLarge,
     ActionButton,
     Footer,
     NavLanding
     }



}

</script>
<style scoped>
.fullscreen { 
  font-family: 'Montserrat', sans-serif;
  position: absolute;
  top: 100px;
  left: 100px;
  right: 100px;
}

div{
  padding: 15px;
}


 #header{
   min-height: 300px;
   padding: 20px;
 }
 #btnHrd{
    display: flex;
    flex-wrap: wrap;
    align-content: center;
 }
 #smallCards{
   padding: 20px;
 }
 #bigCards{
   padding: 20px;
 }
 #headerImage{
   max-width: 1200px;
 }
 
 #imgImpact{
   width: 100%;
 }
 #partners{
   max-width: 1200px;
 }
 
</style>
