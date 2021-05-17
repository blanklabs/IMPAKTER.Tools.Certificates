<template>
  <div class="newsDash">
    <b-alert
      v-if="isShowMessage"
      :variant="isFetchSuccess ? 'success' : 'danger'"
      show
      dismissible
      fade
      >{{ message }}</b-alert
    >
   
    <DashBoardTabNav
      :tabs="['All', 'Tailored', 'Social Media']"
      :selected="selected"
      @selected="setSelected"
    >
     <FilterBar />
      <DashBoardTab :isSelected="selected === 'All'">
        <b-row>
          <div v-for="article in articles" :key="article.articleID">
            <NewsArticle
              class="newsArticle"
              :articleImage="article.image"
              :articleTitle="article.title"
              >{{ article.summary.substring(0, 150) }}...</NewsArticle
            >
          </div>
        </b-row>
      </DashBoardTab>
      <DashBoardTab :isSelected="selected === 'Tailored'">
      
        <b-row>
          <NewsArticle
            class="newsArticle"
            :articleImage="'https://placekitten.com/380/200'"
            :articleTitle="'Can the New US and EU Climate Goals Save the World?'"
            :newsLink="'https://impakter.com/ashden-meet-the-pioneers-boosting-rights-and-resilience-in-earths-threatened-forests/'"
            >The last week in April was marked by the announcement of new, more
            ambitious climate goals from two of the world’s largest polluters,
            the United States and Europe. Could they be a turning point in the
            fight against climate change?</NewsArticle
          >

          <NewsArticle
            class="newsArticle"
            :articleImage="'https://placekitten.com/380/200'"
            articleTitle="'Can the New US and EU Climate Goals Save the World?'"

            :newsLink="'https://impakter.com/ashden-meet-the-pioneers-boosting-rights-and-resilience-in-earths-threatened-forests/'"
            >The last week in April was marked by the announcement of new, more
            ambitious climate goals from two of the world’s largest polluters,
            the United States and Europe. Could they be a turning point in the
            fight against climate change?</NewsArticle
          >
        </b-row>
      </DashBoardTab>
      <DashBoardTab :isSelected="selected === 'Social Media'">
        <b-row>
          <NewsArticle
            class="newsArticle"
            :articleImage="'https://placekitten.com/380/200'"
            :articleTitle="'Just Another title'"
            :newsLink="'https://impakter.com/ashden-meet-the-pioneers-boosting-rights-and-resilience-in-earths-threatened-forests/'"
            >The last week in April was marked by the announcement of new, more
            ambitious climate goals from two of the world’s largest polluters,
            the United States and Europe. Could they be a turning point in the
            fight against climate change?</NewsArticle
          >
        </b-row>
      </DashBoardTab>
    </DashBoardTabNav>
  </div>
</template>

<script>
import CommonMixin from "@/mixins/CommonMixin";

import { NewsArticle } from "uicomponents";
import DashBoardTabNav from "../Shared/DashBoardTabNav";
import DashBoardTab from "../Shared/DashBoardTab";
import FilterBar from "./FilterBar";

export default {
  name: "NewsHome",
  data() {
    return {
      selected: "All",
      articles: [],
      isShowMessage: false,
      isFetchSuccess: false,
      message: "",
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
    async fetch() {
      this.$store.commit("global/toggleLoading", "on");
      let response = await this.$store.dispatch("news/fetchNews");
      //console.log("response:", JSON.stringify(response));
      if (response.status) {
        this.articles = response.articles;
        this.isShowMessage = false;
      } else {
        this.message = "Failed to fetch news";
        this.isShowMessage = true;
      }
    },
    setSelected(tab) {
      this.selected = tab;
    },
    refresh() {
      this.message = "Refreshing articles...";
      this.isShowMessage = true;
      this.fetch();
    },
  },
  mounted() {
    this.fetch();
  },
};
</script>
<style scoped>
.newsArticle {
  margin: 10px;
}
.newsDash {
  width: 100%;
}

</style>