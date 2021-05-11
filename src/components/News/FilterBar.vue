<template>

    <b-form inline>
       
        <b-form-input
          class="mb-2 mr-sm-2 mb-sm-0"
          id="keywords"
          v-model="form.keywords"
          placeholder="Input Keywords..."
          required
        ></b-form-input>
        <b-form-datepicker
          class="mb-2 mr-sm-2 mb-sm-0"
          id="date"
          v-model="form.date"
          placeholder="Date"
          :options="dates"
        ></b-form-datepicker>
        <b-form-select
          class="mb-2 mr-sm-2 mb-sm-0"
          id="publicationPriority"
          v-model="form.priority"
          
          :options="priorities"
        ></b-form-select>
         <b-button type="submit" variant="primary">Go</b-button>
   
      </b-form>

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
        dates: [{ text: 'Date', value: null }, 'Test', 'Test1', 'Test 2'],
        priorities: [{ text: 'Publication Priority', value: null }, 'Tier 1', 'Tier 2', 'Tier 3'],
    
      }
    }
}
</script>
<style scoped>

</style>