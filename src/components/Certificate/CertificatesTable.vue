<template>
  <div class="cetificatesMain">
    <div class="header">
      <ActionButton
        class="addBtn"
        btnIcon="plus"
        btnDescription="   Add New Certificate"
        :action="add"
      ></ActionButton>
    </div>
    <DashBoardTabNav :tabs="tabs" @selectTab="tabSelect">
      <b-table
        class="certificateTable"
        :fields="fields"
        :items="certificates"
        :head-variant="light"
        :bordered="false"
        :responsive="md"
        id="main_table"
        :per-page="perPage"
        :current-page="currentPage"
        hover
      >
        <template #head(name)>
          <div class="text-nowrap">Certificate Name</div>
        </template>
        <template #cell(name)="data">
          <p
            @click="
              view(data.item);
              $refs.preview_modal.showModal();
            "
            class="certificateName"
          >
            {{ data.item.name }}
          </p>
        </template>
        <template #head(computedPriority)>
          <div
            class="text-nowrap"
            v-b-tooltip.hover
            title="How important is it to attain this certificate for a given company?"
            variant="secondary"
          >
            Priority
          </div>
        </template>
        <template #head(sdgs)>
          <div
            class="text-nowrap"
            v-b-tooltip.hover
            title=" United Nations - Sustainable Development Goals"
            variant="secondary"
          >
            SDGs
          </div>
        </template>
        <template #cell(sdgs)="data">
          <div>
            <span v-for="(sdg, index) in data.item.sdgs" :key="index"
              >{{ sdg
              }}<span v-if="index != data.item.sdgs.length - 1">, </span></span
            >
          </div>
        </template>
        <template #head(industries)>
          <div
            class="text-nowrap"
            v-b-tooltip.hover
            title="The ISIC Industry sectors where this ceritificate is valid in"
            variant="secondary"
          >
            Industries
          </div>
        </template>

        <template #cell(industries)="data">
          <div>
            <span v-for="(industry, index) in data.item.industries" :key="index"
              >{{ industry
              }}<span v-if="index != data.item.industries.length - 1"
                >,
              </span></span
            >
          </div>
        </template>
        <template #cell(actions)="data">
          <b-button id="customButton" @click="copy(data.item)">Copy</b-button>
          <b-button id="customButton" @click="edit(data.item)">Edit</b-button>
          <!--<b-button>See Details</b-button>-->
        </template>
      </b-table>

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
    </DashBoardTabNav>
    <!--<div >
        <b-card no-body>
    <b-tabs pills card vertical>
      <b-tab title="My Certificates" active>
        <b-card-text>
        <b-table
          :fields="fields"
          :items="certificates"
          :head-variant="light"
          :bordered="false"
          id="main_table"
          :per-page="perPage"
          :current-page="currentPage"
          hover
        >
          <template #head(name)>
            <div class="text-nowrap">Certificate Name</div>
          </template>
          <template #cell(name)="data">
            <p
              @click="
                view(data.index);
                $refs.preview_modal.showModal();
              "
              class="certificateName"
            >
              {{ data.item.name }}
            </p>
          </template>
          <template #head(activeStatus)>
            <div
              class="text-nowrap"
              v-b-tooltip.hover
              title="Whether the certificate is currently active or not"
              variant="secondary"
            >
              Active
            </div>
          </template>
          <template #cell(activeStatus)="row">
            <span></span>
            <b-form-checkbox
              v-model="row.item.activeStatus"
              name="data.index"
              @change="updateStatus(row.index)"
              switch
            >
              
            </b-form-checkbox>
          </template>
          <template #head(computedPriority)>
            <div
              class="text-nowrap"
              v-b-tooltip.hover
              title="How important is it to attain this certificate for a given company?"
              variant="secondary"
            >
              Priority
            </div>
          </template>
          <template #head(sdgs)>
            <div
              class="text-nowrap"
              v-b-tooltip.hover
              title=" United Nations - Sustainable Development Goals"
              variant="secondary"
            >
              SDGs
            </div>
          </template>
          <template #cell(sdgs)="data">
            <div>
              <span v-for="(sdg, index) in data.item.sdgs" :key="index"
                >{{ sdg
                }}<span v-if="index != data.item.sdgs.length - 1"
                  >,
                </span></span
              >
            </div>
          </template>
          <template #head(industries)>
            <div
              class="text-nowrap"
              v-b-tooltip.hover
              title="The ISIC Industry sectors where this ceritificate is valid in"
              variant="secondary"
            >
              Industries
            </div>
          </template>

          <template #cell(industries)="data">
            <div>
              <span
                v-for="(industry, index) in data.item.industries"
                :key="index"
                >{{ industry
                }}<span v-if="index != data.item.industries.length - 1"
                  >,
                </span></span
              >
            </div>
          </template>
          <template #cell(actions)="data">
            <b-button @click="copy(data.index)" variant="success"
              >Copy</b-button
            >
            <b-button @click="edit(data.index)" variant="outline-danger"
              >Edit</b-button
            >
            
          </template>
        </b-table>
        </b-card-text>
        </b-tab>
      <b-tab title="My Profile"><b-card-text>Tab contents 2</b-card-text></b-tab>
      <b-tab title="Tab 3"><b-card-text>Tab contents 3</b-card-text></b-tab>
    </b-tabs>
  </b-card>
    </div>-->
    <br />

    <certificate-profile
      ref="preview_modal"
      :isSavePreview="false"
      @edit="editFromProfile"
      @delete="delet"
    ></certificate-profile>
  </div>
