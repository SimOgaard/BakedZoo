<template>
  <q-page class="flex-center">
    <h4 class="q-mt-sm q-mb-none text-primary text-weight-bold text-center">BakedZoo</h4>

    <div class="row justify-center">
      <q-card square class="col q-pa-lg q-pt-none shadow-0 transparent" style="max-width: 600px">
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
    </div>

    <div class="row justify-center">
      <q-card square class="col q-pa-none shadow-0 transparent row" style="max-width: 1200px">
        <CakeCard
          @Route="Route"
          @SelectedCake="SelectedCake"
          @AddToCart="AddToCart"
          v-for="cake in cakesFromWeb"
          :key="cake.title"
          v-bind="cake"
        />
      </q-card>
    </div>

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
    },
    AddToCart()
    {
      this.$emit('AddToCart')
    }
  }
}
</script>
