<template>
  <div id="editor">
    <tinyeditor v-model="content" api-key="va2nv3y39jnb8trhljnjrvozxka2alz0ow3lkj310i3vxyov" :init="tinyConfig" />
  </div>
</template>

<script>
  import tinyEditor from '@tinymce/tinymce-vue'
  import axios from 'axios'

  export default {
    name: 'editor',
    data() {
      return {
        islogin: '',
        content: '',
        tinyConfig: {
          height: 500,
          menubar: true,
          language: "zh_CN",
          plugins: [
            'advlist autolink lists link image charmap print preview anchor',
            'searchreplace visualblocks code fullscreen',
            'insertdatetime media table paste code help wordcount'
          ],
          toolbar: 'undo redo | formatselect | bold italic backcolor | \
           alignleft aligncenter alignright alignjustify image | \
           bullist numlist outdent indent | removeformat | help'
        }
      }
    },
    components: {
      'tinyeditor': tinyEditor
    }
  }
</script>

<style>

</style>