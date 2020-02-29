<template>
  <div class="hello">
    formulario
    {{this.dire}}
  </div>
</template>

<script>
export default {
  name: 'Request',
  props: {
    msg: String
  },
  data: function() {
      return {
          dire: process.env.VUE_APP_SERVICE_URL
      }
  }
}
</script>