</template>


<script>
import CertificateProfile from "./CertificateProfile.vue";
import DashBoardTabNav from "../Shared/DashBoardTabNav";
import ActionButton from "./../Shared/ActionButton";

export default {
  name: "MyCertificates",
  data() {
    return {
      showModal: false,
      perPage: 5,
      currentPage: 1,
      sortBy: "name",
      certificates: [],
      allCertificates: [],
      organization: {},
      organizationIdentifier: null,
      response: null,
      InProgress: true,
      networkConnected: null,
      tabs: ["Active", "Inactive", "Editing"],
      fields: ["name", "computedPriority", "sdgs", "industries", "actions"],
      selectedTab: "Active",
    };
  },
  async mounted() {
    this.$store.commit("global/toggleLoading", "on");
    this.allCertificates = this.$store.getters["certificate/certificates"];
    this.filterCertificates();
    if (this.allCertificates.length == 0 || this.allCertificates == undefined) {
      this.refresh();
    }
    this.$store.commit("global/toggleLoading", "off");
  },
  components: {
    CertificateProfile,
    DashBoardTabNav,
    ActionButton,
  },
  methods: {
    tabSelect(tab) {
      console.log(tab);
      this.selectedTab = tab;
      this.filterCertificates();
    },
    filterCertificates() {
      if (this.selectedTab === "Editing") {
        this.certificates = this.allCertificates.filter(
          (certificate) => certificate.status == 0
        );
      } else if (this.selectedTab === "Active") {
        this.certificates = this.allCertificates.filter(
          (certificate) => certificate.status == 1
        );
      } else {
        this.certificates = this.allCertificates.filter(
          (certificate) => certificate.status == 2
        );
      }
    },
    add() {
      this.$store.dispatch("certificate/changeMode", "new");
      this.$store.dispatch("certificate/resetCertificate");
      this.$router.push({ name: "formPage1" });
    },
    copy(item) {
      this.$store.dispatch("certificate/changeMode", "new");
      this.$store.dispatch("certificate/changeCertificate", item);
      this.$router.push({ name: "formPage1" });
    },
    edit(item) {
      this.$store.dispatch("certificate/changeCertificate", item);
      this.$store.dispatch("certificate/changeMode", "edit");
      this.$router.push({ name: "formPage1" });
    },
    updateStatus(item) {
      this.$store.dispatch("updateCertificateStatus", item);
      setTimeout(() => {
        this.$alert(this.$store.responseMessage);
      }, 1000);
      this.$store.responseMessage = "_blank_";
    },
    view(item) {
      console.log(item);
      this.$store.dispatch("certificate/changeCertificate", item);
      setTimeout(() => {}, 500);
    },
    view2(record, index) {
      this.$store.dispatch(
        "certificate/changeCertificate",
        this.certificates[index]
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
      this.allCertificates = await this.$store.dispatch(
        "certificate/fetchCertificates"
      );
      this.filterCertificates();
      this.$store.commit("global/toggleLoading", "off");
    },
  },
  computed: {
    rows() {
      return this.certificates.length;
    },
  },
};
</script>

<style>
.cetificatesMain {
  font-family: "Montserrat";
  text-align: left;
  margin: 0 0 250px 400px;
}
#main_head {
  justify-content: flex-start;
  background-color: white;
  z-index: 80;
  width: 100%;
}

.certificateTable {
  margin: -17px 0 0 0;
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