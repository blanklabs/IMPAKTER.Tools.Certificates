<template>
  <div class="cetificatesMain">
    <!-- <div class="header">
      <ActionButton
        class="addBtn"
        btnIcon="plus"
        btnDescription="Submit new article"
        :action="add"
      ></ActionButton>
    
    </div> -->
    <b-container>
      <b-row>
        <b-table
          :fields="fields"
          :items="publications"
          :head-variant="light"
          :bordered="false"
          :responsive="md"
          id="main_table"
          :per-page="perPage"
          :current-page="currentPage"
          hover
        >
          <template #head(name)>
            <div class="text-nowrap">Article Name</div>
          </template>
        </b-table>
      </b-row>
      <div id="paginate">
        <b-pagination
          v-model="currentPage"
          :total-rows="rows"
          :per-page="perPage"
          aria-controls="main_table"
          align="center"
          pills
        ></b-pagination>
      </div>
    </b-container>
    <br />
  </div>
</template>


<script>
//import ActionButton from "./../Shared/ActionButton";

export default {
  name: "Mypublications",
  data() {
    return {
      showModal: false,
      perPage: 5,
      currentPage: 1,
      sortBy: "name",
      publications: [],
      allPublications: [],
      organization: {},
      organizationIdentifier: null,
      response: null,
      InProgress: true,
      networkConnected: null,
      fields: ["name", "submitted", "status"],
      selectedTab: "Active",
    };
  },
  async mounted() {
    //this.$store.commit("global/toggleLoading", "on");
    this.allPublications = this.$store.getters["publication/publications"];
    this.filterPublications();
    if (this.allPublications.length == 0 || this.allPublications == undefined) {
      this.refresh();
    }
    this.$store.commit("global/toggleLoading", "off");
  },
  components: {
    // ActionButton,
  },
  methods: {
    tabSelect(tab) {
      console.log(tab);
      this.selectedTab = tab;
      this.filterPublications();
    },
    filterPublications() {
      if (this.selectedTab === "Editing") {
        this.publications = this.allPublications.filter(
          (certificate) => certificate.status == 0
        );
      } else if (this.selectedTab === "Active") {
        this.publications = this.allPublications.filter(
          (certificate) => certificate.status == 1
        );
      } else {
        this.publications = this.allPublications.filter(
          (certificate) => certificate.status == 2
        );
      }
    },
    add() {
      this.$router.push({ name: "UploadPublication" });
    },
    view(item) {
      console.log(item);
      this.$store.dispatch("certificate/changeCertificate", item);
      setTimeout(() => {}, 500);
    },
    view2(record, index) {
      this.$store.dispatch(
        "certificate/changeCertificate",
        this.publications[index]
      );
      this.$router.push({ name: "CertificateProfile" });
    },
    delet() {
      this.$store.dispatch("certificate/deleteCertificate");
      setTimeout(() => {
        this.$alert(this.$store.responseMessage);
      }, 3000);
      this.$store.responseMessage = "_blank_";
    },
    editFromProfile() {
      this.$store.dispatch("certificate/changeMode", "edit");
      this.$router.push({ name: "formPage1" });
    },
    async refresh() {
      this.$store.commit("global/toggleLoading", "on");
      this.allPublications = await this.$store.dispatch(
        "certificate/fetchpublications"
      );
      this.filterPublications();
      this.$store.commit("global/toggleLoading", "off");
    },
  },
  computed: {
    rows() {
      return this.publications.length;
    },
  },
};
</script>

<style>
.cetificatesMain {
  font-family: "Montserrat";
  text-align: left;
}
#main_head {
  display: flex;
  position: fixed;
  justify-content: flex-start;
  background-color: white;
  z-index: 80;
  width: 100%;
}

table {
  margin-top: 0px;
}

.certificateName {
  cursor: pointer;
}

#main_heading {
  justify-content: flex-start;
}
.header {
  margin-bottom: 50px;
  display: block;
  padding: 10px;
}
.addBtn {
  margin-top: 50px;
  float: right;
}
.titleHeader {
  float: left;
}

#customButton {
  font-family: "Montserrat";
  background: white;
  padding: 5px;
  color: #1d2029;
  border-radius: 5px;
  border: 2px solid #989898;
  font-weight: 600;
  margin: 1px;
}
.page-item.active .page-link {
  z-index: 3;
  color: #fff;
  background-color: #fe6663;
  border-color: #fe6663;
}
.nav-pills .nav-link.active,
.nav-pills .show > .nav-link {
  color: #fff;

  background-color: #f6a8a8;
  width: 100%;
}
.nav-pills {
  padding: 0;
  background-color: #f8f8f8;
}

a {
  color: #1d2029;
  font-weight: 500;
  text-decoration: none;
  background-color: transparent;
}
a:hover {
  color: #1d2029;
  text-decoration: none;
  background-color: transparent;
}
</style>