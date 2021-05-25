<template>
  <q-item :class="$q.screen.lt.sm ? 'col-6' : ($q.screen.lt.md ? 'col-4' : 'col-3')" class="q-pa-sm" native.prevent @click.native.prevent="GoToCake()">
    <q-card class="bg-white" style="border-radius: 15px; height:100%">
      <img :src="image" style="object-fit: cover;" height="150px">

      <q-card-section class="q-pt-sm q-pl-sm q-pb-sm">
        <p class="text-primary text-weight-bold q-mb-none">{{title}}</p>
        <p class="q-mb-none text-italic text-caption text-weight-light">{{previewDescription}}</p>
        <h6 class="text-white q-mb-none q-mt-none q-pl-sm q-pb-sm text-weight-bold text-center">{{price}}$</h6>
      </q-card-section>
      <h6 class="text-primary absolute-bottom q-mb-none q-mt-sm q-pb-sm text-weight-bold text-center">{{price}}$</h6>
      <div class="absolute-right">
        <div class="bg-orange" style="border-radius: 100%; position: absolute; top: -8px; right: -8px;">
          <q-btn
            flat
            dense
            round
            icon="add_shopping_cart"
            aria-label="add_shopping_cart"
            color="white"
            size="lg"
            @click.capture.stop="AddToCart()"
          />
        </div>
      </div>
    </q-card>
  </q-item>
</template>

<script>
import { Screen } from 'quasar'
Screen.setSizes({ sm: 500, md: 800, lg: 1600, xl: 2000 })

export default {
  name: 'CakeCard',
  props: {
    id: {
      type: Number,
      required: true
    },

    title: {
      type: String,
      default: ''
    },

    previewDescription: {
      type: String,
      default: ''
    },

    detailDescription: {
      type: String,
      default: ''
    },

    image: {
      type: String,
      default: ''
    },

    price: {
      type: Number,
      default: ''
    }
  },
  methods:{
    GoToCake()
    {
      var Cake = {
        id: this.id,
        title: this.title,
        previewDescription: this.previewDescription,
        detailDescription: this.detailDescription,
        image: this.image,
        price: this.price
      }
      this.$emit('SelectedCake', Cake)
      this.$emit('Route', 'CakeInfo')
    },
    AddToCart()
    {
      var Cake = {
        id: this.id,
        title: this.title,
        previewDescription: this.previewDescription,
        detailDescription: this.detailDescription,
        image: this.image,
        price: this.price
      }
      this.$emit('SelectedCake', Cake)
      this.$emit('AddToCart')
      // this.$emit('SelectedCake', Cake)
      // this.$emit('Route', 'CakeInfo')
    }
  }
}
</script>
