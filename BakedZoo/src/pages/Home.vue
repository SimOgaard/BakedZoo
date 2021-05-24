<template>
  <q-page class="flex-center">
    <h4 class="q-mt-sm q-mb-none text-primary text-weight-bold text-center">BakedZoo</h4>

    <q-card square class="q-pa-lg q-pt-none shadow-0 transparent">
      <q-card-section class="q-pt-none q-pb-none">
        <q-form class="q-gutter-none">
          <q-input style="font-style: italic;" input-style="font-style: normal;" class="bg-white" square filled v-model="search" type="text" label="Type your search here">
            <template v-slot:append>
              <q-icon name="search"></q-icon>
            </template>
          </q-input>
        </q-form>
      </q-card-section>
    </q-card>

    <q-card square class="q-pa-none shadow-0 transparent row">
      <CakeCard
        @Route="Route"
        @SelectedCake="SelectedCake"
        v-for="cake in cakesFromWeb"
        :key="cake.title"
        v-bind="cake"
      />
    </q-card>

  </q-page>
</template>

<script>
import CakeCard from 'components/CakeCard.vue'

export default {
  name: 'Home',
  props: ['cakesFromWeb'],
  components: { CakeCard },
  data () {
    return {
      search: '',
      cakes: null
    }
  },
  methods:{
    SelectedCake(Cake)
    {
      this.$emit('SelectedCake', Cake)
    },
    Route(newTab)
    {
      this.$emit('Route', newTab)      
    }
  }
}
</script>
