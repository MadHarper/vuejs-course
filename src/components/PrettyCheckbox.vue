<template>

    <div class="pretty p-default p-curve">
        <input type="checkbox" :checked="active" @change="onChange"/>
        <div class="state">
            <label> {{label }} </label>
        </div>
    </div>

</template>
<script>
    import 'pretty-checkbox/dist/pretty-checkbox.css'

    export default {
      name: 'PrettyCheckbox',
      props: {
        active: Boolean,
        label: String
      },
      model: {
        prop: 'active',
        event: 'change'
      },
      methods: {
        onChange () {
          this.active = !this.active
          this.$emit('change', this.active)
        }
      }
    }
</script>
