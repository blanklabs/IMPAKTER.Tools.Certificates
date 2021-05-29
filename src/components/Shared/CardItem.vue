<template>
  <b-card id="cardItem">
    <b-card-header id="headerIcon"
      ><b-icon :icon="cardIcon" :color="iconColor"></b-icon
    ></b-card-header>

    <b-card-title>{{ cardTitle }}</b-card-title>
    <b-card-sub-title>{{ cardSubtitle }}</b-card-sub-title>

    <slot></slot>
    <router-link id="btnArrow" :to="btnLink"
      ><b-icon :icon="buttonIcon"></b-icon
    ></router-link>
  </b-card>
</template>

<script>
export default {
  name: "CardItem",
  props: {
    cardTitle: String,
    cardIcon: String,
    iconColor: String,
    buttonIcon: String,
    btnLink: String,
  },
};
</script>

<style scoped>
* {
  font-family: "Montserrat", sans-serif;
}
#cardItem {
  text-align: left;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  border: none;
}
.card-title {
  font-weight: 600;
}
#headerIcon {
  padding: 0;
  text-align: left;
  font-size: 60px;
  background-color: transparent;
  border: none;
}
#btnArrow {
  float: right;
  background: transparent;
  color: #1d2029;
  width: 250px;
  border: none;
  font-size: 40px;
  font-weight: bold;
  text-align: right;
}
</style>