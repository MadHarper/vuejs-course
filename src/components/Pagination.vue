<template>
<div>
    <ul class="nav nav-pills">
        <li role="presentation" v-for="page in pages" :key="page" :class="{active: activePage === page}">
            <a @click = "activePage = page"> {{ page }}</a>
        </li>
    </ul>

    <label for="per-page">Элементов на страницу</label>
    <select v-model="perPage" class="form-control" id="per-page" @change="activePage = 1">
        <option v-for="option in options" :key="option"> {{ option}} </option>
    </select>
</div>

</template>

<script>
    export default {
      name: 'pagination',
      data: () => ({
        perPage: 5,
        activePage: 1,
        options: [3, 5, 10]
      }),
      computed: {
        pages () {
          let n = Math.ceil(this.countItems / this.perPage)
          let arr = []
          for (let i = 1; i <= n; i++) {
            arr.push(i)
          }
          return arr
        }
      },
      props: {
        countItems: Number
      },
      methods: {
        firePageChangedEvent () {
          this.$emit('pageChanged', {activePage: +this.activePage, perPage: +this.perPage})
        }
      },
      mounted () {
        this.firePageChangedEvent()
      },
      updated () {
        this.firePageChangedEvent()
      }
    }
</script>

<style scoped>
    a {
        cursor: pointer;
    }
</style>