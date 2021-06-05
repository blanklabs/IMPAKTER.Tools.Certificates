<template>
    <footer>
         <hr>
         <div class= "footerMain">

              <a href="https://impakter.com/" target="_blank"><p>MEDIA - Online Publication</p></a>
              <a href="https://up.impakter.com/" target="_blank"><p>UP - Networking & Investment</p></a>
              <a href="https://index.impakter.com/" target="_blank"><p>INDEX - Sustainability Index</p></a>
              <a href="https://eco.impakter.com/" target="_blank"><p>Eco Marketplace</p></a>
           
        </div>
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
  background: #f8f8f8;
  margin-top: auto;
  margin-left: 230px;
  
   
}
.footerMain{
  
  display: flex;
  justify-content: center;
}

h4{
  font-weight:bolder;
  font-size: 18px;
}
a{
  margin: 0 25px 0 25px;
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
