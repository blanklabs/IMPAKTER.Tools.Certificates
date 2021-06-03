<template>
  <a class="newsLink" :href="article.url" target="_blank">
    <b-card
      class="article"
      :img-src="article.image.trim()"
      img-alt="Card image"
      img-top
    >
      <p class="dateInfo">
        {{ article.sourceName }} - {{ article.datetime.slice(0, 10) }}
      </p>
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

<style scoped>
* {
  font-family: "Montserrat", sans-serif;
}
.article {
  border: none;
  border-radius: 3px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
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
.dateInfo {
  font-size: 12px;
  color: #989898;
}

.newsLink,
a:link,
a:visited {
  color: black;
  text-decoration: none;
}
</style>
