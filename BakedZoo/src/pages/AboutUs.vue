<template>
  <div>
    <q-page class="flex-center" style="padding-left: 21px; padding-right: 21px;">
      <h4 class="q-mt-sm q-mb-none text-primary text-weight-bold text-center" @click="Route('Home')">BakedZoo</h4>
      <h5 class="text-italic q-mt-lg q-mb-sm q-pb-none text-primary text-weight-regular text-center" style="white-space: nowrap;">About Us</h5>

    <div class="row justify-center">
      <q-card square class="col q-pa-none shadow-0 transparent" style="width: 90%">
          <EmployeeCard
            v-for="staff in staffFromWeb"
            :key="staff.title"
            v-bind="staff"
          />
      </q-card>
    </div>
    </q-page>
  </div>
</template>

<script>

import EmployeeCard from 'components/EmployeeCard.vue'

export default {
  name: 'AboutUs',
  props: ['staffFromWeb'],
  components: { EmployeeCard },
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
