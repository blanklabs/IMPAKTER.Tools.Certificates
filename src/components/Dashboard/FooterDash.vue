<template>
    <footer id="footerLand">
         <hr>
         <b-container>
         <b-row>
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
