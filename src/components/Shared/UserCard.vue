<template>

  <b-card class="cardPicture">
 
        <b-card-img class="image" :src="profilePic"></b-card-img>
        <b-button class="actionBtn">Upload New Profile Picture</b-button>
        <b-card-text>{{fileName}}</b-card-text>

  </b-card>

</template>

<script> 
export default {
  name: 'ProfilePicture',
  props: {
    profilePic: String,
    fileName: String,
  }
}
</script>

<style scoped>
*{
  font-family: 'Montserrat', sans-serif;
}
.cardPicture{
/* max-width: 500px; */
text-align: left;
box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.3);
border: none;
}
.actionBtn{
    margin-left: 50px;
    font-family: 'Montserrat';
    background: white;
    padding: 10px;
    color: #1D2029;
    border-radius: 5px;
    border: 2px solid #989898;
    font-weight: bold;
    
}
.image{
    max-height: 400px;
    width: auto;
}
</style>