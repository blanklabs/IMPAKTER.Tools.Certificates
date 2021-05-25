<template>
  <div class="articles">
     <h4>Upload Article</h4>
      <hr />
    <div class="uploadDiv">
      <b-form-group
        class="titleName"
        label="Title of the article:"
        label-for="name"
        label-align-sm="left"
      >
      <br/>
        <b-form-input
          class="titleInput"
          id="name"
          v-model="articleTitle"
          placeholder="Name"
          required
        ></b-form-input>
      </b-form-group>
    </div>
    <div class="uploadDiv">
      <p>
        <b>Upload Artilce File:</b>
        <br>
      
         <input 
          class="customFile"
          type="file"
          @change="onFileBrowsed($event, 'articleDoc')" 
          />
        
      </p>
    </div>
    <div class="uploadDiv">
      <p>
        <b>Upload Article Images:</b>
        <br>
        <input
          class="customFile"
          type="file"
          @change="onFileBrowsed($event, 'articlePhotos')"
          
          multiple
        />
      </p>
    </div>
    <div class="uploadDiv">
      <p>
        <b>Upload Author bio:</b>
        <br>
        <input 
          class="customFile"
          type="file" 
          @change="onFileBrowsed($event, 'authorDoc')" 
        />
      </p>
    </div>
    <div class="uploadDiv">
      <p>
       <b>Upload Author Profile Photo: </b>
        <br>
        <input 
          class="customFile"
          type="file" 
          @change="onFileBrowsed($event, 'authorPhoto')" 
        />
      </p>
    </div>
    <hr />
    <b-button 
      class="sendBtn" 
      @click="onUploadFile" 
      :disabled="!this.articleDoc"
      >Submit Article</b-button
    >
  </div>
</template>
<script>
//import { ActionButton } from "uicomponents";
import axios from "axios";
import { uuid } from "vue-uuid";

export default {
  name: "Articles",
  data() {
    return {
      uuid: uuid.v1(),
      orgID: 1,
      articleTitle: "",
      articleDoc: "",
      articlePhotos: "",
      authorDoc: "",
      authorPhoto: "",
    };
  },
  components: {},
  methods: {
    onFileBrowsed(event, file) {
      if (file == "articleDoc") {
        const selectedFile = event.target.files[0];
        this.articleDoc = selectedFile;
      } else if (file == "articlePhotos") {
        const selectedFiles = event.target.files;
        this.articlePhotos = selectedFiles;
      } else if (file == "authorDoc") {
        const selectedFile = event.target.files[0];
        this.authorDoc = selectedFile;
      } else {
        const selectedFile = event.target.files[0];
        this.authorPhoto = selectedFile;
      }
    },
    async onUploadFile() {
      console.log("executing onUploadFile");
      this.$store.commit("global/toggleLoading", "on");
      if (this.articleDoc) {
        const formData = new FormData();
        formData.append("articleDoc", this.articleDoc);
        await this.postFileToServer(formData);
      }
      if (this.articlePhotos) {
        const formData = new FormData();
        for (const i of Object.keys(this.articlePhotos)) {
          formData.append("articlePhotos", this.articlePhotos[i]);
        }
        this.postFileToServer(formData);
      }
      if (this.authorDoc) {
        const formData = new FormData();
        formData.append("authorDoc", this.authorDoc);
        await this.postFileToServer(formData);
      }
      if (this.authorPhoto) {
        const formData = new FormData();
        formData.append("authorPhoto", this.authorPhoto);
        await this.postFileToServer(formData);
      }
      this.$store.commit("global/toggleLoading", "off");
    },
    postFileToServer(formData) {
      return new Promise((resolve, reject) => {
        let config = {
          headers: {
            orgID: this.orgID,
            articleID: this.uuid,
            articleTitle: this.articleTitle,
          },
        };
        axios
          .post(
            "http://localhost:3030/api/publications/upload",
            formData,
            config
          )
          .then((res) => {
            console.log(res);
            resolve();
          })
          .catch((err) => {
            console.log(err);
            reject();
          });
      });
    },
  },
};
</script>

<style scoped>
.articles {
  display: flexbox;
  text-align: left;
}
.uploadDiv {
  display: flex;
  column-gap: 10px;
  margin: 20px;
  align-items: center;
}

.sendBtn {
  background: white;
  padding: 10px;
  color: #1d2029;
  border-radius: 5px;
  border: 2px solid #989898;
  font-weight: bold;
  margin: 1px;
}

.customFile{
  margin: 10px 0;
}
.customFile::-webkit-file-upload-button {
  background: white;
  border-radius: 5px;
  border: 2px solid #989898;
  font-weight: bold;
  padding: 5px;
  margin-right: 10px;
  outline: none;
  white-space: nowrap;
  cursor: pointer;
}

.titleName{
  display: inline-block;
  font-weight: bold;
}
.titleInput{
  margin-top: -20px;
  width: 600px;
}
</style>
