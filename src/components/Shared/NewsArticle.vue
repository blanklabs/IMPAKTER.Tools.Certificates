<template>
  <a class="newsLink" :href="article.url" target="_blank">
    <b-card
      class="article"
      :img-src="article.image.trim()"
      img-alt="Card image"
      img-top
    >
      <p>date: {{ article.datetime }} | source: {{ article.sourceName }}</p>
      <b-card-title> {{ article.title }} </b-card-title>
      <b-card-text> {{ article.summary.substring(0, 150) }}... </b-card-text>
    </b-card>
  </a>
</template>

<script>
import NewsArticle from "../../../../SHARED.CODE/Objects/News/article";

export default {
  name: "NewsArticle",
  props: {
    article: new NewsArticle(),
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
* {
  font-family: "Montserrat", sans-serif;
}
.article {
  border: none;
  border-radius: 3px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  max-width: 20rem;
  text-align: left;
  overflow: hidden;
}
.card-title {
  font-weight: 700;
}
.card-text {
  font-size: 14px;
}
.img {
  max-height: 15rem;
}
/* a{
  text-decoration: none!important;
  text-decoration-color: none!important;;
} */

.newsLink,
a:link,
a:visited {
  color: black;
  text-decoration: none;
}
</style>
