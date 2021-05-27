<template>
  <b-button id="accButton" @click="action">
    <b-icon :icon="btnIcon"> </b-icon>
    {{ btnDescription }}
  </b-button>
</template>

<script>
export default {
  name: "ActionButton",
  props: {
    btnDescription: String,
    btnIcon: String,
    action: String,
  },
};
</script>

<style scoped>
#accButton {
  font-family: "Montserrat";
  background: white;
  padding: 10px;
  color: #1d2029;
  border-radius: 5px;
  border: 2px solid #989898;
  font-weight: bold;
}
</style>