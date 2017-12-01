<template>
  <div class="editor">

    <textarea :value="input" @input="update"></textarea>
    <div v-html="compiledMarkdown"></div>

  </div>
</template>

<script>
  import _ from 'lodash';
  import marked from 'marked';
  export default {
    name: '',
    data() {
      return {
        input: 'editor '
      }
    },
    computed: {
      compiledMarkdown: function () {
        return marked(this.input, {sanitize: true})
      }
    },
    methods: {
      update: _.debounce(function (e) {
        this.input = e.target.value
      }, 300)
    }
  }
</script>

<style lang="less">
  .editor {
    height: 100%;
  }

</style>
