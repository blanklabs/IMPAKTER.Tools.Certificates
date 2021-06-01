<template>
  <div class="root">
     <div class="container">
          <ul class="progressbar">
            <span :class="[currentStep == 1 ? 'active': 'none']">Step 1: Basic Information </span>
            <span :class="[currentStep == 2 ? 'active': 'none']">Step 2: UN Sustainable Development Goals </span>
            <span :class="[currentStep == 3 ? 'active': 'none']">Step 3: Industries </span>
          </ul>
      </div>
  </div>
</template>
<script>
export default {
  props:['currentStep'],
  data () {
    return {
    }
  },
  computed: {
  classObject: function () {
    return {
      active: this.isActive && !this.error,
      'text-danger': this.error && this.error.type === 'fatal'
    }
  }
}
}
</script>

<style scoped>
.root{
    background-color: white;
    margin-bottom: 60px;
    margin-top: 0;

  z-index: 100;
    padding-top: 60px;
}
span {
  margin-right: 70px;
}
.active{
  padding: 5px;
  border-bottom: solid 3px #fe6663;
  font-weight: bold;
}
.container{
  height: 150px;
  position: fixed;
  margin-top: 0;
  z-index: 100;
  background-color: white;
  
}
.progressbar {
  /* display: inline-flex; */
  padding-top: 100px;
  justify-items: center;
  align-items:flex-end;
}


</style>