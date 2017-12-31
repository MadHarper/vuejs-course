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
        <tr v-for="user in users" :key="user.id">
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
  </div>
</template>

<script>
import axios from 'axios'
import {userUrl} from '@/common/ApiUrl.js'

export default {
  name: 'Table',
  data: () => ({
    'users': []
  }),
  methods: {
    loadData () {
      axios.get(userUrl)
        .then(response => {
          this.users = response.data
        })
    }
  },
  mounted () {
    this.loadData()
  }
}
</script>


