<template>
    <div class="fullscreen">
        <b-row id="header">
            <b-col>
              <HeaderDescription headerTitle = "Impakter Certificate Tool">
                We analyze how sustainable the Top 100 Global Brands 2020 are. We analyze how sustainable the Top 100 Global Brands 2020 are.
              </HeaderDescription> 
              <b-container id="buttonHeader">
                <div>
                <ActionButton  btnIcon="chevron-right" btnDescription="   Get Started"></ActionButton>
                </div>
                <div>
                <ActionButton  btnIcon="person-circle" btnDescription="   Sign-in"></ActionButton>
                </div>
                <!-- <ActionButton  btnIcon="person-circle" btnDescription="   Sign In"></ActionButton>
           -->
              </b-container>
               
            </b-col>
            <b-col>
            <b-img src="./dummyHeader.png" fluid> </b-img>
            <!-- <img id="headerImage" src="@/assets/LandingPage/dummyHeader.png"/> -->
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
          <img src="@/assets/LandingPage/banner-newdpi.png" id="imgImpact_Desktop"/>
          <img src="@/assets/LandingPage/1dpi-768x866.png" id="imgImpactBig_Mobile"/>
          <img src="@/assets/LandingPage/2dpi-768x866.png" id="imgImpactBig_Mobile"/>
          <img src="@/assets/LandingPage/3dpi-768x866.png" id="imgImpactBig_Mobile"/>
        </div>
        <div>
          <h3>Our Partners</h3>
          <img src="@/assets/LandingPage/loghi-mobile1dpi-768x148.png" id="partners"/>
          <img src="@/assets/LandingPage/loghi-mobile2dpi-768x107.png" id="partners"/>
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
     Footer
     }
}
</script>
<style scoped>
html{
  height: 100%;
}
body{
  margin:0;
  display: flex;
}
@media screen and (min-width:601px) {

.fullscreen { 
  font-family: 'Montserrat', sans-serif;
  position: absolute;
  min-height: 100vh;
  top: 100px;
  left: 100px;
  right: 100px;
}
div{
  padding: 15px;
}
 #header{
   /* min-height: 300px; */
   padding: 20px;
 }
 #buttonHeader{
   padding: 10px;
   display: flex;
   align-items: center;
  flex-wrap: wrap;
 }
 #smallCards{
   padding: 20px;
 }
 #bigCards{
   padding: 20px;
 }
 #headerImage{
  max-width: 1100px;
 }
 
 #imgImpact_Desktop{
   width: 100%;
   height: auto;
 }
 #imgImpactBig_Mobile{
   display:none;
 }
 #partners{
   width: 100%;
   height: auto;
 }
}
 
@media screen and (max-width:600px) {
  
  .row{
    align-content: stretch;
    flex-direction: column;
    align-items: center;
  }
  .col{
    width: 100%;
    padding: 15px;
  }
  #headerImage {
  width: 100%;
  height: auto;
  }
   .fullscreen { 
  top: 0px;
  left: 0px;
  right: 0px;
  }
   #bigCards, #smallCards{
   padding: 5px;
   width: 100%;
  }
   #imgImpact_Desktop{
   display: none;
 }
  #imgImpactBig_Mobile{
   align-items: center;
   width:100%;
   height: auto;
 }
 
}
</style>