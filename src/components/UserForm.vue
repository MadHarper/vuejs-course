<template>
  <div>
      <div class="form-group">
        <label for="firstName">Имя</label>
        <input v-model="user.firstName" class="form-control" id="firstName">
      </div>
      <div class="form-group">
        <label for="lastName">Фамилия</label>
        <input v-model="user.lastName" class="form-control" id="lastName">
      </div>
      <div class="form-group">
        <label for="picture">URL картинки</label>
        <div>
          <img class="img-thumbnail" :src="user.picture" />
        </div>
        <input class="hidden" type="file" ref="image" @change="upload"/>
        <button class="btn btn-default" @click="$refs.image.click()">Выбрать новую</button>
        <input v-model="user.picture" class="form-control" id="picture">
      </div>
      <div class="checkbox">
        <label>
          <input type="checkbox" v-model="user.isActive"> Активен
        </label>
      </div>
      <div class="form-group">
        <label for="company">Компания</label>
        <input v-model="user.company" class="form-control" id="company">
      </div>
      <div class="form-group">
        <label for="email">E-mail</label>
        <input v-model="user.email" class="form-control" id="email">
      </div>
      <div class="form-group">
        <label for="phone">Телефон</label>
        <input v-model="user.phone" class="form-control" id="phone">
      </div>
      <div class="form-group">
        <label for="address">Адрес</label>
        <input v-model="user.address" class="form-control" id="address">
      </div>
      <div class="form-group">
        <label for="about">Описание</label>
        <textarea v-model="user.about" class="form-control" id="about" rows="3"></textarea>
      </div>
      <div class="form-group">
          <label for="registered">Дата регистрации</label>
          <date-picker v-model="user.registered" id="registered"></date-picker>
      </div>

  </div>
</template>

<script>
import axios from 'axios'
import DatePicker from './DatePicker.vue'

export default {
  name: 'UserForm',
  components: {
    DatePicker
  },
  props: {
    user: {
      type: Object,
      required: true
    }
  },
  methods: {
    upload () {
      const url = 'https://api.imgur.com/3/image'

      const data = new FormData()
      data.append('image', this.$refs.image.files[0])

      const config = {
        headers: {
          'Authorization': 'Client-ID 50a0a405112208a'
        }
      }

      axios.post(url, data, config)
          .then(response => {
            this.user.picture = response.data.data.link
            this.$refs.image.value = ''
          })
          .catch(error => {
            console.log('image post error')
            console.log(error)
          })
    }
  }
}
</script>

