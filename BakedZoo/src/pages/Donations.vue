<template>
  <q-page class="">
    <h4 class="q-mt-sm q-mb-none text-primary text-weight-bold text-center" @click="Route('Home')">BakedZoo</h4>
    <h5 class="text-italic q-mt-lg text-primary text-weight-regular text-center" style="white-space: nowrap;">Any donations help!</h5>

    <div class="q-pt-xl"></div>

    <div class="column flex-center items-center q-pt-xl q-mt-xl">
      <h4 class="row q-mt-sm q-mb-none text-primary text-weight-bold text-center">Swisha</h4>
      <h4 class="row q-mt-sm q-mb-none text-primary text-weight-normal text-center">0739055618</h4>      
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'Donations',
  data () {
    return {
      
    }
  },
  methods:{
    Route(newTab)
    {
      this.$emit('Route', newTab)      
    }
  }
}
</script>
