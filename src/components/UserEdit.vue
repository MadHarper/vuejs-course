<template>

  <div>
    <user-form :user="user"></user-form>
    <div class="form-group">
      <button class="btn btn-success" @click="saveUser">Сохранить</button>
      <button class="btn btn-danger" @click="deleteUser">Удалить</button>
    </div>
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
          .then(() => {
            this.$router.push('/list')
          })
    },
    deleteUser () {
      const confirmed = confirm('Удалить пользователя')
      if (!confirmed) {
        return
      }
      axios.delete(this.url)
          .then(() => {
            this.$router.push('/list')
          })
    }
  },
  mounted () {
    this.loadUser()
  }
}
</script>

