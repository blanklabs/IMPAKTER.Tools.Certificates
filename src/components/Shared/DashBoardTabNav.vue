<template>
<div class="DashTab">
  <ul class="nav">
    <li v-for="tab in tabs" :key="tab" class="nav-item">
      <a class="nav-link" :class="{active: tab == selected}" @click="setTab(tab)">
        {{tab}}
      </a>
    </li>
    
  </ul>
     <hr/>
  <slot></slot>
</div>
</template>
<script>
export default {
  props: {
    tabs:{
      type: Array,
      required: true,
    }, 
    selected: {
      type: String,
      required: true,
    },
  },
  methods: {
    setTab(tab){
      this.$emit('selected', tab)
    }
  }
};
</script>
<style scoped>
*{
  font-family: "Montserrat";
}
.DashTab{
  width: 1200px;
}
ul{
  margin-bottom: 0;
  padding-bottom: 0;
}
a{
  font-size: 18px;
  color:#222222;
  text-decoration: none;
}
a:hover{
  font-weight: bolder;
}
.nav-item:hover {
  border-bottom: 3px solid #fe6663;
}
.active {
    border-bottom: 3px solid #fe6663;
}

hr{
  margin-top: 0;
  padding-top: 0;
  height: 3px;
  background-color: #EBEBEB;
  border: none;

}

</style>