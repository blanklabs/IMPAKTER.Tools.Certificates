<template>
  <div class="news">
    <b-row>
          <NewsArticle
            class="newsArticle"
            :articleImage="'https://placekitten.com/600/400'" 
             :articleTitle="'title of the article'" 
             :newsLink="'https://impakter.com/ashden-meet-the-pioneers-boosting-rights-and-resilience-in-earths-threatened-forests/'">
             The last week in April was marked by the announcement of new, more ambitious climate
              goals from two of the world’s largest polluters, the United States and Europe. 
             Could they be a turning point in the fight against climate change?
          </NewsArticle>
          <NewsArticle
            class="newsArticle"
            :articleImage="'https://placekitten.com/600/400'" 
             :articleTitle="'title of the article'" 
             :newsLink="'https://impakter.com/ashden-meet-the-pioneers-boosting-rights-and-resilience-in-earths-threatened-forests/'">
             The last week in April was marked by the announcement of new, more ambitious climate
              goals from two of the world’s largest polluters, the United States and Europe. 
             Could they be a turning point in the fight against climate change?
          </NewsArticle>
      </b-row>
  </div>
</template>

<script>
import { NewsArticle } from "uicomponents";
export default {
   name: "News",
   components: {
      NewsArticle,
  },
  
}
</script>

<style scoped>
.news{
    display:flexbox;
    text-align: left;
}
.newsArticle{
  margin: 10px;
}
</style>