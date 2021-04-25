<template>
<div>
    <b-container id="Header">
        <b-row>
            <b-col>
            <HeaderDescription headerTitle = "Impakter Certificate Tool">
            Certificates description policies and actions.  We check their certifications, aggregated data, news and how they are tackling the UN 17 Sustainable Development Goals. 
            </HeaderDescription> 
            <ActionButton  btnIcon="caret-right" btnDescription="   Get Started"></ActionButton>
            <ActionButton  btnIcon="person-circle" btnDescription="   Sign In"></ActionButton>
            </b-col>
            <b-col>
            <HeaderImage></HeaderImage> 
            </b-col>
        </b-row>
    </b-container>

    <b-container>
        <b-row>
            <b-col><CardItem></CardItem></b-col>
            <b-col><CardItem></CardItem></b-col>
            <b-col><CardItem></CardItem></b-col>
        </b-row>
        
    </b-container>
    <b-container>
         <b-row>
            <b-col><CardItemLarge></CardItemLarge></b-col>
            <b-col><CardItemLarge></CardItemLarge></b-col>
        </b-row>
    </b-container>
   
   
   
</div>


</template>

<script>
import {
    HeaderDescription, 
    HeaderImage, 
    CardItem,
    CardItemLarge,
    ActionButton } from "uicomponents"

export default {
name: "Home",
data(){
    return {

    }

},
components:{
     HeaderDescription,
     HeaderImage,
     CardItem,
     CardItemLarge,
     ActionButton
     }



}

</script>
<style scoped>

</style>
