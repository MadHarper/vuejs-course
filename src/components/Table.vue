<template>

  <div>
    <dashboard-grid :url="url" :beginIndex="beginIndex" :endIndex="endIndex" @loaded="length => {usersLength = length}">
        <tr slot="header">
          <th>#</th>
          <th>Имя</th>
          <th>Фамилия</th>
          <th>Aктивен</th>
          <th>Баланс</th>
          <th>Email</th>
          <th>Teлефон</th>
          <th>3apeгистрирован</th>
        </tr>
        <template slot="row" slot-scope="user">
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
        </template>
    </dashboard-grid>
    <pagination :countItems="usersLength" @pageChanged="onPageChanged"></pagination>
  </div>

</template>

<script>
import {userUrl} from '@/common/ApiUrl.js'
import Pagination from './Pagination'
import DashboardGrid from './DashboardGrid'

export default {
  name: 'Table',
  components: {
    Pagination,
    DashboardGrid
  },
  data: () => ({
    url: userUrl,
    usersLength: 0,
    beginIndex: 0,
    endIndex: 0
  }),
  methods: {
    onPageChanged (params) {
      this.beginIndex = (params.activePage - 1) * params.perPage
      this.endIndex = this.beginIndex + params.perPage - 1
    }
  }
}
</script>


