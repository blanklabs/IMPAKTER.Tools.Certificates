<template>
  <b-card :img-src="profilePic" class="cardPicture" img-left>
    <b-card-img class="image"></b-card-img>
    <b-card-text>
      <h5>{{ header }}</h5>
      <input 
      class="customFile"
      type="file" 
      @change="onFileBrowsed" />
        <div class="separator">
      <hr />
      <h5>OR</h5>
      <hr />
    </div>
      <b-form-input
        id="name"
        v-model="profilePic"
        placeholder="Image Url"
        @change="onUrlChange"
      ></b-form-input>
    </b-card-text>
  </b-card>
</template>

<script>
export default {
  name: "ProfilePicture",
  props: {
    profilePic: String,
    header: String,
    imageLink: String,
  },
  methods: {
    onFileBrowsed(event) {
      const selectedFile = event.target.files[0];
      this.$emit("file", selectedFile);
    },
    onUrlChange() {
      this.$emit("url", this.profilePic);
    },
  },
};
</script>

<style scoped>
* {
  font-family: "Montserrat", sans-serif;
}
.cardPicture {
  text-align: left;
  padding: 10px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  border: none;
}

.image {
  max-height: 400px;
  width: auto;
}
.customFile{
  margin: 10px 0;
}
.customFile::-webkit-file-upload-button {
  background: white;
  border-radius: 5px;
  border: 2px solid #989898;
  font-weight: bold;
  padding: 10px;
  margin-right: 10px;
  outline: none;
  white-space: nowrap;
  cursor: pointer;
}
.customFile::-webkit-file-upload-button:hover {
  background-color: #F8F8F8;
}
.separator {
  margin-top: 10px;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
}
hr {
  flex: 1;
  height: 1px;
  background-color: #bbbbbb;
}
.separator h5 {
  padding: 0 2rem; 
}
</style>