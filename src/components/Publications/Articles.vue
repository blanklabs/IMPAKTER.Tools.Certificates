<template>
  <div class="articles">
    <div class="sectionDiv">
      <h3>Updload Articles</h3>
      <hr>
      <div class="uploadDiv">
        <ActionButton btnIcon="file-earmark" btnDescription="   Upload File"/>
        <p>File Name</p>
      </div>
      <div class="uploadDiv">
        <ActionButton btnIcon="file-earmark-image" btnDescription="   Upload Photos"/>
          <p>Photo Name</p>
      </div>
    </div>
    
    <div class="sectionDiv">
      <h3>Updload Author Bio</h3>
      <hr>
      <div class="uploadDiv">
        <ActionButton btnIcon="file-earmark" btnDescription="   Upload Bio"/>
        <p>File Name</p>
      </div>
      <div class="uploadDiv">
        <ActionButton btnIcon="file-earmark-image" btnDescription="   Upload Profile Picture"/>
          <p>File Name</p>
      </div>
    </div>
    <hr>
    <ActionButton class="sendBtn" btnIcon="patch-check" btnDescription="   Submit"/>
    
  </div>
</template>
<script>
import { ActionButton } from "uicomponents"
export default {
  
   name: "Articles",
   components: {
     ActionButton,
   }
}
</script>

<style scoped>
.articles{
display:flexbox;
text-align: left;
}
.uploadDiv{
  display: flex;
  column-gap: 10px;
  margin: 20px;
  align-items: center;
  
}
.sectionDiv{
  margin-top: 40px;
  margin-bottom: 40px;
}
.sendBtn{
  margin-left: 90%;
}


</style>
