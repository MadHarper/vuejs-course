<template>
  <div>
    <user-form :user="user" ></user-form>
    <div class="form-group">
      <button class="btn btn-success" @click="saveUser">Сохранить</button>
    </div>
  </div>
</template>

<script>
import UserForm from './UserForm.vue'
import axios from 'axios'
import {userUrl} from '@/common/ApiUrl.js'

export default {
  name: 'UserAdd',
  components: {
    UserForm
  },
  data: () => ({
    'user': {
      'isActive': false,
      'balance': '$0',
      'picture': 'http://i.imgur.com/',
      'age': 20,
      'firstName': '',
      'lastName': '',
      'company': '',
      'email': '',
      'phone': '+7 (000) 000-0000',
      'address': '',
      'about': '',
      'registered': '2018-01-01'
    }
  }),
  methods: {
    saveUser () {
      axios.post(userUrl, this.user)
        .then(() => {
          this.$router.push('/list')
        })
    }
  }
}
</script>

