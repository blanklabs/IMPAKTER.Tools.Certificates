<template>
  <div class="articles">
    <!-- <div class="sectionDiv">
      <h4>Upload Article</h4>
      <hr />
      <div class="uploadDiv">
        <ActionButton btnIcon="file-earmark" btnDescription="   Upload File" />
        <p>File Name</p>
      </div>
      <div class="uploadDiv">
        <ActionButton
          btnIcon="file-earmark-image"
          btnDescription="   Upload Photos"
        />
        <p>Photo Name</p>
      </div>
    </div>

    <div class="sectionDiv">
      <h4>Upload Author Bio</h4>
      <hr />
      <div class="uploadDiv">
        <ActionButton btnIcon="file-earmark" btnDescription="   Upload Bio" />
        <p>File Name</p>
      </div>
      <div class="uploadDiv">
        <ActionButton
          btnIcon="file-earmark-image"
          btnDescription="   Upload Profile Picture"
        />
        <p>File Name</p>
      </div>
    </div> -->
    <h3>Submit a new article</h3>
    <div class="uploadDiv">
      <b-form-group
        class="title"
        label-cols="4"
        label-cols-lg="3"
        label="Title of the article:"
        label-for="name"
        label-align-sm="left"
      >
        <b-form-input
          id="name"
          v-model="articleTitle"
          placeholder="Name"
          required
        ></b-form-input>
      </b-form-group>
    </div>
    <div class="uploadDiv">
      <p>
        <b>Article document: </b
        ><input type="file" @change="onFileBrowsed($event, 'articleDoc')" />
      </p>
    </div>
    <div class="uploadDiv">
      <p>
        <b>Article Images: </b
        ><input
          type="file"
          @change="onFileBrowsed($event, 'articlePhotos')"
          multiple
        />
      </p>
    </div>
    <div class="uploadDiv">
      <p>
        <b>Article Author bio: </b
        ><input type="file" @change="onFileBrowsed($event, 'authorDoc')" />
      </p>
    </div>
    <div class="uploadDiv">
      <p>
        <b>Article Author Profile Photo: </b
        ><input type="file" @change="onFileBrowsed($event, 'authorPhoto')" />
      </p>
    </div>
    <b-button @click="onUploadFile" :disabled="!this.articleDoc"
      >Submit</b-button
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
.sectionDiv {
  margin-top: 40px;
  margin-bottom: 40px;
}
.sendBtn {
  margin-left: 90%;
}
</style>
