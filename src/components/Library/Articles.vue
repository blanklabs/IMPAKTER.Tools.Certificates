<template>
  <div class="myArticles">
    <b-table
      :items="items"
      :fields="fields"
      :select-mode="selectMode"
      responsive="sm"
      ref="selectableTable"
      selectable
      @row-selected="onRowSelected"
    >

      <template #cell(selected)="{ rowSelected }">
        <template v-if="rowSelected">
           <b-form-checkbox checked="true">
            </b-form-checkbox>
          <span class="sr-only">Selected</span>
        </template>
        <template v-else>
           <b-form-checkbox>
            </b-form-checkbox>
          <span aria-hidden="true">&nbsp;</span>
          <span class="sr-only">Not selected</span>
        </template>
      </template>
      
      <template #cell(action)>
        <b-button class="actionBtn"><b-icon icon="trash"></b-icon></b-button>
      </template>
    </b-table>
  </div>
</template>

<script>

export default {
   name: "MyArticles",
   data() {
      return {
        fields: ['selected', 'articletName', 'date', 'action'],
        items: [
          {  articletName: "File Title example", date: '02/03/2021', },
          {  articletName: "File Title example", date: '02/03/2021', },
          {  articletName: "File Title example", date: '02/03/2021', },
          {  articletName: "File Title example", date: '02/03/2021', },
        ],
        selectMode: 'multi',
        selected: []
      }
    },
    methods: {
      onRowSelected(items) {
        this.selected = items
      },
      selectAllRows() {
        this.$refs.selectableTable.selectAllRows()
      },
      clearSelected() {
        this.$refs.selectableTable.clearSelected()
      },
      selectThirdRow() {
        // Rows are indexed from 0, so the third row is index 2
        this.$refs.selectableTable.selectRow(2)
      },
      unselectThirdRow() {
        // Rows are indexed from 0, so the third row is index 2
        this.$refs.selectableTable.unselectRow(2)
      }
    }
}
</script>

<style scoped>

.myDocuments{
    display:flexbox;
    text-align: left;
}

.actionBtn{
  color:black;
  border: transparent;
  background: white;
}
</style>