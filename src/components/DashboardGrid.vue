<template>

    <table class="table table-striped">
      <thead>
        <slot name="header"></slot>
      </thead>
      <tbody>
        <tr v-for="(item, index) in items" :key="item.id" v-if="index >= beginIndex && index <= endIndex">
            <slot name="row" v-bind="item"></slot>
        </tr>
      </tbody>
    </table>
    
</template>

<script>
    import axios from 'axios'

    export default {
      name: 'DashbordGrid',
      data: () => ({
        items: []
      }),
      props: {
        url: String,
        beginIndex: Number,
        endIndex: Number
      },
      methods: {
        loadData () {
          axios.get(this.url)
            .then(response => {
              this.items = response.data
              this.$emit('loaded', this.items.length)
            })
        }
      },
      mounted () {
        this.loadData()
      }
    }
</script>

