<template>
  <div ref="editable" v-html="orig"></div>
</template>

<script>
    import MediumEditor from 'medium-editor'
    import 'medium-editor/dist/css/medium-editor.css'
    import 'medium-editor/dist/css/themes/bootstrap.css'

    export default {
      name: 'Editor',
      props: {
        html: String
      },
      data () {
        return {orig: this.html}
      },
      watch: {
        html (value) {
          if (this.orig === undefined) {
            this.orig = value
          }
        }
      },
      mounted () {
        let api = new MediumEditor(this.$refs.editable)
        api.subscribe('editableInput', (ev, el) => this.$emit('edit', el.innerHTML))
      }
    }
</script>

<style scoped>

</style>