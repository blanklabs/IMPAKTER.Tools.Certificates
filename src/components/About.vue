<template>
  <div class="aboutDiv">
    <img class="aboutDiv-title" src="../assets/Titolo-2dpi.png" alt="header" />
    <div class="aboutDiv-text">
      <p>IMPAKTER platform was built to empower consumers to live a sustainable lifestyle. Giving them the opportunity to
        not only live it but to vote everyday with their wallet. IMPAKTER is designed to help expand eco-consciousness 
        and social responsibility among consumers, businesses and investors. A global platform that empowers sustainability:
          news, articles, startups, and creators. Impakter informs and inspires (MEDIA); it promotes green innovation 
          (UP for financing startups); it builds trust in consumers and investors through its independent certification system (INDEX);
          and it gives everyone, consumers and business concerned with sustainability and social justice a chance to live 
          a sustainable lifestyle (ECO marketplace).
      </p>
    </div>
    <div class="aboutDiv-text">
      <img class="aboutDiv-text-img" src="../assets/media-dpi.png" alt="header" />
      <p>Inform about sustainability by bridging the gap between knowledge hub and the public since 2014,
        we informs and inspires while providing experts with a key place to make themselves heard, exchange 
        information and share their knowledge with the public. In times of fake news, IMPAKTER acts as a safe harbour for 
        data-driven knowledge transfer.
      </p>
    </div>
    <div class="aboutDiv-text">
      <p>Boost sustainability by matching sustainable companies with investors and key stakeholders.  
        Our business hub was created in 2018 during the UN SDGs Finance event in Geneve with the aim to bring together SDGs
        focused startups,  like-minded impact investors and industry experts. It acts as a booster for green business
          and supports Corporate Social Responsibility (CSR) through special communication and training tools (Impakter4Business).
      </p>
      <img class="aboutDiv-text-img" src="../assets/updpi.png" alt="header" />
    </div>
    <div class="aboutDiv-text">
      <img class="aboutDiv-text-img" src="../assets/indexdpi.png" alt="header" />
      <p>Evaluate sustainability: A transparent index by the People, for our Planet. The IMPAKTER INDEX is based on a large 
        scale evaluation model built over the last 5yrs. It keeps on board only the best and most reputable and reliable 
        sustainability rating systems (labels, certificates, indices) and taking into account news and market updates as well 
        as consumer feedback from IMPAKTER ECO marketplace. The objective is: ensure full transparency and avoid greenwashing.
      </p>
    </div>
    <div class="aboutDiv-text">
      <p>Empower sustainability: One-stop online shop for sustainable products. The Eco marketplace for sustainable products
         was an idea born back in 2015 during the conception of IMPAKTER INDEX. ECO : Online marketplace for sustainable 
         products verified by the IMPAKTER INDEX (only products rated A and B are sold in the market).
      </p>
      <img class="aboutDiv-text-img" src="../assets/ecodpi.png" alt="header" />
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import "../assets/scss/mediaQueries.scss";
.aboutDiv{
  display: flex;
  align-content: center;
  align-items: center;
  flex-direction: column;
  text-align: left;
  font-size: 15px;
  margin: 0 300px 0 -130px;

  &-title{
    height: 100px;
    margin-bottom: 20px;
  }
  &-text{
    display: flex;
    align-items: center;
    align-content: center;
    &-img{
      margin: 5px;
      height: 250px;
    }
  }
}

@include mobile{
  .aboutDiv{
    max-width: 450px;
    margin-left: -350px;
    margin-right: 0px;
     &-text{
       flex-direction: column;
       &-img{
         
       }
     }
  }
}



</style>
