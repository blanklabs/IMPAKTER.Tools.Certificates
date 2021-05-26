<template>
  <b-card :img-src="profilePic" class="cardPicture" img-left>
    <b-card-img class="image"></b-card-img>
    <b-card-text>
      <h5>{{ header }}</h5>
      <input type="file" @change="onFileBrowsed" />
      <p>-or-</p>
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
  /* max-width: 500px; */
  text-align: left;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.3);
  border: none;
}
.actionBtn {
  margin-left: 50px;
  font-family: "Montserrat";
  background: white;
  padding: 10px;
  color: #1d2029;
  border-radius: 5px;
  border: 2px solid #989898;
  font-weight: bold;
}
.image {
  max-height: 400px;
  width: auto;
}
</style>