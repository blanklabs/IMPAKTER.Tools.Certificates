<template>
    <footer id="footerLand">
         <hr>
         <b-container>
         <b-row id="rows">
           <b-col cols="3" >
              <h4>ABOUT IMPAKTER INDEX</h4>
              <a href="#"><p>Home</p></a>
              <a href="#"><p>Link</p></a>
              <a href="#"><p>Link</p></a>
              
           </b-col>
           <b-col cols="3">
              <h4>LEARNING & SUPPORT</h4>
              <a href="#"><p>Link</p></a>
              <a href="#"><p>Link</p></a>
              <a href="#"><p>Link</p></a>
           </b-col>
           <b-col cols="3">
              <h4>RELATED PRODUCTS</h4>
              <a href="https://impakter.com/" target="_blank"><p>MEDIA - Online Publication</p></a>
              <a href="https://up.impakter.com/" target="_blank"><p>UP - Networking & Investment</p></a>
              <a href="https://index.impakter.com/" target="_blank"><p>INDEX - Sustainability Index</p></a>
              <a href="https://eco.impakter.com/" target="_blank"><p>Eco Marketplace</p></a>
           </b-col>
           <b-col cols="3">
              <h4>MORE FROM IMPAKTER</h4>
              <a href="https://impakter.com/team/" target="_blank"><p>Team</p></a>
              <a href="https://impakter.com/global-leaders-contributors/" target="_blank"><p>Global Leaders</p></a>
              <a href="https://seller.impakter.com/empower-sustainability/" target="_blank"><p>Our Impact</p></a>
              <a href="#" target="_blank"><p>Contact us</p></a>

           </b-col>
         </b-row>
        </b-container>
    </footer>
</template>
<script>
export default {
  name: "Footer",
};
</script>

<style scoped>
footer{
width:100%; 
background: #E4E4E4;
margin-top: auto;
   
 }
 /* #rows{
     padding: 15px 0 0 100px;
     text-align: left;
 } */
h4{
  font-weight:bolder;
  font-size: 18px;
}
a{
  color: black;
}
a:link {
  text-decoration: none;
  color: black;
}
hr{
  height: 3px;
  background-color: #EA5456;
}


  
@media screen and (max-width:600px) {

  .row{
    flex-direction: column;
    align-items: center;
  }
  .col-3{
    max-width: 100%;
    padding: 10px;
  }
}
</style>
