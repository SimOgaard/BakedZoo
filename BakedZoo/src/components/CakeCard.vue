<template>
  <q-item v-if="search == '' || title.toLowerCase().includes(search.toLowerCase())" :class="$q.screen.lt.sm ? 'col-6' : ($q.screen.lt.md ? 'col-4' : 'col-3')" class="q-pa-sm" native.prevent @click.native.prevent="GoToCake()">
    <q-card class="bg-white" style="border-radius: 15px; height:100%; width: 100%">
      <img :src="image" style="object-fit: cover;" height="150px">

      <q-card-section class="q-pt-sm q-pl-sm q-pb-sm">
        <p class="text-primary text-weight-bold q-mb-none" style="font-size: 20px;">{{title}}</p>
        <p class="q-mb-none text-italic text-caption text-weight-regular" style="font-size: 16px;">{{previewDescription}}</p>
        <h6 class="text-white q-mb-none q-mt-none q-pl-sm q-pb-sm text-weight-bold text-center" style="font-size: 24px;">{{price}}$</h6>
      </q-card-section>
      <h6 class="text-primary absolute-bottom q-mb-none q-mt-sm q-pb-sm text-weight-bold text-center" style="font-size: 24px;">{{price}}$</h6>
      <!-- <div class="absolute-right">
        <div class="bg-orange" style="border-radius: 100%; position: absolute; top: -8px; right: -8px;">
          <q-btn
            flat
            dense
            round
            icon="add_shopping_cart"
            aria-label="add_shopping_cart"
            color="white"
            size="xl"
            :ripple="{ center: true }"
            @click.capture.stop="AddToCart()"
          />
        </div>
      </div> -->
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
    },

    search: {
      type: String,
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
    }
  }
}
</script>
