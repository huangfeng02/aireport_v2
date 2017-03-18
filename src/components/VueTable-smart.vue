<template>
  <div>
    <section>
    </section>
    <section class=".table-responsive">
      <table class="table table-striped table-bordered table-hover">
        <thead>
          <tr>
            <th v-for="key in columns"
            @click="sortBy(key.path)"
            :class="[key.addClass, { act: sortKey == key.path}]">
            {{ key.title }}
            <span class="arrow" :class="sortOrders[key.path] > 0 ? 'asc' : 'dsc'">
            </span>
          </th>
          <th width="70">操作</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="entry in filteredData" class="grid-row">
          <td v-for="key in columns" :class="[key.addClass]"  class="grid-cell">
            <template v-if="key.render">
              {{ key.render(entry[key.path]) }}
            </template>
            <template v-else>
              {{entry[key.path] }}
            </template>
          </td>
          <td v-if="noOperation">
            <i class="fa fa-fw fa-trash-o" @click="rowDelEvent(entry)" title="删除"></i>
            <i class="fa fa-fw fa-wrench" data-toggle="modal" data-target="#myModal_update"  @click="rowEditEvent(entry)" title="编辑"></i>
          </td>
        </tr>
        <tr v-if="isLoading">
          <td :colspan="columns.length" class="text-center noData">
            <i class="fa fa-spinner fa-spin"></i>
          </td>
        </tr>
        <tr v-if="!isLoading && !data.length">
          <td :colspan="columns.length" class="text-center noData">
            {{emptyTableText}}
          </td>
        </tr>
      </tbody>
    </table>
  </section>
</div>
</template>

<script>
  export default {
    props: {
      data: Array, // Unfiltered table data
      columns: Array, // List of columns ['title', 'description']
      filterKey: String, // String to filter on ''
      customEmptyTableText: '', // optional text override for empty table
      rowsPerPage: Number, // Number of rows per page of results
      isLoading: false,
      noOperation: false
    },
    data: function () {
      var sortOrders = {}
      this.columns.forEach(function (key) {
        sortOrders[key.path] = 1
      })
      return {
        sortKey: '',
        sortOrders: sortOrders,
        currentPage: 0
      }
    },
    computed: {
      emptyTableText: function () {
        if (this.customEmptyTableText) {
          return this.customEmptyTableText
        } else {
          return 'No data to show'
        }
      },
      filteredData: function () { 
        var sortKey = this.sortKey
        var filterKey = this.filterKey && this.filterKey.toLowerCase()
        var order = this.sortOrders[sortKey] || 1
        var data = this.data
        if (filterKey) {
          data = data.filter(function (row) {
            return Object.keys(row).some(function (key) {
              return String(row[key]).toLowerCase().indexOf(filterKey) > -1
            })
          })
        }
        if (sortKey) { // If sort specified, sort
          data = data.slice().sort(function (a, b) {
            a = a[sortKey]
            b = b[sortKey]
            return (a === b ? 0 : a > b ? 1 : -1) * order
          })
        }
        return data
      }
    },
    methods: {
      sortBy: function (key) { 
        this.sortKey = key
        this.sortOrders[key] = this.sortOrders[key] * -1
      },
      rowDelEvent: function (entry) {
        let id = entry['id']
        this.$emit('delRow', id)
      },
      rowEditEvent: function (entry) {
        let id = entry['id']
        this.$emit('editRow', id)
      }
    }
  }
</script>

<style scoped>
  .grid-row {
    cursor: pointer;
  }
  th {
    cursor: pointer;
  }
  th, td {
    padding: 10px 20px;
  }
  th.act {
    color: #fff;
  }
  th.act .arrow {
    opacity: 1;
  }
  .arrow {
    display: inline-block;
    vertical-align: middle;
    width: 0;
    height: 0;
    margin-left: 5px;
    opacity: 0.66;
  }
  .arrow.asc {
    border-left: 4px solid transparent;
    border-right: 4px solid transparent;
    border-bottom: 4px solid #fff;
  }
  .arrow.dsc {
    border-left: 4px solid transparent;
    border-right: 4px solid transparent;
    border-top: 4px solid #fff;
  }
</style>