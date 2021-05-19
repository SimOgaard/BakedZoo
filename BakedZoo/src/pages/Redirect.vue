<template>
  <q-page class="flex flex-center">
  </q-page>
</template>

<script>
export default {
  name: 'Redirect',
  created () {
    this.$router.push('Home');
  }
}
</script>
