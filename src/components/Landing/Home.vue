<template>
    <div class="fullscreen">
        <b-row id="header">
            <b-col>
              <HeaderDescription headerTitle = "Impakter Certificate Tool">
                We analyze how sustainable the Top 100 Global Brands 2020 are. 
                We analyze how sustainable the Top 100 Global Brands 2020 are.
              </HeaderDescription> 
              <div class="buttonHeader">
                <ActionButton  
                  btnIcon="chevron-right" 
                  btnAction="/signup"
                  
                  btnDescription="   Get Started">
                </ActionButton>
                <ActionButton  
                  btnIcon="person-circle" 
                  btnAction="/signin"
                  btnDescription="   Sign-in">
                </ActionButton>
              </div>
               
            </b-col>
            <b-col>
            <b-img src="https://index.impakter.com/wp-content/uploads/2021/03/homeHeader-01-1.svg" fluid> </b-img>
            </b-col>
      </b-row>
    
        <b-row id="smallCards">
            <b-col>
              <CardItem 
                cardIcon="folder2-open" 
                cardTitle="Sample Title" 
                iconColor="#8EC184"
                buttonIcon="arrow-right">
                We analyze how sustainable the Top 100 Global Brands 2020 are.
              </CardItem>
            </b-col>
            <b-col>
              <CardItem 
                cardIcon="folder2-open" 
                cardTitle="Sample Title" 
                iconColor="#E2CB2C"
                buttonIcon="arrow-right">
                We analyze how sustainable the Top 100 Global Brands 2020 are.
              </CardItem>
            </b-col>
            <b-col>
              <CardItem 
                cardIcon="folder2-open" 
                cardTitle="Sample Title" 
                iconColor="#F79755"
                buttonIcon="arrow-right">
                We analyze how sustainable the Top 100 Global Brands 2020 are.
              </CardItem>
            </b-col>
            <b-col>
              <CardItem 
                cardIcon="folder2-open" 
                cardTitle="Sample Title" 
                iconColor="#2880C3"
                buttonIcon="arrow-right">
                We analyze how sustainable the Top 100 Global Brands 2020 are.
              </CardItem>
            </b-col>
        </b-row>
        
         <b-row id="bigCards">
            <b-col>
              <CardItem
                cardIcon="file-earmark-bar-graph" 
                cardTitle="Certificates and Labels"
                iconColor="#2880C3"
                buttonIcon="arrow-right"
                btnLink="https://index.impakter.com/certificates-2/">
                To measure environmental impact effectively, certificates and Labels help the consumer make conscious buying decisions.
                These certificates/Labels indicate the alignment with the environmental or social impact of the Products and Brands.
              </CardItem>
            </b-col>
            <b-col>
              <CardItem
                cardIcon="bar-chart" 
                cardTitle="Organizations"
                iconColor="#EA5955"
                buttonIcon="arrow-right">
                To measure environmental impact effectively, certificates and Labels help the consumer make conscious buying decisions.
                These certificates/Labels indicate the alignment with the environmental or social impact of the Products and Brands.
              </CardItem>
            </b-col>
        </b-row>
        <div>
          <img src="@/assets/LandingPage/banner-newdpi.png" id="imgImpact_Desktop"/>
          <img src="@/assets/LandingPage/1dpi-768x866.png" id="imgImpactBig_Mobile"/>
          <img src="@/assets/LandingPage/2dpi-768x866.png" id="imgImpactBig_Mobile"/>
          <img src="@/assets/LandingPage/3dpi-768x866.png" id="imgImpactBig_Mobile"/>
        </div>
        <div>
          <h3>Our Partners</h3>
          <img src="../../assets/LandingPage/Partners_Landing.png" id="partners"/>
        </div>     
        <Footer/>
    </div>
    
</template>

<script>
import {
    HeaderDescription, 
    CardItem,
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
 .buttonHeader{
   padding: 10px;
   display: flex;
   justify-content: center;
   column-gap: 20px;
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