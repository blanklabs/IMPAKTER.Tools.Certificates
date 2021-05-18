<template>
<div class="profileMain">
  <h1>Profile</h1>
  <b-row>
    
    <b-col class="columnLeft">
    <img class="image" :src="org.logo" />
     <h2>{{ org.name }}</h2>

     <h2>INDUSTRY CATEGORY</h2>
     <p>MultiIndustry</p>

     <h2>TARGET AUDIENCE</h2>
     <p>B2B</p>

     <h2>APPLIES TO</h2>
     <p>Multiproduct</p>

     <h2>CONTROLLED BY</h2>
     <p>Organization Name</p>

     <h2>WEBSITE</h2>
     <p><b-icon icon="box-arrow-up-right"></b-icon>  Visit</p>
    </b-col>

    <b-col class="columnRight">
     <h2>Description</h2>
     <p>The Brazilian Association of Textile Retail (ABVTEX),
        founded in 1999, is the body that brings together the 
        most representative national and international networks
        of fashion retail, selling items of clothing, footwear, 
        bags, and accessories, as well as soft furnishings for the home.
        It is the sector’s principal interlocutor between bodies linked
        with industry, commerce and services; federal, state and municipal
        government authorities; NGOS and associations; the Press; 
        and society in general. ABVTEX encourages dialogue throughout
        the fashion value chain and is recognized for its initiatives 
        regarding compliance, responsible supply and use of dignified labor,
         through the ABVTEX Program. Other pillars of its operation 
        are tackling informal employment and the development of sustainable
        production chains supplying fashion retail, among RDA other aspects.
        In a challenging atmosphere in which consumer empowerment is 
        positively transforming the fashion market, ABVTEX brings together
        dozens of brands represented by associations in defense of
        compliance with legislation, formalizing employment and fair competition. 
     </p>

     <h2>Certificate List</h2>
     <p>- Aquaculture Stewardship Council</p>
     <p>- B Corporation</p>
     <p>- CARES Sustainability Schemes</p>
     <p>- Content Claim Standard</p>

    </b-col>

  </b-row>
  </div>
</template>
<script>
export default {
  name: "UserProfile",
  data() {
    return {
      org: {},
    };
  },
  mounted() {
    this.org = this.$store.getters["org/organization"];
  },
};
</script>
<style scoped>
*{

  text-align: left;
}
#router_view_container {
      margin-top: 0px;
          margin-left: 0px;
}
.profileMain{
  top: 0;
  left: 0;
}
/* .row{
  width: 1200px;
}

.columnLeft{
  width: 40%;
}
.columnRight{
  width: 60%;
} */

</style>

