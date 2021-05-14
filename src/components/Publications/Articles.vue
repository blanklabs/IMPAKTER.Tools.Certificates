<template>
  <div class="articles">
    <div>
      <h3>Updload Articles</h3>
      <hr>
      <div>
        <ActionButton btnIcon="file-earmark" btnDescription="   Upload File"/>
        <p>File Name</p>
      </div>
      <div>
        <ActionButton btnIcon="file-earmark-image" btnDescription="   Upload Photos"/>
          <p>Photo Name</p>
      </div>
    </div>
    
    <div>
      <h3>Updload Author Bio</h3>
      <hr>
      <div>
        <ActionButton btnIcon="file-earmark" btnDescription="   Upload Bio"/>
        <p>File Name</p>
      </div>
      <div>
        <ActionButton btnIcon="file-earmark-image" btnDescription="   Upload Profile Picture"/>
          <p>File Name</p>
      </div>
    </div>
    
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



</style>
