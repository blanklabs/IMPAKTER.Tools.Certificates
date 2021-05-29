<template>
  <div class="articles">
    <h4>Submit New Article</h4>
    <hr />
    <div class="uploadDiv">
      <b-form-group
        class="titleName"
        label="Title of the article:"
        label-for="name"
        label-align-sm="left"
      >
        <br />
        <b-form-input
          class="titleInput"
          id="name"
          v-model="article.articleTitle"
          placeholder="Name"
          required
        ></b-form-input>
      </b-form-group>
    </div>
    <div class="uploadDiv">
      <p>
        <b>Upload Artilce File:</b>
        <br />

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
        <br />
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
        <br />
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
        <br />
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
      :disabled="!this.article.articleDoc"
      >Submit Article</b-button
    >
  </div>
</template>
<script>
//import { ActionButton } from "uicomponents";
import { uuid } from "vue-uuid";
import CommonMixin from "@/mixins/CommonMixin";
export default {
  name: "UploadPublication",
  data() {
    return {
      article: {
        uuid: uuid.v1(),
        articleTitle: "",
        articleDoc: "",
        articlePhotos: "",
        authorDoc: "",
        authorPhoto: "",
      },
    };
  },
  components: {},
  mixins: [CommonMixin],
  methods: {
    onFileBrowsed(event, file) {
      if (file == "articleDoc") {
        const selectedFile = event.target.files[0];
        this.article.articleDoc = selectedFile;
      } else if (file == "articlePhotos") {
        const selectedFiles = event.target.files;
        this.article.articlePhotos = selectedFiles;
      } else if (file == "authorDoc") {
        const selectedFile = event.target.files[0];
        this.article.authorDoc = selectedFile;
      } else {
        const selectedFile = event.target.files[0];
        this.article.authorPhoto = selectedFile;
      }
    },
    async onUploadFile() {
      console.log("executing onUploadFile");
      this.$store.commit("global/toggleLoading", "on");
      this.response = await this.$store.dispatch(
        "publication/uploadPublication",
        this.article
      );
      this.$store.commit("global/toggleLoading", "off");
      if (this.response.status.code == this.transportCodes.SUCCESS) {
        this.$store.commit("global/setMessagePopup", {
          type: 1,
          message: "article submitted successfully",
          redirection: "PublicationsHome",
        });
      } else {
        this.$store.commit("global/setMessagePopup", {
          type: 0,
          message: this.response.status.message,
          redirection: "PublicationsHome",
        });
      }
    },
  },
};
</script>

<style scoped>
.articles {
   width: 100%;
  margin: 0 0 250px 400px; 
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

.customFile {
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

.titleName {
  display: inline-block;
  font-weight: bold;
}
.titleInput {
  margin-top: -20px;
  width: 600px;
}
</style>
