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

    <DashBoardTabNav :tabs="tabs" @selectTab="tabSelect">
      <FilterBar @filter="search" :clear="clearSearch" />
      <b-row>
        <div
          class="newsArticle"
          v-for="article in articles"
          :key="article.articleID"
        >
          <NewsArticle :article="article"></NewsArticle>
        </div>
      </b-row>
    </DashBoardTabNav>
  </div>
</template>

<script>
import CommonMixin from "@/mixins/CommonMixin";
import NewsMixin from "@/mixins/NewsMixin";

//import { NewsArticle } from "uicomponents";
import NewsArticle from "@/components/Shared/NewsArticle";
import DashBoardTabNav from "../Shared/DashBoardTabNav";
import FilterBar from "./FilterBar";

export default {
  name: "NewsHome",
  data() {
    return {
      tabs: ["All", "Tailored", "Social Media"], //replace from enums
      selectedTab: "All",
      articles: [],
      allArticles: [],
      isShowMessage: false,
      isFetchSuccess: false,
      message: "",
      clearSearch: false,
    };
  },
  mixins: [CommonMixin, NewsMixin],
  components: {
    NewsArticle,
    DashBoardTabNav,
    FilterBar,
  },
  methods: {
    async fetch() {
      this.$store.commit("global/toggleLoading", "on");
      let response = await this.$store.dispatch("news/fetchNews");
      //console.log("response:", JSON.stringify(response));
      if (response.status) {
        this.allArticles = response.articles;
        this.isShowMessage = false;
        this.filterArticles();
      } else {
        this.message = "Failed to fetch news";
        this.isShowMessage = true;
      }
    },
    tabSelect(tab) {
      console.log(tab);
      this.selectedTab = tab;
      this.filterArticles();
      //do something with the selected tab if needed
    },
    filterArticles() {
      this.clearSearch = !this.clearSearch;
      if (this.selectedTab == "All") {
        this.articles = this.allArticles;
      } else if (this.selectedTab == "") {
        this.articles = this.allArticles.filter((article) => {
          article.type == 2;
        });
      }
    },
    refresh() {
      this.message = "Refreshing articles...";
      this.isShowMessage = true;
      this.fetch();
    },
    search(criteria) {
      console.log("criteria of news search:", JSON.stringify(criteria));

      this.articles = this.articles.filter((article) => {
        let articleDate;
        let articleKeywords;
        let dateFilter = true;
        let keywordFilter = true;
        let priorityFilter = true;

        if (criteria.keywords) {
          let searchKeywords;
          if (article.keywords) {
            articleKeywords = article.keywords;
            if (criteria.keywords.includes(",")) {
              searchKeywords = criteria.keywords.split(",");
            } else {
              searchKeywords = [criteria.keywords];
            }

            for (let i = 0; i < searchKeywords.length; i++) {
              let isKeywordPresent = articleKeywords.includes(
                searchKeywords[i]
              );
              if (isKeywordPresent) {
                keywordFilter = true;
                break;
              }
              keywordFilter = false;
            }
          } else {
            keywordFilter = false;
          }
        }

        if (criteria.fromDate && criteria.toDate) {
          articleDate = new Date(article.datetime);
          let fromDate = new Date(criteria.fromDate);
          let toDate = new Date(criteria.toDate);
          if (articleDate >= fromDate && articleDate <= toDate) {
            dateFilter = true;
          } else {
            dateFilter = false;
          }
        }
        if (criteria.priority != 0 && criteria.priority) {
          if (article.credibility == criteria.priority) {
            priorityFilter = true;
          } else {
            priorityFilter = false;
          }
        }

        return dateFilter && priorityFilter && keywordFilter;
      });
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