<template>
  <div>
    <form  @submit="onSubmit">
      <div class="form-group">
        <label for="firstName">Имя</label>
        <input v-model="user.firstName" class="form-control" id="firstName">
      </div>
      <div class="form-group">
        <label for="lastName">Фамилия</label>
        <input v-model="user.lastName" class="form-control" id="lastName">
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
        <button type="submit" class="btn btn-success">Сохранить</button>
      </div>
    </form>

  </div>
</template>

<script>
export default {
  name: 'UserForm',
  props: {
    value: {
      type: Object,
      required: true
    }
  },
  computed: {
    user () {
      return this.value
    }
  },
  methods: {
    onSubmit () {
      this.$emit('submitUserForm')
    }
  }
}
</script>

