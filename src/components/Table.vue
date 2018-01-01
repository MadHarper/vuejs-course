<template>
  <div>
    <table class="table table-bordered">
        <tr>
          <th>#</th>
          <th>Имя</th>
          <th>Фамилия</th>
          <th>Aктивен</th>
          <th>Баланс</th>
          <th>Email</th>
          <th>Teлефон</th>
          <th>3apeгистрирован</th>
        </tr>
        <tr v-for="(user, index) in users" :key="user.id" v-if="index >= beginIndex && index <= endIndex">
          <td>
            <router-link :to="`user/${user.id}`"># {{ user.id }}</router-link>
          </td>
          <td>{{ user.firstName }}</td>
          <td>{{ user.lastName }}</td>
          <td>{{ user.isActive }}</td>
          <td>{{ user.balance }}</td>
          <td>{{ user.email }}</td>
          <td>{{ user.phone }}</td>
          <td>{{ user.registered }}</td>
        </tr>
      </table>
      <pagination :countItems="users.length" @pageChanged="onPageChanged"></pagination>
  </div>
</template>

<script>
import axios from 'axios'
import {userUrl} from '@/common/ApiUrl.js'
import Pagination from './Pagination'

export default {
  name: 'Table',
  components: {
    Pagination
  },
  data: () => ({
    'users': [],
    'beginIndex': 0,
    'endIndex': 0
  }),
  methods: {
    loadData () {
      axios.get(userUrl)
        .then(response => {
          this.users = response.data
        })
    },
    onPageChanged (params) {
      this.beginIndex = (params.activePage - 1) * params.perPage
      this.endIndex = this.beginIndex + params.perPage - 1
    }
  },
  mounted () {
    this.loadData()
  }
}
</script>


