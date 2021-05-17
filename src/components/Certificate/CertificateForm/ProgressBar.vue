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

(html comment removed:  Add "scoped" attribute to limit CSS to this component only )
<style scoped>

span {
  margin-right: 70px;
}
.active{
  padding: 5px;
  border-bottom: solid 3px #fe6663;
  font-weight: bold;
}
.container{
  position: fixed;
  z-index: 100;
  
}
.progressbar {
  display: inline-flex;
  margin-bottom: 0px;
  padding: 5px;
  justify-items: center;
  align-items: center;
}
.root{
    margin-bottom: 60px;
}

</style>