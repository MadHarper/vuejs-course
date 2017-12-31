<template>
  <div>
<user-form v-model="user" @submitUserForm="saveUser"></user-form>
  </div>
</template>

<script>
import UserForm from './UserForm.vue'
import axios from 'axios'
import {userUrl} from '@/common/ApiUrl.js'

export default {
  name: 'UserEdit',
  components: {
    UserForm
  },
  props: {
    id: String
  },
  data: () => ({
    'user': {}
  }),
  computed: {
    url () {
      return userUrl + this.id
    }
  },
  methods: {
    loadUser () {
      axios.get(this.url)
        .then(response => {
          this.user = response.data
        })
    },
    saveUser () {
      axios.patch(this.url, this.user)
          .then(this.$router.push('/list'))
    }
  },
  mounted () {
    this.loadUser()
  }
}
</script>

