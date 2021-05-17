<template>
<div>
    <b-icon class="searchBtn" icon="search"  v-on:click="toggle"></b-icon>
    <b-form class="newsFilter"  v-show="showSection" inline>
       
        <b-form-input
          class="newsInput keywords"
          id="keywords"
          v-model="form.keywords"
          placeholder="Input Keywords..."
          required
        ></b-form-input>
        <b-form-datepicker
          class="newsInput date"
          id="date"
          v-model="form.date"
          placeholder="Date"
          :options="dates"
        ></b-form-datepicker>
        <b-form-select
          class="newsInput"
          id="publicationPriority"
          v-model="form.priority"
          
          :options="priorities"
        ></b-form-select >
        <b-button class="formBtn" 
         type="submit" 
         variant="primary">Go
        </b-button>
   
      </b-form>
</div>
</template>

<script>
export default {
    name: 'FilterBar',
    data() {
    return {
        form: {
          keywords: '',
          date: null,
          priority: null,
        },
        priorities: [{ text: 'Publication Priority', value: null }, 'Tier 1', 'Tier 2', 'Tier 3', 'Tier 4'],
        showSection: false,
    
      }
    },
    methods: {
      toggle : function() {
          this.showSection = !this.showSection

        }
    }
}
</script>
<style scoped>
.newsInput{
  margin: auto;
  border: 2px solid #BBBBBB;
}
.keywords{
  min-width: 450px;
}
.date{
  min-width: 200px;
}
.formBtn{
  color: #BBBBBB;
  font-weight: bold;
  background: none;
  border: 2px solid #BBBBBB;
  border-radius: 5px;

}
.searchBtn{
  float: right;
  margin-top: -55px;
  background: none;
  border: none;
  color:#fe6663;
}

</style>