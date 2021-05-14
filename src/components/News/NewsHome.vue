<template>
  <div class="newsDash">
    <DashBoardTabNav
      :tabs="['All', 'Tailored', 'Social Media']"
      :selected="selected"
      @selected="setSelected"
    >
      <DashBoardTab :isSelected="selected === 'All'">
        <b-row>
          <div v-for="article in articles" :key="article.articleID">
          <NewsArticle class= "newsArticle"
            :articleImage="article.image"
            :articleTitle="article.title"
            >{{ article.summary.substring(0,150) }}...</NewsArticle
          >
        </div>
        </b-row>
        
      </DashBoardTab>
      <DashBoardTab :isSelected="selected === 'Tailored'">
        <FilterBar/>
        <b-row>
          <NewsArticle class= "newsArticle"
          :articleImage="'https://placekitten.com/380/200'"
          articleTitle="Can the New US and EU Climate Goals Save the World?"
          >The last week in April was marked by the announcement of new, more
          ambitious climate goals from two of the world’s largest polluters, the
          United States and Europe. Could they be a turning point in the fight
          against climate change?</NewsArticle
        >
        
        <NewsArticle class= "newsArticle"
          :articleImage="'https://placekitten.com/380/200'"
          articleTitle="Can the New US and EU Climate Goals Save the World?"
          >The last week in April was marked by the announcement of new, more
          ambitious climate goals from two of the world’s largest polluters, the
          United States and Europe. Could they be a turning point in the fight
          against climate change?</NewsArticle
        >
        </b-row>
        
      </DashBoardTab>
      <DashBoardTab :isSelected="selected === 'Social Media'">
        <b-row>
        <NewsArticle class= "newsArticle"
          :articleImage="'https://placekitten.com/380/200'"
          articleTitle="Just Another title"
          >The last week in April was marked by the announcement of new, more
          ambitious climate goals from two of the world’s largest polluters, the
          United States and Europe. Could they be a turning point in the fight
          against climate change?</NewsArticle
        >
        </b-row>
      </DashBoardTab>
    </DashBoardTabNav>
  </div>
</template>

<script>
import { ServicesFactory } from "@/services/ServicesFactory";
const news = ServicesFactory.get("news");
import CommonMixin from "@/mixins/CommonMixin";

import { NewsArticle } from "uicomponents";
import DashBoardTabNav from "../Shared/DashBoardTabNav";
import DashBoardTab from "../Shared/DashBoardTab";
import FilterBar from "./FilterBar"

export default {
  name: "NewsHome",
  data() {
    return {
      selected: "All",
      articles: [],
    };
  },
  mixins: [CommonMixin],
  components: {
    NewsArticle,
    DashBoardTab,
    DashBoardTabNav,
    FilterBar,
  },
  methods: {
    setSelected(tab) {
      this.selected = tab;
    },
  },
  async mounted() {
    let webResponse = await news.fetchNews(1);
    this.response = webResponse.data;
    let responseStatus = this.response.status;
    if (responseStatus.code == 1) {
      this.articles = this.response.data;
    }
  },
};
</script>
<style scoped>
.newsArticle{
  margin: 10px;
}
.newsDash{
  width: 100%;
}
</style>