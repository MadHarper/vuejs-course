<template>
  <input type="text" ref="picker" class="form-control" :value="dateValue" />
</template>

<script>
    import flatpickr from 'flatpickr'
    import 'flatpickr/dist/flatpickr.css'

    export default {
      name: 'DatePicker',
      props: {
        dateValue: {
          required: true
        }
      },
      model: {
        prop: 'dateValue',
        event: 'dateChange'
      },
      mounted () {
        flatpickr(this.$refs.picker, {
          dateFormat: 'Y-m-d',
          onChange: (selectedDate, dateStr) => {
            this.$emit('dateChange', dateStr)
          }
        })
      }
    }
</script>

<style scoped>

</style>